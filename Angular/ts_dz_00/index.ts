class DateDiff {
    private dateNow: Date = new Date();
    private dateUser!: any;

    constructor() {
        do {
            let userQuestion: string = prompt('Введите дату в формате: YYYY.MM.DD' +
                '\n\nВремя автоматически будет установлено на 00:00:00');

            this.dateUser = new Date(`${userQuestion}`).getTime();
        } while (isNaN(this.dateUser) && this.dateUser);
    }

    private getMilisec(): number {
        const dateNow: any = this.dateNow;
        const dateUser: any = this.dateUser;

        if (dateNow > dateUser) {
            return dateNow - dateUser;
        }

        return dateUser - dateNow;
    }

    private getSeconds(): number {
        return Math.floor(this.getMilisec() / 1000);
    }

    private getMinutes(): number {
        return Math.floor(this.getSeconds() / 60);
    }

    private getHours(): number {
        return Math.floor(this.getMinutes() / 60);
    }

    private getDays(): number {
        return Math.floor(this.getHours() / 24);
    }

    private addZero(anyTime: number): string {
        return `${(anyTime) < 10 ? '0' + anyTime : anyTime}`;
    }

    public showDateDifference(): string {
        const dateNow: any = this.dateNow;
        const dateUser: any = this.dateUser;

        if (dateUser > dateNow) {
         
            return (
                `Days: ${this.getDays()} ${this.addZero(this.getHours())}:${this.addZero((this.getMinutes() % 60))}:${this.addZero((this.getSeconds() % 60))}`
            );
            
        }

        return (
            `Days: ${this.getDays()} ${this.addZero(this.getHours())}:${this.addZero(60 - (this.getMinutes() % 60))}:${this.addZero(60 - (this.getSeconds() % 60))}`
        );
    }
}

const newDateDifference: DateDiff = new DateDiff();

alert(newDateDifference.showDateDifference());

