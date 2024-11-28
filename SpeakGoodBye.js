// NOTE: The goodbyeSpeaker object is attached to the global object (window)
(function (window) {
  var byeSpeaker = {};
  
  // Define the speak method for byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };
  
  // Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;
})(window);
