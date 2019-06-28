
	document.getElementById("computerPlay").onclick = function(){computerPlay()};



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

	}


	// returns most common letters from array of strings
	function findMostCommonLetters( arr ){
		let frequencyList = [];
		for(let i=0; i<26; i++){
			frequencyList.push(0);
		}

		console.log(frequencyList);

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


	var myData = [];
	function lookup( word ){
		//word = word.replaceAllWith("_", "?");
		var request = new XMLHttpRequest();
		//request.open('GET', "https://api.datamuse.com/words?sp=" + word, true);
		var data = [];
		var mostCommon = [];
		/*request.onload = function () {
			data = JSON.parse(this.response);

			console.log(this.response);
			console.log(data.map( d => { return d.word } ));
			myData = findMostCommonLetters(data.map( d => { return d.word } ));		
		}

		request.send();
		*/
		console.log('still here');
		$.ajax({
			type: "GET",
			url: "https://api.datamuse.com/words?sp=" + word,
			contentType: "application/json; charset=utf-8",
			datatype: "json",
			success: function(response){
				console.log("Test");
				console.log(response);
			},
			failure: function(response){
				console.log('nooo', response);
			}
		});

	}

	function computerPlay( word ){

		word = "apple";
		//API calls
		let foundWord = "";
		for(let i=0; i<word.length; i++){
			foundWord += "?";
		}
		lookup(foundWord);
	}

	function humanPlay( word ){

	}
