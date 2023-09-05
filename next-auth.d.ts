// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      email: string;
      name: string;
      accessToken: {
        jti: string;
        exp: number;
        iat: number;
      };
    };
  }
}
