import { Education } from "./education";
import { Experience } from "./experience";
import { General } from "./general";
import { Language } from "./language";
import { Misc } from "./misc";
import { Skill } from "./skill";
import { Traduction } from "./traduction";

export class Resume {
    constructor(
        public general: General,
        public experiences: Experience[],
        public educations: Education[],
        public skills: Skill[],
        public languages: Language[],
        public misc: Misc,
        public traduction: Traduction
    ) { }
    
}
