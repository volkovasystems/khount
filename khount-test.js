const assert = require( "assert" );
const khount = require( "./khount.js" );

assert.equal( khount( { "name": "simple" } ), 1, "should have value 1" );
assert.equal( khount( [ 1, 2, 3 ] ), 4, "should have value 4" );
assert.equal( khount( { } ), 0, "should have value 0" );
assert.equal( khount( ), 0, "should have value 0" );

console.log( "ok" );
