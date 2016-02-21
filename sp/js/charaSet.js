$(function(){
  console.log('DOMが呼ばれたよ');

  var count = 0;
  var player = 0;
  var life = 6;
  var rand = 0;

  var x = 0;
  var y = 0;
  var z = 0;



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
  $('#rool').on('click',function(){


    console.log('aaaa');





    $('#rool').hide();
    $('#dice li').hide();

    $('#dice li').eq(6).show();
    rand = Math.floor( Math.random() * 6 ) ;
    console.log(rand);
  });

  window.addEventListener('devicemotion', shakeDevice);

  function shakeDevice(evt){
    x = evt.acceleration.x;
    y = evt.acceleration.y;
    z = evt.acceleration.z;

    // $('#speed p').text('加速度X: ' + x);



    if(Math.abs(x) > 10 || Math.abs(y) > 10 || Math.abs(z) > 10){
      // $('#speed p').text('振ったよ');
      $('#dice li').eq(6).hide();
      $('#canvas').show();



      //------------------------------------------------
      //ステージ

        var stageEL = document.querySelector('#canvas');
        var stage = new createjs.Stage(stageEL);


        //フレーム
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener('tick', function(){
          stage.update();
        });

        var spriteData = {
          images: ['img/saikoro.png'],
          frames: {width: 870, height: 872}
        };
        var spriteSheet = new createjs.SpriteSheet(spriteData);
        var roolSprite = new createjs.Sprite(spriteSheet, 0);
        roolSprite.set({x: 280, y: 0});
        roolSprite.set({scaleX: 0.5, scaleY: 0.5});
        stage.addChild(roolSprite);

      //------------------------------------------------





      // $('#dice li').eq(rand).fadeIn();
    }
  }

  $('#canvas').on('click',function(){
    $('#dice li').eq(rand).fadeIn();
    $('#canvas').hide();
  });


//PC側から値が帰ってきたら発動
$('#chara').on('click',function(){

    $('#rool').show();
    $('#dice li').hide();
});









});
