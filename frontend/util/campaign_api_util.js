export const createCampaign = (formData) => {
  return $.ajax({
    method: 'POST',
    url: 'api/campaigns',
    contentType: false,
    processData: false,
    data: formData
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
    url: `api/campaigns/${id}`
  });
};

export const updateCampaign = ({campaign}) => {
  return $.ajax({
    method: 'PATCH',
    url: 'api/campaign',
    data: {campaign}
  });
};
