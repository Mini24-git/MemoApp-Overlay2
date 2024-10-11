import './styles.scss'
import React from "react";
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenu } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
import Header from './components/Header.tsx'





const MenuBar = () => {
  const { editor } = useCurrentEditor()
  
  if (!editor) {
    return null
  }
  return (
    <div>
      <Header></Header>
      
    </div>
  )
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  //TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
]

const content = `
<h2>
ここに書いてください</h2>
`
export default function View() {
  
  return (  
    <EditorProvider extensions={extensions} content={content}></EditorProvider>
  )
}