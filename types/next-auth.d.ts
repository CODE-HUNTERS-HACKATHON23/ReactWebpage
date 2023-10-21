import NextAuth, { DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface User {
        id: number;
        username: string;
        email: string;
        rol: string;
        accessToken: string;
    }

    interface Session {
        user: User;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: User;
    }
}