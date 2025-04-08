'use client'

import { useCurrentEditor } from '@tiptap/react'

const SaveButton = () => {
    const { editor } = useCurrentEditor()

    const handleSave = () => {
        if (editor) {
            // const html = editor.getHTML()
            // console.log('📝 Editor HTML:', html)
            const json = editor.getJSON()
            console.log('📝 Editor json:', json)
        } else {
            console.log('⛔ editor is null')
        }
    }

    return <button onClick={handleSave}>save</button>
}

export default SaveButton
