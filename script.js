const subhanAllahCount = document.getElementById('subhan-count');
const subhanAllahIncrement = document.getElementById('btn-subhan-inc');
const subhanAllahDecrement = document.getElementById('btn-subhan-dec');
const alhamdulillahCount = document.getElementById('alhamdulillah-count');
const alhamdulillahIncrement = document.getElementById('btn-alhamdulillah-inc');
const alhamdulillahDecrement = document.getElementById('btn-alhamdulillah-dec');
const allahuAkbarCount = document.getElementById('allahu-akbar-count');
const allahuAkbarIncrement = document.getElementById('btn-allahu-akbar-inc');
const allahuAkbarDecrement = document.getElementById('btn-allahu-akbar-dec');
const resetButton = document.getElementById('btn-reset');

let subhanAllahInitialValue = 0;
let alhamdulillahInitialValue = 0;
let allahuAkbarInitialValue = 0;

subhanAllahIncrement.addEventListener('click', function(){
    if(subhanAllahInitialValue === 10){
        return alert('Subhan Allah Complete');
    }
    subhanAllahInitialValue ++;
    subhanAllahCount.innerText = subhanAllahInitialValue;
});
subhanAllahDecrement.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert('You cant add negative value');
    }
    subhanAllahInitialValue --;
    subhanAllahCount.innerText = subhanAllahInitialValue;
});

alhamdulillahIncrement.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 10){
        return  alert('Alhamdulillah Complete');
    }
    alhamdulillahInitialValue ++;
    alhamdulillahCount.innerText = alhamdulillahInitialValue;
});
alhamdulillahDecrement.addEventListener('click', function(){
    if(alhamdulillahInitialValue === 0){
        return  alert('You cant add negative value');
    }
    alhamdulillahInitialValue --;
    alhamdulillahCount.innerText = alhamdulillahInitialValue;
});

allahuAkbarIncrement.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 10){
        return alert('Allahu Akbar Complete');
    }
    allahuAkbarInitialValue ++;
    allahuAkbarCount.innerText = allahuAkbarInitialValue;
});
allahuAkbarDecrement.addEventListener('click', function(){
    if(allahuAkbarInitialValue === 0){
        return alert('You cant add negative value');
    }
    allahuAkbarInitialValue --;
    allahuAkbarCount.innerText = allahuAkbarInitialValue;
});


resetButton.addEventListener('click', function(){
    subhanAllahCount.innerText = '0';
    alhamdulillahCount.innerText = '0';
    allahuAkbarCount.innerText = '0';
    subhanAllahInitialValue = 0;
    alhamdulillahInitialValue = 0;
    allahuAkbarInitialValue = 0;
});