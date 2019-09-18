import './index.less';
import { sum } from '../../common/kuwoJsApi';
// es6 -> es5
const oDiv = document.createElement('div');
oDiv.innerHTML = 'index.html'
document.body.appendChild(oDiv);


console.log('index.js', sum(1, 3))