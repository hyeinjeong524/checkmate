import sparcsLogo from '../assets/sparcs.svg'
import "./Header.css";


function Header() {
    return (<header>
            <h1>
                <a href="https://sparcs.org" target="_blank" rel="noreferrer">
                    <img src={sparcsLogo} className="logo toplogo" alt="React logo" />
                </a>
                <span className="title">Checkmate</span>
            </h1>
            
    </header>)
}
export default Header;