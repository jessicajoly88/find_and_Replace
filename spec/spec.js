describe('findReplace', function() {
  it('takes an entered string and a specific word to look for within the string and replaces it with a specific word',function () {
    expect(findReplace("Hello cruel world", "cruel", "bright")).to.equal("Hello bright world");	
  });
});
