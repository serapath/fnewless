module.exports = fnewless

function fnewless (ctor) {
  // @TODO: enable objects/functions to inherit from other objects/functions
  function CTOR () {
    if (typeof ctor.prototype === 'function') {
      var self = function () { return CTOR.prototype.apply(self, arguments) }
      self.__proto__ = CTOR.prototype
      Object.defineProperty(self, 'constructor', ctorProp)
    } else {
      var self = Object.create(CTOR.prototype, { constructor: ctorProp })
    }
    ctor.apply(self, arguments)
    return self
  }
  const ctorProp = {
    value: CTOR,
    enumerable: false,
    writable: true,
    configurable: true
  }
  CTOR.prototype = ctor.prototype
  return CTOR
}
