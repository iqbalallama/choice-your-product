function isAdd(isIncrease){
    const inputs = document.getElementById('input');
    const inputV = inputs.value;
    const inputP = parseFloat(inputV);
    let value;
    if(isIncrease){
        value = inputP + 1;
    }else{
        if(inputP <= 0){
            value = 0
        }else{
            value = inputP - 1;
        }
    }
    inputs.value = value;
    const price = value * 45;
    document.getElementById('para').innerText = price;
}
document.getElementById('minus').addEventListener('click',function(){
    isAdd(false)
})
document.getElementById('plus').addEventListener('click',function(){
    isAdd(true)
})

const type = new Typed('.text',{
    strings : ['T-Shirt','Product'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
})
let image = document.getElementById('image');
const btn = document.getElementsByClassName('btn');

btn[0].onclick = function(){
    image.src = 'images/312858982_2165078280340079_1312798471102825984_n.jpg'
    for(let bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active');
}
btn[1].onclick = function(){
    image.src = 'images/IMG-20230508-WA0003.jpg'
    for(let bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active');
}
btn[2].onclick = function(){
    image.src = 'images/IMG-20230508-WA0024.jpg'
    for(let bt of btn){
        bt.classList.remove('active');
    }
    this.classList.add('active');
}