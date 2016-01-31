$(function(){
  console.log('DOM殿読み込み申した');

  $('#btn').on('click',function(){
    //ajaxでロード
    $.ajax({
      url:'omikuji.html',
      type:'GET',
      dataType:'html'
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
    $('#container').append(data);
  }
});
