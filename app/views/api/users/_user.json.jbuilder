
  json.extract! user, :id, :username, :first_name, :last_name, :email
  json.contributions user.contributions.length
  json.campaigns user.campaigns do |campaign|
    json.extract! campaign, :id, :title, :slogan, :end_date
    json.square_image_url asset_path(campaign.square_image.url)
  end
  json.perks user.contributions do |contribution|
    json.contribution_id contribution.id
    json.contribution_amount contribution.amount
    json.contribution_campaign_id contribution.campaign_id
    json.extract! contribution.reward, :id, :title, :item
  end
