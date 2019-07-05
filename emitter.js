function Emitter() {
  this.events = {}
};

// create a listener

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
};

// if something happened
Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener){
      listener();
    });
  }
}

module.exports = Emitter;
