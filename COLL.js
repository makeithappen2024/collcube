// Cashing parents of case groups
const collMenu = document.querySelector('.collMenu');
const groupCard = document.createElement('div');
groupCard.classList.add("groupCard");
const h2 = document.querySelector('h2');
//Cashing case groups
const carGroup = document.querySelector('.item1');
const wagonGroup = document.querySelector('.item2');
const lightsGroup = document.querySelector('.item3');
const chameleonGroup = document.querySelector('.item4');
const eightGroup = document.querySelector('.item5');
const collCaseGroups = [carGroup, wagonGroup, lightsGroup, chameleonGroup, eightGroup];

//Cashing cases
const case1 = document.createElement('div');
const case2 = document.createElement('div');
const case3 = document.createElement('div');
const case4 = document.createElement('div');
const case5 = document.createElement('div');
const case6 = document.createElement('div');
let caseBox = [case1, case2, case3, case4, case5, case6];

const addClassToElement = (element, cellClass) => {
	cellClass.forEach( (finalClass) => {
		element.classList.add(finalClass);
	})
}

let createCell = (collGroup, groupCaseNumber, cellNumber) => {
const cell = document.createElement('div');
const cellClass = coll30CasesDescriptions[collGroup][groupCaseNumber][cellNumber];
if (cellClass) {
	addClassToElement(cell, cellClass)
} else {
	cell.classList.add('emptyCell');
}
if (collGroup === 0){
caseBox[0].appendChild(cell);
}
else if (collGroup === 1){
caseBox[1].appendChild(cell);
}
else if (collGroup === 2){
caseBox[2].appendChild(cell);
}
else if (collGroup === 3){
caseBox[3].appendChild(cell);
}
else if (collGroup === 4){
caseBox[4].appendChild(cell);
}
}

function renderCase () {
	for (let a = 0; a<5; a++) {
		for (let b = 0; b<6; b++) {
			for (let c = 1; c<=25; c++) {
				createCell(a, b, c);
	}
		}
			}
}

const hideCollCaseGroups = (toggle) => {
	 	let parent = null;
 	  if (toggle) {
     parent = toggle.closest('.collMenuItem');
	  }
		for (let i=0; i<5; i++)	{
    if (parent === collCaseGroups[i]) {
      continue
    } else {
      collCaseGroups[i].style.display = 'none';
    }
	}
}

const renderCaseGroup = e =>{
		if (groupCard.children.length === 0){
	  const toggle = e.target;
	  collMenu.appendChild(groupCard);
		renderCases();
		hideCollCaseGroups(toggle);
		}
		else {removeGroupContent();
		}
}

function renderCases () {
		for (let i=0; i<6; i++){
		caseBox[i].classList.add('caseStyle');
		groupCard.appendChild(caseBox[i]);
			if (caseBox[i].children.length === 0) {
			renderCase();
			}
		}
}

const reRenderCollCaseGroups = () =>{
		for (let i=0; i<5; i++){
		collCaseGroups[i].style.display = 'flex';
		}
}

const removeGroupContent = () => {
		if (groupCard.children.length > 0){
		for(let i =0; i<6; i++){
			groupCard.removeChild(document.querySelector('.caseStyle'))
		}
		collMenu.removeChild(groupCard);
		reRenderCollCaseGroups();
		}
}

for (let i = 0; i < collCaseGroups.length; i++) {
		collCaseGroups[i].addEventListener('click', renderCaseGroup);
}