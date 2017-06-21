export const login = ({user}) => {
  return $.ajax({
      method: 'POST',
      url: 'api/session',
      data: { user }
  });
};

export const logout = (user) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/session/${user.id}`
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user }
  });
};
