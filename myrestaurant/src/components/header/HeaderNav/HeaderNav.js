import React, {Component} from 'react';
import Style from './HeaderNav.module.scss';
import LoginControl from './user';

export default class HeaderNav extends Component{

    render(){
        return(

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><span className= {Style.logo} >My Restaurant</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className=" collapse navbar-collapse" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><span className= {Style.home}>Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span className= {Style.menu}>Menü</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span className= {Style.blog}>Blog</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span className= {Style.kontakt}>Kontakt</span></a>
                        </li>
                        <li className="nav-item">
                            <LoginControl />
                        </li>
                        
                    </ul>
                </div>
                
            </nav>
        );
    }
}
