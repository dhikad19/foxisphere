<template>
  <div class="comment-container">
    <div class="comment-wrapper">
      <div class="comment-content">
        <div @click="handleComment()">
          <p class="pa-2" v-if="!active">
            Tambahkan Komentar
          </p>
        </div>
        <v-card v-if="editor && active" class="pa-2" variant="flat" width="100%">
          <div>
            <editor-content :editor="editor" />
          </div>
          <div class="d-flex align-center justify-space-between mt-12">
            <div class="d-flex align-center">
              <div 
                class="mr-2" 
                @click="editor.chain().focus().toggleBold().run()"
                :class="editor.isActive('bold') ? 'btn-editor__active' : 'btn-editor'"
              >
                <v-icon size="20">
                  mdi-format-bold
                </v-icon>
              </div>
              <div 
                class="btn-editor"
                @click="editor.chain().focus().toggleItalic().run()" 
                :class="editor.isActive('italic') ? 'btn-editor__active' : 'btn-editor'"
              >
                <v-icon size="20">
                  mdi-format-italic
                </v-icon>
              </div>
            </div>
            <div>
              <v-btn @click="active = false" style="text-transform: capitalize; letter-spacing: normal" class="mr-1" variant="text">
                Batal
              </v-btn>
              <v-btn style="text-transform: capitalize; letter-spacing: normal" color="#ff7800" variant="tonal">
                Komen
              </v-btn>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
export default {
  name: 'CommentComponent',
  data() {
    return {
      active: false,
      editor: null,
      boldActive: false,
      italicActive: false
    }
  },
  methods: {
    handleComment() {
      this.active = true
      this.focusEditor()
    },
    focusEditor() {
      this.editor.commands.focus()
    }
  },
  mounted() {
      this.editor = new Editor({
        content: `
        <p></p>
        `,
        extensions: [
          StarterKit,
          Placeholder.configure({
            placeholder: 'Tambahkan Komentar',
          }),

        ],
      })
    },
  components: {
      EditorContent,
    },
    beforeUnmount() {
      this.editor.destroy()
    }
}
</script>

<style lang="scss" scoped>
@use './style.scss'
</style>