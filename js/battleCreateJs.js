$(function(){
  console.log('callCJS');
  var count1p = 6;
  var count2p = 6;

  var Num1p = 0;
  var Num2p = 0;

  var queue;
//htmlの読み込みが完了したら実行される
$(function(){
  var manifest = [


    {src: 'img/skill/panch2.png', type: 'image', id: 'pc2'},
  ];


  queue = new createjs.LoadQueue(false);
  queue.loadManifest(manifest, true);
//素材の読み込みが完了したら実行する
  queue.addEventListener('complete', createStage);
});


function createStage(){
  console.log('aaaa');
  //ステージ
  var stageEL = document.querySelector('#canvas');
  var stage = new createjs.Stage(stageEL);


//フレーム
  createjs.Ticker.setFPS(30);
  createjs.Ticker.addEventListener('tick', function(){
    stage.update();
  });


  //技

  var pc2 = new createjs.Bitmap('img/skill/panch2.png');
  pc2.x = 150;
  pc2.y = 100;
  pc2.alpha = 0;
  stage.addChild(pc2);


  var fire = new createjs.Bitmap('img/skill/fire.png');
  fire.x = 150;
  fire.y = 100;
  fire.alpha = 0;
  stage.addChild(fire);

  var darkBeem = new createjs.Bitmap('img/skill/darkbeem.png');
  darkBeem.x = 150;
  darkBeem.y = 100;
  darkBeem.alpha = 0;
  stage.addChild(darkBeem);

  var pc = new createjs.Bitmap('img/skill/panchEx.png');
  pc.x = 960;
  pc.y = 100;
  pc.alpha = 0;
  stage.addChild(pc);





    document.querySelector('#btn').addEventListener('click', function  (evt) {
  		//アニメーション
      if(Num1p == 0 || Num1p == 1){
    		createjs.Tween.get(pc2).to({alpha: 1}, 10)
                               .to({x: 550}, 500,createjs.Ease.bounceOut)
                               .to({alpha: 0},200)
                               .to({x: 150}, 10)
      }

      if(Num1p == 2 || Num1p == 3){
        createjs.Tween.get(fire).to({alpha: 1}, 10)
                               .to({x: 550}, 500,createjs.Ease.bounceOut)
                               .to({alpha: 0},200)
                               .to({x: 150}, 10)
      }

      if(Num1p == 4 || Num1p == 5){
        createjs.Tween.get(darkBeem).to({alpha: 1}, 10)
                               .to({x: 550}, 500,createjs.Ease.bounceOut)
                               .to({alpha: 0},200)
                               .to({x: 150}, 10)
      }





      createjs.Tween.get(pc).to({alpha: 1}, 10)
                            .to({x: 650}, 500,createjs.Ease.bounceOut)
                            .to({alpha: 0},200)
                            .to({x: 960}, 10)
                            .call(battle)
                            .call(dmage)

    });






  };



//-------------------------------------------------
//初期値関係

  $('#life1p li').hide();
  $('#life1p li').eq(count1p).fadeIn();
  $('#life2p li').hide();
  $('#life2p li').eq(count2p).fadeIn();

//-------------------------------------------------
//数値保存
  $('#attack1p li:eq(0)').on('click',function(){
    Num1p= 0;
    $('#attack1p li:eq(0)').css('color', '#F00');
    $('#waza1p li:eq(6)').show();
  });
  $('#attack1p li:eq(1)').on('click',function(){
    Num1p = 1;
    $('#attack1p li:eq(1)').css('color', '#F00');
    $('#waza1p li:eq(6)').show();
  });
  $('#attack1p li:eq(2)').on('click',function(){
    Num1p = 2;
    $('#attack1p li:eq(2)').css('color', '#F00');
    $('#waza1p li:eq(6)').show();
  });
  $('#attack1p li:eq(3)').on('click',function(){
    Num1p = 3;
    $('#attack1p li:eq(3)').css('color', '#F00');
    $('#waza1p li:eq(6)').show();
  });
  $('#attack1p li:eq(4)').on('click',function(){
    Num1p = 4;
    $('#attack1p li:eq(4)').css('color', '#F00');
    $('#waza1p li:eq(6)').show();
  });
  $('#attack1p li:eq(5)').on('click',function(){
    Num1p = 5;
    $('#attack1p li:eq(5)').css('color', '#F00');
    $('#waza1p li:eq(6)').show();
  });



  $('#attack2p li:eq(0)').on('click',function(){
    Num2p= 0;
    $('#attack2p li:eq(0)').css('color', '#F00');
    $('#waza2p li:eq(6)').show();
  });
  $('#attack2p li:eq(1)').on('click',function(){
    Num2p = 1;
    $('#attack2p li:eq(1)').css('color', '#F00');
    $('#waza2p li:eq(6)').show();
  });
  $('#attack2p li:eq(2)').on('click',function(){
    Num2p = 2;
    $('#attack2p li:eq(2)').css('color', '#F00');
    $('#waza2p li:eq(6)').show();
  });
  $('#attack2p li:eq(3)').on('click',function(){
    Num2p = 3;
    $('#attack2p li:eq(3)').css('color', '#F00');
    $('#waza2p li:eq(6)').show();
  });
  $('#attack2p li:eq(4)').on('click',function(){
    Num2p = 4;
    $('#attack2p li:eq(4)').css('color', '#F00');
    $('#waza2p li:eq(6)').show();
  });
  $('#attack2p li:eq(5)').on('click',function(){
    Num2p = 5;
    $('#attack2p li:eq(5)').css('color', '#F00');
    $('#waza2p li:eq(6)').show();
  });


//------------------------------------------------------
//バトル制御
  function battle(){
    $('#waza1p li:eq(6)').hide();
    $('#waza2p li:eq(6)').hide();
    if(Num1p < Num2p){
      $('#life1p li').hide();
      count1p = count1p - Num2p;
      $('#life1p li').eq(count1p).show().appendTo('#life1p');
      console.log(count1p);
    };

    if(count1p < 1){
      $('#p1 img').fadeOut();
      $('#life1p li').hide();
      $('#p1Life0').show();
      $('#waza1p li').eq(8).show();
      $('#waza2p li').eq(7).show();
   };

    if(Num1p > Num2p){
      $('#life2p li').hide();
      count2p = count2p - Num1p;
      $('#life2p li').eq(count2p).show().appendTo('#life2p');
      console.log(count2p);
    };
    if(count2p < 1){
      $('#p2 img').fadeOut();
      $('#life2p li').hide();
      $('#p2Life0').show();
      $('#waza1p li').eq(7).show();
      $('#waza2p li').eq(8).show();
    };
  };

  function dmage(){
    console.log('buruburu');
    if(Num1p < Num2p){
      $('#p1 img').jrumble({
        x: 5,
        y: 2,
        rotation: 1
      });
      $('#p1 img').trigger('startRumble');
   }

     if(Num1p > Num2p){
       $('#p2 img').jrumble({
           x: 5,
           y: 2,
           rotation: 1
       });
        $('#p2 img').trigger('startRumble');
    }

    


  };


});
