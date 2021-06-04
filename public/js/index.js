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
document.getElementById('eqdescription').onscroll = function()
{myFaunction()};
function myFaunction() {
    document.getElementById('eqdescription').innerHTML = "HELOO"
}