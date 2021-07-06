console.log('hello world')
const hazards = document.querySelector('.recentEarthquakes')
const button = document.querySelector('.button');

button.addEventListener('click', function (){ 
    if (hazards.style.display !== 'none'){
        button.innerHTML = "Show"

        hazards.style.display = "none"; 
        
    }
     else {
        hazards.style.display = 'block';
        button.innerHTML = "Hide"

    }
    console.log('working!')

}); 

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