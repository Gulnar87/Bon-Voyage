

// $(document).ready(function(){
//   $('#search').on("click",(function(e){
//   $(".form-group").addClass("sb-search-open");
//     e.stopPropagation()
//   }));
//    $(document).on("click", function(e) {
//     if ($(e.target).is("#search") === false && $(".form-control").val().length == 0) {
//       $(".form-group").removeClass("sb-search-open");
//     }
//   });
//     $(".form-control-submit").click(function(e){
//       $(".form-control").each(function(){
//         if($(".form-control").val().length == 0){
//           e.preventDefault();
//           $(this).css('border', '2px solid red');
//         }
//     })
//   })
// })



// $(function () { 

//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });

//   $("#navbarToggle").click(function (event) {
//     $(event.target).focus();
//   });
// });


// (function (global){

// })(window); 



// (function (global) {

// var ts = {};

// var homeHtml = "snippets/home-snippet.html";
// var quizHtml = "snippets/quiz-snippet.html";
// var quizJs ="js/app.js"

// // Convenience function for inserting innerHTML for 'select'
// var insertHtml = function (selector, html) {
//   var targetElem = document.querySelector(selector);
//   targetElem.innerHTML = html;
// };

// // Show loading icon inside element identified by 'selector'.
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };




var displayDate = function (){
var toDay, year, month, months,  day, days, dates, hour, minutes, prepand; 
 toDay = new Date();
 year = toDay.getFullYear();
month = toDay.getMonth();
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October' ,'November', 'December']; 
day = toDay.getDay();
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
dates = toDay.getDate();


 hour = toDay.getHours(); 
 minutes = toDay.getMinutes(); 
  prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  hour = (hour < 10)? '0' + hour : hour;
  minutes = (minutes < 10)? '0' + minutes : minutes;

 document.querySelector('#time').textContent =  hour + ': ' + minutes +  prepand ; 
 document.querySelector('#date').textContent =  dates + ' ' +  months[month] + ' ' + year + ', ' + days[day];


}; 

displayDate();

// On page load (before images or CSS)
// document.addEventListener("DOMContentLoaded", function (event) {

// // On first load, show home view
// showLoading("#main-content");
// $ajaxUtils.sendGetRequest(
//   homeHtml, 
//   function (responseText) {
//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//   },
//   false);
// });

// // Load quiz
// ts.quiz = function () {
//  showLoading("#main-content");
// $ajaxUtils.sendGetRequest(
//   quizHtml, 
//   function (responseText) {
//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//   },
//   false);
// };


// global.$ts = ts;


// })(window);









