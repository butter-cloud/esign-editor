import { Extension } from '@tiptap/core'
import { Plugin } from 'prosemirror-state'

export const CustomPasteHandler = Extension.create({
  name: 'customPasteHandler',

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handlePaste: (view, event) => {
            const plainText = event.clipboardData?.getData('text/plain')
            if (!plainText || !plainText.includes('\t')) return false
            console.log('📋 붙여넣기 plainText:', plainText)

            const rows = plainText
              .split('\n')
              .filter((line) => line.trim().length > 0)
              .map((row) => row.split('\t'))

            const { schema } = view.state

            const tableNode = schema.nodes.table.create(
              {},
              rows.map((row) =>
                schema.nodes.tableRow.create(
                  {},
                  row.map((cell) =>
                    schema.nodes.tableCell.create(
                      {},
                      schema.nodes.paragraph.create(
                        {},
                        cell.trim() === '' ? [] : [schema.text(cell.trim())],
                      ),
                    ),
                  ),
                ),
              ),
            )

            const transaction = view.state.tr.replaceSelectionWith(tableNode)
            view.dispatch(transaction)

            return true
          },
        },
      }),
    ]
  },
})
