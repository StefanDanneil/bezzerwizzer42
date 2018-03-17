(function(){
	const Styles = require('./styles/main.scss');
	const Category = require('./category/');

	changeCategory = function () {
		let el = document.getElementById('category-name');
		el.parentElement.classList.toggle('flipped');

		for (var i = 1; i < 4; i++) {
	    	setTimeout(function () {
	    		el.textContent = Category.getRandom();
    		}, 400*i);
		}

	}

	document.getElementById('category-name').textContent = Category.getRandom();
})();