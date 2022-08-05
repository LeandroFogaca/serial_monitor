
const { SerialPort } = require('serialport')
// eslint-disable-next-line no-unused-vars
const { ReadlineParser } = require('@serialport/parser-readline')

  
 
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
  

const connect = async function (port, baudRate ) {
  
  console.log("conectar na porta: ", port, " e ", baudRate)



  const Port = new SerialPort({
    path: port,
    baudRate: baudRate,
    autoOpen: false,
  })
  
  Port.open((err) => {if (err) {
    console.log('Error opening port: ', err.message)
  }
})

// The open event is always emitted
Port.on('open', function() {
  console.log('PORTA FOI ABERTA');
})
  
  return Port
   
  
}




export const fnSerialPort = {
  
  listSerialPorts,
  connect


}
  