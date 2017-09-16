const expect = require('expect')
var {isRealString} = require('./validation.js');
//import isRealString

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(3);
    expect(res).toBe(false);
  });
  it('should reject strings with only spaces', () => {
    var res = isRealString("     ");
    expect(res).toBe(false);
  });
  it('should allow string with non-space characters', () => {
    var res = isRealString("Joe");
    expect(res).toBe(true);
  });
});
