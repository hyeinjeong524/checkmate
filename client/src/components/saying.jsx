import "./saying.css"

function Saying(props) {
    //https://council.busan.go.kr/council/freeboard/52658
    const textItems=[
    "산다는것 그것은 치열한 전투이다. -로망로랑",
    "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라. -마크 트웨인",
    "Do not reinvent the wheel -Node.js & Express 세미나",
    "내 비장의 무기는 아직 손안에 있다.그것은 희망이다. -나폴레옹",
    "이 넘치는 돈을 어떻게 해결할지에 대해 논의를 해 봐야 해요. - 정상",    
    "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨",
    "휴학하고 스팍스만 하고 싶다 - 황인준",
    "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해. -찰리 채플린",
    "신은 용기있는자를 결코 버리지 않는다. -켄러",
    "진짜 문제는 사람들의 마음이다. 그것은 절대로 물리학이나 윤리학의 문제가 아니다. -아인슈타인",
    "피할수 없으면 즐겨라. -로버트 엘리엇",
    "Birth, Code, Die (회장의 스팍스 슬로건) - 오승빈",
    "자신감 있는 표정을 지으면 자신감이 생긴다 -찰스다윈",
    "피할수 없으면 즐겨라. -로버트 엘리엇",
    "문제점을 찾지 말고 해결책을 찾으라 – 헨리포드",
    "인생에서 원하는 것을 엇기 위한 첫번째 단계는 내가 무엇을 원하는지 결정하는 것이다 -벤스타인",
    "자신이 해야 할 일을 결정하는 사람은 세상에서 단 한 사람, 오직 나 자신뿐이다. -오손 웰스-",
    "작은 기회로 부터 종종 위대한 업적이 시작된다 -데모스테네스",
    "인생이란 학교에는 불행이란 과목이 없다. 모두 필수 과목이다. -알버트 슈바이처",
    "인생에 뜻을 세우는데 있어 늦은 때라곤 없다. -볼드윈",
    "자신을 내보여라. 그러면 재능이 드러날 것이다. – 발타사르 그라시안",
    "파티션 사용하면 여자친구 나눠서 공유할 수 있어. - 박지호",
    "행복한 삶을 살기위해 필요한 것은 거의 없다. -마르쿠스 아우렐리우스 안토니우스",
    "돈이란 바닷물과도 같다. 그것은 마시면 마실수록 목이 말라진다. -쇼펜하우어",
    "만약 우리가 할 수 있는 일을 모두 한다면 우리들은 우리자신에 깜짝 놀랄 것이다. -에디슨",
    "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다 – 생떽쥐베리",
    "아 이번 지원자들은 대체재가 많네 (리크루팅하며 회장이) - 황제욱",
    "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. -괴테",
    "네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다 – 간디",
    "1퍼센트의 가능성, 그것이 나의 길이다. -나폴레옹",
    "성공해서 만족하는 것은 아니다. 만족하고 있었기 때문에 성공한 것이다.-알랭"
]
    /* eslint-disable react/prop-types */
    const index = props.index;

    const loggedIn = props.loggedIn;

    let text = "";
    let sayingp = "";
    if (loggedIn){
        text = textItems[Number(index)-1];
        sayingp = <p className="login_saying">{text}</p>
    }else{
        text = "로그인 후 열람 가능합니다. 새 유저라면 새 아이디와 비밀번호를 입력해 가입해주세요."
        sayingp = <p className="logout_saying">{text}</p>
    }
  

    return <div className="saying">
        <h2 className="saying-title">
            오늘의 명언
        </h2>
        {sayingp}
    </div>;
}

export default Saying