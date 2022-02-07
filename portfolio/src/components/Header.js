import { Component } from "react";

class Header extends Component {
    render() {
        // will probably have an s3 bucket to download resume from
        return(
           <header>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                        
                        <a className="nav-link">Resume</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/projects" aria-disabled="true">Projects</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
           </header>
        ) 
    }
}

export default Header;