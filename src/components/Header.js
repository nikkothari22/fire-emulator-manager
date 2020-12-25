import React from 'react'
import GithubLogo from '../images/GitHub-Mark-120px-plus.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-title">
                <span className="amber">Fire Emulator Manager</span> <span className="version">v1.0</span>
            </div>
            <div className="header-icons">
                <a href="https://github.com/nikkothari22/fire-emulator-manager">
                    <img src={GithubLogo} alt="Github Logo" />
                    <span>View on Github</span>
                </a>
            </div>
        </header>
    )
}

export default Header
