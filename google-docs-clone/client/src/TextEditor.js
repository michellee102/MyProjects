import React, { useCallback, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"
import { io } from 'socket.io-client'

const TOOLBAR_OPTIONS = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ["bold", "italic", "underline"],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'align': [] }],
    ["image", "blockquote", "code-block"],
    ["clean"]
]

export default function TextEditor() {
    useEffect(() => {
        //connect to the server(returns a socket)
        const socket = io('http://localhost:3001')

        return () => { socket.disconnect() }
    }, [])

    //We using useCallback to make sure wrapperRef exist before
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, {
            theme: 'snow',
            modules: { toolbar: TOOLBAR_OPTIONS }
        })

    }, [])
    //Now the wrapperRef variable holds this DOM node as value

    return <div className="container" ref={wrapperRef}></div>
}
