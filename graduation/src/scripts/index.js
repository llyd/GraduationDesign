
(function (window) {
'use strict';

function add(arr){
	var arr1 = arr.reduce(pow);
	return arr1;
}
// function pow(x){
// 	return x * x;
// }

function pow(a,b){
	return a+b;
}

exports.add = add;

}());
