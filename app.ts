const t = {a: 'ok', b: 'nok'};
const u = {...t};

const test = document.getElementsByTagName('body')[0];
const div = document.createElement('div');
div.innerHTML = JSON.stringify(u);
test.appendChild(div);

console.log(u);
