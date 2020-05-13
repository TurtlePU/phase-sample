import { IKokController } from './KokSasFacade.ts';
import { Holder, IResolve, Phase } from './Phase.ts';

export class KokController implements IKokController {
    constructor(private readonly resolve: IResolve<string>) {}

    resolveWithString(result: string) {
        if (result != 'sas') {
            this.resolve(result)
        }
    }
}

export class KokPhase extends Phase<IKokController, string> {
    constructor(holder: Holder<IKokController>) {
        super(holder, r => new KokController(r))
    }
}