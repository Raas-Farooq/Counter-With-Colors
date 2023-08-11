// const inc = document.getElementById('inc');
// const dec = document.getElementById('dec');
// const res = document.getElementById('res');

// const count = document.getElementById('count');

// function programControl (num){
//     function increase(){
//         num = num+1;
//         return num;
//     }
    

//     // num = increase()
//     // return num;
//     function decrease(){
//         num = num-1;
//         return num;
//     }
    
//     function reset(){
//         num = 0;
//         return num;
//     }
//     return {
//         increase:increase,
//         reset:reset,
//         decrease:decrease
//     }
//     // num = decrease()
//     // return num;
//  }
//  let num = 0;
// const server = programControl(num);
// function eventClicker(){
    
//     res.addEventListener('click',()=>{
//         new_value = server.reset();
//         count.textContent = new_value;
//         count.style.color = 'black';
//     })
//     inc.addEventListener('click', () => {
//         add = server.increase();
//         console.log(add);
//         count.textContent=add;
//         count.style.color= 'green';
//     })
//     dec.addEventListener('click', ()=>{
//         minus = server.decrease();
//         count.textContent=minus;
//         console.log(minus)
//         if(minus < 0){
//             count.style.color = 'red';
//         }else{
//             count.style.color = 'green';
//         }
        
//     })
    
    
// }

// eventClicker();


const show = document.querySelector('#count');
let figure = 0;

const butns = document.querySelectorAll('.btns');

butns.forEach(item =>{
    item.addEventListener('click', function(e){
        const data = (e.currentTarget.classList);

        if(data.contains('increase')){
            figure++;
            show.textContent=figure;
            show.style.color = 'green';
        }
        else if(data.contains('decrease')){
            figure--;
            show.textContent=figure;
            show.style.color='red';
        }
        else{
            figure = 0;
            show.textContent = figure;
            show.style.color = 'gold'
        }
    })

})
// """Practice of event/e/async"""

// document.querySelector('.check').addEventListener('click', async =>{
//     console.log('You clicked');
//     console.log(' Event target is: ', async.currentTarget.classList);
// })

