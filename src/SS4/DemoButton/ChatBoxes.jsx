import React, { useState } from "react"

function ChatBoxes() {

    return (
        <div>
            <div style={{ display: 'flex', marginTop: 16 }}>
                <img style={{ width: '12%' }} src='https://cdn-icons-png.flaticon.com/512/5087/5087579.png' alt="" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: 12 }}>
                    <p style={{ fontWeight: '600', fontSize: 20 }}>Long</p>
                    <p style={{ opacity: '0.5' }}>Hello, can we be friends?</p>
                </div>
            </div>
        </div>
    );
}

export default ChatBoxes;
