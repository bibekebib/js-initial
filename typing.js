var typeareas = document.querySelector('#type')
var submit = document.querySelector('.submitbt')
var resetbtn = document.querySelector('.resetbt')
var speed = document.querySelector('.speed')
var highest = document.querySelector('.prehigh')
var words = document.querySelector('.totalwords')
var finall = document.querySelector('.final')
var totalsec = 0
var interval
var timerRun = false
let time = [0, 0, 0, 0]
// the user will enter everything here
// prehigh.style.color = 'red'

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
  speed.innerHTML = 'you can type :' + currentTime
  time[0] = Math.floor(time[3] / 100 / 60)
  time[1] = Math.floor(time[3] / 100 - time[0] * 60)
  time[2] = Math.floor(time[3] - time[1] * 100 - time[0] * 60000)

  return time[3]
}

function start() {
  var textentered = typeareas.value.length
  console.log(textentered)
  if (textentered === 0 && !timerRun) {
    timerRun = true
    interval = setInterval(count, 10)
  }
  var totta = textentered
  console.log("total "+totta);
  // words.innerHTML = 'Total words typed:' + textentered
  return totta
}

function final() {
  clearInterval(interval)
  var sabda = start()
  var speedo = count()/100
  console.log(sabda+" "+speedo)
  var actual = Math.floor(sabda / speedo)
  console.log(actual)
  finall.innerHTML = 'you can write in the speed of :' + actual +" word per second"
}
// reset everything
function TotalReset() {
  clearInterval(interval)
  interval = null
  time = [0, 0, 0, 0]
  timerRun = false
  typeareas.value = ''
}
// event will be listened

typeareas.addEventListener("keypress", start, false)
// submit.addEventListener(onclick, final, false)
// resetbtn.addEventListener(onclick, TotalReset, false)

// record highest previous

// aba final result
// console.log(start + ' / ' + count)
