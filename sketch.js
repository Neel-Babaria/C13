var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
  input = createInput()
  input.position(5,16)
  heading = createElement('h4','Enter any letter in the alphabet')
  heading.position(5,15)
  textAlign(CENTER)
  textSize(50)
}

function draw() {
  const value = input.value()
  switch(value) {
    case 'a':console.log('vowel');
    break;

    case 'e':console.log('vowel');
    break;

    case 'i':console.log('vowel');
    break;

    case 'o':console.log('vowel');
    break;

    case 'u':console.log('vowel');
    break;

    default:
      console.log('please enter any other character')
  }
}