import React, { useState } from "react";
import ChatBoxes from "./ChatBoxes";
import './DemoButton.module.css'
import IconSizeBigger from "../../SS3/IconSizeBigger/IconSizeBigger";

function DemoButton() {
    const [chatBoxes, setChatBoxes] = useState([]);

    const addNewChatBox = () => {
        // Thêm một cửa sổ chat mới vào state, tạo một mảng mới bằng tất cả
        // các object của mảng chatWindows cùng một object mới ở cuối mảng
        // là một object rỗng.
        setChatBoxes([...chatBoxes, {}]);
    };

    return (
        <div>
            {chatBoxes.map((chatBox, index) => (
                <ChatBoxes key={index} />
            ))}
            <button style={{padding: 12, borderRadius: 12, border: '1px solid #ccc' }} className="AddChatButton" onClick={() => addNewChatBox()}>
                <IconSizeBigger className="fa-solid fa-plus" size='24px'></IconSizeBigger>
            </button>
        </div>
    );
}

export default DemoButton;