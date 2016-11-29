function basicTeenager(age) {
  if (age > 12 && age < 20) {
    return("You are a teenager!")
  }
}


function teenager(age) {
  if (age >12 && age <20) {
    return("You are a teenager!")
  }
  else {
    return("You are not a teenager.")
  }
}

function ageChecker(age) {
  if (age <= 12) {
    return("You are a kid")
  }
  else if (age >12 && <20) {
    return("You are a teenager!")
  }
  else {
    return("You are a grownup")
  }
}

function ternaryTeenager(age) {
  return age > 12 &&  age < 20? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  case age >12 && age < 20:
    return "You are a teenager"
  default:
    return "You have an age"
}

basicTeenager(15);
teenager(12);
ageChecker(30);
ternaryTeenager(19);
switchAge(13);
