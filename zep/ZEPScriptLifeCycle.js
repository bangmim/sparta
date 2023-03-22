// App이 최초로 시작될 때
App.OnInit.Add(function(){
    // 이 시점에 App에는 플레이어들이 참가하지 않은 상태
    // App의 나머지 필요한 부분을 초기화 시킨다.

})

// 플레이어가 들어올 때
App.onJoinPlayer.Add(function(player){
    // App에서 원하는 플레이어 속성값을 부여할 수 있다
})

// 플레이어가 떠날 때
App.onLeavePlayer.Add(function(player){
    // 플레이어가 단순히 중간에 나갔을 때
    // App이 종료될 때에서 이 이벤트를 통해 모두 App에서 퇴장한다.
})

// 매 20ms(0.02초) 마다 실행
App.onUpdate.Add(function(){

})

// App이 종료될 때
App.onDestroy.Add(function(){
    // 이미 모든 플레이어가 App에서 나간 상태
    // App을 나머지를 정리한다
})