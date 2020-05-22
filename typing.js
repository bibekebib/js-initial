var typeareas = document.querySelector('#type')
var submit = document.querySelector('.submitbt')
var resetbtn = document.querySelector('.resetbt')
var speed = document.querySelector('.speed')
var highest = document.querySelector('.prehigh')
var words = document.querySelector('.totalwords')
var finall = document.querySelector('.final')
var mBody = document.querySelector('.mainBody')
var pStrings = document.querySelector('.lang').innerHTML
console.log(pStrings)
// var pString = typeareas.placeholder
var totalsec = 0
var interval
var timerRun = false
let time = [0, 0, 0, 0]

// leading zero function

function leadingzero(time) {
  if (time <= 9) {
    time = '0' + time
  }
  return time
}

// start the timer
function count() {
  let currentTime =
    leadingzero(time[0]) +
    ':' +
    leadingzero(time[1]) +
    ':' +
    leadingzero(time[2])
  time[3]++
  speed.innerHTML = 'Total Time Taken :' + currentTime
  time[0] = Math.floor(time[3] / 100 / 60)
  time[1] = Math.floor(time[3] / 100 - time[0] * 60)
  time[2] = Math.floor(time[3] - time[1] * 100 - time[0] * 60000)

  return time[3]
}

function HamroKam() {
  var textentered = typeareas.value
  let pString = pStrings.substring(0, textentered.length)

  if (textentered == pString) {
    clearInterval(interval)

    typeareas.style.borderColor = 'green'
    finall.innerHTML =
      'you can write in the speed of :' + final() + ' word per minute'
  } else {
    if (textentered == pString) {
      typeareas.style.borderColor = 'aqua'
    } else {
      typeareas.style.borderColor = 'red'
    }
  }
}

function start() {
  var textentered = typeareas.value.length
  console.log(textentered)
  if (textentered === 0 && !timerRun) {
    timerRun = true
    interval = setInterval(count, 10)
  }

  var totta = textentered
  console.log('total ' + totta)
  words.innerHTML = 'Total words typed:' + textentered
  return totta
}

function final() {
  clearInterval(interval)
  var sabda = start()
  var speedo = count() / 60
  console.log(sabda + ' ' + speedo)
  var actual = Math.floor(sabda / speedo)
  console.log(actual)
  return actual
}
// reset everything
function TotalReset() {
  clearInterval(interval)
  interval = null
  time = [0, 0, 0, 0]
  timerRun = false
  typeareas.value = ''
  words.innerHTML = 'Total Time Taken :'
  speed.innerHTML = 'Total Time Taken :'
  finall.innerHTML = ''
  // let lolVariableName = final()
  // highest.innerHTML = 'The previous highest speed was:' + lolVariableName
}

// function previousHighest() {
//   var preHighest = final() + preHighest
// }
// event will be listened

typeareas.addEventListener('keypress', start, false)
typeareas.addEventListener('keypress', HamroKam, false)
