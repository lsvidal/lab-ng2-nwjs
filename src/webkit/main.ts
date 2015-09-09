// import {Hello} from './hello';
// bootstrap(Hello);

import {sayHello} from './hello';

console.log('Main ok');

sayHello();

var m1 = require_node('./node/m1');
var m2 = require_node('./node/m2');

console.log(m1.getMessage());
console.log(m2.getMessage());
