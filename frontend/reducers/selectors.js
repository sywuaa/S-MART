export const selectAllCampaigns = (campaigns) => {
  if( !campaigns ){
    return null;
  }else {
    let campArray = Object.keys(campaigns).map ( id => campaigns[id]);
    return campArray;
  }
};

export const selectCarousels = (carousels) => {
  if ( !carousels) {
    return null;
  }else {
    let carouArray = Object.keys(carousels).map ( id => carousels[id]);
    return carouArray;
  }
};

export const selectImages = (array) => {
  let images = [];
  for(let i = 0; i < array.length; i++){
    images.push(array[i].carousel_image);
  }
  return images;
};
