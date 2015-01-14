function Gtcode () {
	var _isSpace, _enChars, _faChars;

	_isSpace = function(char) {
			if (char === ' ') return true;
			return false;
	}
	_enChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	_faChars = ['ا', 'ب', 'پ', 'ت', 'ث', 'ج', 'چ', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'ژ', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ع', 'غ', 'ف', 'ق', 'ک', 'گ', 'ل', 'م', 'ن', 'و', 'ه', 'ی'];

	this.decoder = function(input) {
		var decodeStr = [];

		for(var i in input) {
			var char = input[i];
			if(_isSpace(char)) {
				decodeStr.push(' ');
			} else if(isNaN(char)) {//char is string
				var index = _enChars.indexOf(char);

				var ConvertChar = _faChars[index];
				decodeStr.push(ConvertChar);	
			} else { //char is number
				var index = parseInt(char);
				var faIndex = 25 + index;

				var ConvertChar = _faChars[faIndex];
				decodeStr.push(ConvertChar);	
			}
		}

		return decodeStr.join('');
	}

	this.encoder = function(input) {
		var encodeStr = [];
		
		for(var i in input) {
			var char = input[i];
			if(_isSpace(char)) {
				encodeStr.push(' ');
			} else {//char is string
				var index = _faChars.indexOf(char);
				if(index < 25) {
					encodeStr.push(_enChars[index]);
				} else {
					encodeStr.push((index - 25));
				}	
			}
		}

		return encodeStr.join('');
	}
}