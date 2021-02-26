import ImagesViewStore from "./images-view/images-view-store";
import RootStore from "../root-store";

class ViewsStore {
    public imagesViewStore;

    constructor(rootStore: RootStore) {
        this.imagesViewStore = new ImagesViewStore(rootStore);
    }
}

export default ViewsStore;
