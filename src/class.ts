// Class User
// public = bisa diakses di semua class
// protected = hanya bisa diakses di class nya sendiri dan class turunan nya
// private = hanya bisa diakses di class nya sendiri
export class User {
  constructor(public name: string, public age: number) {
  }

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name
  }
}

// inheritance
// class admin mewari semua yang ada pada kelas user
class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email = "";

  // static property dan static method
  static getRoleName: string = "Admin";
  static getNameRole() {
    return "hei";
  }

  constructor(phone: string, name: string, age: number) {
    // add super 
    // super membutuhkan pamaramet dari class turnanan nya
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean, write: boolean } {
    return {
      read: this.read,
      write: this.write
    }
  }

  // getter and setter
  // memberikan nilai
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email Salah";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

const admin = new Admin("082377954408", "Elfin Sanjaya", 24)
admin.setName("Itce");
console.log(admin.phone);
console.log(admin.getName());
admin.email = "elfinsanjaya12@gmail.com"
console.log(admin.email);

// static property and static method
const staticProperty = Admin.getRoleName;
const staticMethod = Admin.getNameRole();

console.log(staticProperty + " " + staticMethod);


const user = new User("Elfin Sanjaya", 12);
console.log(user);