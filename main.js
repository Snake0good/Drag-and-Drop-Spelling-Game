// set up the list of words
const threeLetterWords = [
  {
    word: 'CAT',
    l1: 'C',
    l2: 'A',
    l3: 'T',
    pic: 'images/cat.png'
  },
  {
    word: 'DOG',
    l1: 'D',
    l2: 'O',
    l3: 'G',
    pic: 'images/dog.png'
  },
  {
    word: 'ARM',
    l1: 'A',
    l2: 'R',
    l3: 'M',
    pic: 'images/arm.png'
  },
  {
    word: 'EAT',
    l1: 'E',
    l2: 'A',
    l3: 'T',
    pic: 'images/eat.png'
  },
  {
    word: 'HAT',
    l1: 'H',
    l2: 'A',
    l3: 'T',
    pic: 'images/hat.png'
  },
  {
    word: 'BAD',
    l1: 'B',
    l2: 'A',
    l3: 'D',
    pic: 'images/bad.png'
  },
  {
    word: 'VAN',
    l1: 'V',
    l2: 'A',
    l3: 'N',
    pic: 'images/van.png'
  },
  {
    word: 'RUB',
    l1: 'R',
    l2: 'U',
    l3: 'B',
    pic: 'images/rub.png'
  },
  {
    word: 'ZIP',
    l1: 'Z',
    l2: 'I',
    l3: 'P',
    pic: 'images/zip.png'
  },
  {
    word: 'RUN',
    l1: 'R',
    l2: 'U',
    l3: 'N',
    pic: 'images/run.png'
  },
  {
    word: 'FLY',
    l1: 'F',
    l2: 'L',
    l3: 'Y',
    pic: 'images/fly.png'
  },
  {
    word: 'MAN',
    l1: 'M',
    l2: 'A',
    l3: 'N',
    pic: 'images/man.png'
  },
  {
    word: 'HIS',
    l1: 'H',
    l2: 'I',
    l3: 'S',
    pic: 'images/his.png'
  },
  {
    word: 'HER',
    l1: 'H',
    l2: 'E',
    l3: 'R',
    pic: 'images/her.png'
  },
  {
    word: 'YOU',
    l1: 'Y',
    l2: 'O',
    l3: 'U',
    pic: 'images/you.png'
  },
  {
    word: 'BEE',
    l1: 'B',
    l2: 'E',
    l3: 'E',
    pic: 'images/bee.png'
  },
  {
    word: 'BAT',
    l1: 'B',
    l2: 'A',
    l3: 'T',
    pic: 'images/bat.png'
  },
  {
    word: 'COW',
    l1: 'C',
    l2: 'O',
    l3: 'W',
    pic: 'images/cow.png'
  },
  {
    word: 'AGE',
    l1: 'A',
    l2: 'G',
    l3: 'E',
    pic: 'images/age.png'
  },
  {
    word: 'EAR',
    l1: 'E',
    l2: 'A',
    l3: 'R',
    pic: 'images/ear.png'
  },
  {
    word: 'JOY',
    l1: 'J',
    l2: 'O',
    l3: 'Y',
    pic: 'images/joy.png'
  },
  {
    word: 'GEM',
    l1: 'G',
    l2: 'E',
    l3: 'M',
    pic: 'images/gem.png'
  }
]


// store the avatar and name
let currentUser = {
  name: "user",
  avatarSRC: "avatars/blank.png",
  score: 0, 
  stars: 0,
  superStars: 0
}

//! ===== Introduction Page Follow the Cursor ==== //
let buzzingBee = document.querySelector('#flying-bee')

const moveBuzzingBee = (e) => {
  buzzingBee.style.left = (e.pageX) + 'px';
  buzzingBee.style.top = (e.pageY - 110) + 'px';
}

document.addEventListener('mousemove', moveBuzzingBee)

const introductionPage = document.querySelector('#introduction-page')

document.querySelector('#intro-page-btn').addEventListener('click', () => {
  // move to next page (the name page)
  introductionPage.style.display = 'none'
  avatarSelectionPage.style.display = 'none';
  enterNamePage.style.display = 'flex';
  instructionsPage.style.display = 'none';
  gamePlayPage.style.display = 'none';
})


//! ======= Name Page Elements and Handling ====== //
// get the name of the user
const userNameInput = document.querySelector('#user-name-input');
// click next and save the user-name
const storeUserBtn = document.querySelector('#name-next');
// back button on Avatar page
const backBtnAvatarPage = document.querySelector('#avatar-back');

// select the Places to SHOW THE USER NAME
const showUserNameAvatar = document.querySelector('#user-name');

// Page Selections
const avatarSelectionPage = document.querySelector('#avatar-page');
const enterNamePage = document.querySelector('#name-page')
const instructionsPage = document.querySelector("#instructions")
const gamePlayPage = document.querySelector("#game-page")
const congratsPage = document.querySelector(".congrats-page")

// go to the next Page with avatar selection
storeUserBtn.addEventListener('click', () => {
  openAvatarSelectionPage()
})

// open the avatar selection page
function openAvatarSelectionPage() {
  currentUser.name = userNameInput.value;

  // show the User Name on the Avatar page
  showUserNameAvatar.innerText = currentUser.name;

  // store the User Name on the Profile page
  document.querySelector('.profile-name').innerText = currentUser.name

  // move to next page (the avatar selection page)
  avatarSelectionPage.style.display = 'flex';
  enterNamePage.style.display = 'none';
  instructionsPage.style.display = 'none';
  gamePlayPage.style.display = 'none';
  console.log('clicked small player pic next button', document.querySelector('#small-player-pic'))
  document.querySelector('#small-player-pic').style.display = 'inline';
}

// go back to the Name page
backBtnAvatarPage.addEventListener('click', () => {
  avatarSelectionPage.style.display = 'none';
  enterNamePage.style.display = 'flex';
  instructionsPage.style.display = 'none';
  gamePlayPage.style.display = 'none';
})








//! ======= Avatar Page Elements and Handling ====== //

// store the avatar
// user avatar picture
const userAvatarPicuter = document.querySelector("#user-avatar") 

// next button on Avatar Page 
const nextButtonAvatarPage = document.querySelector("#avatar-next");




//! ===== AVATARS ====== //
// selecting user avatars
let userAvatar = document.querySelector('#user-avatar');
let avatarSelection = document.getElementsByName('avatar')

function chooseAvatar() {
  for(let i=0; i<avatarSelection.length; i++) {
    avatarSelection[i].addEventListener('click', function() {
      if (avatarSelection[i].checked) {
        // get the user choice picture
        let choice = avatarSelection[i].id
        userAvatar.src = `avatars/${choice}.png`
      }
    });
  }
}

// if the avatar page is up run this code for avatar selection
chooseAvatar();

// save the name and picture on the NEXT button click
nextButtonAvatarPage.addEventListener('click', () => {
  // store name and avatar pic
  currentUser.name = showUserNameAvatar.innerText;
  //console.log('currentUserName ' + currentUser.name);
  currentUser.avatarSRC = userAvatar.src
  //console.log('avatarSRC ' + currentUser.avatarSRC);

  // save the avatar picture in the Profile Images
  document.querySelector('#small-player-pic').src = userAvatar.src;
  document.querySelector('#medium-player-pic').src = userAvatar.src;

  // display the instructions page
  avatarSelectionPage.style.display = 'none';
  enterNamePage.style.display = 'none';
  instructionsPage.style.display = 'flex';
  gamePlayPage.style.display = 'none';
})







//! ============ DIRECTIONS PAGE elements and handling ========== //
// close instructions button
const closeDirectionsBtn = document.querySelector("#instructions-next")

closeDirectionsBtn.addEventListener('click', () => {
  // close the instructions page
  // display the gameplay page
  avatarSelectionPage.style.display = 'none';
  enterNamePage.style.display = 'none';
  instructionsPage.style.display = 'none';
  gamePlayPage.style.display = 'flex';

  // make the congrats page display(able) - not yet though
  congratsPage.style.display = 'flex'
})



//! =========== Player Profile Handling ============= //
const playerProfilePicBtn = document.querySelector('#small-player-pic')
const playerProfileDiv = document.querySelector('#player-profile')
const closePlayProBtn = document.querySelector('#closePPBtn')
const backgroundFade = document.querySelector('#background-fade')


// open the player profile div
playerProfilePicBtn.addEventListener('click', () => {
  console.log('clicked playprofile pic btn')
  openPlayerProfile()
})

function openPlayerProfile() {
  playerProfileDiv.style.width = '500px';
  playerProfileDiv.style.padding = '25px'
  backgroundFade.classList.toggle('background-fade')
}

// close the player profile div
closePlayProBtn.addEventListener('click', () => {
  closePlayerProfile()
})

function closePlayerProfile() {
  playerProfileDiv.style.width = '0';
  playerProfileDiv.style.padding = '0'
  backgroundFade.classList.toggle('background-fade')
}


// update the about me section
let updateSaveBtn = document.querySelector('#about-me-btn')

updateSaveBtn.addEventListener('click', () => { 
  // grab the current about me and name
  let currentAboutMe = document.querySelector('#aboutMe').innerText
  let currentName = document.querySelector('.profile-name').innerText

  if (updateSaveBtn.innerText === 'Update') {
    // clear out the old aboutMe
    document.querySelector('#aboutMe').innerText = ''
    // clear old name
    document.querySelector('.profile-name').innerText = ''
  
    // create new elements to type New Names and about me
    let aboutMeInput = document.createElement('textarea');
    let newNameInput = document.createElement('input');

    // update the classLists and populate with old values
    newNameInput.classList.add('new-name-textbox');
    newNameInput.value = currentName;
    document.querySelector('.profile-name').appendChild(newNameInput)

    aboutMeInput.classList.add('about-me-textbox')
    aboutMeInput.value = currentAboutMe;
    document.querySelector('#about-me-div').appendChild(aboutMeInput)

    // change the text of the button
    updateSaveBtn.innerText = 'Save'
  } else if (updateSaveBtn.innerText === 'Save') {
   // now save the info that the user just populated
   // the name
   console.log(document.querySelector('.new-name-textbox'))
   console.log(document.querySelector('.about-me-textbox'))

   document.querySelector('.profile-name').innerText = document.querySelector('.new-name-textbox').value;
  //  document.querySelector('.new-name-textbox').remove();
   
   // the about me
    document.querySelector('#aboutMe').innerText = document.querySelector('.about-me-textbox').value
    document.querySelector('.about-me-textbox').remove()
    
    // change save button name
    updateSaveBtn.innerText = 'Update'
  }
})

// update the Profile Picture from the Profile sideview
document.querySelector('#medium-player-pic').addEventListener('click', () => {
  console.log('clicked the medium player pic')
  openAvatarSelectionPage();  
  closePlayerProfile();
})





//! ======== Game Handling ========== //
// on the click of Next Word get a new word
// next word btn
const nextWordBtn = document.querySelector('#next-word');

// select the divs where the LETTERS will be PLACED 
let firstCorrectLetter = document.querySelector('.first-letter')
let secondCorrectLetter = document.querySelector('.second-letter')
let thirdCorrectLetter = document.querySelector('.third-letter')

let firstStartLetter = document.querySelector('.first-start-letter');
let secondStartLetter = document.querySelector('.second-start-letter');
let thirdStartLetter = document.querySelector('.third-start-letter');


// Declare a CURRENT-WORD to add to the profile page and such
let currentWord = 'CAT'
let allLearnedWords = []

// get a new word from the threeLetterWords
let getNewWord = () => {
  let random = Math.floor(Math.random() * threeLetterWords.length);
  
  console.log(threeLetterWords[random])
  let wordObj = threeLetterWords[random]
  // clear the currentWord
  currentWord = ''
  // store the chosen word in the current word
  currentWord = wordObj.word

  // replace the correct letters with the NEW WORD letters
  firstCorrectLetter.innerText = wordObj.l1;
  secondCorrectLetter.innerText = wordObj.l2;
  thirdCorrectLetter.innerText = wordObj.l3;

  // a random (kinda) order of the numbers 1-3
  let arr = [wordObj.l1, wordObj.l2, wordObj.l3];
  let shuffledArr = arr.sort((a, b) => Math.random() - 0.5)
  console.log(shuffledArr)

  // replace the starting letters with a random assortment of letters
  firstStartLetter.innerText = shuffledArr[0];
  secondStartLetter.innerText = shuffledArr[1];
  thirdStartLetter.innerText = shuffledArr[2];

  // replace the picture with a new one
  console.log(wordObj.pic)
  document.querySelector('#animated-pic').src = wordObj.pic
}


const resetMovableLetters = () => {
  // remove all the correct and incorrect backgrounds
  firstCorrectLetter.classList.remove('incorrect-bg');
  firstCorrectLetter.classList.remove('correct-bg');
  secondCorrectLetter.classList.remove('incorrect-bg');
  secondCorrectLetter.classList.remove('correct-bg');
  thirdCorrectLetter.classList.remove('incorrect-bg');
  thirdCorrectLetter.classList.remove('correct-bg');
}

nextWordBtn.addEventListener('click', () => {
  getNewWord();
  resetMovableLetters(); 
  
  
  // make the Congrats Page disappear
  congratsPage.classList.add('invisible')
  congratsPage.classList.remove('visible')
  // reset the positions of the thre new letters;

  // console.log(winHeight);
  resetLetters()
})




// move the letters back to the original position
let resetLetters = () => {
  let winWidth = window.innerWidth/2;
  let winHeight = window.innerHeight;

  firstStartLetter.style.transform = `translate(0px, 0px)`
  secondStartLetter.style.transform = `translate(0px, 0px)`
  thirdStartLetter.style.transform = `translate(0px, 0px)`

  firstStartLetter.setAttribute('data-x', 0)
  firstStartLetter.setAttribute('data-y', 0)
  secondStartLetter.setAttribute('data-x', 0)
  secondStartLetter.setAttribute('data-y', 0)
  thirdStartLetter.setAttribute('data-x', 0)
  thirdStartLetter.setAttribute('data-y', 0)
}



// load the winning sound
const winSound = new Audio('congrats-sound.m4a')

function checkWinner() {
  if (firstCorrectLetter.classList.contains('correct-bg') && 
      secondCorrectLetter.classList.contains('correct-bg') && 
      thirdCorrectLetter.classList.contains('correct-bg')) {

        // show the confetti on a successful spelling
        initConfetti();
        // play winner's sound
        winSound.play()
 
        congratsPage.classList.remove('invisible')
        congratsPage.classList.add('visible')

        // add a point to the current user's score and start count
        currentUser.score++
        currentUser.stars++

        // update score on congrats page
        document.querySelector("#correct").innerText = currentUser.score

        ////! Profile section updates
        // update the score in the profile section
        document.querySelector('.total-words').innerText = currentUser.score
        
        document.querySelector('#stars-ul').innerHTML = ''

        // update filled stars
        for (i=1; i<=currentUser.stars; i++) {
          if(currentUser.stars >= 10){
            currentUser.stars = 0
            // set stars to 0 and then add a superStar
            currentUser.superStars++
            // now create a SUPER STAR on the page
            let superStarLi = document.createElement('li')
            superStarLi.innerHTML = `<i class="fas fa-trophy"></i>`
            document.querySelector('#super-stars-ul').appendChild(superStarLi)

          } else {
            console.log('new star')
            let starLi = document.createElement('li')
            starLi.innerHTML = `<i class="fas fa-star"></i>`
            document.querySelector('#stars-ul').appendChild(starLi)
          }
        }

        // update unfilled stars
        let blankStarCount = 10 - currentUser.stars
        
        for (i=1; i<=blankStarCount; i++) {
          console.log('new blank star')
          let blankStar = document.createElement('li')
          blankStar.innerHTML = `<i class="far fa-star"></i>`
          document.querySelector('#stars-ul').append(blankStar)
        }

        console.log('all learned words', allLearnedWords)
        console.log('current word ', currentWord)


        if (allLearnedWords.includes(currentWord)) {
          console.log('All Learned Words: ', allLearnedWords)
        } else {
          // check all learned words for the Current word being spelled. 
          allLearnedWords.push(currentWord)
          let li = document.createElement('li')
          li.innerText = currentWord/// what's the word?
          document.querySelector('#word-list').appendChild(li)
        }
  }
}





//! ========= Drag Handling ========= //
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: false,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
    }
  })

// set a defaul value for drag start position

// clear the attributes to reset the x and y coordinates
function endedDrag (event) {   
  console.log(event.target)     
  // event.target.setAttribute('data-x', 0)
  // event.target.setAttribute('data-y', 0) 
  // console.log(event.target)
}


function dragMoveListener (event) {
  let target = event.target

  // keep the dragged position in the data-x/data-y attributes
  let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the position attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y) 
}


// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    // accept: '#yes-drop',
    accept: '.drag-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.95,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
    //   draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.target.classList.remove('correct-bg')
      event.relatedTarget.classList.remove('can-drop')
    },
    ondrop: function (event) {
      if(event.relatedTarget.textContent.trim() == event.target.textContent.trim()) {
        event.target.classList.remove('incorrect-bg');
        event.target.classList.add('correct-bg');

      } else {
        event.target.classList.remove('correct-bg');
        event.target.classList.add('incorrect-bg');
      }  
      
      
      checkWinner();

      
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })
  
  function dragged(e) {
    e.target.style.transform = 'translate(0px, 0px)';
  }


  interact('.drag-drop')
    .draggable({
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { 
        move: dragMoveListener,
        end: endedDrag
      }
    })
















    ////! =========== CONFETTI ========== ////
    //-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 500;
const gravity = 0.5;
const terminalVelocity = 10;
const drag = 0.075;
const colors = [
{ front: 'red', back: 'darkred' },
{ front: 'green', back: 'darkgreen' },
{ front: 'blue', back: 'darkblue' },
{ front: 'yellow', back: 'darkyellow' },
{ front: 'orange', back: 'darkorange' },
{ front: 'pink', back: 'darkpink' },
{ front: 'purple', back: 'darkpurple' },
{ front: 'turquoise', back: 'darkturquoise' }];


//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
  // set the confetti so we can see it
  document.querySelector('.confetti').style.height = '100%'

  confetti = [];
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });


  }
};

//---------Render-----------
render = () => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // reset positions and velocities
    

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  window.requestAnimationFrame(render);
};

//---------Execution--------
// renders the confetti
render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});
