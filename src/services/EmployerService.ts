import Employer from "../models/Employer";
import countries from "../assets/countries.json";
import workexperiences from "../assets/workexperiences.json";

export default class EmployerService {
  private employers: Employer[] = [];
  constructor() {
    for (let work of workexperiences) {
      this.employers.push(
        new Employer(work.id, work.employername, work.designation)
      );
    }
  }
  getWorkExperiences() {
    console.dir(this.employers);
    return this.employers;
  }
}
