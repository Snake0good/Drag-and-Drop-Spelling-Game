

function checkWinner() {
    let answersSpaceBG = document.querySelectorAll('.letter-zone')
    if (answersSpaceBG[0].classList.contains('correct-bg') && answersSpaceBG[1].classList.contains('correct-bg') && answersSpaceBG[2].classList.contains('correct-bg')) {
        document.querySelector(".congrats").style.display = "flex"
        document.querySelector("#correct").innerText = "1"
    }
}


const threeLetterWords = [
  {
    word: 'CAT',
    l1: 'C',
    l2: 'A',
    l3: 'T'
  },
  {
    word: 'DOG',
    l1: 'D',
    l2: 'O',
    l3: 'G'
  },
  {
    word: 'ARM',
    l1: 'A',
    l2: 'R',
    l3: 'M'
  },
  {
    word: 'LOG',
    l1: 'L',
    l2: 'O',
    l3: 'G'
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


// go to the next Page with avatar selection
storeUserBtn.addEventListener('click', () => {
  let userName = userNameInput.value;
  console.log(userName);

  // show the User Name on the Avatar page
  showUserNameAvatar.innerText = userName;

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
  avatarSRC: "avatars/blank.png"
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

// get a new word from the threeLetterWords
let getNewWord = () => {
  let random = Math.floor(Math.random() * threeLetterWords.length);
  
  console.log(threeLetterWords[random])
  let wordObj = threeLetterWords[random]
  console.log(wordObj.word)
  console.log(wordObj.l1)
  console.log(wordObj.l2)
  console.log(wordObj.l3)
}


nextWordBtn.addEventListener('click', () => {
  getNewWord();
})







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

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}


// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    // accept: '#yes-drop',
    accept: '.drag-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
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
      event.relatedTarget.classList.remove('can-drop')
    //   event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      //event.relatedTarget.textContent = 'correct';
      console.log(event.target.textContent.trim());
      console.log(event.relatedTarget.textContent.trim());


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
  
  interact('.drag-drop')
    .draggable({
    //   inertia: true,
    //   modifiers: [
    //     interact.modifiers.restrictRect({
    //       restriction: 'parent',
    //       endOnly: true
    //     })
    //   ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })












// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener



