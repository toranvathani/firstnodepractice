//deepStrictEqual
const assert = require('assert').strict;
 
try {
    assert.deepStrictEqual({ a: 1 }, { a: '1' });
} catch(error) {
    console.log("Error: ", error)
}

//DoesNotThrow 
const assert = require('assert').strict; 

try { 
	assert.doesNotThrow( 
		() => { 
		throw new TypeError('Wrong value'); 
		}, 
	); 
} catch(error) { 
	console.log("Error:", error) 
} 
