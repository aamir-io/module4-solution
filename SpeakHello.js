// NOTE: The helloSpeaker object is attached to the global object (window)
(function (window) {
  var helloSpeaker = {};
  
  // Define the speak method for helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };
  
  // Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);
