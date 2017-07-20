@carousels.each do |campaign|
  json.set! campaign.id do
    json.extract! campaign, :id, :carousel_image
  end
end
