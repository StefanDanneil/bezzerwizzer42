(function(){
	const Category = require('./category');

	changeCategory = function () {
		console.log('I have been called');
		let el = document.getElementById('category');
		el.textContent = Category.getRandom();
	}

	changeCategory();
})();