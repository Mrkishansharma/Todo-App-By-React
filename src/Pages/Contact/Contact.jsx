import React, { useEffect } from 'react'

function Contact() {

    useEffect(() => {
        document.title = 'Contact Page'
    }, [])
    
    return (
        <div>
            <h1>Contact Page</h1>

        </div>
    )
}

export default Contact
