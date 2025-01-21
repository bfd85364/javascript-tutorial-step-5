// NAME: junhyung-kim
// DATE: 2024-04-01
// WEEK:5
// EXERCISE/ASSIGNMENT: loop statement



function Exercise1() {
	let name = (prompt("enter your name"));
	let i;
	for(i=0; i<50; i++)
		print(name);
}
function Exercise2() {
	let i;
	for(i=0; i<9; i++)
		print("****************");
}
	
function Exercise3() {
	for(let i=1; i<=4; i++)
		if(i==2 || i==3){
			print("*                  *");
	}
		else{ 
			print("********************");
	}	
}

function Exercise4() { 
	let row="";
	let width = parseInt(prompt("enter your width"));
	let height = parseInt(prompt("enter your height"));
		for(let i=0; i<width; i++){
			row=row + "*";
		}
		
		for(i=0; i<height; i++){
			print(row);
		}
}

function Exercise5() {
let  i;
for(i=1; i<12; i++){
	 print(i + " X 7 =" + i*7);
	}
}

function Exercise6() {
	let n=parseInt(prompt("input the number1!"));
	let x=parseInt(prompt("input the number2!"));
		for(var i=0; i<n; i++)
			for(var j=0; j<x; j++)
		var result= (i+1) * (j+1);
			print(i +" "+"x"+" "+j+" "+"="+ result);
}

function Exercise7() {
function countVowel(str) { 
 //str.match is find the matxhed element in arry//
    let count = str.match(/[aeiou]/gi).length;
    return count;
}


	let sentence = prompt('enter your sentence');

		let result = countVowel(sentence);

			print("the number of the vowel is=" + result);
}

function Exercise8() {
	let number = parseInt(prompt('Enter the number of terms: '));
		let n1 = 0, n2 = 1, nextTerm;
			let i;
			print('the Fibonacci Series:');
		//let n1 = n2 then when print then 0,1,1,.... as the same value///	
	for (i = 0; i <= number; i++){
		print(n1);
		nextTerm = n1 + n2;
			n1 = n2;
			n2 = nextTerm;
}
}

function Exercise9(){
	
	let width=parseInt(prompt("enter your weight"));
	let height=parseInt(prompt("enter your height"));
	let toprow="";
	let middlerow="";
//width//

	for (let i = 0; i < width; i++){
		toprow= toprow + "*";
		
		if( i==0 || i == width-1){
			middlerow = middlerow + "*";
		} else{
			middlerow = middlerow + " ";
		}
	}
	
	for(let y =0; y<height; y++){
		if(y==0 || y == height -1){
			print(toprow);
		}
		else{
			print(middlerow);
		}
}
}

function Exercise10() {
	
	let low= parseInt(prompt("enter your number"));
	let i;
	let num=1;
	for(i=1; i<=low; i++){
		print(" ".repeat(low-i) + "*".repeat(2 * i-1));
	}
		
	for(i=low; i=>1; i--){
	print(" ".repeat(low-i) + "*".repeat(2 * i-1));
}
}

//Clear working space
function clearPrintSpace() {
	clearAll();
}
