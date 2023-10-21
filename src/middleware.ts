import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';


export default withAuth(
    function middleware(req) {
        if (
            !req.nextauth.token &&
            req.nextUrl.pathname.includes("medico")
        ) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    },
    {
        callbacks: {
            authorized: async () => true
        },
        pages: {
            signIn: '/login',
        },
    }
);

export const config = {
    matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }