import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

class ServiceApi {
    //  WAREHOUSE
    getDataWarehouse() {
        return axios.get(API_URL + '/api/WarehouseReps');
    }
    getDataWarehouseById(id) {
        return axios.get(API_URL + `/api/WarehouseReps/${id}`);
    }
    // END WAREHOUSE
}

export default new ServiceApi();
