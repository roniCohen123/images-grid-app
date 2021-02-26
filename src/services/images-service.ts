import axios from "axios";
import {Image} from "../stores/data/images/images-store";

const API_KEY = 'api-key-c4dab223-25d0-49a2-9b48-491d759e7d3a';
const API_URL = 'https://api.jonathanczyzyk.com/api/v1/images/small';
const CONFIG = {
    headers: {
        'x-api-key': API_KEY
    }
};

class ImagesService {
    public static async getImages(): Promise<Image[]> {
        try {
            const response = await axios.get(API_URL, CONFIG);
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default ImagesService;
