class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0; 
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;

      if(callback) {
        callback();
      };

    }, 1000); 
  };

  getMinutes() {
    if(this.currentTime === 0) {
      return 0;
    }

    return this.currentTime = Math.floor(this.currentTime / 60);
    
  }

  getSeconds() {
    if(this.currentTime === 0) {
      return 0;
    }

    return this.currentTime % 60;
  }
  
  twoDigitsNumber(number) {

      if (number < 10) {
        return `0${number}`;
      } 
    return `${number}`
  }
    
  stopClick() {

    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
      let min = this.getMinutes();
      let sec = this.getSeconds();
      if (min < 10) {
        return `${0}${min}:${0}${sec}`;
      } 
      
      return `${min}:${sec}`;
  }
}
