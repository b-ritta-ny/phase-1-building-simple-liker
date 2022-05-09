// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errMsg = document.querySelector('#modal')
errMsg.className = 'hidden'
document.addEventListener('DOMContentLoaded', () => {

  const hearts = document.querySelectorAll('span.like-glyph')
  console.log(hearts)



  const likeCallback = (hearts) => {
    mimicServerCall()
      .then(() => {
        if (hearts.target.innerText === EMPTY_HEART) {
          hearts.target.innerText = FULL_HEART
        } else if (hearts.target.innerText === FULL_HEART) {
          hearts.target.innerText = EMPTY_HEART
        }
      })
      .catch(() => {
        const errMsg = document.querySelector('#modal')
        errMsg.className = 'show'

        setTimeout(() => {
          const errMsg = document.querySelector('#modal')
          errMsg.className = 'hidden'
        }, 3000)
      }
      )
  }
  hearts.forEach(hearts => hearts.addEventListener('click', likeCallback));
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
