/* TODO : Can we use a regex for this instead?
Is it possible that some Json objects might be missed out? */

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const fetchJson = (input) => {
  const output = [];
  const inputArray = input.split('\n');
  inputArray.forEach((str) => {
    if (isJson(str)) {
      output.push(JSON.parse(str));
    }
  });
  return output;
};

module.exports = { fetchJson };
