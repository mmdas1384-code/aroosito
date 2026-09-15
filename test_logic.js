const assert = require('assert');
const { categories, initialVendors, initialChecklist, initialBudgetItems, initialGuests, articles } = require('./src/data.js');

console.log('Testing data exports...');
assert.strictEqual(Array.isArray(categories), true, 'Categories should be an array');
assert.strictEqual(categories.length > 0, true, 'Categories should not be empty');
assert.strictEqual(Array.isArray(initialVendors), true, 'Vendors should be an array');
assert.strictEqual(initialVendors.length > 0, true, 'Vendors should not be empty');
assert.strictEqual(Array.isArray(initialChecklist), true, 'Checklist should be an array');
assert.strictEqual(Array.isArray(initialBudgetItems), true, 'Budget items should be an array');
assert.strictEqual(Array.isArray(initialGuests), true, 'Guests should be an array');
assert.strictEqual(Array.isArray(articles), true, 'Articles should be an array');

console.log('Testing Budget Calculations...');
const totalBudget = 500000000;
const totalActual = initialBudgetItems.reduce((acc, item) => acc + item.actualAmount, 0);
assert.strictEqual(typeof totalActual, 'number', 'Total actual budget must be a number');
assert.strictEqual(totalBudget - totalActual > 0, true, 'Remaining budget calculation check');

console.log('Testing Guest List Statistics...');
const totalGuestsCount = initialGuests.reduce((acc, g) => acc + 1 + (parseInt(g.plusOnes) || 0), 0);
assert.strictEqual(totalGuestsCount >= initialGuests.length, true, 'Total guests count should include plus ones');

console.log('All automated logic tests passed successfully!');
