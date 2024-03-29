export const EN = {
  AUTH_ERRORS: {
    AUTH_TOKEN_EXPIRED: 'Auth token expired.',
    AUTH_TOKEN_INVALID: 'Auth token invalid.',
    AUTH_TOKEN_REVOKED: 'Auth token revoked.',
    SESSION_COOKIE_REVOKED: 'Session cookie revoked.',
    EMAIL_ALREADY_IN_USE: 'Email already in use.',
    PHONE_NUMBER_ALREADY_EXISTS: 'Phone number already exists.',
    INVALID_EMAIL: 'Please enter a valid email.',
    INVALID_PASSWORD: 'Please enter a valid password.',
    INVALID_NAME: (name: string) => `Please enter a valid ${name}.`,
    PASSWORD_TOO_SHORT: 'Password is too short.',
    INVALID_PHONE_NUMBER: 'Phone number is invalid.',
    INVALID_PHOTO_URL: 'Photo URL is invalid.',
    INVALID_DISPLAY_NAME: 'Display name is invalid.',
    WRONG_PASSWORD: 'Password is incorrect.',
    USER_NOT_FOUND: 'User account not found.',
  },
  CLIENT_PROFILE: {
    MESSAGE: 'Message',
  },
  COMMON: {
    HELLO: 'Hello',
    FIRST_NAME: 'First Name',
    LAST_NAME: 'Last Name',
    EMAIL_ADDRESS: 'Email address',
    PASSWORD: 'Password',
    LOADING: 'Loading',
  },
  GENERAL_ERRORS: {
    INTERNAL_SERVER_ERROR: 'Internal server error has occurred.',
  },
  LANGUAGES: {
    HEADING: 'Lanugages',
  },
  LOG_IN: {
    SUBHEADING: 'Welcome back to Linguist',
    CONTINUE_WITH_EMAIL: 'Continue with Email',
    CONTINUE_WITH_GOOGLE: 'Continue with Google',
    FORGOT_PASSWORD: 'Forgot password?',
    CREATE_ACCOUNT: 'Create account',
  },
  PASSWORD_RESET: {
    HEADING: 'Password Reset',
    ENTER_EMAIL_ADDRESS:
      'Enter the email address associated with your account, and we’ll email you a link to reset your password.',
    SEND_RESET_LINK: 'Send reset link',
    RESET_LINK_SENT: (email: string) => `A link to reset your password has been sent to ${email}.`,
  },
  REVIEWS: {
    FROM_CLIENTS: 'From clients',
    FROM_TRANSLATORS: 'From translators',
    HEADING: 'Reviews',
    LOADING_REVIEWS: 'Loading reviews',
    NO_REVIEWS_YET: 'No reviews yet.',
    REVIEWS: 'Reviews',
    SEE_MORE_REVIEWS: 'See more reviews',
  },
  SIGN_UP: {
    SUBHEADING: 'Start your Linguist journey',
    LOGIN_INSTEAD: 'Login instead',
    CREATE_ACCOUNT_WITH_EMAIL: 'Create account with Email',
    CREATE_ACCOUNT_WITH_GOOGLE: 'Create account with Google',
  },
  STORAGE_ERRORS: {
    UNAUTHENTICATED: 'We were unable to verify your account. Please log in again.',
    UNAUTHORIZED: 'You are unauthorized to perform this action.',
    PLEASE_TRY_AGAIN: 'Your request has timed out. Please try again.',
    ACTION_CANCELED: 'You have canceled the action.',
  },
  TRANSLATOR_PROFILE: {
    HIRE: 'Hire',
  },
};
