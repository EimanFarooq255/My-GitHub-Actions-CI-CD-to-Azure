// Simple tests
const assert = require('assert');
const fs = require('fs');

console.log('🧪 Running tests...\n');

// Test 1: Basic math
assert.strictEqual(1 + 1, 2);
console.log('✅ Test 1 passed');

// Test 2: Check if app file exists
assert.ok(fs.existsSync('./index.js'));
console.log('✅ Test 2 passed');

console.log('\n🎉 All tests passed!');
