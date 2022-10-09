import React, { useCallback, useEffect, useState } from "react";
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
    const [socket, setSocket] = useState()
    const [quill, setQuill] = useState()

    useEffect(() => {
        //connect to the server(returns a socket)
        const s = io('http://localhost:3001')
        setSocket(s)
        return () => { s.disconnect() }
    }, [])

    //detect changes in quill
    useEffect(() => {
        //when we first load page, socket and quill gonna be null, so first check
        if (socket == null || quill == null) return

        const handler = (delta, oldDelta, source) => {
            //check if change was made by user
            if (source !== 'user') return
            //send message to server with self chosen name
            socket.emit("send-changes", delta)
        }
        quill.on("text-change", handler)

        return () => {
            quill.off("text-change", handler)
        }
    }, [socket, quill])

    //Receive message from server
    useEffect(() => {
        if (socket == null || quill == null) return

        const handler = (delta) => {
            console.log('received')
            quill.updateContent(delta)

        }
        socket.on("receive-changes", handler)

        return () => {
            socket.off("receive-changes", handler)
        }
    }, [socket, quill])

    //We using useCallback to make sure wrapperRef exist before
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return
        wrapper.innerHTML = ''
        const editor = document.createElement('div')
        wrapper.append(editor)
        const q = new Quill(editor, {
            theme: 'snow',
            modules: { toolbar: TOOLBAR_OPTIONS }
        })
        setQuill(q)

    }, [])
    //Now the wrapperRef variable holds this DOM node as value

    return <div className="container" ref={wrapperRef}></div>
}
