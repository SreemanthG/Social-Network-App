import React from 'react'
import Chat from './Chat'
import Room from './Room'
import './Main.css'

export default function Main() {
    return (
            <div className="message">
                <div className="message_body">
                    <Room />
                    <Chat />
                </div>
            </div>
    )
}
