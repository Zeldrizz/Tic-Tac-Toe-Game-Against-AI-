var box = document.querySelectorAll(".window__box");
var resultMessage = document.querySelector(".box__result");
var reloadBtn = document.querySelector(".box__btn");

var isXTurn = true;
var isXWins = false;
var isZeroWins = false;
var amount = 0;
var r = rand();

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", function(){
        if ((isXTurn == true) && (this.innerHTML == "")) {
            this.innerHTML = '<img class="image" src="./images/krestik.jpg" alt="">';
            isXTurn = false;
            amount++;
        }
        randomBotTurn();
        checkingWinnerSituation();
        isSomeOneWon();
    })
}

function checkingWinnerSituation() {
    if ((box[0].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[1].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[2].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[3].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[5].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[6].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[7].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[8].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[0].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[8].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[2].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[6].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[0].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[3].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[6].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[1].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[7].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[2].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[5].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">') && (box[8].innerHTML.trim() == '<img class="image" src="./images/krestik.jpg" alt="">')) {
        isXWins = true;
    } else if ((box[0].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[1].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[2].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((box[3].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[5].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((box[6].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[7].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[8].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((box[0].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[8].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((box[2].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[6].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((box[0].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[3].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[6].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((box[1].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[4].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[7].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((box[2].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[5].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">') && (box[8].innerHTML.trim() == '<img class="image" src="./images/nolik.jpg" alt="">')) {
        isZeroWins = true;
    } else if ((amount == 9) && (isZeroWins == false) && (isXWins == false)) {
        resultMessage.innerHTML = "No one wins!";
        reloadBtn.classList.remove("passive");
        reloadBtn.classList.add("active");
    }
}

function isSomeOneWon(){
    if (isXWins == true) {
        resultMessage.innerHTML = "X player wins!";
        reloadBtn.classList.remove("passive");
        reloadBtn.classList.add("active");
    } else if(isZeroWins == true) {
        resultMessage.innerHTML = "O player wins!";
        reloadBtn.classList.remove("passive");
        reloadBtn.classList.add("active");
    }
}

function randomBotTurn(){
    if (box[r].innerHTML.trim() == "") {
        box[r].innerHTML = '<img class="image" src="./images/nolik.jpg" alt="">';
        isXTurn = true;
        amount++;
    } else if ((box[r].innerHTML.trim() != "")) {
        while (box[r].innerHTML != "") {
            rand();
        }
        if ((box[r].innerHTML.trim() == "")) {
            box[r].innerHTML = '<img class="image" src="./images/nolik.jpg" alt="">';
            isXTurn = true;
            amount++;
        }
    } else {
        randomBotTurn();
    }
}

function rand() {
    r = Math.floor(Math.random() * box.length);
    return r;
}

reloadBtn.addEventListener("click", function(){
    location.reload();
})