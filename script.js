
document.getElementById("computerPlay").onclick = function(e){
	e.preventDefault();
	computerPlay( document.getElementById("phrase").value );
};



String.prototype.replaceAt=function(index, l, character){
   	return this.substr(0, index) + character + this.substr(index+l);
};

String.prototype.replaceAllWith = function( r, s ){
	var str = this;
		
	while(str.search(keyword)!=-1){
			str = str.replaceAt(str.indexOf( r ), keyword.length, s);
	}

	return str;
}


function questionMark( word ){
	return word.replaceAllWith("_", "?");
}


// returns most common letters from array of strings
function findMostCommonLetters( arr ){
	let frequencyList = [];
	for(let i=0; i<26; i++){
		frequencyList.push(0);
	}

	for(let i=0; i<100; i++){
		let word = arr[i];
		for(let j=0; j<word.length; j++){
				try{
					frequencyList[ word.charCodeAt(j)-97 ] += 1;
					
				} catch ( e ){
					console.log("failed");
					continue;
				}
		}
	};

	console.log(frequencyList);

	return frequencyList;
}

function convertToDictionary(arr){
	let dict = {};
	for(let i=0; i<arr.length; i++){
		dict[String.fromCharCode(i+97)] = arr[i];
	}
	return dict;
}

var myData = [];
function lookup( word ){
	//word = word.replaceAllWith("_", "?");
	var request = new XMLHttpRequest();
	request.open('GET', "https://api.datamuse.com/words?sp=" + word, true);
	var data = [];
	var mostCommon = [];
	request.onload = function () {
		data = JSON.parse(this.response);

		console.log(this.response);
		
		myData = findMostCommonLetters(data.map( d => { return d.word } ));
		let keys = convertToDictionary(myData);
		let keysSorted = Object.Keys(keys).sort(function(a,b){return keys[a]-keys[b]});
		console.log(keysSorted);
		myData = keysSorted;
	}

	request.send();
}

function computerPlay( word ){
	//API calls
	let foundWord = "";
	for(let i=0; i<word.length; i++){
		foundWord += "?";
	}
	let guessString = foundWord;
	function guess(){
		
	}
	function loop(){ // loops until find word or loses
		lookup(foundWord);
		if(guess(data[0])){

		}
		console.log(convertToDictionary(myData));
	}
}

function humanPlay( word ){

}
