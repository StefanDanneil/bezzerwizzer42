(function(){
	const Styles = require('./styles/main.scss');
	const Category = require('./category/');

	changeCategory = function () {
		let el = document.getElementById('category-name');
		el.textContent = Category.getRandom();
	}

	changeCategory();
})();