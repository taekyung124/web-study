// $(function(){

//   // 리뷰 모달 열고 닫기 기능
//   var myModal = $("#reviewModal");

//     function openModal(){
//       myModal.addClass("is-active").fadeIn(100);
//     }

//     function closeModal(){
//       myModal.removeClass("is-active").fadeOut(100);
//     }

//     //영화 DB - ajax
//     $.ajax({
//       url:"https://api.themoviedb.org/3/movie/popular?api_key=10923b261ba94d897ac6b81148314a3f&page=1",
//       data:{"key":"value"},
//       type:"GET",
//       success:function(json){
//         console.log(json);
//         let movie_list = json.results;


//       },
//       error: function(err){

//       }
//     });
// });