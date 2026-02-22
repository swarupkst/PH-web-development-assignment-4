function count(){
const allSubDivs = document.querySelectorAll('.sub-div');
const totalApp = allSubDivs.length;
const totalNum = document.getElementById('total-num');
totalNum.innerText = totalApp;
const totalSm = document.getElementById('total-numsm');
totalSm.innerText = totalApp;
//console.log(allSubDivs.length);
}

document.querySelector('.delete-btn1').addEventListener('click', function() {
    document.querySelector('.card1').remove();
    count()
});

document.querySelector('.delete-btn2').addEventListener('click', function() {
    document.querySelector('.card2').remove();
    count()
});

document.querySelector('.delete-btn3').addEventListener('click', function() {
    document.querySelector('.card3').remove();
    count()
});
document.querySelector('.delete-btn4').addEventListener('click', function() {
    document.querySelector('.card4').remove();
    count()
});
document.querySelector('.delete-btn5').addEventListener('click', function() {
    document.querySelector('.card5')
    .remove();
    count()
});
document.querySelector('.delete-btn6').addEventListener('click', function() {
    document.querySelector('.card6').remove();
    count()
});
document.querySelector('.delete-btn7').addEventListener('click', function() {
    document.querySelector('.card7').remove();
    count()
});
document.querySelector('.delete-btn8').addEventListener('click', function() {
    document.querySelector('.card8').remove();
    count()
});

        count()

