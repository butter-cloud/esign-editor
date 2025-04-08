import { Color } from '@tiptap/extension-color'
import TextStyle from '@/components/editor/extenstions/textStyle'
import ListItem from '@tiptap/extension-list-item'

export const color = Color.configure({ types: [TextStyle.name, ListItem.name] })
export default color
