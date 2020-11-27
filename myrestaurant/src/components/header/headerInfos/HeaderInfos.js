import React, { Component } from 'react';
import Style from './HeaderInfos.module.scss';

export default class HeaderInfos extends Component{

    render(){
        return(
            <div className={Style.Infos} >
                <div className="d-flex flex-row align-items-center justify-content-between" >
                    <div className={Style.phone} >
                        <i className="fas fa-phone-alt"></i>
                        <span> +49 123 123456789 </span>
                    </div>
                    <div className={Style.calendar}>
                        <i className="far fa-calendar-alt"></i>
                        <span> Mo - So: 08:00 - 19:00 Uhr </span>
                    </div>
                    <div className={Style.mail}>
                        <i className="far fa-envelope"></i>
                        <span> myrestaurant@email.com </span>
                    </div>
                </div>
            </div>
            
        ); 
    }

}