# == Schema Information
#
# Table name: contributions
#
#  id          :integer          not null, primary key
#  user_id     :integer
#  reward_id   :integer
#  campaign_id :integer
#  amount      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Contribution < ActiveRecord::Base

  belongs_to :contributor,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :campaign,
    class_name: :Campaign,
    primary_key: :id,
    foreign_key: :campaign_id

  belongs_to :reward,
    class_name: :Reward,
    primary_key: :id,
    foreign_key: :reward_id

end
