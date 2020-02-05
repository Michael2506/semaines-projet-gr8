/* var list = document.getElementById('progress'),
    next = document.getElementById('next'),
    clear = document.getElementById('clear'),
    children = list.children,
    completed = 1;

// simulate activating a node
next.addEventListener('click', function() {
    
    // count the number of completed nodes.
    completed = (completed === 0) ? 1 : completed + 2;
    if (completed > children.length) return;
    
    update();
    
}, false);

clear.addEventListener('click', function() {  
    completed -= 2;

    update();
}, false);

function update() {
  console.log(completed)
    
    for (var i = 0; i < children.length; i++) {

      if (i < completed) {
        children[i].children[0].classList.remove('grey');
        children[i].children[0].classList.add('green');
        
        if (i % 2 === 0) {
            children[i].children[0].classList.add('activated');            
        }
      } else {
        children[i].children[0].classList.add('grey');
        children[i].children[0].classList.remove('green');
        
        if (i % 2 === 0) {
            children[i].children[0].classList.remove('activated');            
        }
      }
      
  }
} */

//Change Pattern

var buttonWave = document.querySelector('#add');
var sweatWaves = document.querySelector('.custom__secondChoice--picture--wave');

buttonWave.addEventListener('click', function() {
  sweatWaves.classList.add('active');
});

var buttonNone = document.querySelector('#none');

buttonNone.addEventListener('click', function() {
  sweatWaves.classList.remove('active');
});

