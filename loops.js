function forLoop(array) {
  for (var i = 0; i < 25; i++ ) {
    if(i == 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push('I am ' + i + ' strange loops.');
    }
  }
    return array
  }

function whileLoop(number) {
  var countdown = number;

  while (countdown > 0) {
    console.log(countdown)
    countdown--
  }

  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue())

  return array;
}


function theBeatlesPlay(musicians, instruments) {

  var emptyArray = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    emptyArray.push(musician + ' plays ' + instrument);

    return emptyArray;

  }
}
