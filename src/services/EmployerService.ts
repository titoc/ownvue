import Employer from "../models/Employer";
import workexperiences from "../assets/workexperiences.json";

export default class EmployerService {
  private employers: Employer[] = [];
  constructor() {
    for (let work of workexperiences) {
      this.employers.push(
        new Employer(
          work.id,
          work.employername,
          work.designation,
          work.logo,
          work.companylink,
          work.from,
          work.to,
          work.skills,
          work.activities
        )
      );
    }
  }
  getWorkExperiences() {
    return this.employers;
  }
}
