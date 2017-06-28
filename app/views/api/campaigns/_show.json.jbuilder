json.campaign do
  json.extract! campaign, :id, :title, :goal, :slogan, :city, :country, :start_date, :end_date

  json.extract! campaign, :vid_url, :overview, :story

  json.creator campaign.creator, :username
  json.square_image_url campaign.square_image_url.url

  json.rewards do
     json.array! campaign.rewards, :title, :price, :item, :description
  end
end
