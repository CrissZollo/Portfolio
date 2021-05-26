import React, { Component } from 'react';
import { MenuItems } from './menuItems'
import './navbarStyles.css';

class Navbar extends Component<{}, { clicked: Boolean }> {

    constructor(props: any) {
        super(props)
        this.state = {
            clicked: true
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(({
            clicked: !this.state.clicked
        }));
    }

    render() {
        return (
            <nav className="navbarItems">
                <h1 className="navbar-logo">Christoffer</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item: { title: string, url: string, cName: string }, index: number) => {
                        return (
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

export default Navbar;