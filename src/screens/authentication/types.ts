import { StackNavigatorList } from '@screens/StackNavigator';

export interface FormErrors {
  email: boolean;
  general: boolean;
  password: boolean;
}

export interface PasswordResetRouteParams {
  passwordReset: boolean;
}

export interface PasswordResetNavigate {
  name: StackNavigatorList;
  params: PasswordResetRouteParams;
}
