export class AgeController {
    private data: Date;
    private year: number;
    private month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.data = new Date();
        this.year = year;
        this.month = month;
        this.day = day;
    }

    checkMonth(): boolean {
        return this.data.getMonth() + 1 !== this.month
    }

    checkDay(): boolean {
        return this.data.getDate() !== this.day
    }

    getAge(): number {
        let age: number = this.data.getFullYear() - this.year;
        if (this.checkMonth()) {
            if (this.checkDay()) age -= 1;
        }
        return age
    }
}