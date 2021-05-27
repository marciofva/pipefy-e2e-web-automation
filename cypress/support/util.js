'use strict'

class Util {

    getFormattedTime(){
        let current_time = new Date().toLocaleString('en-US').split(',')[1]
        let time_array = current_time.split(':')
    
        return  time_array[0].trim().padStart(2, '0') +
                time_array[1].trim().padStart(2, '0') +
                time_array[2].trim().slice(-2).toLowerCase()
    }
}
module.exports = new Util();