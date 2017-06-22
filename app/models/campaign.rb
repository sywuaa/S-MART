# == Schema Information
#
# Table name: campaigns
#
#  id       :integer          not null, primary key
#  user_id  :integer
#  goal_amt :integer
#  title    :string
#  story    :text
#  country  :string
#

class Campaign < ActiveRecord::Base

end
