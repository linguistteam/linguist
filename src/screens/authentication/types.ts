import { StackNavigatorList } from '@screens/StackNavigator';

export interface FormErrors {
  displayName: boolean;
  email: boolean;
  general: boolean;
  password: boolean;
}

export interface PasswordResetRouteParams {
  passwordReset: boolean;
  email: string;
}

export interface PasswordResetNavigate {
  name: StackNavigatorList;
  params: PasswordResetRouteParams;
}
