
function permAlone(str) {
  
  return getAnagrams(str);
}

function swap(chars, i, j) {
    var tmp = chars[i];
    chars[i] = chars[j];
    chars[j] = tmp;
}

function getAnagrams(input) {
    var counter = [],
        anagrams = [],
        chars = input.split(''),
        length = chars.length,
        i;
    var myFlag = false;
    var superCounter = 0;
  
    for (i = 0; i < length; i++) {
        counter[i] = 0;
    }

    anagrams.push(input);
    i = 0;
    while (i < length) {
        if (counter[i] < i) {
            swap(chars, i % 2 === 1 ? counter[i] : 0, i);
            counter[i]++;
            i = 0;
            anagrams.push(chars.join(''));
              
        } else {
            counter[i] = 0;
            i++;
        }
    }
    for (var j = 0; j < anagrams.length; j++) {
      myFlag = false;
      for (var k = 0; k < (anagrams[j].length - 1); k++) {
        if (anagrams[j][k] == anagrams[j][k+1]) {
          myFlag = true;
        }
      }
      if (myFlag === false) {
      superCounter += 1;
      }
    }
    return superCounter;
}

permAlone('aab');
