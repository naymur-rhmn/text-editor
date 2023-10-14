const typographiesElem = document.getElementById('typographies');
const alignmentsElem = document.getElementById('alignments');
const boldElem = document.getElementById('bold');
const italicElem = document.getElementById('italic');
const underlineElem = document.getElementById('underline');

const selectElem = document.getElementById('font-size');
const textColorElem = document.getElementById('text-color');
const textEditor = document.getElementById('textarea');

// event dalegation on typographiesElem
typographiesElem.addEventListener('click', function (e) {
  // set delegate permision only children
  if (e.target.matches('.typography')) {
    // set style and return boolean value
    const toggle = toggleTypoSelect(e.target);
    // get specific element id
    const typoElemId = e.target.getAttribute('id');
    // apply style based on condition for bold
    if (typoElemId === 'bold' && toggle) {
      textEditor.style.fontWeight = 'bold';
    } else if (typoElemId === 'bold' && !toggle) {
      textEditor.style.fontWeight = 'normal';
    }
    // apply style based on condition for italic
    if (typoElemId === 'italic' && toggle) {
      textEditor.style.fontStyle = 'italic';
    } else if (typoElemId === 'italic' && !toggle) {
      textEditor.style.fontStyle = 'normal';
    }
    // apply style based on condition for underline
    if (typoElemId === 'underline' && toggle) {
      textEditor.style.textDecoration = 'underline';
    } else if (typoElemId === 'underline' && !toggle) {
      textEditor.style.textDecoration = 'none';
    }
  }
});

// event dalegation on alignmentsElem
alignmentsElem.addEventListener('click', function (e) {
  // remove selected class from every elements
  let selected = this.getElementsByClassName('selected');
  for (const element of selected) {
    element.classList.remove('selected');
  }
  // set delegate permision only children
  if (e.target.matches('.icon')) {
    // get specific element id
    const alignElemId = e.target.getAttribute('id');
    // add class to the element
    e.target.classList.add('selected');
    // set text align styles specificly
    if (alignElemId === 'left-align') {
      textEditor.style.textAlign = 'left';
    } else if (alignElemId === 'center-align') {
      textEditor.style.textAlign = 'center';
    } else if (alignElemId === 'right-align') {
      textEditor.style.textAlign = 'right';
    } else if (alignElemId === 'justify-align') {
      textEditor.style.textAlign = 'justify';
    }
  }
});

// add event listener on select option
selectElem.addEventListener('click', function () {
  let fontSize = selectElem.value;
  // set font size
  textEditor.style.fontSize = fontSize;
});

// add event listener on color input
const colorInput = document.getElementById('color-gen');
colorInput.addEventListener('input', function () {
  const selectedColor = colorInput.value;
  textEditor.style.color = selectedColor;
  textColorElem.style.color = selectedColor;
});
// colorInput.addEventListener('click', function () {
//   colorInput.style.display = 'none';
// });

function toggleTypoSelect(event) {
  if (!event.style.backgroundColor) {
    event.style.backgroundColor = '#9dbfeb';
    event.style.color = '#455364';
    return true;
  } else {
    event.style.backgroundColor = '';
    event.style.color = 'black';
    return false;
  }
}
