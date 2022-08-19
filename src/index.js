import CardsApi from './api-gallery'
import createGallery from './make-gallery' 
import Notiflix from "notiflix";

const gallery = document.querySelector('.gallery');
const searchForm = document.querySelector('.search-form')
const buttonSubmit = document.querySelector('button[type="submit"]');
const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('input[name="searchQuery"]');
const cardsApi = new CardsApi();

loadMoreBtn.classList.add('is-hidden');

function clearMarkup() {
    gallery.innerHTML = ""
}

async function startSearch(e) {
    loadMoreBtn.classList.add('is-hidden');
    e.preventDefault();
    cardsApi.searchQuery = searchInput.value;
    cardsApi.resetPage();
    clearMarkup();
    
    cardsApi.fetchCards().then((data) => {
        cardsApi.pageNumbers = Math.ceil(data.totalHits / 40);
        createGallery(data);
        if (data.totalHits === 0) {
            Notiflix.Notify.warning("Sorry, there are no images matching your search query. Please try again.")
        }
        if (cardsApi.page >= cardsApi.pageNumbers) {
            loadMoreBtn.classList.add('is-hidden');
            return
        }
    }); 
}

searchForm.addEventListener('submit', startSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

function onLoadMore() {
    cardsApi.fetchCards().then((data) => {      
        createGallery(data);
        if (cardsApi.page > cardsApi.pageNumbers) {
            loadMoreBtn.classList.add('is-hidden');
            Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.")
            return
        }
    })
    loadMoreBtn.classList.add('is-hidden');
}
