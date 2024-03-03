let MatchScore = 0;

function score() {
  MatchScore++;
  document.getElementById("MatchScore").textContent = MatchScore;
}

function score2() {
  MatchScore--;
  if (MatchScore < 0) {
    alert("Eksi skor olamaz!!");
    MatchScore = 0;
  } else {
    document.getElementById("MatchScore").textContent = MatchScore;
  }
}
let MatchScoreSecond = 0;

function scoreThree() {
  MatchScoreSecond++;
  document.getElementById("MatchScoreSecond").innerHTML = MatchScoreSecond;
}
function scoreFour() {
  MatchScoreSecond--;
  if (MatchScoreSecond < 0) {
    alert("Eksi skor olamaz!!");
    MatchScoreSecond = 0;
  } else {
    document.getElementById("MatchScoreSecond").innerHTML = MatchScoreSecond;
  }
}
let teamA = "TAKIM A";
function SelectTeam() {
  teamA = prompt("TAKIM A ismi giriniz?");
  document.getElementById("teamA").textContent = teamA;
}

let teamB = "TAKIM B";
function SelectTeam2() {
  teamB = prompt("TAKIM B ismi giriniz?");
  document.getElementById("teamB").textContent = teamB;
}

function ResetA() {
  document.getElementById("MatchScoreSecond").textContent = MatchScoreSecond;
  if (MatchScoreSecond >= 0) {
    MatchScoreSecond = 0;
    document.getElementById("MatchScoreSecond").textContent = MatchScoreSecond;
  } else {
    document.getElementById("MatchScoreSecond").textContent = MatchScoreSecond;
  }
}

function ResetB() {
  document.getElementById("MatchScore").textContent = MatchScore;
  if (MatchScore >= 0) {
    MatchScore = 0;
    document.getElementById("MatchScore").textContent = MatchScore;
  } else {
    document.getElementById("MatchScore").textContent = MatchScore;
  }
}

function SetScore() {
  document.getElementById("MatchScore").textContent = MatchScore;
  MatchScore >= 0;
  MatchScore = prompt("Skor belirtiniz?");
  document.getElementById("MatchScore").textContent = MatchScore;

  if (isNaN(MatchScore)) {
    alert("Lütfen bir sayı giriniz?");
    MatchScore = 0;
    document.getElementById("MatchScore").textContent = MatchScore;
  } else {
    console.log("Girilen bir sayı:" + MatchScore);
  }
}

function SetScore2() {
  document.getElementById("MatchScoreSecond").textContent = MatchScoreSecond;
  MatchScoreSecond >= 0;
  MatchScoreSecond = prompt("Skor belirtiniz?");
  document.getElementById("MatchScoreSecond").textContent = MatchScoreSecond;

  if (isNaN(MatchScoreSecond)) {
    alert("Lütfen bir sayı giriniz?");
    MatchScoreSecond = 0;
    document.getElementById("MatchScoreSecond").textContent = MatchScoreSecond;
  } else {
    console.log("Girilen bir sayı:" + MatchScoreSecond);
  }
}
