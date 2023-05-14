import React from 'react'

function IconSizeBigger({ size, ...rest }) {
    return (
        <i {...rest} style={{ fontSize: size }}></i>
    )
}

export default IconSizeBigger