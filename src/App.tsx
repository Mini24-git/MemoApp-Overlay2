import './styles.scss'
import './App.css'
import React from "react";
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenu } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
import Header from './components/Header.tsx'
import { useState } from 'react';
const [modeStatus,setModeStatus] = useState('');

function changeMode(){
  if(modeStatus === 'View'){
    setModeStatus('Edit');
  }else if(modeStatus === 'Edit'){
    setModeStatus('View');
  }else{
    setModeStatus('err');
  }
   
}
const MenuBar = () => {
  const { editor } = useCurrentEditor()
  
  if (!editor) {
    return null
  }
  return (
    <div className="control-group">
      <Header></Header>
      <div data-tauri-drag-region className="drag-region"></div>
      <div className="button-group">
      {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className="bubble-menu">
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
            disabled = {modeStatus==='View'}
            >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
            >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
            >
            Strike
          </button>

          
        </div>
          
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
          >
          Code
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
          >
          Paragraph
        </button>
      </BubbleMenu>}
     
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
          >
          H4
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
          >
          H5
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
          >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
          >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
          >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
          >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
          >
          Blockquote
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          Horizontal rule
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
          }
          >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
          }
          >
          Redo
        </button>
        <button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
          >
          Purple
        </button>
        <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
            >
            Toggle underline
          </button>
      </div>
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
export default function App() {
  return (
    <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
  )
}