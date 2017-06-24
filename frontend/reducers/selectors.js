export const selectAllCampaigns = (campaigns) => {
  if( !campaigns ){
    return null;
  }else {
    let campArray = Object.keys(campaigns).map ( id => campaigns[id]);
    return campArray;
  }
};
