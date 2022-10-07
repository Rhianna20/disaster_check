console.log('hello world')
const hazards = document.querySelector('.recentEarthquakes')
const factButton = document.getElementById('factButton');
const hourButton = document.getElementById('hourButton')
const dayButton = document.getElementById('dayButton')
const weekButton = document.getElementById('weekButton')
const monthButton = document.getElementById('monthButton')


factButton.addEventListener('click', function (){ 

    if (hazards.style.display !== 'none'){

        factButton.innerHTML = "Click" 
        hazards.style.display = "none";   
        
       
    
    }
     else {
        hazards.style.display = 'block';
        factButton.innerHTML = "Hide"
        

    }
  
    console.log('working!')

}); 

 window.onload = hourButton.addEventListener('click', function (){
    hourButton.style.backgroundColor = '#B8860B'
    hourButton.preventDefault();
  
}) 
dayButton.addEventListener('click', function (){
    dayButton.style.backgroundColor = '#B8860B'
    dayButton.preventDefault()
   
}) 
weekButton.addEventListener('click', function (){
    weekButton.style.backgroundColor = '#B8860B'
    weekButton.preventDefault()
    
}) 
 monthButton.addEventListener('click', function (){
     monthButton.style.backgroundColor = '#B8860B'
monthButton.preventDefault()
   
 }) 

document.addEventListener('scroll', reveal);



function reveal(){
    document.getElementById('revealInfo').innerHTML = " HBFCIJDKNBHGVYHBJN"
    console.log('Any luck??')

}

// document.getElementById('eqdescription').onscroll = myFunction()
// {myFunction()};
// function myFunction() {
//     document.getElementById('eqdescription').innerHTML = "HELOO"
// }