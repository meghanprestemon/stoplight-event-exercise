(function() {
  'use strict';

//----BUTTONS----
  let stopButton = document.querySelector('#stopButton');
  let slowButton = document.querySelector('#slowButton');
  let goButton = document.querySelector('#goButton');
  let buttons = document.querySelectorAll('.button');
  let buttonsDiv = document.querySelector('#controls')

//----LIGHTS----
  let stopLight = document.querySelector('#stopLight');
  let slowLight = document.querySelector('#slowLight');
  let goLight = document.querySelector('#goLight');

//----CLICK HANDLERS----

  stopButton.addEventListener('click', function () {
    stopLight.classList.toggle('stop');
  });

  slowButton.addEventListener('click', function () {
    slowLight.classList.toggle('slow');
  });

  goButton.addEventListener('click', function () {
    goLight.classList.toggle('go');
  });

//----MOUSE HANDLERS----

  for (var i = 0; i < buttons.length; i++) {
    var currButton = buttons[i];
    currButton.addEventListener('mouseenter', function (event) {
      console.log('Entered ' + event.target.textContent + ' button');
    });
  }

  for (var i = 0; i < buttons.length; i++) {
    var currButton = buttons[i];
    currButton.addEventListener('mouseleave', function (event) {
      console.log('Left ' + event.target.textContent + ' button');
    });
  }

//----BONUS: STATE OF BULB----

  buttonsDiv.addEventListener('click', function (event) {
    if (event.target !== event.currentTarget) {

      if (event.target === stopButton) {
        if (stopLight.classList.contains('stop')) {
          console.log(event.target.textContent + ' bulb on');
        } else {
          console.log(event.target.textContent + ' bulb off');
        }
      } else if (event.target === slowButton) {
        if (slowLight.classList.contains('slow')) {
          console.log(event.target.textContent + ' bulb on');
        } else {
          console.log(event.target.textContent + ' bulb off');
        }
      } else if (event.target === goButton) {
        if (goLight.classList.contains('go')) {
          console.log(event.target.textContent + ' bulb on');
        } else {
          console.log(event.target.textContent + ' bulb off');
        }
      }

    }
  });

})();
