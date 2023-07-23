//TMDB

const API_KEY = 'api_key=01fa3dd7863f33542e727148e776bf72';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY;
const IMG_URL ='https://image.tmdb.org/t/p/w500'
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

function getMovies(url) {
  
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        
        showMovies(data.results);
            
       
    })

}

function showMovies(data){
    main.innerHTML = '';

    
    data.forEach(movie=> {
        const {title, poster_path} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML =`
             <img src="${IMG_URL+poster_path}" alt="${title}">
            
            <div class="movie-info">
                  <h3>${title}</h3>
         </div>
                    
        `
        main.appendChild(movieE1);
    })

}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }

})

const toggle = document.getElementById("toggle");
            const nav = document.getElementById("nav");
            
            toggle.addEventListener("click", () => nav.classList.toggle("active"));