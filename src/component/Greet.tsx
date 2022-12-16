type GreetProps = {
  name: string;
  customGreet?: string;
};
export const Greet = (props: GreetProps) => {
  return (
    <>
      <h1>Hello {props.name}</h1>
      {props.customGreet && <p>{props.customGreet}</p>}
    </>
  );
};
