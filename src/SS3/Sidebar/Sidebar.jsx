import React from 'react'
import IconSizeBigger from '../IconSizeBigger/IconSizeBigger'

function Sidebar() {
    return (
        <div style={{ width: '10%', display: 'flex', borderRight: '1px solid #ccc', flexDirection: 'column', alignItems: 'center', padding: '32px 32px', justifyContent: 'space-between' }}>
            <IconSizeBigger className="fa-solid fa-bars" size='40px'></IconSizeBigger>

            <div style={{ display: 'flex', flexDirection: 'column', rowGap: 60, marginBottom: 40 }}>
                <IconSizeBigger className="fa-solid fa-wallet" size='20px'></IconSizeBigger>
                <IconSizeBigger className="fa-solid fa-comment" size='20px'></IconSizeBigger>
                <IconSizeBigger className="fa-solid fa-folder" size='20px'></IconSizeBigger>
                <IconSizeBigger className="fa-solid fa-briefcase" size='20px'></IconSizeBigger>
                <IconSizeBigger className="fa-solid fa-upload" size='20px'></IconSizeBigger>
                <IconSizeBigger className="fa-solid fa-chart-simple" size='20px'></IconSizeBigger>
            </div>
        </div>
    )
}

export default Sidebar