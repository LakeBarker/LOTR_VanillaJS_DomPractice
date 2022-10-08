console.log('Linked.')
// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const midEarth = document.createElement('section');
	midEarth.setAttribute('id','middle-earth');
	document.body.appendChild(midEarth);
	// 2. use a for loop to iterate over the lands array that does the following:
	for(i=0;i<=lands.length-1;i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const newArt = document.createElement('article');
		//   2b. gives each land article an `id` tag of the corresponding land name
		newArt.setAttribute('id', `${lands[i]}`);
		//   2c. includes an h1 with the name of the land inside each land article
		const newH = document.createTextNode(`${lands[i]}`);
		newArt.appendChild(newH);
		//   2d. appends each land to the middle-earth section
		midEarth.appendChild(newArt);
	}
	
	// 3. append the section to the body of the DOM.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const hobbitL = document.getElementById('The-Shire')
	const hobbitUl = document.createElement('ul')
	hobbitUl.setAttribute('id', 'shireHobbits')
	
	for (i=0; i<=hobbits.length-1; i++) {
		const newHobbit = document.createElement('li')
		newHobbit.setAttribute('class', 'hobbit')
		newHobbit.setAttribute('id', hobbits[i])
		newHobbit.textContent = hobbits[i]	
		hobbitUl.appendChild(newHobbit)
	}
	hobbitL.appendChild(hobbitUl);
	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRing = document.createElement('div')
	oneRing.setAttribute('id', 'the-ring')
	oneRing.setAttribute('class', 'magic-imbued-jewelry')

	const ringBearer = document.getElementById('Frodo Baggins')
	ringBearer.appendChild(oneRing)

	// give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	const baddiesL = document.getElementById('Mordor')
	const baddiesUl = document.createElement('ul')
	// display an unordered list of baddies in Mordor
	for (i=0;i<=baddies.length-1;i++) {
		const newBaddy = document.createElement('li')
		newBaddy.setAttribute('class', 'baddy')
		newBaddy.setAttribute('id', baddies[i])
		newBaddy.textContent = baddies[i]
		baddiesUl.appendChild(newBaddy)
	}
	baddiesL.appendChild(baddiesUl);
	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const buds = document.createElement('aside')
	const budsL = document.getElementById('Rivendell')
	budsL.appendChild(buds);
	const budsUl = document.createElement('ul')

	for (i=0;i<=buddies.length-1;i++) {
		const newBud=document.createElement('li')
		newBud.setAttribute('class', 'buddy')
		newBud.setAttribute('id', buddies[i])
		newBud.textContent = buddies[i]
		budsUl.appendChild(newBud)
	}
	buds.appendChild(budsUl);
	budsUl.setAttribute('id', 'buddies')

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const hobbitsStart = document.getElementsByClassName('hobbit')
	const hobbitDestination = document.getElementById('Rivendell')
	const hobbitRivL = document.createElement('ul')
	const hobbitOld = document.getElementById('shireHobbits')
	
	hobbitClone = hobbitOld.cloneNode(true);
	hobbitRivL.appendChild(hobbitClone);
	hobbitDestination.appendChild(hobbitRivL);
	hobbitOld.parentElement.removeChild(hobbitOld);
	

	//old code, not needed as cloneNode works waaaaaaaay better
	// for (i=0; i<=hobbits.length-1; i++) {
	// 	const newHobbit = document.createElement('li')
	// 	newHobbit.setAttribute('class', 'hobbit')
	// 	newHobbit.setAttribute('id', hobbits[i])
	// 	newHobbit.textContent = hobbits[i]	
	// 	hobbitRivL.appendChild(newHobbit)
	// }
	// hobbitDestination.appendChild(hobbitRivL);
	// hobbitOld.parentElement.removeChild(hobbitOld)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.getElementById('Strider').innerHTML = "Aragorn"
	document.getElementById('Strider').setAttribute('id', 'Aragorn')

	

	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const fellowLoc = document.getElementById('Rivendell')
	const forgeFellowship = document.createElement('div')
	forgeFellowship.setAttribute('id', 'The Fellowship')
	fellowLoc.appendChild(forgeFellowship);
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const notFellowHobs = document.querySelectorAll('li.hobbit')
	console.log(notFellowHobs)
	const notFellowBuds = document.querySelectorAll('li.buddy')
	console.log(notFellowBuds)
	const fellowUl = document.createElement('ul')
	fellowUl.setAttribute('id', 'the-fellowship')
	forgeFellowship.appendChild(fellowUl)
	//const theFellowship = document.createElement('ul')	
	
	for (i=0;i<=notFellowBuds.length-1;i++) {
		fellowUl.appendChild(notFellowBuds[i])
		console.log(`${notFellowBuds[i].textContent} has joined the party!`)
	}
	

	for (i=0;i<=notFellowHobs.length-1;i++) {
		const fellowHob=document.createElement('li')
		fellowUl.appendChild(notFellowHobs[i])
		console.log(`${notFellowHobs[i].textContent} has joined the party!`)
	}
	
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	const gandalfRedborn = document.getElementById("Gandalf the Grey")
	gandalfRedborn.setAttribute('id', 'Gandalf the White')
	document.getElementById('Gandalf the White').innerHTML="Gandalf the White"
	document.getElementById('Gandalf the White').style.backgroundColor = "white"
	document.getElementById('Gandalf the White').style.borderStyle = "solid"
	document.getElementById('Gandalf the White').style.borderColor = "grey"


	
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
