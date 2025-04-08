import StarterKit from '@/components/editor/extenstions/starterKit'
import Image from '@/components/editor/extenstions/image'
import TextStyle from '@/components/editor/extenstions/textStyle'
import Color from '@/components/editor/extenstions/color'
import ImagePaste from '@/components/editor/extenstions/imagePaste'
import { CustomPasteHandler } from '@/components/editor/extenstions/customPasteHandler'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'

export const extensions = [
  StarterKit,
  Image,
  TextStyle,
  Color,
  ImagePaste,
  CustomPasteHandler,
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableCell,
  TableHeader,
]

export default extensions
