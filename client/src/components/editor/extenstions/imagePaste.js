import { Extension } from '@tiptap/core'
import { Plugin } from 'prosemirror-state'

const ImagePaste = Extension.create({
  name: 'imagePaste',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handlePaste: (view, event) => {
            const items = event.clipboardData?.items
            if (!items) return false

            for (const item of items) {
              if (item.type.indexOf('image') === 0) {
                const file = item.getAsFile()
                const reader = new FileReader()
                reader.onload = () => {
                  const node = this.editor.schema.nodes.image.create({
                    src: reader.result,
                  })
                  const transaction =
                    this.editor.state.tr.replaceSelectionWith(node)
                  view.dispatch(transaction)
                }
                if (file) reader.readAsDataURL(file)
                return true
              }
            }

            return false
          },
        },
      }),
    ]
  },
})

export default ImagePaste
