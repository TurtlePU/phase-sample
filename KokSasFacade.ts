import { Holder } from './Phase.ts'
import { StartCommand } from './StartCommand.ts'

export class KokSasFacade implements IKokController, ISasController {
    constructor(
        private readonly kokHolder: Holder<IKokController>,
        private readonly sas: Holder<ISasController>,
        private readonly com: StartCommand,
    ) {}

    run() {
        return this.com.run()
    }

    resolveWithString(result: string) {
        return this.kokHolder.value.resolveWithString(result)
    }

    logSavedString() {
        return this.sas.value.logSavedString()
    }

    keepLooping(heh: boolean) {
        return this.sas.value.keepLooping(heh)
    }
}

export type IKokController = {
    resolveWithString(result: string): void
}

export type ISasController = {
    logSavedString(): void
    keepLooping(heh: boolean): void
}