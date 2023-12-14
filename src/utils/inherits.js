import { isFunction } from "./validate";

// https://github.com/isaacs/inherits/blob/main/inherits_browser.js
export const inherits = (() => {
  if (isFunction(Object.create)) {
    return function (ctor, superCtor) {
        if(superCtor) {
            ctor.prototype = Object.create(superCtor.prototype, {
                constructor: {
                    value: ctor,
                    enumerable: false,
                    writable: true,
                    configurable: true,
                }
            })
        }
    }
  } else {
    return function(ctor, superCtor) {
        if(superCtor) {
            const TempCtor = function() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
        }
    }
  }
})();
