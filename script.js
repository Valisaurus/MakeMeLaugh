//array with objects with laughter sounds
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
    name: 'womanLaugh',
    sound: './laughs/woman-laugh.mp3',
  },
];

const laughter = document.querySelector('source');

const div = document.querySelector('.card-item');

//creating a button
const createButton = () => {
  const button = document.createElement('button');
  button.innerHTML = 'Make me laugh';
  button.style.cursor = 'pointer';
  div.appendChild(button);
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
const mobileOrDesktop = () => {
  if (window.innerWidth < 500) {
    //when clicking the button mouth images are randomly displayed
    button.addEventListener('click', () => {
      for (i = 0; i < 2; i++) {
        const mouth = document.createElement('img');
        mouth.src = './images/mouth.png';
        mouth.classList.add('mouth');
        mouth.style.position = 'absolute';
        mouth.style.top = Math.random() * (window.innerHeight - 180) + 'px';
        mouth.style.left = Math.random() * (window.innerWidth - 180) + 'px';
        mouth.style.width = Math.random() * (100 + 100) + 'px';
        body.appendChild(mouth);
      }
    });
  } else {
    //desktop version
    //when hovering over the button mouth images are randomly displayed
    button.addEventListener('mouseover', () => {
      for (i = 0; i < 2; i++) {
        const mouth = document.createElement('img');
        mouth.src = './images/mouth.png';
        mouth.classList.add('mouth');
        mouth.style.position = 'absolute';
        mouth.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        mouth.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        mouth.style.width = Math.random() * (100 + 100) + 'px';
        body.appendChild(mouth);
      }
    });
  }
};
mobileOrDesktop();

//changes background image depending on screen size (mobile or desktop)
const backgroundImages = () => {
  if (window.innerWidth < 500) {
    document.body.style.backgroundImage = "url('/svg/laughs-hahax640w.svg')";
  } else {
    document.body.style.backgroundImage = "url('/svg/laughs-hahax1585w.svg')";
  }
};
backgroundImages();
