$(function(){
  console.log('DOM殿読み込み申した');

  $('#btn').on('click',function(){
    //ajaxでロード
    $.ajax({
      url:'mydata.json',
      type:'GET',
      dataType:'json'
    }).done(function(data){
      //成功
      console.log(data);
      showCondent(data);
    }).fail(function(){
      //失敗
      console.log('ajax ERROR');
    });




  });

//表示させる関数
  function showCondent(data){

    // $('#container').append(data);

    for(var cnt = 0; cnt < data.length; cnt++){
      $('#container li').eq(cnt).text(data[cnt].name);
    }

  }
});
