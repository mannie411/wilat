import { StepsService } from '@/app/shared/services/steps.service';
import { StepModel } from '@/app/shared/types/models';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  currentStep!: StepModel | null;
  currentStepSub!: Subscription;

  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.currentStepSub = this.stepsService
      .getCurrentStep()
      .subscribe((step: StepModel | null) => {
        this.currentStep = step;
      });
  }

  onNextStep(e: Event) {
    e.preventDefault();
    console.log('clicked');

    if (!this.stepsService.isLastStep()) {
      this.currentStep!.isComplete = true;
      this.stepsService.moveToNextStep();
    } else {
      // this.onSubmit();
    }
  }
  showButtonLabel() {
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks and unexpected angular errors
    this.currentStepSub.unsubscribe();
  }
}
