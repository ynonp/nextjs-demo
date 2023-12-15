import { getSession } from '@auth0/nextjs-auth0';

export default async function ProfileServer() {
  const session = await getSession();

  if (session) {
    const user = session.user;
    return (
      user && (
          <div>
            <h1>User Info from Server Component</h1>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  )
  } else {
    return (
      <p>Please log in to see your info</p>
    )
  }
}