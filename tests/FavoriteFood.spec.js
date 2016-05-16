describe('Favorite Food Filter', function () {
	var $controller, favoriteFood;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
		favoriteFood = $filter('favoriteFood');
	}));

  it('should filter on food correctly', function () {
    var mockedList = [
      {name: 'bob', favoriteFood: 'Ice Cream'},
      {name: 'joe', favoriteFood: 'Pizza'},
      {name: 'mary', favoriteFood: 'Pasta'}
    ];

	var results = favoriteFood(mockedList, 'Pasta');

  expect(results.length).toBe(1);
  expect(results[0].name).toBe('mary');
  });
});
