import React from 'react'
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                The Fire Emulator Tool is not supported, maintained or endorsed by the Firebase team.<br /><br />

                This is an open source project and if you want to contribute, please visit the <a href="https://github.com/nikkothari22/fire-emulator-manager">Github</a> repository.
                <br /><br />
                Built and maintained by coders around the world.
            </p>
            <span className="footer-text">You can reach out to me here</span>
            <ul className="footer-social-links">
                <li>
                    <a href="mailto:nik.kothari22@live.com">
                        <span className="icon"><AlternateEmailIcon /></span>
                        <span className="text">nik.kothari22@live.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/nikkothari22">
                        <span className="icon"><GitHubIcon /></span>
                        <span className="text">/nikkothari22</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/nik_kothari22">
                        <span className="icon"><TwitterIcon /></span>
                        <span className="text">/nik_kothari22</span>
                    </a>
                </li>
            </ul>
        </footer>
    )
}


export default Footer
