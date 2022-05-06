 const generateQuote = function () {
     const quotes = [{
             quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
             author: "Albus Dumbledore"
         },
         {
             quote: "It is impossible to manufacture or imitate love",
             author: "Horace Slughorn"
         },
         {
             quote: "Being different isn't a bad thing. I means that you are brave enough to be yourself.",
             author: "Luna Lovegood"
         },
         {
             quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
             author: "Sirius Black"
         },
         {
             quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
             author: "Arthur Weasley"
         },
         {
             quote: "Every human life is worth the same, and worth saving.",
             author: "Kingsley Shacklebolt"
         },
         {
             quote: "Have a biscuit, Potter.",
             author: "Minerva McGonagall"
         },
         {
             quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
             author: "Albus Dumbledore"
         },
         {
             quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
             author: "Dobby"
         }
     ];




     let arrayIndex = Math.floor(Math.random() * quotes.length);
     document.getElementById("quotes").innerHTML = '" ' + quotes[arrayIndex].quote + ' "';
     document.getElementById("author").innerHTML = "- " + quotes[arrayIndex].author;
 }

 // color

 const generateQuoteButton = document.getElementById("generate");

 generateQuoteButton.onclick = function changeBackground() {
     const red = Math.floor(Math.random() * 256);
     const green = Math.floor(Math.random() * 256);
     const blue = Math.floor(Math.random() * 256);

     let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
     document.body.style.background = bgColor;
     document.getElementById("quotes").style.color = bgColor;
     document.getElementById("author").style.color = bgColor;
     document.getElementById("generate").style.color = bgColor;
 }

 //  document.write("<center><font size=+3 style='color: green;'>");

 function times(val) {
     var day = new Date();
     var hr = day.getHours();
     if (hr >= 0 && hr < 12) {
         return val = "Good Morning!";
     } else if (hr == 12) {
         return val = "Good Noon!";
     } else if (hr >= 12 && hr <= 17) {
         return val = "Good Afternoon!";
     } else {
         return val = "Good Evening!";
     }
 }

 let a = times()
 console.log(a)
 document.getElementById("allTimes").innerHTML = a;
 



 window.onload = function () {
     generateQuote();
     document.getElementById("generate").addEventListener("click", generateQuote)
 }