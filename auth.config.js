export const authConfig = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
        // updateAge: 0,    // force fixed expiry
    },
     jwt: {
    maxAge: 60 * 60, // 1 hour
  },
    providers: [],
}