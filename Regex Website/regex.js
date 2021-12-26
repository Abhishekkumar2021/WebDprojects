// //the string in which we have to search
// let string = "Hello there I am Abhishek Kumar. I hope you are fine there.";

// // directly defining a regex
// let regDirect = /I/;
// console.log(regDirect.source);

// //using constructor definition of regexp
// const toFind = 'I';
// let regConstructor = new RegExp(toFind);
// console.log(regConstructor);

// // test() is a function that is use to check whether a given regex is present
// const isPresent = regDirect.test(string);
// console.log(isPresent);

// let petString = 'Abhishek has a pet cat.';
// let petRegex = /cat|dog|mouse|/;
// let result = petRegex.test(petString);
// console.log(result);

// let newString = 'ThIs Is tO test The case InsenstIVity';
// let caseRegex = /this/i;
// let result = caseRegex.test(newString);
// console.log(result);

// let searchTerm = 'this';
// let regex = new RegExp(searchTerm, 'i');

// let extractString = "Hey there, Extract the word 'hello' hello from the string";
// let extractRegex = new RegExp('hello','g');
// let output = extractString.match(extractRegex);
// console.log(output);

// let starString = 'Twinkle twinkle little star';
// let starRegex = new RegExp('twinkle','ig');
// const starResult = starString.match(starRegex);
// console.log(starResult);

// let huString = 'hum, hug';
// let huRegex = /hu./g
// const huresult = huString.match(huRegex);
// console.log(huresult);

// let unString = 'fun, run';
// let unRegex = /.un/g
// const unresult = unString.match(unRegex);
// console.log(unresult);

// let vowelString = 'hey there, Are you fine ?'
// let vowelRegex = /./g;
// let vowelResult = vowelString.match(vowelRegex);
// console.log(vowelResult);

// vowelString = 'hey there, Are you fine ?'
// vowelRegex = /[aeiou]/gi;
// vowelResult = vowelString.match(vowelRegex);
// console.log(vowelResult);

// let fullSentence = 'The quick brown fox jumps over the lazy dog';
// let alphabetRegex = /[a-z]/gi;
// const alphabetResult = fullSentence.match(alphabetRegex);
// console.log(alphabetResult);

// let alphabetsAndNumberString = 'The blueberry pie 3.145672809 is delicious.'
// let alphabetsAndNumberRegex = /[2-6h-u]/gi;
// const alphabetsAndNumberResult = alphabetsAndNumberString.match(alphabetsAndNumberRegex);
// console.log(alphabetsAndNumberResult);

// let exceptNumbersString = '1234567 hello there, 3 peoples are chasing me! '
// let exceptNumbersRegex = /[^0-9]/gi;
// const exceptNumbersResult = exceptNumbersString.match(exceptNumbersRegex);
// console.log(exceptNumbersResult);

// let difficultString = 'Mississippi';
// let difficultRegex = /s+/ig;
// const difficultResult = difficultString.match(difficultRegex);
// console.log(difficultResult);

// let zeroOrMoreString = 'GooooooooooooooalGoooooooooalG';
// let zeroOrMoreRegex = /Go*/g;
// const zeroOrMoreResult = zeroOrMoreString.match(zeroOrMoreRegex);
// console.log(zeroOrMoreResult);

// let lazyString = 'titanici';
// let lazyRegex = /t[a-z]*?i/g
// let lazyResult = lazyString.match(lazyRegex);
// console.log(lazyResult);

// let greedyString = 'titanici';
// let greedyRegex = /t[a-z]*i/
// let greedyResult = greedyString.match(greedyRegex);
// console.log(greedyResult);

// let htmlString = '<h1>Hello there, I am glad here.</h1>';
// let htmlRegex = /<.*>/g;
// const htmlResult = htmlString.match(htmlRegex);
// console.log(htmlResult);

// let beginString = 'Hey there, I am fine here.';
// let beginRegex = /^Hey/;
// const beginResult = beginRegex.test(beginString);
// console.log(beginResult);

// let endString = 'Hey there, I am fine here.';
// let endRegex = /here.$/;
// const endResult = endRegex.test(endString);
// console.log(endResult);

// let wString = 'Aquick brown fox jumps over a lazy dog with 5_________'
// let wRegex = /\w/g;
// let wResult = wString.match(wRegex);
// console.log(wResult);

// let W_String = 'Aquick brown fox jumps over a lazy dog with 5_________'
// let W_Regex = /\W/g;
// let W_Result = W_String.match(W_Regex);
// console.log(W_Result);

// let digitString = '1234567890_abcgsfs'
// let digitRegex = /\d/g;
// let digitResult = digitString.match(digitRegex);
// console.log(digitResult);

// let nonDigitString = '1234567890_abcgsfs'
// let nonDigitRegex = /\D/g;
// let nonDigitResult = nonDigitString.match(nonDigitRegex);
// console.log(nonDigitResult);

/*
The conditions are :
1. If there are numbers they must be at the end.
2. Letters can be uppercase or lowercase.
3. Atleast two letters long. Two letters long can't contain the digits.
*/
// let userName = 'jackandMeHave12345';
// let userCheckRegex = /[a-zA-Z]{2,}\d*$/g;
// let result = userCheckRegex.test(userName);
// console.log(result);

// let whitespaceString = 'I am happy now.    \n what you want there';
// let whitespaceRegex = /\s/g;
// let whitespaceResult = whitespaceString.match(whitespaceRegex);
// console.log(whitespaceResult);

// let nonWhitespaceString = 'I am happy now.    \n what you want there';
// let nonWhitespaceRegex = /\S/g;
// let nonWhitespaceResult = nonWhitespaceString.match(nonWhitespaceRegex);
// console.log(nonWhitespaceResult);

// let quantityString = 'ohhhhhhhhhhhh no, are you mad. ohhhh ';
// let quantityRegex = /oh{4}/g;
// let quantityResult = quantityString.match(quantityRegex);
// console.log(quantityResult);

// let optionalString = 'favorite, favourite';
// let optionalRegex = /favou?rite/g;
// let optionalResult = optionalString.match(optionalRegex);
// console.log(optionalResult);

// let lookAheadString = 'quitquit';
// let lookAheadNegativeRegex = /qu(?!i)/g;
// let lookAheadResult = lookAheadString.match(lookAheadNegativeRegex);
// console.log(lookAheadResult);
