import { KokPhase } from './Kok.ts'
import { SasPhase } from './Sas.ts'

export class StartCommand {
    constructor(private readonly kok: KokPhase, private readonly sas: SasPhase) {}

    async run() {
        let loopa = true
        while (loopa) {
            const sas = await this.kok.run()
            loopa = await this.sas.run(sas)
        }
    }
}