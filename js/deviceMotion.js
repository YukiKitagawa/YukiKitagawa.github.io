$(function(){

  //加速度のイベント
  // window.addEventListener('devicemotion', shakeDevice);
  //
  // function shakeDevice(evt){
  //   var x = evt.acceleration.x;
  //   var y = evt.acceleration.y;
  //   var z = evt.acceleration.z;
  //
  //   $('#device li').eq(0).text('加速度X: ' + x);
  //   $('#device li').eq(1).text('加速度Y: ' + y);
  //   $('#device li').eq(2).text('加速度Z: ' + z);
  //
  //
  //   if(Math.abs(x) > 5 || Math.abs(y) > 5 || Math.abs(z) > 5){
  //     $('#result').text('振ったよ');
  //   }
  // }

  //傾き
  window.addEventListener('deviceorientation', roteDevice);

  function roteDevice(evt){
      var x = evt.beta;
      var y = evt.gamma;
      var z = evt.alpha;

        $('#device li').eq(0).text('傾きX: ' + x);
        $('#device li').eq(1).text('傾きY: ' + y);
        $('#device li').eq(2).text('傾きZ: ' + z);
  }

});
