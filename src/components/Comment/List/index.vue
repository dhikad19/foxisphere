<template>
  <div>
    <!-- Loop through each comment -->
    <div v-for="(comment, index) in comments" :key="comment.id" class="comment">
      <!-- Display the main comment -->
      <div class="comment-content">
        <strong>{{ comment.user.username }}</strong
        >:
        <span v-html="comment.comment"></span>
        <small>{{ formatDate(comment.date) }}</small>
      </div>

      <!-- Reply Button -->
      <button @click="toggleReplyForm(index)">Reply</button>

      <!-- Reply Form -->
      <div v-if="activeReplyIndex === index" class="reply-form">
        <div v-if="editors[index]">
          <!-- Menu Bar -->
          <div class="menu-bar">
            <button
              @click="editors[index].chain().focus().toggleBold().run()"
              :class="{ active: editors[index].isActive('bold') }">
              Bold
            </button>
            <button
              @click="editors[index].chain().focus().toggleItalic().run()"
              :class="{ active: editors[index].isActive('italic') }">
              Italic
            </button>
          </div>

          <!-- Editor Content -->
          <EditorContent :editor="editors[index]" />
        </div>
        <button @click="addReply(index, comment.id)" class="submit-button">
          Submit
        </button>
      </div>

      <!-- Render replies recursively -->
      <div v-if="comment.replied && comment.replied.length > 0" class="replies">
        <CommentList
          :comments="comment.replied"
          @reply-updated="fetchUpdatedReplies" />
      </div>
    </div>
  </div>
</template>

<script>
  import { Editor, EditorContent } from "@tiptap/vue-3";
  import StarterKit from "@tiptap/starter-kit";

  export default {
    name: "CommentList",
    components: {
      EditorContent,
      CommentList: () => import("./index.vue"),
    },
    props: {
      comments: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeReplyIndex: null, // Tracks the index of the active reply form
        editors: {}, // Tiptap editor instances
      };
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleString();
      },
      toggleReplyForm(index) {
        // Toggle the reply form for the specific comment
        if (this.activeReplyIndex === index) {
          this.activeReplyIndex = null; // Close the reply form
        } else {
          this.activeReplyIndex = index; // Open the reply form
          this.initializeEditor(index);
        }
      },
      initializeEditor(index) {
        if (!this.editors[index]) {
          this.editors[index] = new Editor({
            extensions: [StarterKit],
            content: "",
            autofocus: true,
          });
        }
      },
      async addReply(index, parentId) {
        const editor = this.editors[index];
        if (editor) {
          const replyContent = editor.getHTML(); // Get reply content from Tiptap editor
          if (replyContent.trim() !== "") {
            try {
              const postData = {
                parentId: parentId, // ID of the comment being replied to
                content: replyContent, // Reply content
                userId: "current_user_id", // Replace with actual user ID
                timestamp: new Date().toISOString(), // Current timestamp
              };

              // Send the reply to the backend
              const response = await fetch("/api/comments/reply", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
              });

              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }

              const savedReply = await response.json();

              // Add the reply to the UI
              const comment = this.comments[index];
              if (comment) {
                if (!comment.replied) comment.replied = [];
                comment.replied.push(savedReply);
              }

              // Clear the editor and close the reply form
              editor.commands.clearContent();
              this.activeReplyIndex = null;
            } catch (error) {
              console.error("Failed to add reply:", error);
              alert("An error occurred while submitting your reply.");
            }
          }
        }
      },
      async fetchUpdatedReplies(parentId) {
        try {
          const response = await fetch(`/api/comments/${parentId}/replies`, {
            method: "GET",
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const updatedReplies = await response.json();

          // Find the comment and update its replies
          const comment = this.comments.find((c) => c.id === parentId);
          if (comment) {
            comment.replied = updatedReplies;
          }
        } catch (error) {
          console.error("Failed to fetch replies:", error);
        }
      },
    },
  };
</script>

<style scoped>
  .comment {
    margin-bottom: 1em;
    padding: 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .replies {
    margin-left: 1em;
    border-left: 2px solid #ddd;
    padding-left: 0.5em;
  }

  .reply-form {
    margin-top: 0.5em;
  }

  .menu-bar {
    margin-bottom: 0.5em;
  }

  button {
    margin-right: 0.5em;
    padding: 0.3em 0.6em;
    border: 1px solid #ccc;
    background: #f9f9f9;
    cursor: pointer;
    border-radius: 3px;
  }

  button.active {
    background: #ddd;
    font-weight: bold;
  }

  .submit-button {
    margin-top: 0.5em;
  }
</style>
