var a = 10
var b = 15

function add(a, b) {
  return(a + b)
}

function subtract(a, b) {
  return(a - b)
}

function multiply(a, b) {
  return(a * b)
}

function divide(a, b) {
  return(a / b)
}

var n = 2

function inc(n) {
  return n += 1
}

function dec(n) {
  return n -= 1
}

function makeInt(n) {
  return parseInt(n, 10)
}

var c = 2.22

function preserveDecimal(c) {
  if (n === parseFloat(c)) {
    return parseFloat(c)
  } else {
    return "false"
  }
}