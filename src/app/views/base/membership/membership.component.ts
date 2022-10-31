import { PaystackOptions } from '@/app/features/payment/paystack-options';
import { StepsService } from '@/app/shared/services/steps.service';
import { StepModel } from '@/app/shared/types/models';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
  currentStep!: StepModel | null;
  currentStepSub!: Subscription;
  innerSteps: NodeList = document.querySelectorAll('.inner-step');
  options: PaystackOptions = {
    amount: 50000,
    email: 'user@mail.com',
    ref: `${Math.ceil(Math.random() * 10e10)}`,
  };
  public results = {
    name: '',
  };
  tRef = '';
  result = '';
  title: string = '';

  constructor(private stepsService: StepsService, private router: Router) {}

  ngOnInit(): void {
    this.setRandomPaymentRef();

    this.currentStepSub = this.stepsService
      .getCurrentStep()
      .subscribe((step: StepModel | null) => {
        this.currentStep = step;
      });
  }

  onPrevStep(e: Event) {
    console.log('clicked');
  }

  onNextStep(e: Event) {
    e.preventDefault();
    console.log('clicked');

    if (!this.stepsService.isLastStep()) {
      this.currentStep!.isComplete = true;
      this.stepsService.moveToNextStep();
    } else {
      console.log('last step');
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

  // toggleEmbed() {
  //   this.showEmbed = !this.showEmbed;
  // }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    this.title = 'Payment successfull';
    console.log(this.title, ref);
    this.router.navigate(['reciept']);
  }

  paymentCancel() {
    this.title = 'Payment failed';
    console.log(this.title);
  }

  setRandomPaymentRef() {
    this.tRef = `${Math.random() * 10000000000000}`;
  }
}
