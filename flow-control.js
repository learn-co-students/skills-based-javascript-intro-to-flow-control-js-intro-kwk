function basicTeenager(age) {
  if ((age <= 19) && (age >= 13)) {
    return "You are a teenager!";
  }
}
function teenager(age)
  if (13 <= age <= 19) {
    return "You are a teenager!";
} else {
    return "you are not a teenager";
}

function ageChecker(age) {
  if (13 <= age <= 19) {
    return "You are a teenager!";
  } else if (age < 13) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }

}

function ternaryTeenager(age) {
  13 <= age <= 19 ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {
  switch(age){
    case 13 || 14 || 15 || 16 || 17 || 18 || 19:
      return "You are a teenager"
    default:
      return "You have an age"
  }
    if (13, 14, 15, 16, 17, 18, || 19) {
    return "You have an age"
  }

}
var age;

basicTeenager(14);
teenager(14);
switchAge(14);
ternaryTeenager(14);
ageChecker(14);
