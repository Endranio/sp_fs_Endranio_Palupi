import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth/Oauth`,
          {
            email: user.email,
            username: user.name,
            provider: "google",
          },
        );

        user.backendToken = res.data.data.token;
        user.backendUser = res.data.data.user;
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.backendToken = user.backendToken;
        token.backendUser = user.backendUser;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.backendUser) {
        session.user = token.backendUser;
      }
      if (token.backendToken) {
        session.backendToken = token.backendToken;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
});

export { handler as GET, handler as POST };
