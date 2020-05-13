export class Phase<Runnable, Result> {
    constructor(
        private readonly holder: Holder<Runnable>,
        private readonly createRunnable: (resolve: IResolve<Result>) => Runnable,
    ) {
        this.setRunnable = this.setRunnable.bind(this)
    }

    async run(): Promise<Result> {
        const result = await this.setup()
        this.teardown()
        return result
    }

    private setup(): Promise<Result> {
        return new Promise(this.setRunnable)
    }

    private setRunnable(resolve: IResolve<Result>): void {
        this.holder.value = this.createRunnable(resolve)
    }

    private teardown() {
        this.holder.drop()
    }
}

export class Holder<T> {
    value: T

    constructor(private readonly defValue: T) {
        this.value = this.defValue
    }

    drop() {
        this.value = this.defValue
    }
}

export type IResolve<T> = (value: T) => void