function basicTeenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!"
  }
}
// if statement
function teenager(age) {
  if (13 <= age && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}
// if-else statement. return exits the function and returns a value
// if return is before console.log; console.log will not run
function ageChecker(age) {
  if (age <= 12) {
    return "You are a kid"
  } else if (13 <= age && age <= 19) {
    return "You are a teenager!"
  } else {
    return "You are a grownup"
  }
}
// if-elseif statement
function ternaryTeenager(age) {
  return 13 <= age && age <= 19 ? "You are a teenager" : "You are not a teenager"
}
// shortcut if-else statement
function switchAge(age) {
  switch(age) {
    case 13:
      return "You are a teenager"
    case 14:
      return "You are a teenager"
    case 15:
      return "You are a teenager"
    case 16:
      return "You are a teenager"
    case 17:
      return "You are a teenager"
    case 18:
      return "You are a teenager"
    case 19:
      return "You are a teenager"
    default:
      return "You have an age"
  }

}
