/**
* Example for generatting downlink-messages
*
* simple call it with "node downlink_example.js"
*
*/



 
var fs = require('fs');

// file is included here:
eval(fs.readFileSync('../profii-lp-codec_generic.js')+'');

  



desc = "change uplink interval to 60min"
var data = {
        'timeInterval':  60,
        'sndAck': true,
        'startReJoin': false,
        'portIsActive': true,
        'values': [ ]
} 
erg = Encode(1,data,{});
console.log(desc, " Uplink-Interval: ", data.timeInterval, " sndAck: ", data.sndAck, " active: ", data.portIsActive);
console.log("\tBytes-Payload:", toHexString(erg));
console.log("\tBase64-Payload:", Buffer.from(erg).toString('base64'));



desc = "change uplink to send register 0x00 - 0x0A every 15 minutes"
var data = {
        'timeInterval':  15,
        'sndAck': false,
        'startReJoin': false,
        'portIsActive': true,
        'values': [
                0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09,0x0A]
} 
erg = Encode(1,data,{});
console.log(desc, " Uplink-Interval: ", data.timeInterval, " sndAck: ", data.sndAck, " active: ", data.portIsActive);
console.log("\tBytes-Payload:", toHexString(erg));
console.log("\tBase64-Payload:", Buffer.from(erg).toString('base64'));



function toDecArray(byteArray){
        return '' + Array.from(byteArray, function(byte) {
                return ( ' ' + (byte & 0xFF).toString()).slice(-3).toUpperCase();
              }).join(' ')
            }  


function toHexString(byteArray) {
        return '0x' + Array.from(byteArray, function(byte) {
          return ( '0' + (byte & 0xFF).toString(16)).slice(-2).toUpperCase();
        }).join(' 0x')
      }



