$(function(){
  //タッチイベント
  $('#ball').on('touchstart',function(){
    $('#touchResult').eq(0).text('touchstartしたよ');
  });

  $('#ball').on('touchmove',function(){
    $('#touchResult').eq(1).text('touchmoveしたよ');
  });

  $('#ball').on('touchend',function(){
    $('#touchResult').eq(2).text('touchendしたよ');
  });
});
