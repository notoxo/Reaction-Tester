function getSelectedValue() {

    var selectedValue = document.getElementById("musicSelection").value;
    console.log(selectedValue);
    return selectedValue;

  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function starWarsStyle() {

    var list = document.getElementsByClassName("pr");

    for (var i = 0; i < list.length; i++) {
      list[i].style.color = "white";
    }

    document.getElementById("musicSelection").style.display = "none";
  }

  function musicSelector() {

    var value = getSelectedValue();

    if (value == "starWars") {

      var mus = document.getElementById("starWarsTheme");

      mus.play();

      document.getElementById("myVideo").style.display = "inline"

      starWarsStyle();

    } else if (value == "chef") {

      alert("cşeee");

    } else if (value == "gameOf") {

      var mus = document.getElementById("gotTheme");

      mus.play();

    }

  }

  document.getElementById("start").onclick = function () {

    zero = new Date();

    getSelectedValue();

    musicSelector();

    document.getElementById("start").style.display = "none";

  }

  // document.getElementById("mm").style.textAlign = "right";

  var rad = Math.random() <= 0.5 ? 0 : 100;

  var lf = Math.floor(Math.random() * 90);

  var tp = Math.floor(Math.random() * 300);

  // document.getElementById("zero").style.width = "100px";
  //  document.getElementById("zero").style.height = "100px";
  document.getElementById("obj").style.width = "100px";
  document.getElementById("obj").style.height = "100px";

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randomObjectAppear() {

    //  document.getElementById("zero").style.display = "none";

    var rad = Math.random() <= 0.5 ? 0 : 100;

    var lf = Math.floor(Math.random() * 90);

    var tp = Math.floor(Math.random() * 300);

    var wrandomnumber = Math.floor(Math.random() * (150 - 75 + 1)) + 75;

    document.getElementById("obj").style.width = wrandomnumber + "px";

    document.getElementById("obj").style.height = wrandomnumber + "px";

    document.getElementById("obj").style.borderRadius = rad + "%";

    document.getElementById("obj").style.backgroundColor = getRandomColor();

    document.getElementById("obj").style.left = lf + "%";

    document.getElementById("obj").style.top = tp + "px";

    document.getElementById("obj").style.display = "block";

    startTime = new Date();
  }

  async function clickTrigger() {


    randomObjectAppear();

    document.getElementById("obj").style.display = "none";

    var sleepTime = Math.random() * (2000 - 250) + 250;

    await sleep(sleepTime);

    randomObjectAppear();
  }

  var avg = 0;

  function calculateReactionTime() {

    endTime = new Date();

    var reactionTime = parseInt(endTime - startTime, 10);

    if (avg == 0) {

      avg = reactionTime;

    } else {

      avg = (reactionTime + avg) / 2;

    }

    realAverage = avg.toFixed(2);

    document.getElementById("reactionTime").innerHTML = reactionTime + " ms" + " average ms: " + realAverage;
  }

  /* document.getElementById("zero").style.borderRadius = rad + "%"; 

   
   document.getElementById("zero").style.backgroundColor = getRandomColor();

   document.getElementById("zero").style.left = lf + "%";

   document.getElementById("zero").style.top= tp + "px";

   document.getElementById("zero").onclick = function() {
     randomObjectAppear();
   }*/

  randomObjectAppear();

  document.getElementById("obj").onclick = function () {

    /*   randomObjectAppear();

       document.getElementById("obj").style.display = "none";

       randomObjectAppear();*/

    calculateReactionTime();

    clickTrigger();


  }