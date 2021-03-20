import { Education } from "./education";
import { Experience } from "./experience";
import { General } from "./general";
import { Misc } from "./misc";
import { Traduction } from "./traduction";

export class Resume {
    constructor(
        public general: General,
        public experiences: Experience[],
        public educations: Education[],
        public misc: Misc,
        public traduction: Traduction
    ) { }
    
}
