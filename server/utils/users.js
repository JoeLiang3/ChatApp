class Users {
  constructor () {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room}
    this.users.push(user);
    return user;
  }

  removeUser (id) {

    var returnUser = this.users.filter((user) => {
      return user.id === id;
    });
    var users = this.users.filter((user) => {
      return user.id !== id;
    });
    this.users = users;
    return returnUser[0];
  }

  getUser (id) {
    var returnUser = this.users.filter((user) => {
      return user.id === id;
    });
    return returnUser[0];
  }

  getUserList (room) {
    var users = this.users.filter((user) => {
      return user.room === room;
    });
    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  }
}


module.exports = {Users};
