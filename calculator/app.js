// Grab Elements
const body = document.querySelector('body');
const subscreen = document.querySelector('#subscreen');
const screen = document.querySelector('#screen');
const rowOne = document.querySelector('#rowOne');
const rowTwo = document.querySelector('#rowTwo');
const rowThree = document.querySelector('#rowThree');
const rowFour = document.querySelector('#rowFour');
const rowFive = document.querySelector('#rowFive');
let worldEnd = 0;
const endIt = document.querySelector('#endIt');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const thanos = document.querySelector('#thanos')
const resetButton = document.querySelector('#resetButton');
const calc = document.querySelector('#calculator');

const commentArray = [
  "Way to go Morty!",
  "You've destroyed the ENTIRE UNIVERSE.",
  "I will create another, but I won't be able to again.",
  "Here. We have to start from scratch in my image.",
  "Mortal!",
  "You have destroyed my inheret kingdom.",
  "Now I must be prison to this void.",
  "You will certainly suffer for eternity.",
  "The hardest choices require the strongest wills.",
  "Your optimism is misplaced.",
  "With a simple equation, balance has been restored.",
  "I doubt they will remember you."
];

function destroy(a, b, c, d, e, f, g) {
  frstNum = '0';
  worldEnd += 1;
  first.textContent = commentArray[a];
  second.textContent = commentArray[b];
  third.textContent = commentArray[c];
  fourth.textContent = commentArray[d];
  endIt.classList.remove('cloak');
  body.classList.add('blackout');
  body.classList.remove('rickWP', 'NWOWP');
  calc.classList.add('cloak');
  first.classList.add('first');
  second.classList.add('second');
  third.classList.add('third');
  fourth.classList.add(e);
  resetButton.classList.add(f);
  thanos.classList.add(g)
}

// Key Variables
let zero = '0';
let frstNum = '';
screen.textContent = zero;
subscreen.textContent = zero;
let opporator = '';
let opporatorVisual = '';
let scndNum = '';

// Create Buttons
const btnLabel = [
  {
    text: 'C',
    value: ''
  },
  {
    text: '√',
    value: 'Math.sqrt()'
  },
  {
    text: '%',
    value: '/100'
  },
  {
    text: '÷',
  },
  {
    text: '7',
  },
  {
    text: '8',
  },
  {
    text: '9',
  },
  {
    text: 'x',
  },
  {
    text: '4',
  },
  {
    text: '5',
  },
  {
    text: '6',
  },
  {
    text: '-',
  },
  {
    text: '1',
  },
  {
    text: '2',
  },
  {
    text: '3',
  },
  {
    text: '+',
  },
  {
    text: '0',
  },
  {
    text: '.',
  },
  {
    text: '=',
  }
];

function mkBtns (text) {
  for( var i in btnLabel ) {
    if ( i < 4 ) {
      const mkBtn = document.createElement('button');
      mkBtn.textContent = btnLabel[i].text;
      rowOne.appendChild(mkBtn);
    } else if( i < 8 ) {
      const mkBtn = document.createElement('button');
      mkBtn.textContent = btnLabel[i].text;
      rowTwo.appendChild(mkBtn);
    } else if( i < 12 ) {
      const mkBtn = document.createElement('button');
      mkBtn.textContent = btnLabel[i].text;
      rowThree.appendChild(mkBtn);
    } else if( i < 16 ) {
      const mkBtn = document.createElement('button');
      mkBtn.textContent = btnLabel[i].text;
      rowFour.appendChild(mkBtn);
    } else {
      const mkBtn = document.createElement('button');
      mkBtn.textContent = btnLabel[i].text;
      rowFive.appendChild(mkBtn);
    }
  }
}
mkBtns();

// Grabbing Buttons into Array
const btns = document.querySelectorAll('button');

// Assigning Initial Classes
let btnClass = 'brndsd';
let bodyClass = `${btnClass}WP`;
let leadClass = `${btnClass}lead`;
let oppClass = `${btnClass}opp`;
let spcfcClass = `${btnClass}oppsel`;
const bClassArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

for(var i = 0; i < btns.length; i++ ) {
  btns[i].classList.add(bClassArray[i]);
}

function rmvIndvdlClass() {
  for(var i = 0; i < btns.length; i++ ) {
    btns[i].classList.remove(bClassArray[i]);
    btns[i].classList.add('buttons');
  }
}

function setClass() {
  for(var i = 0; i < btns.length; i++ ) {
    body.classList.add(bodyClass);

    if(i===0 || i===1 || i===2) {
      btns[i].classList.add(leadClass);
    }
    if (i===3 || i===7 || i===11 || i===15 || i===18){
      btns[i].classList.add(oppClass);
    }
    if(i===4 || i===5 || i===6 || i===8 || i===9 || i===10 || i===12 || i===13 || i===14 || i===16 || i===17) {
      btns[i].classList.add(btnClass);
    }
  }
}

setClass();

function remover() {
  for(var i = 0; i < btns.length; i++ ) {
    body.classList.remove(bodyClass);

    if(i===0 || i===1 || i===2) {
      btns[i].classList.remove(leadClass);
    }
    if (i===3 || i===7 || i===11 || i===15 || i===18){
      btns[i].classList.remove(oppClass);
    }
    if(i===4 || i===5 || i===6 || i===8 || i===9 || i===10 || i===12 || i===13 || i===14 || i===16 || i===17) {
      btns[i].classList.remove(btnClass);
    }
  }
}

btns[16].classList.add('zero');

// Clear Selected Class
function removeSelectedClass() {
  for( var i = 0; i < btns.length; i++) {
    btns[i].classList.remove(spcfcClass);
  }
}

// Add Selected Class
function addSelectedClass(q) {
  btns[q].classList.add(spcfcClass);
}

// Functioning Calculator
for( var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {

    // Opperator Safe Check
    function opporatorSafe( q, z, r ) {
      if( frstNum === '' ) {
        opporator = '';
      } else {
        opporator = q;
        opporatorVisual = r;
        removeSelectedClass(spcfcClass);
        addSelectedClass(z);
        subscreen.textContent = frstNum + opporatorVisual + scndNum;
      }
    }

    // Clear Button
    if( this.innerHTML === 'C' ) {
      frstNum = '';
      subscreen.textContent = zero;
      screen.textContent = zero;
      opporator = '';
      opporatorVisual = '';
      scndNum = '';
      removeSelectedClass(spcfcClass);
    }

    // Opporators

    // Percent
    else if( this.innerHTML === '%' ) {
      opporatorSafe( '/100*', 2, ' % of ' );
    }

    // Multiply
    else if( this.innerHTML === 'x' ){
      opporatorSafe( '*', 7, ' x ' );
    }

    // Divide
    else if( this.innerHTML === '÷' ){
      opporatorSafe( '/', 3, ' ÷ ' );
    }

    // Addition
    else if( this.innerHTML === '+' ){
      opporatorSafe( '+', 15,  ' + ' );
    }

    // Subtraction
    else if( this.innerHTML === '-' ){
      opporatorSafe( '-', 11, ' - ' );
    }

    // Decimal Check
    else if( this.innerHTML === '.') {
      if( frstNum.includes('.') && opporator === '' ) {
        frstNum += '';
      } else if( scndNum.includes('.') ) {
        scndNum += '';
      } else if ( zero === screen.textContent && opporator === '' ) {
        frstNum = '0.';
        screen.textContent = frstNum;
      } else if (frstNum === screen.textContent && opporator === '') {
        frstNum += btns[17].innerHTML;
        screen.textContent = frstNum;
      } else if (scndNum === '') {
        scndNum += '0.';
        screen.textContent = scndNum;
      } else {
        scndNum += btns[17].innerHTML;
        screen.textContent = scndNum;
      }
    }

    // Square Root
    else if( this.innerHTML === '√' ) {
      let sqrRt;
      if( frstNum === screen.textContent ) {
        subscreen.textContent = `√${frstNum}`;
        sqrRt = Math.sqrt(+frstNum);
        frstNum = `${sqrRt}`;
        screen.textContent = frstNum;
      } else {
        subscreen.textContent = `${frstNum}${opporatorVisual}√${scndNum}`;
        sqrRt = Math.sqrt(+scndNum);
        scndNum = `${sqrRt}`;
        screen.textContent = scndNum;
      }
    }

    // Solve
    else if( this.innerHTML === '=' ) {
      function solve() {
        let opporationVisual = frstNum + opporatorVisual + scndNum;
        subscreen.textContent = opporationVisual;
        let opporation = frstNum + opporator + scndNum;
        let solution = eval(opporation);
        frstNum = `${solution}`;
        screen.textContent = frstNum;
        opporator = '';
        opporatorVisual = '';
        scndNum = '';
        removeSelectedClass(spcfcClass);
      }

      if(frstNum === '') {
        frstNum = '0';
        solve();

      } else if(opporator === "/" && scndNum === "0") {
        if(worldEnd === 0 ) {
          destroy(0, 1, 2, 3, 'fourth-a', 'reset-a', 'cloak');
        } else if(worldEnd === 1 ) {
          destroy(4, 5, 6, 7, 'fourth-a', 'reset-b', 'cloak');
        } else if(worldEnd === 2 ) {
          iconArray[0].classList.remove('apear', 'disapear');
          destroy(8, 9, 10, 11, 'fourth-b', 'cloak', 'thanos');
        }
        solve();
        frstNum = '0';

      } else {
        solve();
      }
    }

    // Numbers to Variables
    else if( opporator === '' ) {
      frstNum += this.innerHTML;
      screen.textContent = frstNum;
      subscreen.textContent = frstNum + opporatorVisual + scndNum;
    } else {
      scndNum += this.innerHTML;
      screen.textContent = scndNum;
      subscreen.textContent = frstNum + opporatorVisual + scndNum;
    }
  });
}

// Icon Selection
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');
const iconArray = document.querySelectorAll('svg');
let slide = 1;

function addCloak() {
  for(var i = 0; i < iconArray.length; i++) {
    iconArray[i].classList.add('disapear');
    iconArray[i].classList.remove('apear');
  }
}

addCloak();

function removeCloak(q) {
  iconArray[q].classList.remove('disapear');
  iconArray[q].classList.add('apear');
}

removeCloak(1);

function cycleClass(q) {
  btnClass = q;
  bodyClass = `${btnClass}WP`;
  leadClass = `${btnClass}lead`;
  oppClass = `${btnClass}opp`;
  spcfcClass = `${btnClass}oppsel`;
}

function chunk (q, r) {
  slide = q;
  addCloak();
  removeCloak(q);
  remover();
  cycleClass(r);
  setClass();
}

function cycleRight() {
  if(slide === 1) {
    rmvIndvdlClass();
    chunk(2, 'futurR');
  } else if(slide === 2) {
    chunk(3, 'iosR');
  } else if(slide === 3) {
    chunk(4, 'classicR');
  } else {
    chunk(1, 'brndsdR')
  }
}

rightButton.addEventListener('click', cycleRight);

function cycleLeft(){
  if(slide === 1) {
    rmvIndvdlClass();
    chunk(4, 'classicL');
  } else if(slide === 4) {
    chunk(3, 'iosL');
  } else if(slide === 3) {
    chunk(2, 'futurL');
  } else {
    chunk(1, 'brndsdL')
  }
}

leftButton.addEventListener('click', cycleLeft);

// Divided by Zero
function prerevive() {
  endIt.classList.add('cloak');
  body.classList.remove('blackout');
  calc.classList.remove('cloak');
  first.classList.remove('first');
  second.classList.remove('second');
  third.classList.remove('third');
  fourth.classList.remove('fourth-a');
  resetButton.classList.remove('reset-a','reset-b');
  thanos.classList.remove('cloak')
  for(var i = 0; i < btns.length; i++ ) {
    btns[i].classList.add(bClassArray[i]);
  }
  frstNum = '';
  subscreen.textContent = zero;
  screen.textContent = zero;
  opporator = '';
  opporatorVisual = '';
  scndNum = '';
  removeSelectedClass(spcfcClass);
}

function revival(){
  prerevive();
  if(worldEnd === 1) {
    leftButton.classList.add('cloak');
    rightButton.classList.add('cloak');
    chunk(5, 'rick');
  } else if(worldEnd === 2) {
    chunk(6, 'NWO');
  }
}

resetButton.addEventListener('click', revival);
