// import {one as first, two} from './main';
import * as data from './main.js';
import sayHi from './main.js'; // не как именнованная, а напрямую экспортируется

console.log(`${data.one} and ${data.two}`);
sayHi();