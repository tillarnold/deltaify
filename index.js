module.exports = function deltaify(f, thisValue) {

  var time = Date.now();

  return function deltaifiedFunction() {
    var newTime = Date.now();
    var args = Array.prototype.slice.call(arguments);
    args.unshift(newTime - time);
    var ret = f.apply(thisValue, args);
    time = newTime;
    return ret;
  };

};
