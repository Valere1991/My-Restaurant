import { useState } from 'react';
import React from 'react';
import Style from './Slider.module.scss';


function Slider (){

    let SliderArr = [1, 2, 3, 4, 5];

        const [x, setX] = useState(0);
        return(
            <div className = {Style.Slider}>
                {
                    SliderArr.map( (carousel, index) => {
                        return(
                            <div  key = {index} className={Style.Slide} style = { {transform: `translateX(${x}%)`}}>
                                {carousel}
                            </div>
                        );
                    })
                }

            </div>
        )
    
}
export default Slider