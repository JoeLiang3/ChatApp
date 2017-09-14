var expect = require('expect');
var {generateMessage, generateLocationMessage} = require("./message.js");

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var res = generateMessage("Joe", "This is a test");
    // expect(res.createdAt).toBeA('number');
    expect(res.from).toBe("Joe");
    expect(res.text).toBe("This is a test");

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location', () => {
    var res = generateLocationMessage('Joe', 3, 3);
    expect(res.from).toBe("Joe");
    expect(res.url).toBe("https://www.google.com/maps?q=3,3");
  })
})
