/**
Update your existing square function so that it takes 2 parameters. The first parameter should be the size of the square, and the second one should be the character to use when drawing the square. The second parameter should be optional.

eg square(2) should output

##
##
eg square(2, '*') should output

**
**

 */

function square(num,char) {
  var result;
  for (let i = 0; i < num; i++) {
      result = "";
    for (let j = 0; j < num; j++) {
        result += char;
    }
    console.log(result);
  }
}
square(8,"*");