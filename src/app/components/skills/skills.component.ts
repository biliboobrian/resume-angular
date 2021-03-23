import { Component, Input, OnInit } from '@angular/core';
import { Config } from '@models/config';
import { Skill } from '@models/skill';
import { Traduction } from '@models/traduction';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skills!: Skill[];
  @Input() traduction!: Traduction;
  @Input() config!: Config;

  constructor() { }

  ngOnInit(): void {
  }

}
