# fnewless
turn a function with an object or function as it's prototype into a constructor you CAN call without new

# usage
```js
var Constructor = require('fnewless')

/******************************************************************************
  make object instances
******************************************************************************/
// make newless constructor
function CTOR_obj (x) { this.x = x }
CTOR_obj.prototype.type = 'obj'
var ctor1 = Constructor(CTOR_obj)

// make instance
var obj = ctor1('object') // or `new ctor1('object')`

// test
console.log(obj instanceof ctor1) // true
console.log(obj.constructor === ctor1) // true
console.log(obj.x) // 'object'
console.log(obj.type) // 'obj'

/******************************************************************************
  make function instances
******************************************************************************/
// make newless constructor
function CTOR_fn (x) { this.x = x }
CTOR_fn.prototype = function () { return this.x.toUpperCase() }
CTOR_fn.prototype.type = 'fn'
var ctor2 = Constructor(CTOR_fn)

// make instance
var fn = ctor2('function') // or `new ctor2('function')`

// test
console.log(fn instanceof ctor2) // true
console.log(fn.constructor === ctor2) // true
console.log(fn.x) // 'function'
console.log(fn.type) // 'fn'
console.log(fn()) // 'FUNCTION'

```
