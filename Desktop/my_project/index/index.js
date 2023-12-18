const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

document.getElementById("form").addEventListener("click",
function(event){
  event.preventDefault()
});

name.oninput = function(){
  {
      if(name.value.length > 0)
          name.style.border = "4px solid yellow";
      }

  }
  email.oninput = function(){
    {
        if(email.value.length > 0)
            email.style.border = "4px solid yellow";
        }

    }
    form.onclick = function(){
              form.style.background = "yellow";
              form.style.border = "none"

      }

