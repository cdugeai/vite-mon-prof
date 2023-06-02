// To run on page : https://demo.index-education.net/pronote/parent.html

document.body.style.border = "5px solid red";


/**
 * The following script runs when pasted into the console, but not when loaded from the extension.
 */

console.log("Script runs")

function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}



let dateXpath = '//*[@id="IE.Identite.collection.g8.cellule_Edit"]'
let date_ = getElementByXpath(dateXpath).innerText

//let all_li = document.getElementsByTagName("li");

//all_li[65].style.border = '5px solid red'

$('li').on('click', function() {
	//$('.whitebg').removeClass('whitebg');
	//$(this).addClass('whitebg');
	console.log(this);
	this.style.border = '5px solid red' ;
	let heure = this.children[0].innerText;
	let matiere_li = this.children[2];
	let matiere = {
		libelle: matiere_li.children[0].innerText,
		prof: matiere_li.children[1].innerText,
		salle: matiere_li.children[2].innerText,
	}

	console.log({heure})
	console.log({matiere})

	alert(`Signaler une absence pour le cours suivant ? \n - le ${date_} \n - ${matiere.libelle} \n - avec ${matiere.prof} \n - en salle ${matiere.salle}`)
});
