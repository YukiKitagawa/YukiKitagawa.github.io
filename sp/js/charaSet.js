$(function(){
  console.log('DOMが呼ばれたよ');

  var count = 0;
  var player = 0;
  var life = 6;
  var rand = 0;


  $('#battle').hide();
  $('#player li').hide();

  if(player == 0){
    $('#player li:first').fadeIn();
  };

  if(player == 1){
    $('#player li:last').fadeIn();
  };





//----------------------------------------------------------------
//キャラ選択画面
  $('#charaSet li').hide();
  $('#charaSet li:first').appendTo('#charaSet').fadeIn();

  $('#charaName li').hide();
  $('#charaName li:first').appendTo('#charaName').fadeIn();

  //----------------------------------------------------------------
  //バトル画面ーキャラ表示


  $('#chara li').hide();
  $('#chara li:first').appendTo('#chara').fadeIn();

  $('#name li').hide();
  $('#name li:first').appendTo('#name').fadeIn();

  //----------------------------------------------------------------
  //キャラ選択ー移動


  $('#right').on('click',function(){
     console.log(count);
     count++;
     if(count > 5){
       count = 0;
     }

     $('#charaSet li').eq(0).hide().appendTo('#charaSet').fadeIn();
     $('#charaName li').eq(0).hide().appendTo('#charaName').fadeIn();
     $('#chara li').eq(0).hide().appendTo('#chara').fadeIn();
     $('#name li').eq(0).hide().appendTo('#name').fadeIn();
   });


   $('#left').on('click',function(){
      console.log(count);
      count--;
      if(count < 0){
        count = 5;
      }
      $('#charaSet li').eq(4).show();
      $('#charaSet li').eq(5).fadeOut(function(){
        $('#charaSet li').eq(5).prependTo('#charaSet');
        $('#charaSet li').eq(0).show();
      });

      $('#charaName li').eq(4).show();
      $('#charaName li').eq(5).fadeOut(function(){
        $('#charaName li').eq(5).prependTo('#charaName');
        $('#charaName li').eq(0).show();
      });

      $('#chara li').eq(4).show();
      $('#chara li').eq(5).fadeOut(function(){
        $('#chara li').eq(5).prependTo('#chara');
        $('#chara li').eq(0).show();
      });

      $('#name li').eq(4).show();
      $('#name li').eq(5).fadeOut(function(){
        $('#name li').eq(5).prependTo('#name');
        $('#name li').eq(0).show();
      });




    });

//----------------------------------------------------------------
//選ぶボタン


  $('#select').on('click',function(){
      $('#charaSelect').hide();
      $('#battle').show();
      $('#heart li').hide();
      $('#dice li').hide();
      $('#heart li').eq(life).appendTo('#heart').fadeIn();

      console.log(count);

  });




  //----------------------------------------------------------------
  //サイコロ画面


  //加速度のイベント
  window.addEventListener('devicemotion', shakeDevice);

  function shakeDevice(evt){
    var x = evt.acceleration.x;
    var y = evt.acceleration.y;
    var z = evt.acceleration.z;

    $('#device li').eq(0).text('加速度X: ' + x);
    $('#device li').eq(1).text('加速度Y: ' + y);
    $('#device li').eq(2).text('加速度Z: ' + z);


    if(Math.abs(x) > 5 || Math.abs(y) > 5 || Math.abs(z) > 5){
      $('#dice li').eq(rand).show();
    }






  $('#rool').on('click',function(){
    $('#rool').hide();
    rand = Math.floor( Math.random() * 6 ) ;
    console.log(rand);

    rand = 0;


  });

$('#chara').on('click',function(){
    $('#rool').show();
    $('#dice li').hide();
});









});