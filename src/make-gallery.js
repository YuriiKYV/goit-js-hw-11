export default function createGallery(array) {
    const loadMoreBtn = document.querySelector('.load-more');
    if (!loadMoreBtn.classList.value === 'load-more is-hidden') {
        loadMoreBtn.classList.add('is-hidden');
    }
    function createCards() {
        return array.hits.reduce((acc, item) => acc + `<div class="photo-card">
                <a class="gallery-item" href="${item.largeImageURL}">
                    <img
                    class="photo-card__image"
                    src="${item.webformatURL}"
                    alt="${item.tags}"
                    width= '180px'
                    loading="lazy"
                    />
                </a>
                <div class="info">
                    <p class="info-item">
                        <b>Likes</b>
                        <b>${item.likes}</b>
                    </p>
                    <p class="info-item">
                        <b>Views</b>
                        <b>${item.views}</b>
                    </p>
                    <p class="info-item">
                        <b>Comments</b>
                        <b>${item.comments}</b>
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>
                        <b>${item.downloads}</b>
                    </p>
                </div>
            </div>`, '');

    }
    
    const list = createCards(array);
    const gallery = document.querySelector('.gallery');
    gallery.insertAdjacentHTML('beforeend', list);
    loadMoreBtn.classList.remove('is-hidden');
    
}





// new SimpleLightbox('.gallery a', {
//   captionDelay: 250,
//   captionsData: 'alt',
// });