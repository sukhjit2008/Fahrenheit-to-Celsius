const newForm =document.querySelector('form')
const input = document.querySelector('input')

newForm.addEventListener('submit',(e)=>{
    e.preventDefault();
 
    const fahrenheitValue=+e.target.f.value;
    const formula = (fahrenheitValue-32)*5/9;
    e.target.c.value=`${(Math.ceil(formula))}c`
    

})