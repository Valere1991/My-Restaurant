import React, {Component} from 'react';
import HeaderInfos from './headerInfos/HeaderInfos';
import HeaderNav from './HeaderNav/HeaderNav';
import Slider from './Slider/Slider';

export default class Header extends Component{

    render(){
        return(
            <>
                <HeaderInfos />
                <HeaderNav />
                <Slider />
            </>
        ) 
                
    }
}