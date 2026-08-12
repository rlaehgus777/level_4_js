//index.js
// 1.변수
let itemPrice = 24600;
const titleBig = document.querySelector('h1');
const result1p = document.querySelector('.result1');
const result2p = document.querySelector('.result2');
let replaceData = itemPrice.toLocaleString('ko-kr');//데이터 종류 변경변수
// ---------------------------------------연습(웹은행 150만원 입금)
let webBank = 1500000;
let replaceBank = webBank.toLocaleString ('ko-kr');

// 출력 테스트 콘솔
console.log(itemPrice, titleBig, result1p, replaceData, result2p);

// 실행 결과
result1p.textContent = replaceData + '원';
result2p.textContent = replaceBank+ '원';

// ---------------------------------------------
//2.배열
const money = [24600, 32000, 19900];
const list1Li = document.querySelectorAll('.list1 > li');

list1Li[0].textContent = money[0].toLocaleString('ko-kr') + '원';
list1Li[1].textContent = money[1].toLocaleString('ko-kr') + '원';
list1Li[2].textContent = money[2].toLocaleString('ko-kr') + '원';
list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itemPriceOriginal[0].toLocaleString('ko-kr') +'원';

console.log(list1Li);
console.log(money[0].toLocaleString('ko-kr')); 
console.log(money[1].toLocaleString('ko-kr')); 
console.log(money[2].toLocaleString('ko-kr')); 
//-------------db연습
//변수생성
const studyDt = document.querySelectorAll('.study dt');
const studyDd = document.querySelectorAll('.study dd');
//배열
studyDt[0].textContent = itemName[0];
studyDd[0].textContent = itemPriceOriginal[0].toLocaleString('ko-kr')+'원';
studyDt[1].textContent = itemName[1];
studyDd[1].textContent = itemPriceOriginal[1].toLocaleString('ko-kr')+'원';
//검사
console.log(studyDt, studyDd);

//-----------------------배열정리
let dish = ['계란', '스테이크', '샐러드', '김치', '단무지', '쌀밥', '콩나물국']; //전체테스트
console.log(dish);
//계란, 콩나물국, 김치 출력
//스테이크 -> 연어로 변경
console.log(dish[0])
console.log(dish[6])
console.log(dish[3])
dish[1] = '연어';
console.log(dish[1]);

//----------------------------------------------
//3. 객체
const movie = { //객체변수 == 줄여서 객체
    name:'스파이더맨', //속성:값, 구조로 작성한다.
    price:12000,
}
console.log(movie.name); //객체.속성 출력
console.log(movie.price);
//-------------------------------------객체+cgv DB연결
const cgv = document.querySelector('.cgv');
const cgvPoster = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;
cgvAge.textContent = movieDb[0].age +'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent = movieDb[0].genre;

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate);

//------------------객체변수 연습
const dessertTray = {
    top:['파랑마카롱', '분홍마카롱', '초록마카롱', '노랑마카롱'],
    middle:['슈크림', '머핀', '에그타르트'],
    bottom:['방울토마토', '청포도', '오렌지'],
}
console.log(dessertTray);
console.log(dessertTray.top[3]);
console.log(dessertTray.middle[0]);
console.log(dessertTray.bottom[1]);
dessertTray.bottom[2] = '망고';
console.log(dessertTray.bottom[2]);

//-------------------------------------------------------증감연산자
let num = 1;

console.log(num); //1 (변수가 처음 대입된 값 테스트)

num++; //1증가
console.log(num); //2 (위 연산 후 실행 테스트)

num--; //1감소
console.log(num); //1

//-------------------------------------------------------증감연산자, 2개 변수 활용
let number1 = 10;
let number2;

console.log(number1, number2); //초기테스트

number2 = number1++;
//증감연산자를 변수 뒤에 붙이면 
//기존 변수값(number1)을 대입(=)을 만나 number2로 먼저 보내고
//++로 number1을 나중에 증가시킨다(후처리)

console.log(number1, number2);

