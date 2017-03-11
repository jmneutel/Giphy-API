# HW - 6 - Giphy-API

## Live Link
 - https://jmneutel.github.io/Giphy-API/

## Description on how to use the app
- Click one of the buttons to generate gifs related to that topic
- Click on a gif to watch it and click it again to pause it
- Add a button by typing in the name of a topic you would like to see
- Click your personalized button and watch new gifs.

## Requirements
- Create an array of strings, each one related to a topic that interests you.
- Your app should take the topics in this array and create buttons in your HTML.
- Try using a loop that appends a button for each string in the array.
- When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
- When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
- Under every gif, display its rating (PG, G, so on).
- This data is provided by the GIPHY API.
- Only once you get images displaying with button presses should you move on to the next step.
- Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

## Technologies Used

- Jquery for Dom Manipulation
- AJAX for API GET requests from Giphy API 
- Bootstrap 
- CSS
- HTML 
- Javascript
