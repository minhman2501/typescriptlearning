type GreetProps = {
  name: string;
  customGreet?: string;
  isLoggedIn:boolean;
};

export const Greet = (props: GreetProps) => {
  const { name, customGreet, isLoggedIn } = props;
  return (
    <>
      <h1>
        {customGreet ? customGreet : "Welcome"} {isLoggedIn ? name : "Guest"}
      </h1>
    </>
  );
};
