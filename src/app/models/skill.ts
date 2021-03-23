export class Skill {
    constructor(
        public name: string,
        public grade: number,
        public note: string,
        public subSkill: Skill[]
    ) {}
}
