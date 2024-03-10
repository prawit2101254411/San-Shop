import { getServerSession, type NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { table } from "console";

// const logonUserSchema = z.object({
//     username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, 'Invalid username'),
//     password: z.string().min(5, 'Password should be minimum 5 characters'),
// });

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
        }),
        // CredentialsProvider({
        //     type: "credentials",
        //     name: 'Credential',
        //     credentials: {
        //         username: { type: 'text', placeholder: 'test@test.com' },
        //         password: { type: 'password', placeholder: 'Password' },
        //     },
        //     async authorize(credentials) {

        //         const { username, password }: any = credentials;
        //         // console.log(username)
        //         const user = await prisma.user.findFirst({
        //             where: { username },
        //             select: { 
        //                 id: true, 
        //                 fname: true,
        //                 lname:true,
        //                  email: true, 
        //                  password: true, 
        //                  role: true, 
        //                  username: true,
        //                  status:true,
        //                  }
        //         });
        //     console.log(user)

        //         if (!user || user.status === "false") return null;
        //         // const isPasswordValid = await compare(password, user.password);
        //         // if (!isPasswordValid) return null;
        //          return { ...user, id: String(user.id), };
        //     },
        // })
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    // debug: process.env.NODE_ENV !== "production",
    // pages: {
    //     signIn: '/app/shop',
    //     signOut: '/login',
    //     error: '/error',
    //     verifyRequest: '/signin',
    //     newUser: '/'
    // },
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        session({ session, token }) {
            session.user = {
                ...session.user,
                // @ts-expect-error
                id: token.sub!,
                // @ts-expect-error
                role: token.user.level!,
                // @ts-expect-error
                username: token.user.username!,
                // @ts-expect-error
                name: token.user.name!,
                // @ts-expect-error
                image: token.user.image!

            };
            // console.log(token)
            return session
        },
        jwt({ token, user }) {
            if (user) {
                token.user = user;

            }
            // console.log(token)
            return token
        },

    },

};
export function getSession() {
    return getServerSession(authOptions) as Promise<{
        user: {
            id: string;
            name: string;
            lname: string;
            username: string;
            email: string;
            role: string;
            image: string;
        };
    } | null>;
}
