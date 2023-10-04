import React from 'react'

const LayoutPage = ({ children="", className="" }) => {
    return (
        <div className={`w-full h-full inline-block bg-light dark:bg-tdark ${className}`}>
            {children}
        </div>
    )
}

export default LayoutPage