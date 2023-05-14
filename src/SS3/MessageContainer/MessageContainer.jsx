import React from 'react'
import './MessageContainer.css'
import IconSizeBigger from '../IconSizeBigger/IconSizeBigger'
import { useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function MessageContainer({ sharedContact }) {

    let location = useLocation();

    console.log(location);

    useEffect(() => {
        const url = new URL(window.location);
        const searchParams = url.searchParams;

        const id = searchParams.get('chatId');

        console.log(id);

        async function fetchData(chatId) {
            const response = await fetch(`https://64565c5d2e41ccf1691ad253.mockapi.io/contact-list/${chatId}`);
            const result = await response.json();

            console.log(result);
        }

        fetchData(id);

    }, [location]);

    return (
        <div style={{
            width: '40%',
            paddingTop: 20,
            paddingLeft: 24,
            paddingRight: 16,
            borderRight: '1px solid #ccc',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>

            {sharedContact ? (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}>
                    <div style={{
                        height: '80%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <h1>{sharedContact.name}</h1>
                            <p style={{ color: "#fff", fontWeight: '600', marginTop: 24 }}>
                                Welcome to the Streamline scouting chat
                            </p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                columnGap: "10px"
                            }}
                        >
                            <img
                                src={sharedContact.img}
                                alt=""
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover"
                                }}
                            />
                            <p
                                style={{
                                    padding: 8,
                                    borderRadius: 8,
                                    width: "fit-content",
                                    border: '1px solid #ccc'
                                }}
                            >
                                {sharedContact.mess}
                            </p>
                        </div>
                    </div>
                    <div className='SendMessage'>
                        <button style={{ cursor: 'pointer' }}>
                            <IconSizeBigger className="fa-solid fa-paperclip" size='20px'></IconSizeBigger>
                        </button>
                        <input className='SendMessageInput' name="" id="" placeholder='Write a message...' />
                        <button style={{ cursor: 'pointer' }}>
                            <IconSizeBigger className="fa-solid fa-paper-plane Send" size='20px'></IconSizeBigger>
                        </button>
                    </div>
                </div>
            ) : (
                <h3>Please choose a contact!</h3>
            )}

        </div>
    )
}

export default MessageContainer
