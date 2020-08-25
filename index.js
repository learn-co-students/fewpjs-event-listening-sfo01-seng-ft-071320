function addingEventListener() {
    //node that will be listening, stored in input
    const input = document.getElementById('input');
    //invoking addEventListener on the node we want to listen
    // first arument is event name to listen for
    //second argument function(event) is callback function
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});
}
