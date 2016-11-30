$(function(){
  function addMember_btn(i,name){
    member =
      "<div class=chat-group-user id=chat-group-member-"+ i +">"     +
        "<p class=chat-group-user__name>"                            +
          name                                                       +
        "</p>"                                                       +
        "<a class=user-search-remove id=user-search-remove-"+ i +">" +
          "削除"                                                      +
        "</a>"                                                       +
      "</div>"
    return member;
  }

  function addList_btn(i,name){
    list =
      "<div class=chat-group-user id=chat-group-user-"+ i +">" +
        "<p class=chat-group-user__name>"                      +
          name                                                 +
        "</p>"                                                 +
        "<a class=user-search-add id=user-search-add-"+ i +">" +
          '追加'                                                +
        "</a>"                                                 +
      "</div>"
    return list;
  };

  $("#group_user_ids").on("keyup", function(e){
    e.preventDefault();
    var input = $("#group_user_ids").val();
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
        $(".chat-group-user").remove();
        if(word!=preWord && input.length!==0){
          $.each(datas, function(i, data){
            if(data.match(reg)){
              $("#user-search-result").append(addList_btn(i, data));
              $("#user-search-add-"+i).on("click", function(e){
                e.preventDefault();
                var input = $("#chat-group-user-"+i).find(".chat-group-user__name").text();
                $("#chat-group-users").append(addMember_btn(i, input));
                $("#chat-group-user-"+i).remove();
                $("#user-search-remove-"+i).on("click", function(e){
                    e.preventDefault();
                    $("#chat-group-member-"+i).remove();
                })
              });
            }
          })
        }
        preWord = word;
      })
      .fail(function(data){
        alert("エラーが発生しました。");
      })
  });
});
