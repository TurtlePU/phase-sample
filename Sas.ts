import { ISasController } from './KokSasFacade.ts'
import { Holder, IResolve, Phase } from './Phase.ts'

export class SasController implements ISasController {
    constructor(private readonly resolve: IResolve<boolean>, private readonly sas: string) {}

    logSavedString() {
        console.log(this.sas)
    }

    keepLooping(heh: boolean) {
        this.resolve(heh)
    }
}

export class SasPhase {
    constructor(private readonly holder: Holder<ISasController>) {}

    run(sas: string) {
        return new Phase(this.holder, (r: IResolve<boolean>) => new SasController(r, sas)).run()
    }
}