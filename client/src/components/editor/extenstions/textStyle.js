import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'

export const textStyle = TextStyle.configure({ types: [ListItem.name] })

export default textStyle
