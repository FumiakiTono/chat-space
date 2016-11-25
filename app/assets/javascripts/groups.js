$(function(){
  $("#group_id").on("keyup", function(e){
    e.preventDefault();
    // var form = $("#group_id").get(0);
    // var formData = new FormData(form);
    function addHtml(data){
      member =
        "<p class = 'chat-group-user__name'>" +
          data                                +
        "</p>"
      return member;
    }
    $.ajax({
      // url: "/groups/new.json",
      // type: "POST",
      // dataType: "json",
      // data: formData,
      // processData: false,
      // contentType: false
    })
      .done(function(){
        var input = $("#group_id").val();
        $("#chat-group-users").append(addHtml(input));
        // $(".message-type").val(" ");
        // $("#chat-group-users").remove();
      });
      fail(function(){
        alert("エラーが発生しました。");
      });
    return false;
  });
});
