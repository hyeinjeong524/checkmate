import "./saying.css"

function Saying() {
    const textItems=["산다는것 그것은 치열한 전투이다. -로망로랑",
    "내 비장의 무기는 아직 손안에 있다.그것은 희망이다. -나폴레옹",
    "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨",
    "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해. -찰리 채플린",
    "신은 용기있는자를 결코 버리지 않는다. -켄러",
    "피할수 없으면 즐겨라. -로버트 엘리엇",
    "Do not reinvent the wheel -Node.js & Express 세미나",
    "파티션 사용하면 여자친구 나눠서 공유할 수 있어. - 박지호",
    "벽도 나를 사랑하는 것 같아 - 정상, 벽에 기대며",    
    "휴학하고 스팍스만 하고 싶다 - 황인준",
    "Birth, Code, Die (회장의 스팍스 슬로건) - 오승빈",
    "자신감 있는 표정을 지으면 자신감이 생긴다 -찰스다윈",
    "아 이번 지원자들은 대체재가 많네 (리크루팅하며 회장이) - 황제욱"

]
    let index=Math.random()*textItems.length;
    let text = textItems[Math.floor(index)];

    return <div className="saying">
        <h2 className="saying-title">
            오늘의 명언
        </h2>
        <p className="saying-text">{text}</p>
    </div>;
}

export default Saying