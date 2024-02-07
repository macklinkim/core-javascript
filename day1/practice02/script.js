const input = document.querySelector('#input');
const debounceText = document.querySelector('#debounce');
const throttleText = document.querySelector('#throttle');
const defaultsText = document.querySelector('#default');

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text;
});
const updateThrottleText = throttle((text) => {
  throttleText.textContent = text;
}, 400);

function handleDefaultText(e) {
  defaultsText.textContent = e.target.value;
  updateDebounceText(e.target.value);
}
function handleThrottleText(e) {
  defaultsText.textContent = e.target.value;
  updateThrottleText(e.target.value);
}
input.addEventListener('input', handleDefaultText);
input.addEventListener('input', handleThrottleText);

function debounce(callback, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.call(this, args);
    }, delay);
  };
}

function throttle(callback, delay = 1000) {
  let shouldThrottle = false;
  let waitingArgs;
  const timeoutFunction = () => {
    if (waitingArgs == null) {
      shouldThrottle = false;
    } else {
      callback.call(this, ...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunction, delay);
    }
  };
  return (...args) => {
    if (shouldThrottle) {
      waitingArgs = args;
      return;
    }
    callback.call(this, args);
    shouldThrottle = true;

    setTimeout(timeoutFunction, delay);
  };
}
