import React from 'react'
import './ContactNames.module.css'

function ContactNames({ avatarUrl, name, lastMessage, setSharedContact }) {

    const handleSelectCard = () => {
        setSharedContact(prev => [
            ...prev, 
            {
            avatarUrl,
            name,
            lastMessage
        }])
    };

    return (

        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 20
            }}
            onClick={handleSelectCard} >
            <div className='Contacts' style={{ display: 'flex', flexDirection: 'row' }} onClick={handleSelectCard}>
                <img src={avatarUrl} alt="" style={{ width: '20%' }} />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}>
                    <p className='ContactName' style={{ fontWeight: '600' }}>{name}</p>
                    <p style={{ opacity: '0.5' }}>{lastMessage}</p>
                </div>
            </div>
        </div>

    )
}

export default ContactNames