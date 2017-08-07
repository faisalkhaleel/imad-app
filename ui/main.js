//Counter code
var button = document.getElementbyId('counter');
var counter = 0;
button.onclick = function () {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the variable in the correct span
    counter = counter +1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    // Not done yet
    
};
// Make the request
