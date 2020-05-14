import { Holder, IResolve, Phase } from './Phase.ts'

export type ILogger = {
    log(): void
    restart(): void
    stop(): void
}

export class Logger implements ILogger {
    constructor(private readonly resolve: IResolve<boolean>, private readonly sas: string) {}

    log() {
        console.log(this.sas)
    }

    restart() {
        this.resolve(true)
    }

    stop() {
        this.resolve(false)
    }
}

export class LoggerPhase {
    constructor(private readonly holder: Holder<ILogger>) {}

    run(sas: string) {
        return new Phase(this.holder, (r: IResolve<boolean>) => new Logger(r, sas)).run()
    }
}