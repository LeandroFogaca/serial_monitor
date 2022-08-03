
const { SerialPort } = require('serialport')

  
 




export const fnSerialPort = {
  
  listSerialPorts:  function () {
        SerialPort.list().then((ports, err) => {
        if(err) {
          console.log(err.message)
          return
        }
          if (ports.length === 0) {
            console.log('No ports discovered');
          }
          console.log('ports', ports);
          return ports
        })
}
}
  