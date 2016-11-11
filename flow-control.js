function basicTeenager(age) {
  return age>=13 && age <=19? "You are a teenager!":undefined
}

function teenager(age) {
  return age>=13 && age <=19? "You are a teenager!":"You are not a teenager"
}

function ageChecker(age) {
  if(age>=20){
    return "You are a grownup"
  }
  else if(age>=13) {
    return basicTeenager(age);
  }else {
    return "You are a kid"
  }
}

function ternaryTeenager(age) {
  return age>=13 && age <=19? "You are a teenager":"You are not a teenager"

}

function switchAge(age) {
  return age>=13 && age <=19? "You are a teenager":"You have an age"
}
