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
            <h3>Nav</h3>
            <ul className="navlinks">
                {
                    navLinks.map((link) => {
                        return(
                            <li>
                                <Link to={link.href}>{link.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Nav
