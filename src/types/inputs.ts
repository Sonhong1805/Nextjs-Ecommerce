interface ILoginInputs {
  email: string;
  password: string;
}

interface IForgotPasswordInputs extends ILoginInputs {
  confirmPassword: string;
}

interface ISignUpInputs extends IForgotPasswordInputs {
  username: string;
}

interface IPaymentInputs {
  username: string;
  phoneNumber: string;
  address: string;
}
