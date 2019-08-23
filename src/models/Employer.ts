import Date from "./Date";
import Activity from "./Activity";

export default class Employer {
  id: string;
  name: string;
  designation: string;
  logo: string;
  companyLink: string;
  from: Date;
  to: Date;
  skills: string[];
  activities: Activity[];
  constructor(
    id: string,
    name: string,
    designation: string,
    logo: string,
    companyLink: string,
    from: Date,
    to: Date,
    skills: string[],
    activities: Activity[]
  ) {
    this.id = id;
    this.name = name;
    this.designation = designation;
    this.logo = logo;
    this.companyLink = companyLink;
    this.from = from;
    this.to = to;
    this.skills = skills;
    this.activities = activities;
  }
  getDetails() {
    return "Hello, " + this.name + "Designation: " + this.designation;
  }
}
