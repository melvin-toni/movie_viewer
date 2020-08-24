class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.setAttribute('class', 'card mb-3 col-md-5 mr-1');
        this.innerHTML = `
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="https://image.tmdb.org/t/p/w500_and_h282_face/${this._movie.poster_path}" class="card-img" alt="${this._movie.title} poster">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.title}</h5>
                        <p class="card-text">${this._movie.overview}</p>
                        <p class="card-text"><small class="text-muted">${this._movie.release_date}</small></p>
                    </div>
                </div>
            </div>`;
    }

}

customElements.define("movie-item", MovieItem);