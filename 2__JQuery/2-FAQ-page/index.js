/* Challenges:
  [x] 1. Create a custom animation for the accordion dropdown using the animate() method
  [x] 2. Add a fourth question to the FAQ Page
  [x] 3. Replace one of the answers with an image or GIF that will be revealed when the question is clicked. 
    Need help finding a GIF? Check out http://giphy.com/
*/

// When a element with class "question" is clicked, this function is executed
$(".question").click(function () {

  $(this).next().fadeToggle("fast"); // Add animates the opacity of the matched elements
  $(this).children().toggleClass("collapse"); // Toggle the child element by adding or removing the class ("collapse")
})

$(".question").click(function () {
  $(this).css('transition', 'background-color 1.5s ease');
  $(this).css('background-color', '#e8fbf8');
  $(this).animate({ opacity: 0.6 }, 1000);
});
