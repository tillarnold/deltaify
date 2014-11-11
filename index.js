module.exports = function deltaify(f, thisValue) {

  var time = Date.now();

  return function deltaifiedFunction() {
    var newTime = Date.now();
    f.call(thisValue, newTime - time);
    time = newTime;
  };

};
