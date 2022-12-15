if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service_worker.js')
      .then(function () {
        console.log('서비스 워커가 등록됨!');
      })
  }
$(function(){
  $(".gnb_btn").click(function(){
    $(".gnb ul").slideToggle();
  });
});