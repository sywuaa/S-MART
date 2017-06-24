export const createCampaign = ({campaign}) => {
  return $.ajax({
    method: 'POST',
    url: 'api/campaigns',
    data: {campaign}
  });
};

export const fetchAllCampaigns = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/campaigns'
  });
};

export const fetchCampaign = (id) => {
  return $.ajax({
    method: 'GET',
    url: 'api/campaigns'
  });
};

export const updateCampaign = ({campaign}) => {
  return $.ajax({
    method: 'PATCH',
    url: 'api/campaign',
    data: {campaign}
  });
};
