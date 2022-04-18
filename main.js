// import JSConfetti from 'js-confetti'

// const jsConfetti = new JSConfetti()

// jsConfetti.addConfetti()




const threeLetterWords = [
  {
    word: 'CAT',
    l1: 'C',
    l2: 'A',
    l3: 'T',
    pic: 'word-pics/cat.png'
  },
  {
    word: 'DOG',
    l1: 'D',
    l2: 'O',
    l3: 'G',
    pic: 'word-pics/dog.png'
  },
  {
    word: 'ARM',
    l1: 'A',
    l2: 'R',
    l3: 'M',
    pic: 'word-pics/arm.png'
  },
  {
    word: 'EAT',
    l1: 'E',
    l2: 'A',
    l3: 'T',
    pic: 'word-pics/eat.png'
  },
  {
    word: 'HAT',
    l1: 'H',
    l2: 'A',
    l3: 'T',
    pic: 'word-pics/hat.png'
  },
  {
    word: 'BAD',
    l1: 'B',
    l2: 'A',
    l3: 'D',
    pic: 'word-pics/bad.png'
  },
  {
    word: 'VAN',
    l1: 'V',
    l2: 'A',
    l3: 'N',
    pic: 'word-pics/van.jpg'
  },
  {
    word: 'RUB',
    l1: 'R',
    l2: 'U',
    l3: 'B',
    pic: 'word-pics/rub.png'
  },
  {
    word: 'ZIP',
    l1: 'Z',
    l2: 'I',
    l3: 'P',
    pic: 'word-pics/zip.jpg'
  },
  {
    word: 'RUN',
    l1: 'R',
    l2: 'U',
    l3: 'N',
    pic: 'word-pics/run.png'
  },
  {
    word: 'FLY',
    l1: 'F',
    l2: 'L',
    l3: 'Y',
    pic: 'word-pics/fly.png'
  },
  {
    word: 'MAN',
    l1: 'M',
    l2: 'A',
    l3: 'N',
    pic: 'word-pics/man.png'
  },
  {
    word: 'HIS',
    l1: 'H',
    l2: 'I',
    l3: 'S',
    pic: 'word-pics/his.jpg'
  },
  {
    word: 'HER',
    l1: 'H',
    l2: 'E',
    l3: 'R',
    pic: 'word-pics/her.jpg'
  },
  {
    word: 'YOU',
    l1: 'Y',
    l2: 'O',
    l3: 'U',
    pic: 'word-pics/you.png'
  },
]








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

})

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

// store the avatar and name
let currentUser = {
  name: "user",
  avatarSRC: "avatars/blank.png",
  score: 0
}

//? ===== AVATARS ====== //
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
// TODO 
// 5. update words spelled correctly (missing the first one)

const playerProfilePicBtn = document.querySelector('#small-player-pic')
const playerProfileDiv = document.querySelector('#player-profile')
const closePlayerProfile = document.querySelector('#closePPBtn')
const backgroundFade = document.querySelector('#background-fade')


// open the player profile div
playerProfilePicBtn.addEventListener('click', () => {
  playerProfileDiv.style.width = '500px';
  playerProfileDiv.style.padding = '25px'
  backgroundFade.classList.toggle('background-fade')
})

// close the player profile div
closePlayerProfile.addEventListener('click', () => {
  playerProfileDiv.style.width = '0';
  playerProfileDiv.style.padding = '0'
  backgroundFade.classList.toggle('background-fade')
})





// .addEventListener('click', function() {
//   console.log('hello');
//   document.querySelector(".instructions").style.display = "none"
//   document.querySelector("#animated-cat").style.display = "flex"
// })


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
  console.log(wordObj.word)
  console.log(wordObj.l1)
  console.log(wordObj.l2)
  console.log(wordObj.l3)

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


let resetMovableLetters = () => {
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



////! THIS DOES NOT WORK BELOW!!!! FIX IT!!!
////! THIS DOES NOT WORK BELOW!!!! FIX IT!!!
// move the letters back to the original position
let resetLetters = () => {
  let winWidth = window.innerWidth/2;
  let winHeight = window.innerHeight;

  firstStartLetter.style.transform = `translate(0px, 0px)`
  secondStartLetter.style.transform = `translate(0px, 0px)`
  thirdStartLetter.style.transform = `translate(0px, 0px)`
}





function checkWinner() {
  if (firstCorrectLetter.classList.contains('correct-bg') && 
      secondCorrectLetter.classList.contains('correct-bg') && 
      thirdCorrectLetter.classList.contains('correct-bg')) {
      
        congratsPage.classList.remove('invisible')
        congratsPage.classList.add('visible')
        // add a point to the current user's score
        currentUser.score++

        // update score on congrats page
        document.querySelector("#correct").innerText = currentUser.score


        ////! Profile section updates
        // update the score in the profile section
        document.querySelector('.total-words').innerText = currentUser.score
        
        document.querySelector('#stars-ul').innerHTML = ''

        // update filled stars...
        
        for (i=1; i<=currentUser.score; i++) {
          console.log('new star')
          let starLi = document.createElement('li')
          starLi.innerHTML = `<i class="fas fa-star"></i>`
          document.querySelector('#stars-ul').appendChild(starLi)
        }

        // update unfilled stars
        let blankStarCount = 10 - currentUser.score
        
        for (i=1; i<=blankStarCount; i++) {
          console.log('new blank star')
          let blankStar = document.createElement('li')
          blankStar.innerHTML = `<i class="far fa-star"></i>`
          document.querySelector('#stars-ul').append(blankStar)
        }

        // check all learned words for the Current word being spelled. 
        allLearnedWords.push(currentWord)


        for (let i=0; i<allLearnedWords.length; i++) {
          // console.log('all learned words', allLearnedWords)
          // console.log('current woord ', currentWord)
          if (allLearnedWords[i] !== currentWord || allLearnedWords.length === 1) {
            let li = document.createElement('li')
            console.log(currentWord)
            li.innerText = currentWord/// what's the word?
            document.querySelector('#word-list').appendChild(li)
          } else {
            allLearnedWords.pop()
            // console.log('allLW', allLearnedWords)
          }
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
  event.target.setAttribute('data-x', 0)
  event.target.setAttribute('data-y', 0) 
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









