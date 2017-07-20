export const fetchCarousels = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/carousels'
  });
};
