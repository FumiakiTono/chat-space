$(function(){
  $(".message-form").on("submit", function(e){
    e.preventDefault();
    var form = $(".message-form").get(0);
    var formData = new FormData(form)
    function addHtml(data){
        message =
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
      return message;
    }
    $.ajax({
      url: "/messages.json",
      type: "POST",
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false
    })
      .done(function(data){
        $(".chat__message--written").append(addHtml(data));
        $(".message-type").val(" ");
      })
      .fail(function(data){
        alert("エラーが発生しました。")
      });
      return false;
  });
});
