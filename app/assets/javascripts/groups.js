$(function(){
  function addHtml(name){
    member =
      "<p class = 'chat-group-user__name'>"   +
        name                             +
      "</p>"
    return member;
  }
  $("#group_user_ids").on("keyup", function(e){
    e.preventDefault();
    $.ajax({
      url: "/groups/new.json",
      type: "GET",
      dataType: "json",
      processData: false,
      contentType: false
    })
      .done(function(data){
        input = $("#group_user_ids").val();
        for(var i = 0; i< data.length; i = i+1 ){
          name = data[i].name
          if(name == input){
            $("#chat-group-users").append(addHtml(data[i].name));
            return false;
          }
        }
      })
      .fail(function(data){
        alert("エラーが発生しました。");
      });
    return false;
  });
});
