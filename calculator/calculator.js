const buttons = document.querySelectorAll('button');
const input = document.getElementById('input');

for(let button of buttons){
    button.addEventListener('click', (e)=>{
        const buttonText = e.target.innerText;

        if(buttonText === 'AC'){
            input.value = "";
        }
        else if(buttonText === 'x'){
            input.value += '*';
        }
        else if(buttonText === 'del'){
            input.value = input.value.slice(0,-1);
        }
        else if(buttonText === '='){
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = "invalid!" ;
            }
        }
        else{
            input.value += buttonText;
        }


    })
}
// const buttons = document.querySelectorAll('button');
// const input = document.getElementById('input');
// for(let button of buttons){
//     button.addEventListener('click', (e)=>{
//         const buttonText = e.target.innerText;

//         if(buttonText === 'AC'){
//             input.value = "";
//         }
//         else if(buttonText === 'x'){
//             input.value += '*';
//         }
//         else if(buttonText === '='){
//             try {
//                 input.value = eval(input.value);
//             } catch (error) {
//                 input.value = "Invalid Operator!";
//             }
//         }
//         else{
//             input.value += buttonText;
//         }
        
//     })
// }