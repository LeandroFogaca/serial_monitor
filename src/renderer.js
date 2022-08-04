
const { SerialPort } = require('serialport')

  
 




export const fnSerialPort = {
  
  // eslint-disable-next-line no-unused-vars
  listSerialPorts: async function () {
    
   return await SerialPort.list().then((ports, err) => {
      if(err) {
        console.log(err.message)
        return
      }
      if (ports.length === 0) {
        console.log('No ports discovered');
      }
      // console.log('ports', ports);
      return ports
    })
  }
}
  