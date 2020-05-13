import { KokPhase } from './Kok.ts'
import { IKokController, ISasController, KokSasFacade } from './KokSasFacade.ts'
import { Holder } from './Phase.ts'
import { SasPhase } from './Sas.ts'
import { StartCommand } from './StartCommand.ts'

const kokController = new Holder<IKokController>({ resolveWithString: err })
const sasController = new Holder<ISasController>({ logSavedString: err, keepLooping: err })

const kokPhase = new KokPhase(kokController)
const sasPhase = new SasPhase(sasController)

const command = new StartCommand(kokPhase, sasPhase)
const facade = new KokSasFacade(kokController, sasController, command)

facade.run()
await wait()
facade.resolveWithString('sas')
await wait()
facade.resolveWithString('saas')
await wait()
facade.logSavedString()
await wait()
facade.keepLooping(true)
await wait()
facade.resolveWithString('vvvvv')
await wait()
facade.logSavedString()
await wait()
facade.keepLooping(false)

export function err() {
    throw new Error('you dum dum')
}

export function wait() {
    return new Promise(r => setTimeout(r, 0))
}