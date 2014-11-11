var deltaify = require('../');

var f = function(delta) {
  console.log(delta);
};
var d = deltaify(f);
var x = deltaify(f);


setInterval(x, 100);

var button = document.createElement('button');
button.innerHTML = "run";
document.body.appendChild(button);
button.addEventListener('click', function() {
  d();
});
