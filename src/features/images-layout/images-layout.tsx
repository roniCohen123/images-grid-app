import React, {useEffect} from 'react';
import Header from "../header/header";
import {useStore} from "../../stores/helpers/use-store";
import ImagesView from "../images-view/images-view";
import Footer from "../footer/footer";

export const ImagesLayout: React.FunctionComponent = () => {
    const {data: {imagesStore}} = useStore();

    useEffect(() => {
        imagesStore.fetch();
    }, [imagesStore]);

    return (
        <div>
            <Header/>
            <ImagesView/>
            <Footer/>
        </div>
    )
};
