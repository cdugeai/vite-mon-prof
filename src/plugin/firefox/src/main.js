// To run on page : https://demo.index-education.net/pronote/parent.html

document.body.style.border = "5px solid red";


/**
 * The following script runs when pasted into the console, but not when loaded from the extension.
 */

console.log("Script runs")

/**
 * Get dom element from its xpath
 * @param path xpath of the element
 * @return {Node} Dom element
 */
function getElementByXpath(path) {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


// Get the date
let dateXpath = '//*[@id="IE.Identite.collection.g8.cellule_Edit"]'
let date_ = getElementByXpath(dateXpath).innerText

// Get all li elements
let all_li = document.getElementsByTagName("li");
// Set border to '1px green'
Array.prototype.slice.call(all_li).forEach(e => {
	e.style.border = '1px solid green'
})

// Set onclick on the li
$('li').on('click', function() {
	console.log(this);
	// First, set border to '5px red'
	this.style.border = '5px solid red' ;
	// Second, get information about the course
	let heure = this.children[0].innerText;
	let matiere_li = this.children[2];
	let matiere = {
		libelle: matiere_li.children[0].innerText,
		prof: matiere_li.children[1].innerText,
		salle: matiere_li.children[2].innerText,
	}

	console.log({heure})
	console.log({matiere})

	// Finally, display information about selected course to the user
	alert(`Signaler une absence pour le cours suivant ? \n - le ${date_} \n - ${matiere.libelle} \n - avec ${matiere.prof} \n - en salle ${matiere.salle}`)
});
