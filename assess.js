// 
function ensure(value) {
    // Your code goes here
    if (value = undefined || ensure()) {
        throw new Error ('Error');
    }
  }
  
  try {
    console.log(ensure());
  } catch(err) {
    console.log(err);
  }





function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    
}
  
console.log(formatDate("12/31/2014"));





function updateATag(originalLink, newLink) {
    // Write your code here.
    var aTag = document.createElement('a');
    if (aTag.href = originalLink) {
        aTag.href = newLink;
    }
  }
  
  document.body.innerHTML = `<a href='https://www.google.com/'>Original</a>`;
  
  updateATag('https://www.google.com/', 'https://www.w3schools.com/');
  console.log(document.getElementsByTagName('a')[0].getAttribute('href'));





function matchKeyCombo(sequence) {
    // Your code goes here
    var upperCaseSequence = sequence.toUpperCase;
    var qeeCount = 0;
    var zccCount = 0;
    for (let index = 0; index < sequence.length-3; index++) {
        var substr = sequence.sub(index, index + 2);
        if (substr = "QEE") {
            qeeCount++;
        } if (substr = "ZCC") {
            zccCount++;
        }
    }
    if (qeeCount == zccCount || qeeCount == 0 && zccCount == 0) {
        return true;
    } else {
        return false;
    }
}
  
console.log(matchKeyCombo("QEEAZCC"));