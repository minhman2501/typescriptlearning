import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};
export const LoggedIn = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Man",
      email: "lmao@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Sign In</button>
      <button onClick={handleLogout}>Sign Out</button>
      {user && (
        <>
          <div>User's name: {user.name}</div>
          <div>User's email: {user.email}</div>
        </>
      )}
    </div>
  );
};
