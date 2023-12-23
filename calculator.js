function numberInput(number){
 document.getElementById('display').value += number
}
function operatorInput(operator){
    document.getElementById('display').value += operator 
    console.log('abebe')
}
function calculator(){
 let resultInput = document.getElementById('display').value 
   let result = eval(resultInput)
   document.getElementById('display').value = result 
}
function clearInput(){
    document.getElementById('display').value =''
}