import React, {FunctionComponent, useCallback} from "react";
import {useStore} from "../../stores/helpers/use-store";
import {observer} from "mobx-react-lite";
import ImageContainer from "../../components/image-container/image-container";
import {NUMBER_OF_IMAGES_TO_SHOW, ViewMode} from "../../stores/views/images-view/images-view-store";

const ImagesView: FunctionComponent = () => {
    const { data: { imagesStore }, views: { imagesViewStore }} = useStore();

    const getViewClassName = useCallback(() => {
        return imagesViewStore.viewMode === ViewMode.Vertical ? 'images-vertical' : 'images-horizontal';
    }, [imagesViewStore]);

    return (
        <div className='images-view'>
            {
                <div className={`images ${getViewClassName()}`}>
                    {
                        imagesStore.isFetched ?
                            imagesViewStore.viewImages.map((image) => (
                                <ImageContainer key={image.url} image={image}/>)
                            ) :
                            Array.from(Array(NUMBER_OF_IMAGES_TO_SHOW)).map((value, index) => (
                                <div key={index} className='image-placeholder'></div>)
                            )

                    }
                </div>

            }
        </div>)
};

export default observer(ImagesView);
