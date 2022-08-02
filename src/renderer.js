
const { SerialPort } = require('serialport')

async function listSerialPorts() {
  await SerialPort.list().then((ports, err) => {
    if(err) {
      console.log(err.message)
      return
    }
    
    console.log('ports', ports);

    if (ports.length === 0) {
     console.log('No ports discovered');
    }
    
})
}

function listPorts() {
  listSerialPorts();
  setTimeout(listPorts, 2000);
}

// Set a timeout that will check for new serialPorts every 2 seconds.
// This timeout reschedules itself.
setTimeout(listPorts, 2000);



listSerialPorts()


export default {

  list : listSerialPorts(),
  foo : console.log("teste"),
}