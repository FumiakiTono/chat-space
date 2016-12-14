// function addHtml(data){
//   if(data.image!=null){
//     message =
//           "<div class = 'message-written'>"           +
//             "<div class = 'message-user'>"            +
//               data.name                               +
//             "</div>"                                  +
//             "<div class = 'message-time'>"            +
//               data.created_at                         +
//             "</div>"                                  +
//             "<div class = 'message-text'>"            +
//               data.body                               +
//               "<br>"                                  +
//               "<img src =" + data.image + ">"  +
//             "</div>"                          +
//           "</div>"
//     return message;
//   }else{
//     message =
//           "<div class = 'message-written'>"           +
//             "<div class = 'message-user'>"            +
//               data.name                               +
//             "</div>"                                  +
//             "<div class = 'message-time'>"            +
//               data.created_at                         +
//             "</div>"                                  +
//             "<div class = 'message-text'>"            +
//               data.body                               +
//             "</div>"                          +
//           "</div>"
//     return message;
//   }
// };

// function update(){
//   console.log('update');
//   url = document.location.pathname
//   $.ajax({
//     url: url,
//     type: "GET",
//     dataType: "json"
//   })
//     .done(function(data){
//       $(".message-written").remove();
//       for (var i=0; i < data.length; i++){
//         $(".chat__message--written").append(addHtml(data[i]));
//       }
//     });
// }

// $(function(){

//   $(document).on("turbolinks:load", function(){
//     var timer = setInterval(update, 5000);
//   })

//   $(document).on("turbolinks:load", function(){
//     $("#new_message").on("submit", function(e){
//       e.preventDefault();
//       var form = $("#new_message").get(0);
//       var formData = new FormData(form);
//       requestUrl = document.location.pathname;
//       $.ajax({
//         url: requestUrl,
//         type: "POST",
//         dataType: "json",
//         data: formData,
//         processData: false,
//         contentType: false
//       })
//         .done(function(data){
//           $(".chat__message--written").append(addHtml(data));
//           $("#message_body").val(" ");
//         })
//         .fail(function(data){
//           alert("エラーが発生しました。")
//         });
//         return false;
//     });
//   })
// });
