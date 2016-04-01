function login(){
  $( document ).ready(function() {
    var Username = document.getElementById('UserName').value;
    var pwd = document.getElementById('pwd').value;
  alert(Username+"   "+pwd);


send login info to server && server tell correctness 
});


window.location = "http://www.w3schools.com";
}
    function sendXHR(verb, resource, body, cb) {
      var xhr = new XMLHttpRequest();
      xhr.open(verb, resource);


      switch (typeof(body)) {
        case 'undefined':
          // No body to send.
          xhr.send();
          break;
        case 'string':
          // Tell the server we are sending text.
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
          xhr.send(body);
          break;
        case 'object':
          // Tell the server we are sending JSON.
          xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          // Convert body into a JSON string.
          xhr.send(JSON.stringify(body));
          break;
        default:
          throw new Error('Unknown body type: ' + typeof(body));
      }

    }
