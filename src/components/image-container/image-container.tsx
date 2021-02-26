import React from "react";
import {FunctionComponent} from "react";
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Image} from "../../stores/data/images/images-store";

interface Props {
    image: Image;
}

const ImageContainer: FunctionComponent<Props> = ({image}) => {
    return (
        <span className='image-container'>
             <img className='image' src={image.url} alt=''/>
            <div className='image-details'>
                <div className='description'>{image.description}</div>
                <FontAwesomeIcon className='likes-icon' icon={faHeart}/>
                {image.likes}
            </div>
         </span>
    );
};

export default ImageContainer;
