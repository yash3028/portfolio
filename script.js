var links=document.getElementsByClassName("link");
var linkcontains=document.getElementsByClassName("link-contains");
function opentab(funcname){
    for(i of links){
        i.classList.remove("active-link");
    }
    for(j of linkcontains){
        j.classList.remove("active-contains");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(funcname).classList.add("active-contains");
}

var side=document.getElementById(menu);
    function openmenu() {
        side.style.right="0"
    }
    function closemenu(){
        side.style.right="-200px"
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyEhBx7UjGKciXcTmI_LEAl2Vjfp96VPhOiZ3xUHEx242nF3Vtvm7sBWVVFOQe_nxVOMQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Received Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
