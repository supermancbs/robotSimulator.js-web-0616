'use strict';
const directions = [ 'east', 'west', 'north', 'south' ]

class Robot {

  constructor() {
    this.bearing = 'north'
    this.coordinates = [0, 0]
  }

  orient(direction) {
    if (directions.includes(direction)){
      this.bearing = direction
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }

  turnRight() {
    if (this.bearing==='north')
      this.bearing = 'east'
    else if (this.bearing==='east') {
      this.bearing = 'south'
    }
    else if (this.bearing==='south') {
      this.bearing = 'west'
    }
    else if (this.bearing==='west'){
       this.bearing = 'north'
     }
  }

  turnLeft(){
    if (this.bearing==='north'){
      this.bearing = 'west'
      }
    else if (this.bearing==='west') {
      this.bearing = 'south'
    }
    else if (this.bearing==='south') {
      this.bearing = 'east'
    }
    else if (this.bearing==='east') {
      this.bearing = 'north'
    }

  }

  at(x, y){
    this.coordinates = [x, y]
  }
  advance(){
    if (this.bearing==='north'){
     this.coordinates[1] += 1
    }
    else if (this.bearing==='east') {
      this.coordinates[0] += 1
    }
    else if (this.bearing==='south') {
      this.coordinates[1] -= 1
    }
    else if (this.bearing==='west') {
      this.coordinates[0] -= 1
    }
  }

  instructions(message){
    var result = []
    for (var i = 0; i < message.length; i++) {
      if (message[i]==='L'){
        result.push('turnLeft')
      }
      else if (message[i]==='R'){
        result.push('turnRight')
      }
      else if (message[i]==="A") {
        result.push('advance')
      }
    }
    return result;
  }

  place(obj){
    this.bearing = obj["direction"]
    this.coordinates = [obj["x"], obj["y"]]
  }

  evaluate(message){
    var result = this.instructions(message)
    for (var i = 0; i < result.length; i++)
     { this[result[i]]()
     }
  }
}
