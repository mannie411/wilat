import { Component, OnInit, Input } from '@angular/core';
import { StepModel } from '../../types/models';

@Component({
  selector: 'app-steps-container',
  templateUrl: './steps-container.component.html',
  styleUrls: ['./steps-container.component.scss'],
})
export class StepsContainerComponent implements OnInit {
  @Input() step!: StepModel;
  constructor() {}

  ngOnInit(): void {}
}
