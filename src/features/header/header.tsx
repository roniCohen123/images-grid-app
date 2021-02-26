import React, {FunctionComponent} from 'react';
import {faGripHorizontal, faGripVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {ViewMode} from "../../stores/views/images-view/images-view-store";
import ViewDisplayButton from "./view-display-button/view-display-button";

const Header: FunctionComponent = () => {
    return (
        <div className='header'>
            <div className='view-display-buttons'>
                <ViewDisplayButton viewMode={ViewMode.Horizontal}
                                   icon={<FontAwesomeIcon icon={faGripHorizontal} color='white'/>}/>
                <ViewDisplayButton viewMode={ViewMode.Vertical}
                                   icon={<FontAwesomeIcon icon={faGripVertical} color='white'/>}/>
            </div>
        </div>
    )
};

export default Header;
