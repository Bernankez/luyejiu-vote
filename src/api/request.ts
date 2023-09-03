import { ofetch } from "ofetch";

interface Result {
  status: "SUCCESS" | "FAILURE";
}

export interface SuccessResult<T> extends Result {
  status: "SUCCESS";
  data: T;
}

export interface FailureResult extends Result {
  status: "FAILURE";
  message: string;
}

export const request = ofetch.create({});
