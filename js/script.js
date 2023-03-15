'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          poster = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимым фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            creteMovieList(movieDB.movies, movieList);
        }

        e.target.reset();
    });


    const deleteAdv = (arr) => {
        //  reklamalarny udalit atmak ucin
        arr.forEach(item => {
        item.remove();  
        });
    };

    deleteAdv(adv);
    
    const makeChanges = () => {
        // text almashdyrmak ucin
        genre.textContent = 'Драма'; 
            
        // backgrounda suratyny almashdirmak ucin
        poster.style.backgroundImage = 'url("img/bg.jpg")'; 
    };

    makeChanges();

    const sortArr = (arr) => {
        // sortirowka atmak ucin
        arr.sort(); 
    };

    function creteMovieList(films, parent) {
        parent.innerHTML = ''; 
        sortArr(films);
        //kino atlaryny dobawit atmak ucin
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `; 
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                creteMovieList(films, parent);
            });
        });
    }

    creteMovieList(movieDB.movies, movieList);
});
