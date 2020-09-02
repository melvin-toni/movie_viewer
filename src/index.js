import DataSource from './script/data/data-source.js';
import './script/component/app-bar.js';
import './script/component/movie-list.js';
import './script/component/pagination-bar.js';
import './style/main.css';

const main = () => {
    const btnNavGenre = document.querySelectorAll(".genre-nav-chose");
    const btnNavPage = document.querySelectorAll(".page-nav-chose");
    const movieListElement = document.querySelector("movie-list");
    const cacheKey = "GENRE";
    const defaultGenre = 28;

    const onButtonNavClicked = (genreId, pageNo=1) => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        setSessionStorage(genreId);
        dataSource.dataMovies(genreId, pageNo);
    };

    const renderResult = (results) => {
        movieListElement.movies = results;
    };

    const fallbackResult = (message) => {
        movieListElement.renderError(message);
    };

    const setSessionStorage = (genreId=defaultGenre) => {
        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem(cacheKey, genreId);
        } else {
            alert("Browser tidak mendukung Web Storage")
        }
    }

    const getSessionStorage = () => {
        if (sessionStorage.getItem(cacheKey) === "undefined") {
            setSessionStorage(genreId);
        }
        return sessionStorage.getItem(cacheKey);
    }

    btnNavGenre[0].addEventListener("click", onButtonNavClicked(28));

    for (let i=0; i<btnNavGenre.length; i++) {
        btnNavGenre[i].addEventListener("click", () => {
            let genreId = 28;
            if (i === 1) { genreId = 12 }
            
            btnNavGenre[i].addEventListener("click", onButtonNavClicked(genreId));
        });
    }

    for (let i=0; i<btnNavPage.length; i++) {
        btnNavPage[i].addEventListener("click", () => {
            let genreId = getSessionStorage();
            
            btnNavPage[i].addEventListener("click", onButtonNavClicked(genreId, i+1));
        });
    }
};

document.addEventListener("DOMContentLoaded", main);