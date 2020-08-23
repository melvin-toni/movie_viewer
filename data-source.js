class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    dataMovies(genreId) {
        const filteredMovies = movies.results.filter(movie => movie.genre_ids.includes(genreId));
        console.log('filteredMovies', filteredMovies);
        if (filteredMovies.length) {
            this.onSuccess(filteredMovies);
        } else {
            this.onFailed(`Movie genre is not found`);
        }
    }
}