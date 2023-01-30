'use strict'

// task 8-1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args);
    let objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args);
    cache.push({hash, result});
    if (cache.length > 5) { 
      cache.shift();
    }
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

// task 8-2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    if (!timeoutId) {
      timeoutId = setTimeout(() => func(...args), 0);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      func(...args);
    }, delay);

    wrapper.history.push(args);
    // wrapper.count
    wrapper.allCount = wrapper.history.length;
  }
  wrapper.history = [];
  
  return wrapper
}