import { PersonProps } from "./PersonProps.types";
export const Person = (props: PersonProps) => {
  return (
    <>
      <h1>
        Hello, my name is {[props.name.first, props.name.last].join(" ")} and I
        am a {props.job}
      </h1>
    </>
  );
};
