import { ILogger, LoggerPhase } from './Logger.ts'
import { Holder } from './Phase.ts'
import { ISaver, SaverPhase } from './Saver.ts'
import { Starter } from './Starter.ts'

const saver = new Holder<ISaver>({ save: err })
const logger = new Holder<ILogger>({ log: err, restart: err, stop: err })

const command = new Starter(new SaverPhase(saver), new LoggerPhase(logger))

const run = command.run()
await wait()
saver.value.save('sas')
await wait()
saver.value.save('saas')
await wait()
logger.value.log()
await wait()
logger.value.restart()
await wait()
saver.value.save('vvvvv')
await wait()
logger.value.log()
await wait()
logger.value.stop()
await run

export function err() {
    throw new Error('you dum dum')
}

export function wait() {
    return new Promise(r => setTimeout(r, 0))
}