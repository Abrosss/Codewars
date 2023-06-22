import bouncingBall from '../src/bouncingBalls'

describe("Bouncing Ball", function() {
 
    it ('h = 3.0, bounce = 0.66, window = 1.5', () => {
      expect(bouncingBall(3.0, 0.66, 1.5)).toEqual(3);
    });
    it ('h = 30.0, bounce = 0.66, window = 1.5', () => {
      expect(bouncingBall(30.0, 0.66, 1.5)).toEqual(15);
    });
    it ('h = 3.0, bounce = 1.0, window = 1.5', () => {
      expect(bouncingBall(3.0, 1.0, 1.5)).toEqual(-1);
    });
      

});
