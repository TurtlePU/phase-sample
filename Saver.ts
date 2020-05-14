import { Holder, IResolve, Phase } from './Phase.ts'

export type ISaver = {
    save(result: string): void
}

export class Saver implements ISaver {
    constructor(private readonly resolve: IResolve<string>) {}

    save(result: string) {
        if (result != 'sas') {
            this.resolve(result)
        }
    }
}

export class SaverPhase extends Phase<ISaver, string> {
    constructor(holder: Holder<ISaver>) {
        super(holder, r => new Saver(r))
    }
}