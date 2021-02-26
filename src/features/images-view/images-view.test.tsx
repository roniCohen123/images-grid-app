import {render, RenderResult} from "@testing-library/react";
import ImagesView from "./images-view";
import RootStore from "../../stores/root-store";
import * as React from 'react';
import * as UseStore from "../../stores/helpers/use-store";
import ImagesService from "../../services/images-service";
import * as faker from "faker";
import {NUMBER_OF_IMAGES_TO_SHOW, ViewMode} from "../../stores/views/images-view/images-view-store";
import {Image} from "../../stores/data/images/images-store";

describe('images-view', () => {
    let component, rootStore: RootStore, images: Image[];

	beforeEach(async () => {
        rootStore = new RootStore();
        jest.spyOn(UseStore, 'useStore').mockReturnValue(rootStore);

        images = Array(10).fill(1).map(() => {
            return {
                url: faker.random.word(),
                likes: faker.random.number(),
                description: faker.random.word()
            }
        });
	});

    describe('render component', () => {
    	it('should render placeholder when images is fetching', async () => {
            component = render(<ImagesView />);

            expect(component.container.getElementsByClassName('image-placeholder')).toHaveLength(NUMBER_OF_IMAGES_TO_SHOW);
            expect(component.container.getElementsByClassName('image-container')).toHaveLength(0);
        });

        it('should render images when images was fetched', async () => {
            jest.spyOn(ImagesService, 'getImages').mockReturnValue(Promise.resolve(images));
            await rootStore.data.imagesStore.fetch();

            component = render(<ImagesView />);

            expect(component.container.getElementsByClassName('image-placeholder')).toHaveLength(0);
            expect(component.container.getElementsByClassName('image-container')).toHaveLength(NUMBER_OF_IMAGES_TO_SHOW);
        });

        it('should render correct view mode and update whenever changes', async () => {
            component = render(<ImagesView />);

            expect(component.container.getElementsByClassName('images-vertical')).toHaveLength(0);
            expect(component.container.getElementsByClassName('images-horizontal')).toHaveLength(1);

            rootStore.views.imagesViewStore.setViewMode(ViewMode.Vertical);

            expect(component.container.getElementsByClassName('images-vertical')).toHaveLength(1);
            expect(component.container.getElementsByClassName('images-horizontal')).toHaveLength(0);
        });
    });
});
