import DataStore from "./data/data-store";
import ViewsStore from "./views/views-store";


class RootStore {
    data: DataStore = new DataStore();
    views: ViewsStore = new ViewsStore(this);
}

export default RootStore;
