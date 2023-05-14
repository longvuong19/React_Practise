import React, { useState } from "react";
import { useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import IconSizeBigger from "../IconSizeBigger/IconSizeBigger";
import ContactCard from "./ContactCard";
import { v4 as uuidv4 } from "uuid";

function ContactList({ onContactSelect }) {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        // Phương thức mặc định của fetch là GET
        // fetch('https://64565c5d2e41ccf1691ad253.mockapi.io/contact-list')

        async function fetchData() {
            const response = await fetch('https://64565c5d2e41ccf1691ad253.mockapi.io/contact-list');
            const result = await response.json();
            setContacts(result);
            setIsLoading(false);
            // const id = result['id'];
            // console.log(id);
        }
        fetchData();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    const handleAddContact = () => {
        const newContact = {
            id: uuidv4(),
            name: name,
            image: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png",
            mess: message
        };
        setContacts([...contacts, newContact]);
        setName("");
        setMessage("");
        setShowModal(false);
    };

    const handleDeleteContact = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
    };


    return (
        <div
            style={{
                width: '30%',
                borderRight: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: 12,
            }}
        >
            <div style={{ height: '100%', overflowY: 'auto' }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 12
                    }}
                >
                    <h2>Chats</h2>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            columnGap: 20
                        }}
                    >
                        <SearchBar />
                        <button style={{
                            border: '1px solid #ccc',
                            borderRadius: 8,
                            padding: 10,
                            cursor: 'pointer'
                        }}
                            onClick={() => setShowModal(true)}>
                            <IconSizeBigger
                                className="fa-solid fa-plus"
                                size="20px"
                                color="#fff"
                            />
                        </button>
                    </div>
                </div>

                <div>
                    {showModal && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                rowGap: 16,
                                padding: 16,
                                width: "50%",
                                margin: "0 auto",
                                border: "1px solid #ccc",
                                borderRadius: 8
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={handleNameChange}
                            />
                            <input
                                placeholder="Enter Message"
                                value={message}
                                onChange={handleMessageChange}
                            />
                            <div style={{
                                display: 'flex',
                                gap: 12,
                            }}>
                                <button
                                    style={{
                                        padding: 8,
                                        border: '1px solid #ccc',
                                        borderRadius: 8,
                                        cursor: 'pointer'
                                    }}
                                    onClick={handleAddContact}>
                                    Add
                                </button>
                                <button
                                    style={{
                                        padding: 8,
                                        border: '1px solid #ccc',
                                        borderRadius: 8,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    {
                        isLoading ?
                            <h2 style={{ paddingLeft: 12 }}>Loading data...</h2>
                            :
                            contacts.map((contacts, index) => (
                                <ContactCard
                                    id={contacts.id}
                                    key={index}
                                    name={contacts.name}
                                    img={contacts.avatarUrl}
                                    mess={contacts.lastMessage}
                                    onContactSelect={onContactSelect}
                                    onDeleteContact={handleDeleteContact}
                                />
                            ))}
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                <input type="text" className='Feedback' placeholder='Submit Feedback' />
            </div>
        </div>
    );
}

export default ContactList;
