import log from './log'
import { ClientMessage } from 'common'
import { HID } from './hid-commands'

export function startControls() {
  log.info('Connecting to websocket...')
  const wsUrl = window.location.href.replace(/^http/, 'ws')
  const ws = new WebSocket(wsUrl)

  ws.addEventListener('error', (err) => {
    log.error('Error connecting to control websocket:', err)
  })

  ws.addEventListener('close', () => {
    log.error('WebSocket closed. Commands can not be sent.')
  })

  ws.addEventListener('open', () => {
    log.info('WebSocket connected.')

    const keyEventHandler = KeyEventHandler(ws)

    document.addEventListener('keydown', keyEventHandler)
    document.addEventListener('keyup', keyEventHandler)

      ;['Power', 'WakeUp', 'Sleep'].map(code => {
        const el = document.querySelector(`button#${code.toLowerCase()}`)

        el.addEventListener('mousedown', () => {
          log.info(`Pressing ${code} button...`)
          document.dispatchEvent(new KeyboardEvent('keydown', {}))
        })

        el.addEventListener('mouseup', () => {
          log.info(`${code} button released.`)
          document.dispatchEvent(new KeyboardEvent('keyup', { code }))
        })
      })
  })
}

function KeyEventHandler(ws: WebSocket) {
  return function handleKeyEvent(e: KeyboardEvent) {
    HID.jsToHID(e, (keycodeArray => {
      if (keycodeArray.length > 0) {
        const frame: ClientMessage = {
          type: 'key-command',
          command: keycodeArray
        }
        ws.send(JSON.stringify(frame))
      }
    }));
    e.preventDefault()
  }
}
