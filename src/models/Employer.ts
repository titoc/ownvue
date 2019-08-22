export default class Employer {
  id: string;
  name: string;
  designation: string;
  constructor(id: string, name: string, designation: string) {
    this.id = id;
    this.name = name;
    this.designation = designation;
  }
  getDetails() {
    return "Hello, " + this.name + "Designation: " + this.designation;
  }
}
