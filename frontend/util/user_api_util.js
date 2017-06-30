export const fecthUser = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};
