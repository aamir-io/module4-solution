

---

### 

# Assignment: Greeting and Farewell Application

This is a simple JavaScript-based web application that prints out a greeting or farewell message based on the first letter of a name. If the name starts with the letter "J" or "j", it says "Goodbye", otherwise, it says "Hello".

## Files Overview
1. **goodbye.js**: Contains the `byeSpeaker` object that prints "Goodbye [name]" for names starting with "J" or "j".
2. **hello.js**: Contains the `helloSpeaker` object that prints "Hello [name]" for all other names.
3. **script.js**: Main JavaScript file that loops through an array of names and calls either the `byeSpeaker.speak` or `helloSpeaker.speak` method based on the first letter of the name.

## Project Structure
```
/project-folder
  |-- goodbye.js
  |-- hello.js
  |-- script.js
  |-- index.html
  |-- README.md
```

## How to Run the Project

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:
   ```
   cd your-repository
   ```

3. Open the `index.html` file in your browser. The console will display the greeting and farewell messages.

## Code Explanation

### **goodbye.js**
Defines the `byeSpeaker` object that contains the `speak` method to log "Goodbye [name]" for names starting with "J" or "j".

```javascript
(function (window) {
  var byeSpeaker = {};
  
  byeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };
  
  window.byeSpeaker = byeSpeaker;
})(window);
```

### **hello.js**
Defines the `helloSpeaker` object that contains the `speak` method to log "Hello [name]" for all other names.

```javascript
(function (window) {
  var helloSpeaker = {};
  
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };
  
  window.helloSpeaker = helloSpeaker;
})(window);
```

### **script.js**
Contains the array of names and logic that determines whether to call `helloSpeaker.speak` or `byeSpeaker.speak` based on the first letter of the name.

```javascript
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
```
