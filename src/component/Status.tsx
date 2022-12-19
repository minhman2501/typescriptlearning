type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = ({ status }: StatusProps) => {
  let message;

  switch (status) {
    case "loading":
      message = "Loading";
      break;
    case "success":
      message = "Successfully Fetched";
      break;
    case "error":
      message = "Error!!";
      break;
  }

  return (
    <>
      <div>
        <h1>Status - {status}</h1>
        <p>{message}</p>
      </div>
    </>
  );
};
