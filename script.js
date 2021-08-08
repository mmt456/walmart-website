// variables
var guideCount = 0;
var SOSCount = 0;
var mapCount = 0;
var clickCount = 0;

// get elements' IDs
var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

// event listeners on all the buttons below
restart.addEventListener("click", restartQuiz);

q1a1.addEventListener("click", guideCounter);
q1a2.addEventListener("click", SOSCounter);
q1a3.addEventListener("click", mapCounter);

q2a1.addEventListener("click", guideCounter);
q2a2.addEventListener("click", SOSCounter);
q2a3.addEventListener("click", mapCounter);

q3a1.addEventListener("click", guideCounter);
q3a2.addEventListener("click", SOSCounter);
q3a3.addEventListener("click", mapCounter);

q4a1.addEventListener("click", guideCounter);
q4a2.addEventListener("click", SOSCounter);
q4a3.addEventListener("click", mapCounter);

// incerment nation functions below
function guideCounter() {
  guideCount += 1;
  clickCount += 1;
  console.log("airCount = " + guideCount);

  if (clickCount >= 4) {
    UpdateResult();
  }
}

function SOSCounter() {
  SOSCount += 1;
  clickCount += 1;

  if (clickCount >= 4) {
    UpdateResult();
  }
}

function mapCounter() {
  mapCount += 1;
  clickCount += 1;

  if (clickCount >= 4) {
    UpdateResult();
  }
}


// show result
function UpdateResult() {
  if (guideCount>= 2) {
    result.innerHTML = "Your desires most match: Project Be My Guide";
  } else if (SOSCount >= 2) {
    result.innerHTML = "Your desires most match: Project SOS - Save our Shelves";
  } else if (mapCount >= 2) {
    result.innerHTML = "Your desires most match: Project Map My Walmart Trip";
  }
}

function restartQuiz() {
  clickCount = 0;
  guideCount = 0;
  SOSCount = 0;
  mapCount = 0;
  enableQuestions();
  result.innerHTML = "Your result: ";
}

// disable questions

q1a1.addEventListener("click", disable1);
q1a2.addEventListener("click", disable1);
q1a3.addEventListener("click", disable1);

q2a1.addEventListener("click", disable2);
q2a2.addEventListener("click", disable2);
q2a3.addEventListener("click", disable2);


q3a1.addEventListener("click", disable3);
q3a2.addEventListener("click", disable3);
q3a3.addEventListener("click", disable3);

q4a1.addEventListener("click", disable4);
q4a2.addEventListener("click", disable4);
q4a3.addEventListener("click", disable4);


function disable1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
}

function disable2() {
  q2a1.disabled = true;
  q2a2.disabled = true; 
  q2a3.disabled = true;
}

function disable3() { 
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
}

function disable4() {
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
}

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;

  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;

  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;

  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false; 
}
