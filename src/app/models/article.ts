export class Article {
    title: string;
    description: string;
    time: Date;
    constructor(title:string, description:string, time:Date) {
        this.title = title;
        this.description =description;
        this.time = time;
    }
}
