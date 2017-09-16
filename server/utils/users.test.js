var expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id:'1',
      name: 'Joe',
      room: 'GOT'
    }, {
      id:'2',
      name: 'Bob',
      room: 'Manga'
    }, {
      id:'3',
      name: 'Lana',
      room: 'GOT'
    }]
  });

  it('should add new user', () => {
    var resUsers = new Users();
    resUsers.addUser("12345", "Joe", "GOT");
    expect(resUsers.users[0].id).toBe("12345");
    expect(resUsers.users[0].name).toBe("Joe");
    expect(resUsers.users[0].room).toBe("GOT");
  });

  it('should remove a user', () => {
    var removedUser = users.removeUser('1');
    expect(removedUser).toEqual({
      id:'1',
      name: 'Joe',
      room: 'GOT'
    });
    expect(users.users).toEqual([{
      id:'2',
      name: 'Bob',
      room: 'Manga'
    }, {
      id:'3',
      name: 'Lana',
      room: 'GOT'
    }]);
  });

  it('should not remove a user', () => {
    var removedUser = users.removeUser('4');
    expect(users.users).toEqual([{
      id:'1',
      name: 'Joe',
      room: 'GOT'
    }, {
      id:'2',
      name: 'Bob',
      room: 'Manga'
    }, {
      id:'3',
      name: 'Lana',
      room: 'GOT'
    }]);
  });

  it('should find user', () => {
    var findUser = users.getUser('1');
    expect(findUser).toEqual({
      id:'1',
      name: 'Joe',
      room: 'GOT'
    });
  });

  // it('should not find user', () => {
  //   var findUser
  // });

  it('should return names for GOT', () => {
    var userList = users.getUserList('GOT');
    expect(userList.length).toBe(2);
  });

});
