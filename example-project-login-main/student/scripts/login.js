//login.js
//목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
//1. 비회원(비활성화)
//2. 각 탭 제목 클릭 시
//3. 기존회원 클릭 -> 기존회원 내용 보이기/비회원 내용숨기기
//4. 비회원 클릭 -> 기존회원 내용 숨기기/비회원 내용숨기기
const loginTabTitle = document.querySelectorAll('#login-frm .title button');
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul');

console.log(loginTabTitle, loginTabContent);
loginTabContent[1].classList.add('display-hide'); //초기 숨기기

//비회원 주문 조회 클릭 시(초기 모습과 반대되는 상황 먼저 테스트)
loginTabTitle[1].addEventListener('click',()=>{loginTabFunc(1);})
loginTabTitle[0].addEventListener('click',()=>{loginTabFunc(0);})

//반복 함수 별도 생성(g함수 안에 달라지는 건 매개변수로 미리 지정)
function loginTabFunc(index){
    //0숨기기. 1(보이기) == x
    //0,1(모두 숨기기), 1(보이기) == o
    loginTabContent[0].classList.add('display-hide');
    loginTabContent[1].classList.add('display-hide'); //모두 숨기기
    loginTabContent[index].classList.remove('display-hide'); //클릭대상과 일치하는 대상만 보이기
    loginTabTitle[0].classList.remove('active'); //모두 비활성화
    loginTabTitle[1].classList.remove('active'); //모두 비활성화
    return loginTabTitle[index].classList.add('active'); //클릭한 대상만 활성화
    //return;
}
//목표2) 기존회원- 아이디를 입력안하고 기존회원로그인 버튼 클릭 시 '아이디를 입력하세요' 경고창 출력
//변수 -> 이벤트 -> 함수(필요 시)
const memberLoginBtn = document.querySelector('#member-login'); //회원로그인 버튼
const memberId = document.querySelector('#user-id'); //회원 로그인 입력창
const memberPw =document.querySelector('#user-pw'); // 회원 비밀번호 입력창

const nonMemberBtn = document.querySelector('#non-member-login'); //비회원 주문조회 버튼
const nonMemberName = document.querySelector('#non-user-id'); //비회원 이름
const nonMemberNum = document.querySelector('#non-user-order'); //비회원 주문번호
const nonMemberPw = document.querySelector('#non-user-pw'); //비회원 비밀번호

console.log(memberId, memberLoginBtn);

// memberLoginBtn.addEventListener('click',()=>{inputAlert(idInput,'아이디')})
// memberLoginBtn.addEventListener('click',()=>{inputAlert(pwInput,'비밀번호')})
// nonMemberBtn.addEventListener('click',()=>{inputAlert()})

memberLoginBtn.addEventListener('click',()=>{
    inputAlert(memberId,'아이디'); //아이디 검사 함수 호출
    inputAlert(memberPw,'비밀번호'); //비밀번호 검사 함수 호출
})

nonMemberBtn.addEventListener('click',()=>{
    inputAlert(nonMemberName,'주문자명');
    inputAlert(nonMemberNum,'주문번호');
    inputAlert(nonMemberPw,'주문 비밀번호');
})

function inputAlert(dom, str){
    if(dom.value==''){alert(`${str}를(을) 입력하세요.`);}
}