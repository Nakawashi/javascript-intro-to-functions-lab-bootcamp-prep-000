function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  return console.log(string.toUpperCase())
}

function logWhisper(string) {
  return console.log(string.toLowerCase())
}


function sayHiToGrandma(string) {
  var whisper = console.log("I can't hear you!");
  var shout = console.log("YES INDEED!");
  var love = console.log("I love you too, Grandma.");

  if (string === string.toLowerCase()) {
    return logWhisper(whisper)
  }
  else if (string === string.toUpperCase()) {
    return logShout(shout)
  }
  else if (string === "I love you") {
    return love
  }

  return 'Yes I am happy'
}
