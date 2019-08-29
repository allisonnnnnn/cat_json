const { fetchBreedDescription } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", done => {
    fetchBreedDescription("sibe", (err, desc) => {
      assert.equal(err, null);
      const expecDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";
      assert.equal(expecDesc, desc);
      done();
    });
  });
  it("returns error if input a invalid breed, via callback", done => {
    fetchBreedDescription("haha", (err, desc) => {
      const expectedErr = undefined;
      assert.equal(err, expectedErr);
      done();
    });
  });
});
