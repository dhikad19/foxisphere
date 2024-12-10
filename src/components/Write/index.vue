<template>
  <div class="write-container">
    <div class="write-wrapper">
      <div v-if="editor" class="container">
        <v-card class="toolbar-group pa-2 d-flex align-center mb-4" style="border: 1px solid #E0E0E0; border-radius: 6px" height="100%" flat>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            elevation="0"
            icon="mdi-undo"
            @click="editor.chain().focus().undo().run()" 
            :disabled="!editor.can().chain().focus().undo().run()">
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-redo"
            @click="editor.chain().focus().redo().run()" 
            :disabled="!editor.can().chain().focus().redo().run()">
          </v-btn>
          <div class="ml-2 mr-1 divider-btn"></div>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-paragraph"
            @click="editor.chain().focus().setParagraph().run()" 
            :class="{ 'is-active': editor.isActive('paragraph') }"
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-header-1"
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" 
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-header-2"
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" 
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-header-3"
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" 
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-header-4"
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" 
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
            >
          </v-btn>
          <div class="ml-2 mr-1 divider-btn"></div>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-bold"
            @click="editor.chain().focus().toggleBold().run()" 
            :disabled="!editor.can().chain().focus().toggleBold().run()" 
            :class="{ 'is-active': editor.isActive('bold') }"
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-italic"
            @click="editor.chain().focus().toggleItalic().run()" 
            :disabled="!editor.can().chain().focus().toggleItalic().run()" 
            :class="{ 'is-active': editor.isActive('italic') }"
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 13px;"
            class="ml-1"
            elevation="0"
            icon="mdi-format-strikethrough"
            @click="editor.chain().focus().toggleStrike().run()" 
            :class="{ 'is-active': editor.isActive('strike') }"
            :disabled="!editor.can().chain().focus().toggleStrike().run()" 
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-underline"
            @click="editor.chain().focus().toggleUnderline().run()" 
            :disabled="!editor.can().chain().focus().toggleUnderline().run()" 
            :class="{ 'is-active': editor.isActive('underline') }"
            >
          </v-btn>
          <div class="ml-2 mr-1 divider-btn"></div>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-list-bulleted"
            @click="editor.chain().focus().toggleBulletList().run()" 
            :class="{ 'is-active': editor.isActive('bulletList') }"
            >
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            elevation="0"
            icon="mdi-format-list-numbered"
            @click="editor.chain().focus().toggleOrderedList().run()" 
            :class="{ 'is-active': editor.isActive('orderedList') }"
            >
          </v-btn>
          <div class="ml-2 mr-1 divider-btn"></div>

        </v-card>
        <editor-content :editor="editor" />
      </div>
    </div>
  </div>
</template>

<script>
  import { Color } from '@tiptap/extension-color'
  import ListItem from '@tiptap/extension-list-item'
  import TextStyle from '@tiptap/extension-text-style'
  import Strike from '@tiptap/extension-strike'
  import { 
    Editor,
    EditorContent
  } from '@tiptap/vue-3'
  import { Underline } from '@tiptap/extension-underline';
  import StarterKit from '@tiptap/starter-kit'
  import Document from '@tiptap/extension-document'
  import Placeholder from '@tiptap/extension-placeholder'

  const CustomDocument = Document.extend({
    content: 'heading block*',
  })
  export default {
    name: 'WriteComponent',
    data() {
      return {
        editor: null,
      }
    
    },
    components: {
      EditorContent,
    },
    watch: {
      editor(val){ 
        console.log(val)
      }
    },
    mounted() {
      this.editor = new Editor({
        content: `
          <h1></h1>
          <p></p>
        `,
        extensions: [
          CustomDocument,
          Color.configure({ types: [TextStyle.name, ListItem.name] }),
          TextStyle.configure({ types: [ListItem.name] }),  
          StarterKit.configure({
            document: false,
          }),
          Strike,
          Underline,
          Placeholder.configure({
            placeholder: ({ node }) => {
              if (node.type.name === 'heading') {
                return 'Judul'
              }

              return 'Bagikan ceritamu...'
            },
          }),

        ],
      })
    },
    beforeUnmount() {
      this.editor.destroy()
    }
  
  }
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

<style>
.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

.ProseMirror h1.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #adb5bd;
  pointer-events: none;
  height: 0;
}

.editor-content:focus {
  outline: none;
}

/* Alternatively, you can target the editor directly, as the default .ProseMirror class */
.ProseMirror:focus {
  outline: none;
}

</style>