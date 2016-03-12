var test = require('tape');
var deltaify = require('../');

test('Default values', function(t) {
  t.plan(5);
  var d;
  var i = 0;

  var f = deltaify(function(delta) {
    t.ok(Number.isFinite(delta));

    if ((++i) === 5) {
      clearInterval(d);
    }
  });

  d = setInterval(f, 100);

});
