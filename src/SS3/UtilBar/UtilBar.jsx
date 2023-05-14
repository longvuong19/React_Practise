import React from 'react'
import './UtilBar.module.css'
import MemberInfo from './MemberInfo/MemberInfo'
import IconSizeBigger from '../IconSizeBigger/IconSizeBigger'

function UtilBar() {
    return (
        <div style={{ width: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

            <div>
                <div className='UtilButtons' style={{ marginTop: 32 }}>
                    <button style={{ display: 'inline-block', width: '50%', backgroundColor: 'transparent', padding: '16px 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: 16, cursor: 'pointer' }}>Chat Members</button>
                    <button style={{ display: 'inline-block', width: '50%', backgroundColor: 'transparent', padding: '16px 0', border: 'none', borderBottom: '1px solid #ccc', fontSize: 16, cursor: 'pointer' }}>Share Files</button>
                </div>
                <div style={{ marginLeft: 20, marginTop: 32, marginBottom: 20, fontSize: '12px' }}>MEMBERS</div>
                <MemberInfo></MemberInfo>
                <MemberInfo></MemberInfo>

                <div style={{ marginLeft: 20, marginTop: 32, marginBottom: 20, fontSize: '12px', display: 'flex', justifyContent: 'space-between', paddingRight: 20 }}>
                    ADMINS
                    <IconSizeBigger className="fa-solid fa-pencil" size='12px'></IconSizeBigger>
                </div>
                <MemberInfo></MemberInfo>
            </div>

            <div style={{ marginLeft: 20, marginRight: 24, display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
                <div className='OtherUtil'>
                    <h5>Customize Chat</h5>
                    <p>Change layout and colors</p>
                </div>
                <div className='OtherUtil'>
                    <h5>Policy and Support</h5>
                    <p>Get immediate support</p>
                </div>
            </div>

        </div>
    )
}

export default UtilBar