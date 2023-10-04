import React from 'react'

const LayoutPage = ({ children} : {children: React.ReactNode}) => {
    return (
        <div className={`w-full h-full inline-block bg-light dark:bg-tdark`}>
            {children}
        </div>
    )
}

export default LayoutPage