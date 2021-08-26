/**
 Upgrade your triangle function so that it takes in an optional argument named mode.

triangle(3) should print

#
##
###
triangle(3, "left") should print

#
##
###
(in other words, the default mode is left)

triangle(3, "right") should print

  #
 ##
###
triangle(3, "isosceles") should print

  #
 ###
#####
Negative numbers should still print things upside down. Eg:

triangle(-3, "isosceles") should print

#####
 ###
  #
Up for a Challenge?
This section is not compulsory. If you do this we’ll think you’re cool.

Add some functionality to triangle so that an error/exception gets raised if an incorrect mode is entered.
 */

function triangle(num, mode) {
  var result = "";
  var str = '';
  var str2 = '';
  if(mode === "left" || mode == null ){
    console.log('left');
    if(num > 0 ) {
      for (var i = 0; i < num; i++) {
        result += "#";
        console.log(result);
    }
    }
    else{     //this will execute if the number is negative 
      var num = Math.abs(num); 
      var result;
      for (var i = num; i >= 1; i--) {
        result = "";
        for (var j = i; j >=1; j--) {
          result += "#";
        }
        console.log(result);
      }
    }
  }else if(mode === "right"){
    console.log("right")
    for (var i = 1; i <= num; i++) {
        var str = "";
        for (var j = 0; j < num; j++) {
            str+= (j >= num - i)?"*":" "
       }
        console.log(str);
    }

  }
  else if(mode === "isosceles" && num > 0){
    console.log("isosceles");
    for (var i = 0; i < num; i++) {
        var result = '';
        for (var j =0; j < num - i; j++) {
          result += ' ';
        }
        for (var k = 0; k <= i; k++) {
          result += '# ';
        }
        console.log(result);  
    } 
  }
  else if(mode === "isosceles" && num < 0 ){
    console.log("isosceles negative "); 
    var num = Math.abs(num); 
    var result;
    for (var i = num; i >= 1; i--) {
      result = "";
      for (var j = i; j >=1; j--) {
        str = ' '.repeat(num -i);
        str2 = '#'. repeat(i * 2 -1);
      }
      console.log(str + str2 + str);
    }
  }
}
triangle(5,"isosceles");