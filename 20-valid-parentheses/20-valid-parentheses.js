/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let b = false;
  let stack = [];

  if (s.length % 2 != 0) return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      stack.push(s[i]);
    } else {
      let lastIndex = stack.length - 1;
      if (s[i] == ')') {
        if (stack[lastIndex] === '(') {
          stack.pop();
          console.log(stack);
          console.log('stack1');
          // console.log("(pop)")
        } else {
          return false;
        }
      }
      if (s[i] == '}') {
        console.log('stack33');
        if (stack[lastIndex] === '{') {
          console.log(stack);
          console.log('stack44');
          stack.pop();
        } else {
          return false;
        }
      }

      if (s[i] == ']') {
        if (stack[lastIndex] === '[') {
          console.log(stack);
          console.log('stack3');

          stack.pop();
        } else {
          return false;
        }
      }
      console.log(stack.length);
    }
  }
  return stack.length === 0;
};
