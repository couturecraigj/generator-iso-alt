class AboutActions {
  load(params) {
    const { TimeActions } = this.alt.actions;

    this.dispatch();

    return new Promise((resolve, reject) => {
      TimeActions
      .updateTime(params.days)
      .then(resolve)
      .catch(reject);
    });
  };
}

export default AboutActions;
