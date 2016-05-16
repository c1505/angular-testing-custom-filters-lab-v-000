describe('removeAllVowels Filter', function () {
	var $controller, removeAllVowels;

	beforeEach(module('app'));

	beforeEach(inject(function ($filter) {
    removeAllVowels = $filter('removeAllVowels');
	}));
  it('should filter out vowels', function () {
    var str = "test";
    var results = removeAllVowels(str);
    expect(results).toBe("tst");


  });

});
