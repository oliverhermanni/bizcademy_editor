'use strict';

/* getObjects
 * finds key-value pair in objects.
 */
function getObjects(obj, key, val) {
	var objects = [];
	for (var i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getObjects(obj[i], key, val));
			obj[i].index = i; // Index
		} else if (i == key && obj[key] == val) {
			objects.push(obj);
		}
	}
	return objects;
};