@carousels.each do |campaign|
  json.set! campaign.id do
    json.extract! campaign, :id
    json.carousel_image asset_path(campaign.carousel_image)
  end
end
