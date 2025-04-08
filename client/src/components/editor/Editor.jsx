'use client'

import './Editor.css'
import { EditorProvider } from '@tiptap/react'
import { useState } from 'react'
import MenuBar from '@/components/menubar/MenuBar'
import SaveButton from '@/components/editor/SaveButton'
import extensions from '@/components/editor/extenstions'
import defaultContent from '@/constants/defaultContent'

export const Editor = () => {
  const [content, setContent] = useState(defaultContent)

  return (
    <>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        immediatelyRender={false}
      >
        <SaveButton />
      </EditorProvider>
    </>
  )
}

export default Editor
