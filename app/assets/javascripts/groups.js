function addMemberBtn(id, name){
  member =
    "<div class=chat-group-user id=chat-group-member-"+ id +">"     +
      "<input type='hidden' name='group[user_ids][]' value= " + id + ">" +
      "<p class=chat-group-user__name>"                            +
        name                                                       +
      "</p>"                                                       +
      "<a class=user-search-remove id=user-search-remove-"+ id +">" +
        "削除"                                                      +
      "</a>"                                                       +
    "</div>"
  return member;
}

function addListBtn(id, name){
  list =
    "<div class=chat-group-user id=chat-group-user-"+ id +">" +
      "<p class=chat-group-user__name>"                      +
        name                                                 +
      "</p>"                                                 +
      "<a class=user-search-add id=user-search-add-"+ id +">" +
        '追加'                                                +
      "</a>"                                                 +
    "</div>"
  return list;
};

$(function(){

  $(document).on("turbolinks:load", function(){
    $("#group-users").on("keyup", function(e){
      e.preventDefault();
      var input = $("#group-users").val();
      var params = { name: input };
      $.ajax({
        url: "/groups/new.json",
        type: "GET",
        data: params,
        dataType: "json"
      })
        .done(function(datas){
          var word = "^"+input;
          var reg = RegExp(word);
          var preWord;
          if(word!=preWord && input.length!==0){
            $.each(datas, function(i, data){
              $("#chat-group-user-" + data.id).remove();
              if(data.name.match(reg)){
                $("#user-search-result").append(addListBtn(data.id, data.name));
                $("#user-search-add-"+data.id).on("click", function(e){
                  e.preventDefault();
                  var input = $("#chat-group-user-"+data.id).find(".chat-group-user__name").text();
                  $("#chat-group-users").append(addMemberBtn(data.id, input));
                  $("#chat-group-user-"+data.id).remove();
                  $("#user-search-remove-"+data.id).on("click", function(e){
                      e.preventDefault();
                      $("#chat-group-member-"+data.id).remove();
                  })
                });
              }
            })
          }
          preWord = word;
        })
        .fail(function(datas){
          alert("エラーが発生しました。");
        })
    });
  })
});
