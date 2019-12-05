// Ex 1

const button = document.querySelector('button');

button.onclick = () => {
  alert('clicked!');

  console.dir(button);
};

// Ex 2.1 ----------------------------------------------------------------

// const button = document.querySelector('button');
//
// button.addEventListener('click', () => {
//   alert('clicked!');
// });
//
// button.removeEventListener('click', () => {
//   alert('clicked!');
// });

// Ex 2.2 ----------------------------------------------------------------

// const button = document.querySelector('button');
//
// const handleClick = (event) => {
//   console.dir(event);
//
//   event.target.classList.toggle('button--error');
//   this.removeEventListener('click', handleClick);
// };
//
// button.addEventListener('click', handleClick);

// Ex 3 ----------------------------------------------------------------

// const divs = document.querySelectorAll('div');
// const button = document.querySelector('button');
//
// button.addEventListener('click', () => {
//   console.log('Hello from: button');
// });
//
// divs.forEach((div) => {
//   div.addEventListener('click', () => {
//     console.log(`Hello from: ${div.classList[0]}`);
//   });
// });

// Ex 4 ----------------------------------------------------------------

// const button = document.querySelector('button');
//
// button.addEventListener('click', () => {
//   console.log('click');
// });
//
// button.addEventListener('mouseup', () => {
//   console.log('mouseup');
// });
//
// button.addEventListener('mousedown', () => {
//   console.log('mousedown');
// });
//
// button.addEventListener('dblclick', () => {
//   console.log('dblclick');
// });
//
// button.addEventListener('contextmenu', () => {
//   console.log('contextmenu');
// });

// Ex 5 ----------------------------------------------------------------

// const container = document.querySelector('.container');
//
// container.addEventListener('mouseover', (event) => {
//   console.log(`"mouseover": Came from ${event.relatedTarget.tagName} to ${event.target.tagName}`);
// });
//
// container.addEventListener('mouseout', (event) => {
//   console.log(`"mouseout": Came from ${event.target.tagName} to ${event.relatedTarget.tagName}`);
// });

// Ex 6 ----------------------------------------------------------------

// const container = document.querySelector('.container');
//
// container.addEventListener('mouseenter', (event) => {
//   console.log(`"mouseenter": Came from ${event.relatedTarget.tagName} to ${event.target.tagName}`);
// });
//
// container.addEventListener('mouseleave', (event) => {
//   console.log(`"mouseleave": Came from ${event.target.tagName} to ${event.relatedTarget.tagName}`);
// });

// Ex 7 ----------------------------------------------------------------

// const container = document.querySelector('.container');
// let scrolled = 0;
//
// container.addEventListener('wheel', (event) => {
//   scrolled += event.deltaY;
//
//   console.log('wheel', scrolled);
// });

// const body = document.body;
// body.style.height = '5000px';
//
// window.addEventListener('scroll', () => {
//   if ((window.innerHeight + window.pageYOffset) >= body.offsetHeight) {
//     alert("You are at the bottom of the page");
//   }
// });

// Ex 8 ----------------------------------------------------------------

// const input = document.querySelector('.input');
//
// function handleKey(event) {
//   let text = event.type +
//     ': key=' + event.key +
//     ', code=' + event.code +
//     (event.shiftKey ? ' shiftKey' : '') +
//     (event.ctrlKey ? ' ctrlKey' : '') +
//     (event.altKey ? ' altKey' : '') +
//     (event.metaKey ? ' metaKey' : '') +
//     (event.repeat ? ' (repeat)' : '') +
//     "\n";
//
//   console.log(text);
// }
//
// input.onkeydown = handleKey;
// input.onkeyup = handleKey;

// Ex 9 ----------------------------------------------------------------

// const input = document.querySelector('.input');
//
// input.addEventListener('focus', (event) => {
//   console.log('focus');
//   event.target.classList.remove('input--error');
// });
//
// input.addEventListener('blur', (event) => {
//   console.log('blur');
//
//   if (!event.target.value.length) {
//     event.target.classList.add('input--error');
//   }
// });
//
// input.addEventListener('change', (event) => {
//   console.log('change:', event.target.value);
// });
//
// input.addEventListener('input', (event) => {
//   console.log('input:', event.target.value);
// });
//
// //  window.onbeforeunload = () =>  {
// //    if (input.value.length) {
// //      return 'Are you sure?';
// //    }
// //  };

// Ex 10 ----------------------------------------------------------------

// const images = document.querySelectorAll('.images__image');
//
// images.forEach((img) => {
//   img.setAttribute('src', img.getAttribute('data-src'));
//   img.onload = () => {
//     img.removeAttribute('data-src');
//   };
//   img.onerror = () => {
//     img.setAttribute('src', 'img/error-img');
//     img.removeAttribute('data-src');
//   };
// });

// Ex 11 ----------------------------------------------------------------

// const divs = document.querySelectorAll('div');
// const button = document.querySelector('button');
//
// button.addEventListener('click', (event) => {
//   console.log('Hello from: button');
//   event.stopPropagation();
// });
//
// button.addEventListener('click', () => {
//   console.log('Hello again from: button');
// });
//
// divs.forEach((div) => {
//   div.addEventListener('click', () => {
//     console.log(`Hello from: ${div.classList[0]}`);
//   });
// });

// Ex 12 ----------------------------------------------------------------

// const table = document.querySelector('table');
// let selectedCell;
//
// table.addEventListener('click', (event) => {
//   const { target } = event;
//
//   if (target.tagName !== 'TD') return;
//
//   if (selectedCell) {
//     selectedCell.classList.remove('table__cell--active');
//   }
//
//   selectedCell = target;
//   selectedCell.classList.add('table__cell--active');
// });

// Ex 13 ----------------------------------------------------------------

// const form = document.forms.form;
//
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.dir(event.target.elements.name.value);
// });
