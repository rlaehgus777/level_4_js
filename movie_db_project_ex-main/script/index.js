//index.js
//기존 태그 선택 querySelector()
//기존 태그 복제 cloneNode()
//새로운 태그 생성 createElement()
// 생성한 대상을 붙여넣기 appendChild()

const movieWrap1= document.querySelector('.movie_wrap1'); //선택 ul 대상
const movieWrap2 = document.querySelector('.movie_wrap2');

//Q. 어벤져스 DB 1개 li에 삽입하기
// const movieLi = document.createElement('li'); //li생성
// movieLi.textContent = '어벤져스';
// movieLi.textContent = moviesDB[0].title;
// movieLi.textContent += moviesDB[0].date; // += 복합대입(기존값에 더해서 대입)
// movieLi.textContent = moviesDB[0].date; // = 대입(기존값을 제거하고 대입(기본뜻))
// movieWrap1.appendChild(movieLi); //생성한 li 붙여넣기

//Q2. 영화 DB 1개~9개 모두 출력하기 
for(let i=0; i<9; i++){
    const movieLi = document.createElement('li');
    movieLi.innerHTML = `<h3>${moviesDB[i].title}</h3>`;
    movieLi.innerHTML += `<p>${moviesDB[i].date}</p>`;
    movieLi.innerHTML += `<a href="#"><img src="${moviesDB[i].poster}" alt=""}></img></a>`;
    movieWrap1.appendChild(movieLi);
}

for(let i=0; i<9; i++){
    console.log(i);
    const movieLi2 = document.createElement('li');
    movieLi2.innerHTML = `<h3>${animeDB[i].title}</h3>`;
    movieLi2.innerHTML += `<p>${animeDB[i].date}</p>`;
    movieLi2.innerHTML += `<a href ="#"><img src="${animeDB[i].poster}" alt=""></img></a>`;
    movieWrap2.appendChild(movieLi2);
}