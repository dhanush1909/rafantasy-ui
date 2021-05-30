export class LoginRequestDTO {
  username;
  password;

  constructor(obj) {
    if (obj.email) {
      this.username = obj.email;
    }

    if (obj.password) {
      this.password = obj.password;
    }
  }
}
