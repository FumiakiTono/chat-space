$(function(){
  $("#group_id").on("keyup", function(e){
    e.preventDefault();
    function addHtml(data){
      member =
        "<p class = 'chat-group-user__name'>" +
          data                                +
        "</p>"
      return member;
    }
    $.ajax()
      .done(function(){
        var input = $("#group_id").val();
        $("#chat-group-users").append(addHtml(input));
      })
      .fail(function(){
        alert("エラーが発生しました。");
      });
    return false;
  });
});
