<template>
  <div class="write-container">
    <div class="write-wrapper">
      <div v-if="editor" class="container">
        <v-card class="toolbar-group pa-2 d-flex align-center" height="100%" variant="outlined">
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            icon="mdi-undo"
            @click="editor.chain().focus().undo().run()" 
            :disabled="!editor.can().chain().focus().undo().run()">
          </v-btn>
          <v-btn 
            width="32"
            height="32"
            style="border-radius: 4px; font-size: 12px"
            class="ml-1"
            icon="mdi-redo"
            @click="editor.chain().focus().redo().run()" 
            :disabled="!editor.can().chain().focus().redo().run()">
          </v-btn>
          <div style="height: 100%; width: 1px; border-right: 1px solid black"></div>
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
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import StarterKit from '@tiptap/starter-kit'
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
    mounted() {
      this.editor = new Editor({
        content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
        extensions: [
          Color.configure({ types: [TextStyle.name, ListItem.name] }),
          TextStyle.configure({ types: [ListItem.name] }),  
          StarterKit
        ],
      })
    },
    beforeUnmount() {
      this.editor.destroy()
    }
  
  }
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>

<style>
.editor-content:focus {
  outline: none;
}

/* Alternatively, you can target the editor directly, as the default .ProseMirror class */
.ProseMirror:focus {
  outline: none;
}

</style>