const buttons = document.querySelectorAll("button");
let rotateVal = 0;

for(let value of buttons) {
	let currentButton = value;
	currentButton.addEventListener('mouseenter', () => changeColor(event.target));
	currentButton.addEventListener('mouseleave', () => backToNormal(event.target));
	currentButton.addEventListener('click', ()=> moveImage(event.target.id))
}

function changeColor(eventTarget) {
	eventTarget.style.backgroundColor = "red";
}

function changeToWhite() {
	eventTarget.style.backgroundColor = "white";
}

function backToNormal(eventTarget) {
	eventTarget.style.backgroundColor='';
}

function moveImage(direction) {
	let imgObjStyle = imgObj.style;
	let topVal = parseInt(imgObjStyle.top, 10);
	let leftVal = parseInt(imgObjStyle.left, 10);

	if(direction === 'KeyA') {
		imgObjStyle.transform = "rotate(270deg)";
		imgObjStyle.left = (leftVal - 30) + "px";
	}

	if(direction === 'KeyW') {
		imgObjStyle.transform = "rotate(0deg)";
		imgObjStyle.top = (topVal - 30) + "px";
	}

	if(direction === 'KeyD') {
		imgObjStyle.transform = "rotate(90deg)";
		imgObjStyle.left = (leftVal + 30) + "px";
	}

	if(direction === 'KeyS') {
		imgObjStyle.transform = "rotate(180deg)";
		imgObjStyle.top = (topVal + 30) + "px";
	}

    if(direction === 'KeySpaceR') {
    	rotateVal += 90;
    	if (rotateVal === 360) {
    		rotateVal = 0;
    	}
    	imgObjStyle.transform = "rotate(" + rotateVal + "deg)";
    }

    if(direction === 'KeySpaceL') {
    	rotateVal -= 90;
    	if (rotateVal === 360) {
    		rotateVal = 0;
    	}
    	imgObjStyle.transform = "rotate(" + rotateVal + "deg)";
    }
}

function init() {
	imgObj = document.getElementById('myImage');
	imgObj.style.position = 'relative';
	imgObj.style.left = '0px';
	imgObj.style.top = '0px';
}

window.onload = init;