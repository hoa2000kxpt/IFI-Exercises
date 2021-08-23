import type { NextPage } from 'next'
import Login from './Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default Home

// import { useSession, signIn, signOut } from "next-auth/client"

// export default function Component() {
//   const [session, loading] = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }
