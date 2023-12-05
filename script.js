const outs = ['today it will be wonder full day','yesterday it was hot ady', 'tomorrow will e find '];
const button = document.getElementById('button-click');
button.addEventListener('click',()=>{
document.getElementById('first-id').innerHTML=outs[Math.floor(Math.random() * outs.length)]
});