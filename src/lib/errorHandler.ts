type ErrorResponse = {
  code: number;
  message: string;
};

const getErrorMessage = (name: string): ErrorResponse => {
  let errorCode = 500;
  let message = "";
  if (name === "method_not_allowed") {
    errorCode = 405;
    message = "Method is not allowed";
  }

  return {
    code: errorCode,
    message,
  };
};

export default getErrorMessage;
