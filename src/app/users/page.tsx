import ClientUser from './client_user';
import ServerUser from './server_user';

export default function UsersPage() {
  return (
    <div>
      <h1>User Page</h1>
      <p>
        <a href="/api/auth/login">Login</a>
      </p>
      <p>
        <a href="/api/auth/logout">Logout</a>
      </p>  
      <hr />    
      <ClientUser />
      <hr />
      <ServerUser />
    </div>
  )
}