import SerialPort from 'serialport'

export class Keyboard {
  port: SerialPort
  connect: Function

  constructor(opts: {
    path: string,
    baudRate: number,
  }) {
    this.port = new SerialPort(opts.path, {
      ...opts,
      dataBits: 8,
      parity: 'none',
      stopBits: 1
    })
    

    this.port.on('open', function () {
      console.log('Opened port to ', opts.path);
    })
  }

  send(command: number[]) {
    
    const byteBuffer = Buffer.from(command)
    console.log(byteBuffer);
    
    this.port.write(byteBuffer)
  }
}
