json.extract! @campaign, :id, :title, :goal, :slogan, :square_image_url, :city, :country, :start_date, :end_date

json.extract! @campaign, :vid_url, :vid_olay_image_url, :overview_image_url, :overview, :story
json.creator @campaign.creator.username
