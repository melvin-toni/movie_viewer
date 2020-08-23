const main = () => {
    
    const btnNavGenre = document.querySelectorAll(".genre-nav-chose");
    const movieListElement = document.querySelector("#movieList");

    const onButtonNavClicked = (genreId) => {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.dataMovies(genreId);
    };

    const renderResult = (results) => {
        movieListElement.innerHTML = "";
        results.forEach((movie) => {
            const poster = movie.poster_path;
            const title = movie.title;
            const overview = movie.overview;
            const release_date = movie.release_date;

            const movieElement = document.createElement('div');
            movieElement.setAttribute('class', 'card mb-3 col-md-3 mr-1');

            movieElement.innerHTML = 
                `<div class="row no-gutters">\n` +
                    `<div class="col-md-4">\n` +
                        `<img src="https://image.tmdb.org/t/p/w500_and_h282_face/${poster}" class="card-img" alt="${title}">\n` +
                    `</div>\n` +
                    `<div class="col-md-8">\n` +
                        `<div class="card-body">\n` +
                            `<h5 class="card-title">${title}</h5>\n` +
                            `<p class="card-text">${overview}</p>\n` +
                            `<p class="card-text"><small class="text-muted">${release_date}</small></p>\n` +
                        `</div>\n` +
                    `</div>\n` +
                `</div>\n`;
            movieListElement.appendChild(movieElement);
        })
    };

    const fallbackResult = (message) => {
        movieListElement.innerHTML = "";
        movieListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    btnNavGenre[0].addEventListener("click", onButtonNavClicked(28));
    for (let i=0; i<btnNavGenre.length; i++) {
        btnNavGenre[i].addEventListener("click", () => {
            let genreId = 28;
            if (i === 1) { genreId = 12 }
            
            btnNavGenre[i].addEventListener("click", onButtonNavClicked(genreId));
        });
    }
};

document.addEventListener("DOMContentLoaded", main);