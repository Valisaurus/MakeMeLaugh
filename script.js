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

//colors array
const colors = ['black', 'red'];

// const laughter = document.querySelectorAll('.laugh-audio');

const laughter = document.querySelector('source');

const main = document.querySelector('main');

// console.log(laughter);

//creating a button
const createButton = () => {
  const button = document.createElement('button');
  button.innerHTML = 'Make me laugh';
  main.append(button);
  return button;
};
const button = createButton();

//starts on index 0 in the array
let currentLaughIndex = 0;

button.addEventListener('click', () => {
  const audio = document.querySelector('audio');
  laughter.src = laughs[currentLaughIndex].sound;
  currentLaughIndex++;
  audio.load();
  audio.play();
  if (currentLaughIndex > laughs.length - 1) {
    currentLaughIndex = 0;
  }
  // console.log(laughter);
});

// const heading = document.querySelector('h1');

// heading.addEventListener('mouseover', () => {
//   heading.style.color = heading.dataset.color;
// });
// heading.addEventListener('mouseleave', () => {
//   heading.style.color = 'rgb(239, 133, 205)';
// });

const heading = document.querySelector('h1');
heading.addEventListener('mouseover', () => {
  colors.forEach((color) => {
    heading.style.color = color;
    // console.log(color[0]);
  });
});
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
