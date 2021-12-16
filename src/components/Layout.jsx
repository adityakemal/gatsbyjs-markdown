import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/* all content will be here  */}
                {children}
            </div>
            <footer>
                web warrior 2021
            </footer>
        </div>
    )
}
