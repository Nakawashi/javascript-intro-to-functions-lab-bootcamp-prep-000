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
