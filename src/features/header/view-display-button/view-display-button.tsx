import React, {FunctionComponent, ReactElement} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../../stores/helpers/use-store";
import {ViewMode} from "../../../stores/views/images-view/images-view-store";

interface Props {
    viewMode: ViewMode;
    icon: ReactElement;
}

const ViewDisplayButton: FunctionComponent<Props> = ({viewMode, icon}) => {
    const {views: {imagesViewStore}} = useStore();

    const isDisabled = imagesViewStore.viewMode === viewMode;

    return (
        <button
            className='view-button'
            disabled={isDisabled}
            onClick={() => imagesViewStore.setViewMode(viewMode)}>
            {icon}
        </button>
    );
};

export default observer(ViewDisplayButton);
