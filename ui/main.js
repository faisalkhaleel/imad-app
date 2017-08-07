//Counter code
var button =document.getElementbyId('counter');

button.onclick=function () {
    
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the variable in the correct span
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    // Not done yet
    
};
// Make the request
request.open('GET', 'http://faisalkhaleel.imad.hasura-app.io/counter', true);
request.send(null);
};