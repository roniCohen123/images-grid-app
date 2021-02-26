import * as faker from 'faker';
import ImagesService from "../../../services/images-service";
import ImagesViewStore, {NUMBER_OF_IMAGES_TO_SHOW} from "./images-view-store";
import RootStore from "../../root-store";
import ImagesStore, {Image} from "../../data/images/images-store";

describe('images-store', () => {
	let imagesViewStore: ImagesViewStore, images: Image[], imagesStore: ImagesStore;

	beforeEach(() => {
        images = Array(10).fill(1).map(() => {
            return {
                url: faker.random.word(),
                likes: faker.random.number(),
                description: faker.random.word()
            }
        });

        const rootStore = new RootStore();
        imagesStore = rootStore.data.imagesStore;

		imagesViewStore = new ImagesViewStore(rootStore);
	});

    describe('viewImages', () => {
        it('should be empty array when images not fetched yet', async () => {
            expect(imagesViewStore.viewImages).toEqual([]);
        });

        it('should set view images to all images when images length is less than 5', async () => {
            const imagesLength = faker.random.number({min: 0, max: NUMBER_OF_IMAGES_TO_SHOW - 1});
            const partialImages = images.slice(0, imagesLength);

            jest.spyOn(ImagesService, 'getImages').mockReturnValue(Promise.resolve(partialImages));

            await imagesStore.fetch();

            expect(imagesViewStore.viewImages).toEqual(partialImages);
        });

        it('should return 5 random different images', async () => {
            jest.spyOn(ImagesService, 'getImages').mockReturnValue(Promise.resolve(images));

            await imagesStore.fetch();

            const uniqUrls = new Set(imagesViewStore.viewImages);
            expect(uniqUrls.size).toEqual(NUMBER_OF_IMAGES_TO_SHOW);

            imagesViewStore.viewImages.every(viewImage => imagesStore.images.includes(viewImage));
        });
    });
});
