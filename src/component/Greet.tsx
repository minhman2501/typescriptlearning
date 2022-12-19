type GreetProps = {
  name: string;
  messageCount?: string;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { name, messageCount = 0, isLoggedIn } = props;
  return (
    <>
      <h1>Welcome {isLoggedIn ? name : "Guest"}</h1>
      {isLoggedIn && <h2>You have {messageCount} messages</h2>}
    </>
  );
};
