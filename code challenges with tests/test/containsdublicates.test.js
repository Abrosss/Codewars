import containsDuplicate from '../src/containsdublicates'
describe("Contains Duplicates", function() {
 
    it ('handles small array', () => {
      expect(containsDuplicate([1,2,3,1])).toEqual(true);
    });
    it('should work with a large array', () => {
        const largeArray = Array.from({ length: 100000 }, (_, index) => index);
        expect(containsDuplicate(largeArray)).toEqual(false);
      });
    it('should work with a large array containing duplicates', () => {
        const largeArrayWithDuplicates = Array.from({ length: 100000 }, (_, index) => index % 100);
        expect(containsDuplicate(largeArrayWithDuplicates)).toEqual(true);

      });

});
