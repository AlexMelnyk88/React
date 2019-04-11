import React from 'react';
import ImgComponent from './ImgComponent.js';
import './Images.css';


const ImageList = (props) => {
  const prop = props.images;
  const result = prop.map(images => {
        return <ImgComponent key={images.id} images={images} />
    })
    
    return(<div className="image-list"> {result} </div>);

}

export default ImageList;
           