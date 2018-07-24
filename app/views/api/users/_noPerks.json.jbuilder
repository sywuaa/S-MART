json.extract! user, :id, :username, :first_name, :last_name, :email
json.contributions user.contributions.length
json.campaigns user.campaigns do |campaign|
  json.extract! campaign, :id, :title, :slogan, :end_date
  json.square_image_url asset_path(campaign.square_image.url)
end
