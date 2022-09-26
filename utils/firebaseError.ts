import { toast } from 'react-toastify';

const firebaseError = (error: { code: string }) => {
  // ! Authentication
  if (error.code === 'auth/invalid-email') {
    toast.error('invalid email address');
  }
  if (error.code === 'auth/invalid-password') {
    toast.error('Invalid password');
  }
  if (error.code === 'auth/user-not-found') {
    toast.error('Authentication Failed!');
  }
  if (error.code === 'auth/wrong-password') {
    toast.error('Authentication Failed!');
  }
  if (error.code === 'auth/email-already-in-use') {
    toast.error('Email Already in Use');
  }
  if (error.code === 'auth/weak-password') {
    toast.error('Password should be at least 8 character');
  }
  if (error.code === 'auth/too-many-requests') {
    toast.error('Too many requests. Please try again later.');
  }
  if (error.code === 'auth/requires-recent-login') {
    toast.error('Requires recent login');
  }
  if (error.code === 'auth/invalid-credential') {
    toast.error('Invalid credential.');
  }
  if (error.code === 'auth/invalid-display-name') {
    toast.error('The display name user property is invalid.');
  }
  if (error.code === 'auth/invalid-email-verified') {
    toast.error('The email verified user property is invalid.');
  }
  // if (error.code === 'auth/invalid-password-hash') {
  //   toast.error('The password hash must be a valid byte buffer.');
  // }
  // if (error.code === 'auth/invalid-password-salt') {
  //   toast.error('The password salt must be a valid byte buffer');
  // }
  // if (error.code === 'auth/invalid-last-sign-in-time') {
  //   toast.error('The last sign-in time must be a valid UTC date string.');
  // }
  // if (error.code === 'auth/invalid-provider-data') {
  //   toast.error('Invalid provider data.');
  // }
  // if (error.code === 'auth/invalid-provider-id') {
  //   toast.error('Invalid provider id.');
  // }
  // if (error.code === 'auth/invalid-oauth-responsetype') {
  //   toast.error('Only exactly one OAuth responseType should be set to true.');
  // }
  // if (error.code === 'auth/invalid-uid') {
  //   toast.error('The provided uid must be a non-empty string with at most 128 characters.');
  // }
  // if (error.code === 'auth/invalid-phone-number') {
  //   toast.error('The phone number is invalid.');
  // }
  // if (error.code === 'auth/phone-number-already-exists') {
  //   toast.error('Phone number already exists.');
  // }

  // ! Token
  // if (error.code === 'auth/id-token-expired') {
  //   toast.error('The provided ID token is expired.');
  // }
  // if (error.code === 'auth/invalid-id-token') {
  //   toast.error('The provided ID token is not a valid ID token.');
  // }
  // if (error.code === 'auth/id-token-revoked') {
  //   toast.error('The ID token has been revoked.');
  // }
  // if (error.code === 'auth/invalid-page-token') {
  //   toast.error('The provided next page token is invalid.');
  // }

  // ! General Error
  if (error.code === 'auth/insufficient-permission') {
    toast.error('The credential used to the Admin has insufficient permission.');
  }
  if (error.code === 'auth/internal-error') {
    toast.error('Internal server error.');
  }
  if (error.code === 'auth/uid-already-exists') {
    toast.error('uid already exists.');
  }
  if (error.code === 'auth/unauthorized-continue-uri') {
    toast.error('The domain of the continue URL is not whitelisted.');
  }

  // ! hash
  // if (error.code === 'auth/invalid-hash-algorithm') {
  //   toast.error('The hash algorithm must match one of the strings in the list of supported algorithms');
  // }
  // if (error.code === 'auth/invalid-hash-block-size') {
  //   toast.error('The hash block size must be a valid number.');
  // }
  // if (error.code === 'auth/invalid-hash-derived-key-length') {
  //   toast.error('The hash derived key length must be a valid number.');
  // }
  // if (error.code === 'auth/invalid-hash-key') {
  //   toast.error('The hash key must a valid byte buffer.');
  // }
  // if (error.code === 'auth/invalid-hash-memory-cost') {
  //   toast.error('The hash memory cost must be a valid number.');
  // }
  // if (error.code === 'auth/invalid-hash-parallelization') {
  //   toast.error('The hash parallelization must be a valid number.');
  // }
  // if (error.code === 'auth/invalid-hash-rounds') {
  //   toast.error('The hash rounds must be a valid number.');
  // }
  // if (error.code === 'auth/invalid-hash-salt-separator') {
  //   toast.error('The hashing algorithm salt separator field must be a valid byte buffer.');
  // }

  // ! claims
  // if (error.code === 'auth/claims-too-large') {
  //   toast.error('The claims provided to exceeds the maximum allowed size of 1MB.');
  // }
  // if (error.code === 'auth/invalid-claims') {
  //   toast.error('The custom claim attributes provided are invalid.');
  // }
  // if (error.code === 'auth/reserved-claims') {
  //   toast.error('One or more custom user claims provided are reserved.');
  // }
  // if (error.code === 'auth/invalid-photo-url') {
  //   toast.error('The photo URL user property is invalid.');
  // }

  // ! session cookie
  // if (error.code === 'auth/session-cookie-expired') {
  //   toast.error('The session cookie is expired.');
  // }
  // if (error.code === 'auth/session-cookie-revoked') {
  //   toast.error('The session cookie has been revoked.');
  // }
  // if (error.code === 'auth/invalid-session-cookie-duration') {
  //   toast.error('The session cookie duration must be a valid number in  between 5 minutes and 2 weeks.');
  // }

  // ! Others Error Messages
  // if (error.code === 'auth/invalid-argument') {
  //   toast.error('An invalid argument was provided.');
  // }
  // if (error.code === 'auth/invalid-continue-uri') {
  //   toast.error('The continue URL must be a valid URL string.');
  // }
  // if (error.code === 'auth/invalid-creation-time') {
  //   toast.error('The creation time must be a valid UTC date string.');
  // }
  // if (error.code === 'auth/invalid-disabled-field') {
  //   toast.error('The disabled user property is invalid.');
  // }
  // if (error.code === 'auth/invalid-dynamic-link-domain') {
  //   toast.error('The provided dynamic link domain is not configured or authorized for the current project.');
  // }
  // if (error.code === 'auth/invalid-user-import') {
  //   toast.error('The user record to import is invalid.');
  // }
  // if (error.code === 'auth/maximum-user-count-exceeded') {
  //   toast.error('The maximum allowed number of users to import has been exceeded.');
  // }
  // if (error.code === 'auth/missing-android-pkg-name') {
  //   toast.error('An Android Package Name must be provided if the Android App is required to be installed.');
  // }
  // if (error.code === 'auth/missing-continue-uri') {
  //   toast.error('A valid continue URL must be provided in the request.');
  // }
  // if (error.code === 'auth/missing-hash-algorithm') {
  //   toast.error('Missing hash algorithm');
  // }
  // if (error.code === 'auth/missing-ios-bundle-id') {
  //   toast.error('The request is missing a Bundle ID.');
  // }
  // if (error.code === 'auth/missing-uid') {
  //   toast.error('A uid identifier is required for the current operation.');
  // }
  // if (error.code === 'auth/missing-oauth-client-secret') {
  //   toast.error('The OAuth configuration client secret is required to enable OIDC code flow.');
  // }
  // if (error.code === 'auth/operation-not-allowed') {
  //   toast.error('Operation not allowed.');
  // }
  // if (error.code === 'auth/project-not-found') {
  //   toast.error('Project not found.');
  // }
};

export default firebaseError;
