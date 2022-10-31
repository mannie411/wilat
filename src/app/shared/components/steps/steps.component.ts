import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepsService } from '../../services/steps.service';
import { StepModel } from '../../types/models';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  steps!: Observable<StepModel[]>;
  currentStep!: Observable<StepModel | null>;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();

    this.currentStep = this.stepsService.getCurrentStep();
  }

  onStepClick(step: StepModel) {
    this.stepsService.setCurrentStep(step);
  }
}
