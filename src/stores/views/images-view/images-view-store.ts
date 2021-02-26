import {action, makeObservable, observable, when} from "mobx";
import RootStore from "../../root-store";
import ImagesStore, {Image} from "../../data/images/images-store";

export const NUMBER_OF_IMAGES_TO_SHOW = 5;

export enum ViewMode {
    Horizontal,
    Vertical
};

class ImagesViewStore {
    @observable.shallow viewImages: Image[] = [];
    @observable viewMode: ViewMode = ViewMode.Horizontal;

    private readonly imagesStore: ImagesStore;

    constructor(rootStore: RootStore) {
        makeObservable(this);
        this.imagesStore = rootStore.data.imagesStore;

        when(
            () => {
                return this.imagesStore.isFetched;
            },
            () => {
                this.refreshImages();
            }
        );
    }

    @action refreshImages() {
        const {images} = this.imagesStore;

        if (images.length <= NUMBER_OF_IMAGES_TO_SHOW) {
            this.viewImages = [...images];
            return;
        }

        this.viewImages = this.getRandomUniqImages(images);
    }

    @action setViewMode(viewMode: ViewMode): void {
        this.viewMode = viewMode;
    }

    private getRandomUniqImages(images: Image[]): Image[] {
        const randomImages = new Set<Image>();

        while (randomImages.size < NUMBER_OF_IMAGES_TO_SHOW) {
            const randomImageIndex = Math.floor(Math.random() * (images.length - 1));
            randomImages.add(images[randomImageIndex]);
        }

        return Array.from(randomImages);
    }
}

export default ImagesViewStore;
