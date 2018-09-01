var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (arr, n) {
  var newArr = [n, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray (arr, n) {
  arr.unshift(n)
  return arr
}

function addElementToEndOfArray(arr, n) {
  var newArr = [...arr, n]
  return newArr
}
function destructivelyAddElementToEndOfArray(arr, n) {
   arr.push(n)
   return arr
}
function accessElementInArray(arr, index) {
  return arr[index]
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift(1)
  return arr
}

function removeElementFromBeginningOfArray(arr) {
  var newArr = arr.slice(1)
  return newArr
}
function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return (arr)
}
function removeElementFromEndOfArray(arr) {
    var tempArr = arr
  foo = tempArr.splice(tempArr.length - 1, 1)
  console.log("arr: " + arr)
  console.log("tempArr: " + tempArr)
  arr.push(foo)
  console.log("push")
  console.log("arr: " + arr)
  console.log(foo)
  return foo
}
