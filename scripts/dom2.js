//dom2.js
const m_menu = document.querySelector('.m_menu nav');
const d_menu = document.querySelector('.d_menu');

console.log(m_menu, d_menu); //변수확인
const cloneMenu = m_menu.cloneNode(true); //cloneMenu라는 변수명으로 m_menu의 자식까지 전부 복사함
console.log(`복제대상확인 : ${cloneMenu}`);
console.log(cloneMenu);

d_menu.appendChild(cloneMenu); //d_menu에 자식을 생성한다(cloneMenu 변수안에 담긴 내용)