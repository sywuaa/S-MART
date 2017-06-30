@campaigns.each do |campaign|
  json.set! campaign.id do
    json.extract! campaign, :id, :title, :slogan, :start_date, :end_date
    json.square_image_url asset_path(campaign.square_image.url)
    json.contributions campaign.contributions.map{|contribution| contribution.amount.to_i }.reduce(0,:+)
    json.supporters campaign.contributions.length
    json.goal campaign.goal
    json.end_date campaign.end_date
  end
end
