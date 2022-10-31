import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaystackOptions, PrivatePaystackOptions } from './paystack-options';
import { Angular4PaystackService } from './angular4-paystack.service';

interface MyWindow extends Window {
  PaystackPop: any;
}
declare var window: MyWindow;

@Component({
  selector: 'angular4-paystack',
  template: `<button
    type="button"
    [ngClass]="class"
    [ngStyle]="style"
    (click)="pay()"
  >
    <ng-content></ng-content>
  </button>`,
})
export class Angular4PaystackComponent {
  @Input()
  key!: string;
  @Input()
  email: string = '';
  @Input()
  amount!: number;
  @Input()
  metadata!: {};
  @Input()
  ref!: string;
  @Input()
  currency!: string;
  @Input()
  plan!: string;
  @Input()
  quantity!: string;
  @Input()
  channels!: string[];
  @Input()
  subaccount!: string;
  @Input()
  transaction_charge!: number;
  @Input()
  bearer!: string;
  @Input()
  class!: string;
  @Input()
  style!: object;
  @Input()
  paystackOptions!: PaystackOptions;

  @Output() paymentInit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();

  public _paystackOptions!: Partial<PrivatePaystackOptions>;
  private isPaying = false;

  constructor(private paystackService: Angular4PaystackService) {}

  async pay() {
    // let errorText = '';
    // if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
    //   errorText = this.valdateInput(this.paystackOptions);
    //   this.generateOptions(this.paystackOptions);
    // } else {
    //   errorText = this.valdateInput(this);
    //   this.generateOptions(this);
    // }
    // if (errorText) {
    //   console.error(errorText);
    //   return;
    // }
    await this.paystackService.loadScript();
    // if (this.isPaying) {
    //   return;
    // }
    if (this.paymentInit.length) {
      this.paymentInit.emit();
    }
    this.generateOptions(this.paystackOptions);
    console.log(this._paystackOptions);
    // const payment = window.PaystackPop.setup(this._paystackOptions);
    // payment.openIframe();
    const payment = new window.PaystackPop();
    payment.newTransaction(this._paystackOptions);
    this.isPaying = true;
  }

  valdateInput(obj: PaystackOptions) {
    if (!this.callback.length) {
      return "ANGULAR-PAYSTACK: Insert a callback output like so (callback)='PaymentComplete($event)' to check payment status";
    }
    return this.paystackService.checkInput(obj);
  }

  generateOptions(obj: PaystackOptions) {
    this._paystackOptions = this.paystackService.getPaystackOptions(obj);
    this._paystackOptions.onClose = () => {
      if (this.onClose.length) {
        this.isPaying = false;
        this.onClose.emit();
      }
    };
    this._paystackOptions.callback = (...response) => {
      this.isPaying = false;
      this.callback.emit(...response);
    };
  }
}
