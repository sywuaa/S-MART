@campaigns.each do |campaign|
  json.set! campaign.id do
    json.extract! campaign, :id, :title, :slogan, :start_date, :end_date
    json.square_image_url asset_path(campaign.square_image.url)
    json.contributions campaign.contributions.map{|contribution| contribution.amount }.reduce(0,:+)
    json.supporters campaign.contributions.length
    json.goal campaign.goal
    json.s_date campaign.start_date
    json.e_date campaign.end_date
  end
end
