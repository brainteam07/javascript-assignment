

(function (){

    window.onload = function () {

        const form = document.querySelector(".form")

        form.addEventListener('submit', function (e){
            e.preventDefault()

            const message = document.querySelector('.message');
            const feedback = document.querySelector('.show');
            const messageContent = document.querySelector('.input-text');

            if (message.value === ''){
                feedback.textContent = "please Enter the text !!!";
                feedback.style.color = "red";
                setTimeout(function(){
                    feedback.textContent ='last message delivered ';
                    feedback.style.color = "black";
                },3000)
            }
                else
                {
                    messageContent.textContent = message.value;
                    message.value = '';
                }

            })
            
        }
    })()
        
        