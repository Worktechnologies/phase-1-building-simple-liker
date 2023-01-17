// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartSpans=document.querySelectorAll("span.like-glyph");
heartSpans.forEach(heartSpans => heartSpans.addEventListener('click',function()
{
  mimicServerCall()
  .then((res)=> {
    const newContent=heartSpans.textContent ===FULL_HEART?EMPTY_HEART:FULL_HEART;
    heartSpans.classList.toggle('activated-heart')
  })
  .catch((err)=>
  {
    const errormodal=document.getElementById("modal")
    console.log(errormodal);
    const errorMessageHolder=document.getElementById("modal-message");
    errormodal.classList.remove("hidden");
    errorMessageHolder.textContent=err;
    setTimeout(()=>{
      errormodal.classList.add("hidden");
    },3000);
  });
}))



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
