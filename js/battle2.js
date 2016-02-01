$(function(){
  console.log('call');

  var count1p = 6;
  var count2p = 6;

  var Num1p = 0;
  var Num2p = 0;

  var posX = 0;
  var start = 0;

  console.log(start);

  $('#life1p li').hide();
  $('#life1p li').eq(count1p).fadeIn();
  $('#life2p li').hide();
  $('#life2p li').eq(count2p).fadeIn();

//-------------------------------------------------
//数値保存
  $('#attack1p li:eq(0)').on('click',function(){
    Num1p= 0;
  });
  $('#attack1p li:eq(0)').on('click',function(){
    Num1p = 1;
  });


  console.log(count1p);


  $('#btn').on('click',function(){

    console.log('kidou');

    start = 1;
    if(start == 1){
      //-------------------------------------------------
      //1P

      $('#attack1p li').eq(Num1p).on('click',function(){
        $('#waza1p li:eq(0)').show();
        $('#skill1p li:eq(0)').show().animate({
          'marginLeft': '500px'
        },1000,
        function(){
          $('#skill1p li:eq(0)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza1p li:eq(0)').hide();
        });
      });


      $('#attack1p li:eq(0)').on('click',function(){
        $('#waza1p li:eq(0)').show();
        $('#skill1p li:eq(0)').show().animate({
          'marginLeft': '500px'
        },1000,
        function(){
          $('#skill1p li:eq(0)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza1p li:eq(0)').hide();
        });
      });

      $('#attack1p li:eq(1)').on('click',function(){
        $('#waza1p li:eq(1)').show();
        $('#skill1p li:eq(1)').show().animate({
          'marginLeft': '500px'
        },1000,
        function(){
          $('#skill1p li:eq(1)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza1p li:eq(1)').hide();
        });
      });

      $('#attack1p li:eq(2)').on('click',function(){
        $('#waza1p li:eq(2)').show();
        $('#skill1p li:eq(2)').show().animate({
          'marginLeft': '500px'
        },1000,
        function(){
          $('#skill1p li:eq(2)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza1p li:eq(2)').hide();
        });
      });

      $('#attack1p li:eq(3)').on('click',function(){
        $('#waza1p li:eq(3)').show();
        $('#skill1p li:eq(3)').show().animate({
          'marginLeft': '500px'
        },1000,
        function(){
          $('#skill1p li:eq(3)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza1p li:eq(3)').hide();
        });
      });

      $('#attack1p li:eq(4)').on('click',function(){
        $('#waza1p li:eq(4)').show();
        $('#skill1p li:eq(4)').show().animate({
          'marginLeft': '500px'
        },1000,
        function(){
          $('#skill1p li:eq(4)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza1p li:eq(4)').hide();
        });
      });

      $('#attack1p li:eq(5)').on('click',function(){
        $('#waza1p li:eq(5)').show();
        $('#skill1p li:eq(5)').show().animate({
          'marginLeft': '500px'
        },1000,
        function(){
          $('#skill1p li:eq(5)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza1p li:eq(5)').hide();
        });
      });

      //-------------------------------------------------
      //ダメージ判定

      $('#dmage1p').on('click',function(){

        $('#life1p li').eq(count1p).hide();
        $('#life1p li').eq(count1p-1).show();
        count1p--;
        console.log(count1p);

        if(count1p < 1){
        $('#p1 img').fadeOut();
       }
      });

      //-------------------------------------------------
      //2P

      $('#attack2p li:eq(0)').on('click',function(){
        $('#waza2p li:eq(0)').show();
        $('#skill2p li:eq(0)').show().animate({
          'marginLeft': '-510px'
        },1000,
        function(){
          $('#skill2p li:eq(0)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza2p li:eq(0)').hide();
        });
      });

      $('#attack2p li:eq(1)').on('click',function(){
        $('#waza2p li:eq(1)').show();
        $('#skill2p li:eq(1)').show().animate({
          'marginLeft': '-510px'
        },1000,
        function(){
          $('#skill2p li:eq(1)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza2p li:eq(1)').hide();
        });
      });

      $('#attack2p li:eq(2)').on('click',function(){
        $('#waza2p li:eq(2)').show();
        $('#skill2p li:eq(2)').show().animate({
          'marginLeft': '-510px'
        },1000,
        function(){
          $('#skill2p li:eq(2)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza2p li:eq(2)').hide();
        });
      });

      $('#attack2p li:eq(3)').on('click',function(){
        $('#waza2p li:eq(3)').show();
        $('#skill2p li:eq(3)').show().animate({
          'marginLeft': '-510px'
        },1000,
        function(){
          $('#skill2p li:eq(3)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza2p li:eq(3)').hide();
        });
      });

      $('#attack2p li:eq(4)').on('click',function(){
        $('#waza2p li:eq(4)').show();
        $('#skill2p li:eq(4)').show().animate({
          'marginLeft': '-510px'
        },1000,
        function(){
          $('#skill2p li:eq(4)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza2p li:eq(4)').hide();
        });
      });

      $('#attack2p li:eq(5)').on('click',function(){
        $('#waza2p li:eq(5)').show();
        $('#skill2p li:eq(5)').show().animate({
          'marginLeft': '-510px'
        },1000,
        function(){
          $('#skill2p li:eq(5)').hide().animate({
            'marginLeft': '0px'
          });
          $('#waza2p li:eq(5)').hide();
        });
      });



      //-------------------------------------------------
      //ダメージ判定


      $('#dmage2p').on('click',function(){
        $('#life2p li').eq(count2p).hide();
        $('#life2p li').eq(count2p-1).show();
        count2p--;
        console.log(count2p);

        if(count2p < 1){
         $('#p2 img').fadeOut();
        }
      });
    }
  });

});
