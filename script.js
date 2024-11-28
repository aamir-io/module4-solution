// STEP 1: Create an array of names
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP 2: Loop through the array
for (var i = 0; i < names.length; i++) {
    // STEP 3: Retrieve the first letter of each name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 4: Compare the first letter and call the appropriate speak function
    if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
    } else {
        helloSpeaker.speak(names[i]);
    }
}
