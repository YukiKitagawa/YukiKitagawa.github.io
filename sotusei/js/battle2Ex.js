$(function(){
  console.log('call');

  var count1p = 6;
  var count2p = 6;

  var Num1p = 0;
  var Num2p = 0;

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


  $('#btn').on('click',function(){
    $('#attack1p li').css('color', '#000');
    $('#attack2p li').css('color', '#000');
    console.log(Num1p);
    $('#waza1p li:eq(6)').hide();
    $('#waza1p li').eq(Num1p).show();
    $('#skill1p li').eq(Num1p).show().animate({
      'marginLeft': '500px'
    },{easing:"easeInBack",duration:800,complete:
    function(){
      $('#skill1p li').eq(Num1p).hide().animate({
        'marginLeft': '0px'
      });
      $('#waza1p li').eq(Num1p).hide(function(){
        if(Num1p < Num2p){
          $('#life1p li').hide();
          count1p = count1p - Num2p;
          $('#life1p li').eq(count1p).show().appendTo('#life1p');
          console.log(count1p);

          if(count1p < 1){
          $('#p1 img').fadeOut();
          $('#life1p li').hide();
          $('#p1Life0').show();
          $('#waza1p li').eq(8).show();
          $('#waza2p li').eq(7).show();
         }
        }

      });
    }});




    console.log(Num2p);
    $('#waza2p li:eq(6)').hide();
    $('#waza2p li').eq(Num2p).show();
    $('#skill2p li').eq(Num2p).show().animate({
      'marginLeft': '-500px'
    },{easing:"easeInBack",duration:800,complete:
    function(){
      $('#skill2p li').eq(Num2p).hide();
      $('#skill2p li').eq(Num2p).animate({
        'marginLeft': '0px'
      });
      $('#bakuhatu').show();
      $('#waza2p li').eq(Num2p).hide(function(){

        $('#bakuhatu').hide();

        if(Num1p > Num2p){
          $('#life2p li').hide();
          count2p = count2p - Num1p;
          $('#life2p li').eq(count2p).show().appendTo('#life2p');
          console.log(count2p);

          if(count2p < 1){
            $('#p2 img').fadeOut();
            $('#life2p li').hide();
            $('#p2Life0').show();
            $('#waza1p li').eq(7).show();
            $('#waza2p li').eq(8).show();
         }
        }
      });
    }});
  });

});
