const typographiesElem = document.getElementById('typographies');
const alignmentsElem = document.getElementById('alignments');
const boldElem = document.getElementById('bold');
const italicElem = document.getElementById('italic');
const underlineElem = document.getElementById('underline');
const textareaElem = document.getElementById('textarea');

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
      textareaElem.style.fontWeight = 'bold';
    } else if (typoElemId === 'bold' && !toggle) {
      textareaElem.style.fontWeight = 'normal';
    }
    // apply style based on condition for italic
    if (typoElemId === 'italic' && toggle) {
      textareaElem.style.fontStyle = 'italic';
    } else if (typoElemId === 'italic' && !toggle) {
      textareaElem.style.fontStyle = 'normal';
    }
    // apply style based on condition for underline
    if (typoElemId === 'underline' && toggle) {
      textareaElem.style.textDecoration = 'underline';
    } else if (typoElemId === 'underline' && !toggle) {
      textareaElem.style.textDecoration = 'none';
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
  if (e.target.matches('.alignment')) {
    // get specific element id
    const alignElemId = e.target.getAttribute('id');
    // add class to the element
    e.target.classList.add('selected');
    // set text align styles specificly
    if (alignElemId === 'left-align') {
      textareaElem.style.textAlign = 'left';
    } else if (alignElemId === 'center-align') {
      textareaElem.style.textAlign = 'center';
    } else if (alignElemId === 'right-align') {
      textareaElem.style.textAlign = 'right';
    } else if (alignElemId === 'justify-align') {
      textareaElem.style.textAlign = 'justify';
    }
  }
});

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
