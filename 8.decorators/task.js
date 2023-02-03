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
    wrapper.allCount += 1;

    if (!timeoutId) {
      timeoutId = setTimeout(() => func(...args), 0);
      wrapper.count += 1;
    } else {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      wrapper.count += 1;
      func(...args);
    }, delay);
  }

  return wrapper;
}