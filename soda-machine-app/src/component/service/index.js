import axios from "axios";

class ProductService {

    baseUrl = 'http://localhost:8080/api/product';
    headers = {
        "Content-Type": "application/json"
    };

    listProduct = async () => {
        let url = this.baseUrl;
        return await axios.get(url, this.headers).then(response => {
            return {
                data: response.data,
                status: response.status
            }
        });
    }

    addProduct = async (data) => {
        let url = this.baseUrl + "/add";
        return axios.post(url, data, this.headers).then(response => {
            return {
                data: response.data,
                status: response.status
            }
        })
        
    }

    productDetail = async (id) => {
        let url = this.baseUrl +"/"+id;
        return await axios.get(url, this.headers).then(response => {
            return {
                data: response.data,
                status: response.status
            }
        });
        
    }

    updateProduct = async (id, data) => {
        let url = this.baseUrl + "/update/" + id;
        return axios.put(url, data, this.headers).then(response => {
            return {
                data: response.data,
                status: response.status
            }
        })
        
    }

    deleteProduct = (id) => {
        let url = this.baseUrl + "/delete/" +id;
        return axios.delete(url, this.headers).then(response => {
            return {
                data: response.data,
                status: response.status
            }
        })
        
    }

    searchProduct = async (keyword) => {
        let url = this.baseUrl + "/search?keyword="+keyword;
        return await axios.get(url, this.headers).then(response => {
            return {
                data: response.data,
                status: response.status
            }
        });
        
    }
}

export default new ProductService();