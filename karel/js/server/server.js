function Server() {
}

Server.getProgramKey = function() {
   var hashText = window.location.hash;
   var path = hashText.split('/');
   if (path.length < 2) {
      return null;
   }
   return path[1]
}

Server.loadProgramFromHash = function(callback) {
   var programKey = Server.getProgramKey();
   var postParameters = {
      'url':programKey
   }
   $.post("http://www.stanfordkarel.appspot.com/loadRemote", postParameters,callback);
}
