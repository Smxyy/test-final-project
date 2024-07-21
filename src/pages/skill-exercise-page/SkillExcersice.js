let sharedVariable = '';
export const getSharedVariable = () => sharedVariable;
export const setSharedVariable = (newValue) => {
  sharedVariable = newValue;
};