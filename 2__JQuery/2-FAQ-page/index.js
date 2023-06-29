// $(".panel div").click(function() {
//   // When a <div> element inside an element with class "panel" is clicked, this function is executed

//   var answerDiv = $(this).next(".answer");
//   // Find the next sibling element with class "answer" after the clicked <div> element
//   // $(this) refers to the specific <div> element that was clicked

//   answerDiv.slideToggle("fast");
//   // Toggle the visibility of the answerDiv element with a sliding animation
//   // The "fast" argument specifies the speed of the animation
// });


$(".question").click(function() {
  $(this).next().fadeToggle("fast");
  $(this).children().toggleClass("collapse");
})

/*

1. Create a custom animation for the accordion dropdown using the animate() method
2. Add a fourth question to the FAQ Page
3. Replace one of the answers with an image or GIF that will be revealed when the question is clicked. 
  Need help finding a GIF? Check out http://giphy.com/

*/