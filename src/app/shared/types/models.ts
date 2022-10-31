import { Status } from './types';

export interface StepModel {
  stepIndex: number;
  isComplete: boolean;
}

export interface Member {
  fullName: string;
  email: string;
  confirmed: boolean;
  status: Status;
  createdAt: string;
}
