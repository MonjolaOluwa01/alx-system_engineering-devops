const form = document.getElementById('form')
const firstname = document.getElementById('firstname');
const submitBtn = document.getElementById('submitBtn');
const email = document.getElementById("email");
const message = document.getElementById("message");


form.addEventListener('submit' , (e) => {
                
                    e.preventDefault();
        

                checkInputs();
            });

            firstname.oninput = function(){
                {
                    if(firstname.value.length > 0)
                        firstname.style.border = "4px solid yellow";
                    }

                }
                        email.oninput = function(){
                            {
                                if(email.value.length > 0)
                                    email.style.border = "4px solid yellow";
                                }
                            }
                            message.oninput = function(){
                                {
                                    if(message.value.length > 0)
                                        message.style.border = "4px solid yellow";
                                    }
                                }
                
                            submitBtn.onclick = function(){
                                if(firstname.value.length > 0 && email.value.length > 0 && message.value.length > 0)
                                {
                                  submitBtn.innerHTML = "Successful";
                                }
                                else{
                                    submitBtn.innerHTML = "Inputs cannot be empty";
                                }
                            }