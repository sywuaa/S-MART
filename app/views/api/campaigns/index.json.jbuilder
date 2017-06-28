json.array! @campaigns do |campaign|

    json.extract! campaign, :id, :title, :slogan, :start_date, :end_date
    json.square_image_url asset_path(campaign.square_image.url)

end
