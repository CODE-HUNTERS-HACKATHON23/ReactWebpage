import NextAuth, { NextAuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { Client } from '@/lib/rest/client';
import { parse } from 'path';

export const AuthOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
    },
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                if (!credentials) {
                    throw new Error('Credenciales de usuario inválidas.');
                }

                const { data } = await Client.POST('/auth/login', {
                    body: {
                        contrasena: credentials.password,
                        correo: credentials.email,
                    }
                });
                
                if (!data?.accessToken) {
                    throw new Error('Credenciales de usuario inválidas.');
                }

                const result = await Client.GET('/usuario/me', {
                    headers: {
                        Authorization: `Bearer ${data.accessToken}`,
                    }
                });

                if(!result.data) {
                    throw new Error('Ha ocurrido un error, inicie sesión denuevo.');
                }

                const user = result.data;

                if(!result.data.rol || result.data.rol.nombre !== 'Medico') {
                    throw new Error('Solo los médicos pueden iniciar sesion en la web, inicie sesión en la app.');
                }

                return {
                    id: user.idUsuario,
                    username: user.usuario,
                    email: user.correo,
                    rol: user.rol?.nombre!,
                    accessToken: data.accessToken
                };
            },
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            if (user) {
                token.user = user as User;
            }
            return token;
        },
        session: ({ session, token }) => {
            if (token.user) {
                session.user = token.user;
            }
            return session;
        },
    },
};

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST, AuthOptions as Options };