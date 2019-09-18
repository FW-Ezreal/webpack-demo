function sum(a, b) {
  return a + b;
}

function log(data) {
  console.log(`<<%= ${data} %>`)
}

const tools = {
  sum,
  log
}

module.exports = tools;
