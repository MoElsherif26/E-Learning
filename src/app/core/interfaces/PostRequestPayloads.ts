export interface RegisterRequestDto {
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  name: string;
  nationalId: string;
  address: string;
  gender: string;
}

export interface LoginRequestDto {
  email: string;
  password: string;
}
