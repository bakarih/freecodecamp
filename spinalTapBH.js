function spinalCase(str) {
      // "It's such a fine line between stupid, and clever."
      // --David St. Hubbins
      //str = str.replace(/ /g, '-').replace(/_/g, '-').replace(/[a-zA-Z]/, [a-z]'-'[a-z]).toLowerCase();
      var blank = / /g;
      var under = /_/g;
      var upper = /[A-Z]/g;
      if (str.match(blank) || str.match(under)) {
        str = replace(blank, '-').replace(under, '-');
      } else {
        // string of uppercase only
        // loop through string
        // replace upper case with "-" + letter.toLowerCase
        for (var i = 0; i < str.length; i++) {
          if (/[A-Z]/.test(str)) {
          	console.log("Entered magic loop");
            var upperChar = str[i];
            upperChar = "-" + upperChar.toLowerCase();
            str.replace(str[i], upperChar);
          }
        }



      }
      return str;
    }
    //spinalCase('thisIsSpinalTap');
    //spinalCase('This Is Spinal Tap');
    $('h1').html(spinalCase('thisIsSpinalTap'));
  });