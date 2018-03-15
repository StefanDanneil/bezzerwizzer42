require('./category.scss');

class Category {

	static getRandom() {
		let rand = Math.floor(Math.random() * Math.floor(Category.categories.length));
		return Category.categories[rand];
	}

}

Category.categories = [
	'Arkitektur',
	'Design',
	'Film',
	'Geografi',
	'Historia',
	'Konst & scen',
	'Litteratur',
	'Mat & dryck',
	'Musik',
	'Människan',
	'Natur',
	'Naturvetenskap',
	'Näringsliv',
	'Politik',
	'Samhälle',
	'Sport & spel',
	'Språk',
	'Teknik',
	'Tradition & tro',
	'TV & radio'
];

module.exports = Category;