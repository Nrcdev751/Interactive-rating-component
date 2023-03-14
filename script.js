
let thankYOU = document.getElementById("thankyou")
let rateForm = document.getElementById("rate-form")
let rate = document.getElementById("rate")
let score = document.getElementById("score")


let rate1 = document.getElementById("rate-1").innerText
let rate2 = document.getElementById("rate-2").innerText
let rate3 = document.getElementById("rate-3").innerText
let rate4 = document.getElementById("rate-4").innerText
let rate5 = document.getElementById("rate-5").innerText

let btnSubmit = document.getElementById("btn-submit")

thankYOU.style.display="none"
function hidden(){
     rateForm.style.display="none"
}
function show(){
    thankYOU.style.display="block"
}
document.getElementById("btn-submit").disabled = true;

function removesmall() {
    thankYOU.classList.remove("small-size");
    thankYOU.classList.add("default-size");
  }

function scoreFocus1() {
    document.getElementById("btn-submit").disabled = false;
    console.log(rate1)
    btnSubmit.addEventListener("click", function(){
        let score1 = 1
        hidden()
        show()
        removesmall()
        score.innerHTML=score1
    });
}
function scoreFocus2() {
    document.getElementById("btn-submit").disabled = false;
    console.log(rate2)
    btnSubmit.addEventListener("click", function(){
        let score2 = 2
        hidden()
        show()
        removesmall()
        score.innerHTML=score2
    });
}
function scoreFocus3() {
    document.getElementById("btn-submit").disabled = false;
    console.log(rate3)
    btnSubmit.addEventListener("click", function(){
        let score3 = 3
        hidden()
        show()
        removesmall()
        score.innerHTML=score3
    });
}
function scoreFocus4() {
    document.getElementById("btn-submit").disabled = false;
    console.log(rate4)
    btnSubmit.addEventListener("click", function(){
        let score4 = 4
        hidden()
        show()
        removesmall()
        score.innerHTML=score4
    });
}
function scoreFocus5() {
    document.getElementById("btn-submit").disabled = false;
    console.log(rate5)
    btnSubmit.addEventListener("click", function(){
        let score5 = 5
        hidden()
        show()
        removesmall()
        score.innerHTML=score5
    });
}

function refreash(){
    location.reload();
}



