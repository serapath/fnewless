module.exports = fnewless

function fnewless (ctor) {
  // @TODO: enable objects/functions to inherit from other objects/functions
  const CTOR = (typeof ctor.prototype === 'function') ? function CTOR () {
    const self = function () { return ctor.prototype.apply(self, arguments) }
    self.__proto__ = ctor.prototype
    return finalize(self, arguments)
  } : function CTOR () {
    const self = Object.create(ctor.prototype)
    return finalize(self, arguments)
  }
  CTOR.prototype = ctor.prototype
  return CTOR
  function finalize (self, args) {
    Object.defineProperty(self.__proto__, 'constructor', {
      value: CTOR, enumerable: false, writable: true, configurable: true
    })
    ctor.apply(self, args)
    return self
  }
}
