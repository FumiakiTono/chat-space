$(function(){
  function addMember(name){
    member =
      "<p class='chat-group-user__name'>"   +
        name                             +
      "</p>"
    return member;
  }
  $("#group_user_ids").on("keypress", function(e){
    e.preventDefault();
    if(e.which === 13){
      var params = { name: $("#group_user_ids").val() };
      $.ajax({
        url: "/groups/new.json",
        type: "GET",
        data: params,
        dataType: "json"
      })
        .done(function(data){
          $("#chat-group-users").append(addMember(data.name));
        })
        .fail(function(data){
          alert("エラーが発生しました。");
        });
      return false;
    }
  });
});
