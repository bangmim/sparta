// // 스프라이트시트 가져오기
// // spartan 변수에 담기
// // let spartan = App.loadSpritesheet('spartan.png',64,96,{
// //     left:[0,1,2,3], 
// //     up:[0],
// //     down:[0],
// //     right:[0,1,2,3],
// // },8);    //1초에 8장으로 한다

// // 채팅조작
// App.onSay.Add(function(player,text){

//     if(text == "speed up"){
//         player.moveSpeed=400;
//     }
//     if(text=="speed down"){
//         player.moveSpeed=30;
//     }
//     player.sendUpdated();

//     let message = player.name + "님이 "+ text + "(이)라고 말했습니다."
//     // App.showCenterLabel(text);   //모든 문자
//     App.showCenterLabel(message);
// })

// // 미리 선언해둔 함수 호출
// App.onJoinPlayer.Add(function(player){  //player가 참여했을 때 실행할 함수
//     // App.showCenterLabel("Hello Sparta") //중앙에 라벨 띄우기


//     // let mbtis=["ENFP","ESTJ","ISTJ","INTP"]

//     // // 0~3사이 정수
//     // let nth = Math.floor(Math.random()*mbtis.length);

//     // // 스피드 조작
//     // player.moveSpeed = 300;
//     // // player.title = "스파르타인";
//     // player.title=mbtis[nth];

//     // player.sprite = spartan;
    
//     player.sendUpdated();       //업데이트
// })

let cloud = App.loadSpritesheet("cloud.png",659,400,[0],6) //가로, 세로, 애니메이션, time

App.onJoinPlayer.Add(function(){
    // 화면에 구름 생성
    Map.putObject(5,5,cloud);    //x좌표, y좌표

    // 애니메이션
    Map.moveObject(5,5,100,5,34); //x좌표 5, y좌표  5인 object를 x좌표 100, y좌표 5로 34초동안 움직여라
})