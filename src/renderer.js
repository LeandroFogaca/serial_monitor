
const { SerialPort } = require('serialport')

  
 
const listSerialPorts = async function () {
  return await SerialPort.list().then((ports, err) => {
    if(err) {
      console.log(err.message)
      return
    }
    if (ports.length === 0) {
      console.log('No ports discovered');
    }
    return ports
  })
}
  

const connect = async function (e) {
  
  console.log("conectar na porta: ", e)

}



export const fnSerialPort = {
  
  listSerialPorts,
  connect


}
  