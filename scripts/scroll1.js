//scroll1.js
//window 객체를 활용한 scroll 이벤트 !-!
//스크롤 이동 시 인식하는 이벤트 종류(멈출 땐 인식안함)
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const topCTA = document.querySelector('#top');
const aside = document.querySelectorAll('aside a');
const section = document.querySelectorAll('section');
console.log(aside, section);
console.log(topCTA);





window.addEventListener('scroll', ()=>{
    // 스크롤 위치에 따라 section(4)이 화면 중앙보다 더 위로 올라오면 
    // 각 섹션(4)의 제목 aside(4) 색상 active로 활성화 하기
    for(let s of section){
        //console.log(s); //for~of가 순회하는 대상 테스트
        const sTop = s.getBoundingClientRect().top;
        //console.log(sTop); //각 섹션 top 위치값 테스트

        //화면 상단(0) 기준
        //섹션의 윗(top) 부분이 화면 위에서 150px 지점보다 길거나 더 위로 올라와 있다면 조건문 실행
        if(sTop <= 150){
            //console.log('조건 실행 테스트');
            //console.log(s);
            for(let a of aside){
                //console.log(a); //테스트
                a.classList.remove('active');
                if(s.id == a.dataset.target){ a.classList.add('active'); }
            }//aside-a 반복 종료 위치
        }
    }//for~of 종료 위치



    //console.log('스크롤 중...');

    // nav.textContent = window.scrollY+'px';
    //디자인에 따라 스크롤 출력 값에 소수점이 나올 경우 -> 계산이 쉽도록 정수로 변환하기
    let scrollVal = Math.round(window.scrollY); //Math.round란? 소수점을 반올림 하는 함수
    nav.textContent = scrollVal+'px';

    //스크롤 위치에 따라 CTA 보이기 / 숨기기
    if(window.scrollY >= 400){
        topCTA.classList.add('active');
    }else{topCTA.classList.remove('active');}

    if(window.scrollY >= 150){
        header.classList.add('active');
    }else{header.classList.remove('active');}
})// 스크롤 이벤트 종료위치

topCTA.addEventListener('click',()=>{
    //window.scrollTo(0,0); //x y 순서대로 값 입력하기
    window.scrollTo({
        left:0,
        top:0,
        behavior :'smooth' //부드러운 이동이 필요할때
    })
})



window.addEventListener('resize', ()=>{
    console.log('크기조절 중');
})// 크기조절 이벤트 종료위치

