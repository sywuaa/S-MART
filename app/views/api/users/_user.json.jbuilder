json.extract! user, :id, :username, :first_name, :last_name, :email

json.contributions user.contributions.length
json.campaigns user.campaigns
