export class UserInfo {
  constructor(name, job) {
    this._profileName = name;
    this._profileJob = job;
    this._name = {};
    this._job = {};
  }

  updateUserInfo = () => {
    this._profileName.textContent = this._name;
    this._profileJob.textContent = this._job;
  }


  getUserInfo = () => {
    return {
      name: this._name,
      job: this._job,
    }
  };


  setUserInfo = (newName, newJob) => {
    this._name = newName;
    this._job = newJob;
  }
}
