import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Style from './HeaderNav.module.scss';

export default class LoginControl extends Component{

    constructor(props){
        super(props);
        this.state = { isLoggedIn : false}
        }

        connection = () => {
            this.setState( (state => ({ isLoggedIn : !state.isLoggedIn }) ))
        }
        
        render(){

            const isLoggedIn = this.state.isLoggedIn;
            let execute;

            if (isLoggedIn){
                execute = <button onClick={this.connection} className={Style.log} >
                            <span>Logout </span>
                            <i className="fas fa-user-tie"></i>
                          </button>
            }else{
                execute = <button onClick={this.connection} >
                            <span>Login </span>
                            <i className="fas fa-user-tie"></i>
                        </button>
            }

            return <div> { execute }  </div>
        }
    
}