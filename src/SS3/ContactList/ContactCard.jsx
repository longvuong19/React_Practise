import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import IconSizeBigger from "../IconSizeBigger/IconSizeBigger";

function ContactItem(props) {
    const { id, img, name, mess, onContactSelect, onDeleteContact } = props;

    const handleClick = () => {
        onContactSelect(props);
    };

    const handleDeleteContact = (e) => {
        e.stopPropagation();
        e.preventDefault();
        onDeleteContact(id);
    }

    return (
        <Link to={`/?chatId=${id}`} style={{ textDecoration: 'none' }}>
            <div
                style={{
                    display: "flex",
                    columnGap: 16,
                    padding: 12,
                    alignItems: "center",
                    cursor: "pointer"
                }}
                onClick={handleClick}
            >
                <img src={img} style={{ width: "16%", borderRadius: "12px" }} />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    gap: 12
                }}>
                    <h2>{name}</h2>
                    <div>You: {mess}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <button
                        style={{
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer'
                        }}
                        onClick={handleDeleteContact}
                    >
                        <IconSizeBigger
                            className="fa-solid fa-trash"
                            size="20px"
                            color="#fff"
                        />
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default ContactItem;
