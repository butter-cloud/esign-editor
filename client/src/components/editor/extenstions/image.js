import Image from '@tiptap/extension-image'

export const image = Image.configure({
  inline: false,
  allowBase64: true,
})

export default image