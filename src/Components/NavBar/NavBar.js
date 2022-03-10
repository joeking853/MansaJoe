import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './NavBar.css'

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(

            <nav className="NavBarItems">
                <h1 className="NavBar-Logo"><a href='#'>Joseph King</a></h1>
                <div className="Menu-Icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'Nav-Menu active' : 'Nav-Menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        )
    }
}


export default NavBar;