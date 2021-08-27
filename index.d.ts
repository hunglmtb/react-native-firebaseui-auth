export = RNFirebaseuiAuth;

declare namespace RNFirebaseuiAuth {
  type User = {
    uid: string;
    displayName: string;
    photoURL: string;
    email: string;
    phoneNumber: string;
    providerId: string;
    isNewUser: boolean;
    creationTimestamp: number;
    lastSignInTimestamp: number;
    idToken: string;
  };

  interface Config {
    providers: string[];
    customizations?: string[];
    tosUrl?: string;
    privacyPolicyUrl?: string;
    allowNewEmailAccounts?: boolean;
    requireDisplayName?: boolean;
  }

  export function signIn(config: Config): Promise<User>;
  export function getCurrentUser(): Promise<User|null>;
  export function signOut(): Promise<boolean>;
}
