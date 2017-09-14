var expect = require('expect');
var {generateMessage} = require("./message.js");

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage("Joe", "This is a test");
    // expect(res.createdAt).toBeA('number');
    expect(res.from).toBe("Joe");
    expect(res.text).toBe("This is a test");

  });
});
