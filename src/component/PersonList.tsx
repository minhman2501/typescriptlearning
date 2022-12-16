type listProps = {
  names: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: listProps) => {
  return (
    <>
      <h1>Here is the name list:</h1>
      <div>
        {props.names.map((name, index) => (
          <h2 key={index}>
            {name.first} {name.last}
          </h2>
        ))}
      </div>
    </>
  );
};
