$(function(){
  $(".message-form").on("submit", function(e){
    e.preventDefault();
    var form = $(".message-form").get(0);
    var formData = new FormData(form)
    $.ajax({
      url: "/messages.json",
      type: "POST",
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false
    })
      .done(function(data){
        var message =
          "<div class = 'message-written'>" +
            "<div class = 'message-user'>"  +
              data.name                     +
            "</div>"                        +
            "<div class = 'message-time'>"  +
              data.created_at               +
            "</div>"                        +
            "<div class = 'message-text'>"  +
              data.body                     +
            "</div>"                        +
          "</div>"
        $(".chat__message--written").append(message);
        $(".message-type").val(" ");
      })
      .fail(function(data){
        alert("メッセージが空欄のため保存されませんでした。")
      });
  });
});
