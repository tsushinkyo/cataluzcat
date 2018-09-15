export class Poem {
    constructor(
        public title: string,
        public image: string,
        public poemText: string,
        public date: Date,
        public chips?: string[],
        public id?: number,
    ) { }
}

