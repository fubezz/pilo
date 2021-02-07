#!/usr/bin/env node

import { Server } from './server'
import { Keyboard } from './keyboard'

if (!process.env.AUTH_SHA) {
  throw new Error('AUTH_SHA was not set.')
}

const port = Number(process.env.PORT || 3000)

const keyboard = new Keyboard({
  path: process.env.SERIAL_PATH || '/dev/ttyAMA0',
  baudRate: Number(process.env.SERIAL_BAUD_RATE || 9600),
})

const server = new Server({
  mjpegUrl: process.env.MJPEG_URL || 'http://127.0.0.1:9000/stream/video.mjpeg',
  authSha: process.env.AUTH_SHA
})

server.on('key-command', (command) => {
  keyboard.send(command)
})

server.listen(port)
