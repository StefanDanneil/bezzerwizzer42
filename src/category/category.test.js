const Category = require('./');

test('It should return a valid string when randomizing', () => {
	expect(typeof Category.getRandom()).toBe('string');
});

test('It should not return the same value every time', () => {
	let results = [];

	for (var i = 0; i < 10; i++) {
		results.push(Category.getRandom());
	}

	//remove all duplicates
	results = results.filter(function(item, pos, self) {
	    return self.indexOf(item) == pos;
	})

	expect(results.length).toBeGreaterThan(1);
});