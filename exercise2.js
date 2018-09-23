// .Exercise 2

var hoverOver = document.getElementById('hover');

hoverOver.addEventListener('mouseover', textHover);

function textHover() {
    alert("Hey, I told you not to hover over me!");
};