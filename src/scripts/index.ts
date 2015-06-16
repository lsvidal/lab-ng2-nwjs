'use strict';

import msg = require('./msg');
import $ = require('jquery');

window.onload = function () {	
	//var doc = document.getElementById('info');
	//doc.innerHTML = msg.getMessage('Leonardo');
	$('#info').innerHTML = msg.getMessage('Leonardo');
};
