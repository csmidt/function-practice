
//1
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ["this", "is", "a", "collection", "of", "words"];
var instructors = [
	{ firstname : 'JD', teaches : "Javascript"},
	{firstname : " Tim", teaches : "Javascript"},
	{firstname : "Brit", teaches : "Ruby"},
	{firstname : "Joe", teaches : "iOS"},
	{firstname : "Jake", teaches : "Javascript"},
	{firstname : "Will", teaches : "Javascript"},
	{firstname : "Calvin", teaches : " Javascript"},
	{firstname : "James", teaches : "Ruby"},
];


function getMaxOfArray(insertArrayNameHere) {
	return Math.max.apply(null, insertArrayNameHere);
}

getMaxOfArray(numbers)

//2

var strings = ["this", "is", "a", "collection", "of", "words"];
var longWord = "";

function getLongestWord(insertArrayHere) {
 
	for (var i = 0; i < strings[i].length; i += 1) 
		if (strings[i].length > )

}	
	

//3
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var newarray = []

function evennumbers(arrayHere) {
	for (var i = 0; i < numbers.length ; i+=1) {
		if (numbers[i] /= 2 === 0)
			newarray += numbers[i]
	}
}return newarrray

evennumbers(numbers)


//4
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var newarray = []

function evennumbers(arrayHere) {
	for (var i = 0; i < numbers.length ; i+=1) {
		if (numbers[i] /= 2 !== 0)
			newarray += numbers[i]
	}
}return newarrray

evennumbers(numbers)

//5

//5.

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ["this", "is", "a", "collection", "of", "words"];
var combined = numbers.concat(strings);

console.log(combined)





//6
var instructors = [
	{ firstname : 'JD', teaches : "Javascript"},
	{firstname : " Tim", teaches : "Javascript"},
	{firstname : "Brit", teaches : "Ruby"},
	{firstname : "Joe", teaches : "iOS"},
	{firstname : "Jake", teaches : "Javascript"},
	{firstname : "Will", teaches : "Javascript"},
	{firstname : "Calvin", teaches : " Javascript"},
	{firstname : "James", teaches : "Ruby"},
];

var newlist =[]
function jsteachers(info) {
	for (var i = 0 ; i < instructors.length; i+=1) {
		if(instructors.teaches === "Javascript")
			newlist += instructors[i]
	}
}
jsteachers(newlist)

newlist.sort();











