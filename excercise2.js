// 1
function max (x,y) {
	if (x > y) {
		return x 
	} else {
		return y
	}
}

max(5,10)

//2

function maxOfThree (x,y,z) {
	if ((x > y) && (x > z)) {
		return x
	} else if ((y > x) && (y > z)) {
		return y
	} else { 
		return z
	}
}

maxOfThree(5,10,15)

//3
function isVowel(string){
	var vowels = ["a","e","i","o","u"];

	if (vowels.indexOf(string) !== -1) {
		return true
	} else {
		return false
	}
}

vowel("u")

//4
function rovarspraket(phrase) {
	var newWord = '';
	var vowels = ["a","e","i","o","u"];
	for (var i = 0; i < phrase.length; i += 1) {
		
		if (vowels.indexOf(phrase[i]) === -1) {
			newWord += phrase[i] +"O"+ phrase[i];
		} 			

		else {
			newWord += phrase[i]; 
		}
	}
	return newWord
}

rovarspraket("carrie")

//5

function reverse(someString) {
	var reverseString = '';
	for (var i = someString.length - 1; i >= 0; i -= 1) {
		reverseString += someString[i]
	}

	return reverseString
}

reverse("Chicken")


































