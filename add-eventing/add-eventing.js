function addEventing (obj) {
  let events = {};

  obj.on = (eventName, fn) => {
    if (events[eventName]) {
      events[eventName].push(fn)
    } else {
      events[eventName] = [fn]
    }
  }
  obj.trigger = (eventName, ...args) => {
    events[eventName].forEach(fn => fn(...args))
  }

  return obj
};

let obj = addEventing({ name: 'John', age: 35 });

obj.on('ageChange', function() {
  console.log('age changed');
});

obj.trigger('ageChange');

module.exports = addEventing
