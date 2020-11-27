import React from 'react';


function ImgSlider( {src} ) {
    let ImagesStyles = {
        width: 100 +"%",
        height: "auto",
        filter: "brightness" + 100 + "%",
        webkitFilter: "brightness" + 100 + "%"
    }
    return <img src={src} alt="MyRestaurant" style = {ImagesStyles} />
}

export default ImgSlider
