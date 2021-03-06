json.campaign do
  json.extract! campaign, :id, :title, :goal, :slogan, :city, :country, :start_date, :end_date
  json.extract! campaign, :vid_url, :overview, :story
  json.contributions campaign.contributions.map{|contribution| contribution.amount.to_i }.reduce(0,:+)
  json.supporters campaign.contributions.length
  json.creator campaign.creator, :username, :id

  json.overview_image_url asset_path(campaign.overview_image.url)

  json.rewards do
     json.array! campaign.rewards, :id, :title, :price, :item, :description
  end
end
