import twoSum from '../src/twoSum'

describe("Two sum", function() {
 
    it("should return [0, 2] for [1, 2, 3] and 4", () => {
      expect(twoSum([1, 2, 3], 4)).toEqual([0, 2]);
    });
    it("should return [0, 2] for [1, 2, 3] and 4", () => {
      expect(twoSum([15, 10, 85], 25)).toEqual([0, 1]);
    });
    it("should return [0, 2] for [1, 2, 3] and 4", () => {
      expect(twoSum([1, 88, 74, 55, 2, 1], 76)).toEqual([2, 4]);
    });
    it("should return [0, 2] for [1, 2, 3] and 4", () => {
      expect(twoSum( [2,2,3], 4)).toEqual( [0,1]);
    });
    it("should return [0, 2] for [1, 2, 3] and 4", () => {
      expect(twoSum( [-444, 727, 349, -469], -913)).toEqual( [0,3]);
    });
});
