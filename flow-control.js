function basicTeenager(age) {
 if(age >=13 && age <=19){
   return "You are a teenager!"
 }

}
basicTeenager(12);


function teenager(age) {
  if(age >=13 && age <=19){
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }
}
teenager(13);
teenager(12);
teenager(29);

function ageChecker(age) {
  if (age >=13 && age <=19) {
    return "You are a teenager!"
  } else if (age <= 12) {
    return "You are a kid"
  } else if (age >= 20){
    return "You are a grownup"
  }
}


function ternaryTeenager(age) {
  if (age >=13 && age <=19) {
    return "You are a teenager"
  }
  else {
    return "You are not a teenager"
  }
}

function switchAge(age) {
  switch(age) {
    case "happy":
      return "Dance to Pharrell's 'Happy'"
    default:
      return "I don't recognize that mood."
  }
}
