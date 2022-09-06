export function createMarkupGallery({ poster, name, description, id }) {
  return /*html*/ `<li class="gallery__item" data-id="${id}">
        <img
          class="movie__poster"
          src="${poster}"
          alt="movie poster"
        />
        <h2 class="movie__name">${name}</h2>
        <p class="movie__description">
          ${description}
        </p>
      </li>`;
}
