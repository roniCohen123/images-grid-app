import React, {FunctionComponent} from "react";
import {useStore} from "../../stores/helpers/use-store";
import {observer} from "mobx-react-lite";

const Footer: FunctionComponent = () => {
    const {data: { imagesStore }, views: { imagesViewStore }} = useStore();

    return (<div className='footer'>
                <button
                    disabled={!imagesStore.isFetched}
                    className='refresh-button'
                    onClick={() => imagesViewStore.refreshImages()}>
                    Refresh
                </button>
            </div>)
};

export default observer(Footer);
