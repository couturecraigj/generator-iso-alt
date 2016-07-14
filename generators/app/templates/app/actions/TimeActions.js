class TimeActions {
  updateTime(addedDays) {
    if(!addedDays){
      addedDays = 0;
    }
    this.dispatch();

    return new Promise((resolve, reject) => {
      this.alt
        .service
        .read('time')
        .params({day:addedDays})
        .end((err, data) => {
          if(err) {
            return console.log(err);
          }

          this.actions.updateTimeSuccess(data);

          resolve(data);
        });
    });
  }

  updateTimeSuccess(data) {
    return data;
  }
}

export default TimeActions;
