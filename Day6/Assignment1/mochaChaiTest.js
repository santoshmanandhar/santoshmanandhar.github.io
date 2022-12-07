describe("sum", function () {
    it("Sum of [5,2,10] is 12", function () {
      assert.equal(sum([5,2,10]), 17);
    });
  });
  
  describe("multiply", function () {
    it("Multiple of [5,2,10] iss 100", function () {
      assert.equal(multiply([5,2,10]), 100);
    });
  });
  
  describe("reverse", () => {
    it("Reverse of 'laog' is 'goal'", () => {
      assert.equal(reverse("laog"), "goal");
    });
  });
  
  describe("filter long words", () => {
    it("the words longer than length 7 in array ['football', 'hockey', 'cricket', 'badminton'] is ['football','badminton']", () => {
      assert.equal(
        JSON.stringify(filterLongWords(["football", "hockey", "cricket", "badminton"], 7)),
        JSON.stringify(["football","badminton"])
      );
    });
  });