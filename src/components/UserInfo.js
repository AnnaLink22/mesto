export class UserInfo {
  constructor(name, job) {
    this._name = name;
    this._job = job;
  }

  updateUserInfo = () => {
    document.querySelector('.profile__name').textContent = this._name;
    document.querySelector('.profile__job').textContent = this._job;
  }


  setUserInfo = (newName, newJob) => {
    this._name = newName;
    this._job = newJob;
  }
}
