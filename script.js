//array with laughter sounds
const laughs = [
  {
    name: 'intenseLaugh',
    sound: './laughs/big-intense-laugh.mp3',
  },
  {
    name: 'bigLaugh',
    sound: './laughs/big-laugh.mp3',
  },
  {
    name: 'manLaugh',
    sound: './laughs/man-laugh.mp3',
  },
  {
    name: 'shortIntenseLaugh',
    sound: './laughs/short-intense-laugh.mp3',
  },
  {
    name: 'shortLaugh',
    sound: './laughs/short-laugh.mp3',
  },

  {
    name: 'sneakyLaugh',
    sound: '.laughs/sneaky-laugh.mp3',
  },
  {
    name: 'womanLaugh',
    sound: './laughs/woman-laugh.mp3',
  },
];

// const laughter = document.querySelectorAll('.laugh-audio');

const laughter = document.querySelector('source');

const main = document.querySelector('main');

//creating a button
const createButton = () => {
  const button = document.createElement('button');
  button.innerHTML = 'Make me laugh';
  main.append(button);
  return button;
};
//puts the function createButton in the variable button
const button = createButton();

//starts on index 0 in the array
let currentLaughIndex = 0;

//when clicking on the button a laughter plays and when clicking again another laughter plays. The Laughters are stored in a laughs array.

button.addEventListener('click', () => {
  const audio = document.querySelector('audio');
  laughter.src = laughs[currentLaughIndex].sound;
  currentLaughIndex++;
  audio.load();
  audio.play();
  if (currentLaughIndex > laughs.length - 1) {
    currentLaughIndex = 0;
  }
});

const body = document.querySelector('body');

//mobile version
const mobileVersion = () => {
  if (window.innerWidth < 500) {
    //when hovering over the button mouth images are randomly displayed
    button.addEventListener('click', () => {
      for (i = 0; i < 2; i++) {
        const mouth = document.createElement('img');
        mouth.src = './images/mouth.png';
        mouth.classList.add('mouth');
        mouth.style.top = Math.random() * window.innerHeight + 'px';
        mouth.style.left = Math.random() * window.innerWidth + 'px';
        mouth.style.width = Math.random() * (100 + 100) + 'px';
        body.appendChild(mouth);
      }
    });
  } else {
    //when hovering over the button mouth images are randomly displayed
    button.addEventListener('mouseover', () => {
      for (i = 0; i < 2; i++) {
        const mouth = document.createElement('img');
        mouth.src = './images/mouth.png';
        mouth.classList.add('mouth');
        mouth.style.top = Math.random() * window.innerHeight + 'px';
        mouth.style.left = Math.random() * window.innerWidth + 'px';
        mouth.style.width = Math.random() * (100 + 100) + 'px';
        body.appendChild(mouth);
      }
    });
  }
};
mobileVersion();

// button.addEventListener('mouseleave', () => {
//   const mouths = document.querySelectorAll('mouth');
//   mouths.remove;
// });

// heading.addEventListener('mouseleave', () => {
//   console.log('hej');
//   //   heading.style.color = 'rgb(239, 133, 205)';
// });

// heading.addEventListener('mouseover', () => {
//   heading.style.color = heading.dataset.color;
// });
// heading.addEventListener('mouseleave', () => {
//   heading.style.color = 'rgb(239, 133, 205)';
// });

//colors array

// const heading = document.querySelector('h1');
// const colors = ['black', 'red'];

// const changeColor = () => {
//   for (i = 0; i < colors.length; i++) {
//     heading.addEventListener('mouseover', () => {
//       heading.style.color = colors[i];
//     });
//   }
// };

// changeColor();

// var colours = ['#CCCDFF', '#BAC7E8', '#D9EEFF', '#BADFE8'];

// for (i = 0; i < colors.length; i++) {
//   heading.addEventListener('mouseover', () => {
//     heading.style.color = colors;
//   });
// }

// colors.forEach((color) => {
//   heading.style.color = color;
//   // console.log(color[0]);
// });

// console.log(colors);
// button.forEach(butt => {
//   butt.addEventListener("click", () => {
//     audio.play();
// });

// colors.forEach(function (color, index) {
//   heading.addEventListener('click', function () {});
//   console.log(color);
// });

// colors.forEach((color, index) => {
//   heading.addEventListener('mouseover', () => {
//     heading.style.color = color[0];
//   });
// });
