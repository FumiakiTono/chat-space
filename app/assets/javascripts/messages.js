function addHtml(data){
  if(data.image!=null){
    message =
          "<div class = 'message-written'>"           +
            "<div class = 'message-user'>"            +
              data.name                               +
            "</div>"                                  +
            "<div class = 'message-time'>"            +
              data.created_at                         +
            "</div>"                                  +
            "<div class = 'message-text'>"            +
              data.body                               +
              "<br>"                                  +
              "<img src =" + data.image + ">"  +
            "</div>"                          +
          "</div>"
    return message;
  }else{
    message =
          "<div class = 'message-written'>"           +
            "<div class = 'message-user'>"            +
              data.name                               +
            "</div>"                                  +
            "<div class = 'message-time'>"            +
              data.created_at                         +
            "</div>"                                  +
            "<div class = 'message-text'>"            +
              data.body                               +
            "</div>"                          +
          "</div>"
    return message;
  }
};

function update(){
  console.log('update');
  $.ajax({
  url: "/messages.json",
  type: "GET",
  dataType: "json"
  })
    .done(function(data){
      console.log(data);
      for (var i=0; i < data.length; i++){
        $(".chat-message--written").remove();
        $(".chat__message--written").append(addHtml(data[i]));
      }
    });
}


$(function(){

  var timer = setInterval(update, 10000);

  $(".message-form").on("submit", function(e){
    e.preventDefault();
    var form = $(".message-form").get(0);
    var formData = new FormData(form);
    $.ajax({
      url: "./messages.json",
      type: "POST",
      dataType: "json",
      data: formData,
      processData: false,
      contentType: false
    })
      .done(function(data){
        console.log(data);
        console.log(data.image);
        $(".chat__message--written").append(addHtml(data));
        $(".message-type").val(" ");
      })
      .fail(function(data){
        alert("エラーが発生しました。")
      });
      return false;
  });
});
