import React from 'react'
import './MemberInfo.module.css'
import IconSizeBigger from '../../IconSizeBigger/IconSizeBigger'

function MemberInfo() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 20, marginBottom: 20, paddingBottom: 12, paddingRight: 16, borderBottom: '1px solid #ccc' }}>
            <div style={{ display: 'flex' }}>
                <img style={{ width: '10%' }} src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png" alt="" />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', marginLeft: 8 }}>
                    <p style={{ marginBottom: 8 }}>Leslie Laurens</p>
                    <p style={{ opacity: 0.5 }}>Freelance</p>
                </div>
            </div>
            <button
                className='UtilChatBtn'
                style={{
                    padding: 12,
                    border: '1px solid #ccc',
                    borderRadius: 12,
                    cursor: 'pointer'
                }}>
                <IconSizeBigger className="fa-solid fa-message" size='16px'></IconSizeBigger>
            </button>
        </div>
    )
}

export default MemberInfo