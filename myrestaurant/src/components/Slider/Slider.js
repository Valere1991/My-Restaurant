import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Style from './Slider.module.scss';
import ImgSlider from './ImgSlider';
import i1 from './imgSlider/restaurant-691397_1920.jpg';
import i2 from './imgSlider/eating-601581_1920.jpg';
import i3 from './imgSlider/barbecue-1239434_1920.jpg';
import i4 from './imgSlider/strawberry-dessert-2191973_1920.jpg';
import i5 from './imgSlider/wine-541922_1920.jpg';


function Slider (){

    let SliderArr = [
        <ImgSlider src= {i1}/>,
        <ImgSlider src= {i2} />,
        <ImgSlider src= {i3} />,
        <ImgSlider src= {i4}/>,
        <ImgSlider src= {i5}/>
    ];

    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = goRight
    })


    useEffect(() => {
        const play = () => {
          autoPlayRef.current()
        }
    
        const interval = setInterval(play, 5000)
        return () => clearInterval(interval)
      }, [])


    const goLeft = () => {
        setX(x + 100);
        x === 0 ? setX( -100 * (SliderArr.length-1) ): setX(x + 100);
    };
    const goRight = () => {
        setX(x - 100);
        x === -100 * (SliderArr.length-1) ? setX(0) : setX(x - 100);
    };

        const [x, setX] = useState(0);
        return(
            <div className = {Style.Slider} >
                {
                    SliderArr.map( (carousel, index) => {
                        return(
                            <div  key = {index} className={Style.Slide} style = { {transform: `translateX(${x}%)`}}>
                                {carousel}
                            </div>
                        );
                    })
                }

                <button id={ Style.goLeft } onClick={ goLeft } >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button id={ Style.goRight } onClick={ goRight } >
                    <i className="fas fa-chevron-right"></i>
                </button>

            </div>
        )
    
}
export default Slider