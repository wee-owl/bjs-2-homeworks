'use strict'

// task 7-1
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }


  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some((item) => item.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({callback, time, canCall: true});
  }


  removeClock(time) {
    const deleteTime = this.alarmCollection.filter((item) => item.time === time);
    if (deleteTime.length > 0) {
      return this.alarmCollection.splice(this.alarmCollection.indexOf(deleteTime[0]), 1);
    }
  }


  getCurrentFormattedTime() {
    const today = new Date();
    return (`${today.getHours()}:${today.getMinutes()}`);
  }


  start() {
    if (this.intervalId) {
      return
    } else {
      this.intervalId = setInterval(function() {
        this.alarmCollection.forEach(item => {
          if (item.time === this.getCurrentFormattedTime()) {
            item.canCall = false;
            item.callback();
          }
        });
      }, 1000);
    }
  }


  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }


  resetAllCalls() {
    this.alarmCollection.forEach(item => {
      item.canCall = true;
    });
  }


  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}