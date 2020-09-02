// import movies from './data-example.js';

class DataSource {
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }

    async dataMovies(genreId, pageNo) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c38429c006340de08bdfb0e748053b3e&sort_by=popularity.desc&page=${pageNo}&with_genres=${genreId}`);
            const responseJson = await response.json();
            this.onSuccess(responseJson.results);
        } catch (error) {
            console.log(error);
            this.onFailed(`Movie genre is not found`);
        }
    }
}

export default DataSource;