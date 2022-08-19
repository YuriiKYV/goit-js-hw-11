import axios from "axios";

export default class CardsApi {
    constructor() {
        this.page = 1;
        this.searchQuery = '';
        this.pageNumbers = 0;
    }
    
    async fetchCards() {
        const API_KEY = '29344802-8006fe240f1770c5a3ce0db85';
        const BASE_URL = 'https://pixabay.com/api';

        const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`;
        const response = await axios.get(url);
        const data = await response.data;
        this.page += 1;
        return data;
    }
    resetPage() {
        this.page = 1
    }
}



