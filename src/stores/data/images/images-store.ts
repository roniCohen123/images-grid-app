import {action, makeObservable, observable} from "mobx";
import ImagesService from "../../../services/images-service";

export class Image {
    url: string;
    likes: number;
    description: string;
}


class ImagesStore {
    @observable.shallow images: Image[] = [];
    @observable isFetched: boolean = false;

    constructor() {
        makeObservable(this);
    }

    @action async fetch(): Promise<void> {
        this.images = await ImagesService.getImages();
        this.isFetched = true;
    }
}

export default ImagesStore;
