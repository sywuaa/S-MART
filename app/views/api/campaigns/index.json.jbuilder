@campaigns.each do |campaign|
  json.set! campaign.id do

    json.extract! campaign, :id, :title, :slogan, :square_image_url, :start_date, :end_date

    json.creator @campaign.user.username

  end
end
