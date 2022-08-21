let prince = App.loadSpritesheet('prince.png', 64, 96, {
    left: [8,9,10,11],
    up: [0,1],
    down: [2,3],
    right: [4,5,6,7],
},8);

// App 실행 시에 최초로 호출되는 이벤트 (유저 진입 전)
// Normal App과 Sidebar App은 Script 적용 후 맵이 실행될 때 호출 [ Enter ]
App.onInit.Add(function(){
});

// 모든 플레이어를 이 이벤트를 통해 App에 진입시킴 [ Enter ]
// 이후 플레이어가 입장 할 때마다 호출 [ Events ]
App.onJoinPlayer.Add(function(player) {
    let widget = null;
    // App.showCenterLabel(`${player.name}님이 입장하셨습니다.`)
    player.sprite = prince;
    player.sendUpdated();
    player.spawnAt(30,57,2);

    widget = player.showWidget("navigatorWidget.html","top",1,1);

    widget.onMessage.Add(function(player, msg) {
        if(msg) {
            // App.sayToAll(`${msg.longitude}, ${msg.latitude}`);
            player.spawnAt(msg.longitude, msg.latitude, 2);
        }
    });

});

// 플레이어 모두 진입 시 최초로 시작되는 이벤트 [ Enter ]
App.onStart.Add(function(){
});

// 20ms 마다 호출되는 이벤트
// dt: deltatime(전 프레임이 완료되기까지 걸린 시간) [ Update ]
App.onUpdate.Add(function(dt){
    // App.showCenterLabel(`${dt}`);
    /*
    navigator.geolocation.getCurrentPosition(function(position) {
        App.showCenterLabel(`위도: ${position.coords.longitude} 경도: ${position.coords.altitude}`)
    })
    */
});

// 이벤트 콜백 처리 후 다시 onUpdate

// App 종료 시 모든 플레이어를 App에서 나가게 함 [ Exit ]
App.onLeavePlayer.Add(function(player){
});

// App 종료 시 마지막으로 호출 [ Exit ]
// Normal App과 Sidebar App은 별도의 종료
App.onDestroy.Add(function(){
});