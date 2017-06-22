export const createCampaign = ({campaign}) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/campaigns',
    data: {campaign}
  });
};
