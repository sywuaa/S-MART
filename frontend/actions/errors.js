export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERROR = "CLEAR_ERRORS";

export const receiveError = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearError = () =>{
  return{
    type: CLEAR_ERRORS
  };
};
