import React from 'react'
import { Link } from "react-router-dom";


const Nav = () => {

    const navLinks = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Artwork",
            href: "/artwork"
        },
        {
            name: "Market",
            href: "/market"
        },
    ]

    return (
        <div className="Nav">
            <h3 className="logo">Nav</h3>
            <ul className="navlinks">
                {
                    navLinks.map((link) => {
                        return(
                                <Link className="link" to={link.href}>{link.name}</Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav
