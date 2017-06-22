export const createCampaign = ({campaign}) => {
  return $.ajax({
    method: 'POST',
    url: 'api/campaigns',
    data: {campaign}
  });
};
