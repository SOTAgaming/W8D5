class Clock {

  constructor(hour = 0, minute = 0, second = 0) {
    let that = this;
    let date = new Date(0, 0, 0, hour, minute, second);
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    
    setInterval(function(){
      that._tick();
    }, 1000);
    
    
  }

  getTime() {
    console.log(`${this.hour}:${this.minute}:${this.second}`)
  }

  _tick() {
    this.second++;
    return this.getTime();
  }
}

let clock1 = new Clock();
