import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  session: {
    jwt: true
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        // const adminAccount = {
        //   email: "hoa2000kxpt@gmail.com",
        //   password: "123456"
        // }

        // const userAccount = {
        //   email: "haha@gmail.com",
        //   password: "999999"
        // }
        // const isAdminAccount = (adminAccount.email === credentials.email && adminAccount.password === credentials.password);
        // const isUserAccount = (userAccount.email === credentials.email && userAccount.password === credentials.password);
        // if (!isAdminAccount) {
        //   throw new Error('Could not log you in!');
        // }
        // return { email: credentials.email }



        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = (credentials.password == user.password)

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email };

      }
    })
  ]
})