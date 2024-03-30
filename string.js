        // 3-03-2024 

//String ==> Primitive data type "" and '' and ` ${}` .
// Strings are inmutable it means we can't change //
//String Methods //

//1, Length => It is used to return the length of a string. (str.length())
// let a = "Hello world";
// console.log(a.length,"This is the length of a string");
// o/p ==> 11 //

// 2, toUpperCase() => used to converter a string to uppercase. (str.toUpperCase())
// let b="Welcome";
// console.log(b.toUpperCase(),"This is the string in uppercase");
// o/p ==> WELCOME This is the string in uppercase //

//3, toLowerCase() => used to converter a string to lowercase. (str.toLowerCase())
// let c="Navgurukul";
// console.log(c.toLowerCase(),"This is the string in lowercase")
// o/p ==> navgurukul This is the string in lowercase //

//4, charAt() => uesd to return the character at a specified index. (str.charAt())
//  (index means start with 0 position)
// let n="Hello world";
// console.log(n.charAt(0),"This is the character at a specified index");
// o/p ==> H // "index start with 0,,it means 0 means 'H', 1 means 'o', 2means 'l' like we will do" 

// 5, charCodeAt() => It is used to return the unicode of the character at a specified index. (str.charCodeAt(index))
// let a = "Hello World";
// console.log(a.charCodeAt(4),"This is the unicode of the character at a specified index");
// o/p ==> 72 This is the unicode of the character at a specified index //

//6, concat() => used to join two or more strings. (str.concat(str1,str2,str3))
// let text = "Hello"
// let bcs = "World"
// console.log(text.concat(bcs),"This is the joined string");
// o/p ==> Hello world This is the joined string//

//7,Trim => It is used to remove the white spaces from both ends of a string. (str.trim())
// let string "      Hello world     ";
// console.log(string.trim(),"This is the trimed string");
// o/p ==> Hello world This is the trimed string // we don't have space btw the those.
 
// trimStart => It is used to remove the white space from starting of the string. (string.trimStart())
// let string ="      Hello world     ";
// console.log(string.trimStart(),"This is the trimstart string");
// o/p ==>Hello      world This is the trimstart string //

// trimEnd => It is used to remove the white space from ending of the string. (string.trimEnd())
// let string ="      Hello world     ";
// console.log(string.trimEnd(),"This is the trimend string");
// o/p ==>Hello world     This is the trimend string //

//8, slice() =>  Used to extract a part of a string and returns a new string. (str.slice(start,end))
// let string ="Hello world"
// console.log(string.slice(6,11),"This is sliced string");
// o/p ==>   world This is sliced string //

//==>, substring() => It is used to extract part of a string and returns a new string. (str.substring(start,end))
// let a="Hello World"
// console.log(a.substring(4,1),"This is substring method")
// o/p ==>  ell This is substring method 

//==>, substr() => Used to extract a part of a string and returns a new str. (substr(start,length))
// let a="Hello world"
// console.log(a.substr(1,2),"This is substr");             //ERROR
// o/p => ello This is substr

//9, replace() => Used to replace a specified value with another value in a string. (str.replace(value1,value2))
// let string = "Hello World";
// console.log(string.replace("Hello","Hi"),"This is the replaced string");
// o/p => Hi world // inplace of he hillo will print.

//11, repeat() => Used to repeat a string a specified number of times. (str.repeat())
// (count)
// let rep = "Welcome to Bootcamp";
// console.log(rep.repeat(2),"This is the repeat string");
// o/p ==> Welcome to Bootcamp Welcome to Bootcamp //

//12, Split() => It is used to split a string an array of substring. (str.split) {Separater, Limit}
// let string = "Hello World";
// console.log(string.split(),"This is the split string")
// o/p ==> [ 'Hello World' ] This is the split string
      
          // 4-03-2024

//13, Includes() => It is used to check whether a string contains a specified value, it returns a boolean value. (str.includes value1,start)
// let string="Hello world"
// console.log(string.includes("0",2),"This is the includes string");
// o/p ==> false This is the includes string

//14,Startwith() => Check wheather a string starts with a specified Value.    str.starsWith(CSSMathValue.start)
// let string="Hello world"
// console.log(string.startsWith("He",3),"This is the includes string");
// o/p ==> false This is the includes string

//15, Endswith() => Check  wheather a string ends with a specified CSSMathValue, str.endsWith (value,length) 
// let string="Hello world"
// console.log(string.endsWith("d",11),"This is the endswith string");
// o/p ==> true This is the endswith string