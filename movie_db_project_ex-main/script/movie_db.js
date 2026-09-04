// 영회 DB
//어벤져스, 스파이더맨, 오디세이, 토이스토리5, 악마는 프라다를 입는다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤일메리, 폭풍의언덕
const moviesDB = [
{
    id: 1,
    title: '어벤져스',
    date: '2026.12.18',
    poster: 'poster/poster_avengersdoomsday.jpg',
    director: '앤서니 루소, 조 루소',
    genre: ['액션', 'SF', '모험'],
    rating: 4.8,
    cast: ['로버트 다우니 주니어', '베네딕트 컴버배치', '톰 홀랜드', '크리스 프랫'],
    summary: '닥터 둠의 등장으로 다중 우주(멀티버스)의 존립이 위협받게 되면서, 지구와 우주의 모든 슈퍼히어로들이 총집결하여 사상 최대의 전쟁을 벌이는 이야기.'
},
{
    id: 2,
    title: '스파이더맨',
    date: '2026.07.24',
    poster: 'poster/poster_spidermanbrandnewday.jpg',
    director: '데스틴 대니얼 크레턴',
    genre: ['액션', 'SF', '모험'],
    rating: 4.6,
    cast: ['톰 홀랜드', '젠데이아', '제이콥 바탈론'],
    summary: '모든 기억을 잃은 채 홀로서기를 시작한 피터 파커가 새로운 위협에 맞서며 진정한 영웅으로 성장해 나가는 액션 블록버스터.'
},
{
    id: 3,
    title: '오디세이',
    date: '2026.05.15',
    poster: 'poster/poster_theodyssey.jpg',
    director: '크리스토퍼 놀란',
    genre: ['서사', '드라마', '모험'],
    rating: 4.7,
    cast: ['맷 데이먼', '크리스찬 베일', '킬리언 머피'],
    summary: '트로이 전쟁이 끝난 후, 고향 이타카로 돌아가기 위해 10년 동안 고난과 괴물, 신들의 방해를 이겨내며 항해하는 오디세우스의 장대한 서사시.'
},
{
    id: 4,
    title: '토이스토리5',
    date: '2026.06.19',
    poster: 'poster/poster_toystory5.jpg',
    director: '앤드류 스탠튼',
    genre: ['애니메이션', '모험', '코미디'],
    rating: 4.5,
    cast: ['톰 행크스', '팀 알렌', '조안 쿠삭'],
    summary: '스마트 기기 및 전자 장난감의 시대에 밀려난 우디, 버즈, 그리고 기존 장난감들이 아이들의 진짜 관심과 온기를 찾기 위해 펼치는 새로운 모험.'
},
{
    id: 5,
    title: '악마는 프라다를 입는다2',
    date: '2026.09.11',
    poster: 'poster/poster_thedevilwearsprada2.jpg',
    director: '데이비드 프랭클',
    genre: ['드라마', '코미디'],
    rating: 4.3,
    cast: ['메릴 스트립', '앤 해서웨이', '에밀리 블런트'],
    summary: '변화하는 디지털 미디어 시대 속에서 커리어의 정상에 선 미란다 프리스트리와 사업가로 성장한 에밀리가 맞닥뜨리는 패션계의 치열한 사투.'
},
{
    id: 6,
    title: '마이클',
    date: '2025.04.18',
    poster: 'poster/poster_michael.jpg',
    director: '안톤 후쿠아',
    genre: ['전기', '음악', '드라마'],
    rating: 4.9,
    cast: ['자파잭슨', '콜먼 도밍고', '니아 롱'],
    summary: '팝의 황제 마이클 잭슨의 삶과 음악, 그리고 그의 압도적인 무대 뒤 숨겨진 인간적인 번뇌와 연대기를 그린 전기 영화.'
},
{
    id: 7,
    title: '슈퍼마리오갤럭시',
    date: '2026.04.03',
    poster: 'poster/poster_thesupermariogalaxymovie.jpg',
    director: '아론 호바스, 마이클 제레닉',
    genre: ['애니메이션', '모험', 'SF'],
    rating: 4.6,
    cast: ['크리스 프랫', '안야 테일러 조이', '잭 블랙', '찰리 데이'],
    summary: '버섯 왕국을 넘어 우주 전체로 무대를 넓힌 마리오와 피치 공주가 별들의 평화를 위협하는 쿠파의 광활한 야망에 맞서는 스페이스 어드벤처.'
},
{
    id: 8,
    title: '프로젝트 헤일메리',
    date: '2026.03.20',
    poster: 'poster/poster_projecthailmary.jpg',
    director: '필 로드, 크리스토퍼 밀러',
    genre: ['SF', '드라마', '스릴러'],
    rating: 4.8,
    cast: ['라이언 고슬링', '산드라 휠러'],
    summary: '인류를 멸망시킬 태양 냉각 위기를 해결하기 위해 홀로 우주선 헤일메리호에 탑승해 외계 생명체와 협력하며 생존을 건 임무를 수행하는 과학교사의 이야기.'
},
{
    id: 9,
    title: '폭풍의언덕',
    date: '2026.11.13',
    poster: 'poster/poster_wutheringheights.jpg',
    director: '에메랄드 페넬',
    genre: ['로맨스', '드라마'],
    rating: 4.4,
    cast: ['마고 로비', '제이콥 엘로디'],
    summary: '황량한 요크셔 벌판을 배경으로 펼쳐지는 히스클리프와 캐서린의 지독하고 잔혹하면서도 강렬한 집착과 사랑 이야기.'
}
];
