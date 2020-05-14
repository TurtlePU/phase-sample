import { LoggerPhase } from './Logger.ts'
import { SaverPhase } from './Saver.ts'

export class Starter {
    constructor(private readonly save: SaverPhase, private readonly log: LoggerPhase) {}

    async run() {
        let loopa = true
        while (loopa) {
            const sas = await this.save.run()
            loopa = await this.log.run(sas)
        }
    }
}