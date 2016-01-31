$(function(){
  console.log('DOM殿読み込み申した');

  $('#btn').on('click',function(){
    //ajaxでロード
    $.ajax({
      url:'omikuji.html',
      type:'GET',
      dataType:'html'
    }).done(function(data){
      console.log(data);
    }).fail(function(){
      console.log('ajax ERROR');
    });




  });
});
