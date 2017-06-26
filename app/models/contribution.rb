# == Schema Information
#
# Table name: contributions
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  reward_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Contribution < ActiveRecord::Base

  belongs_to :reward,
    class_name: :Reward,
    primary_key: :id,
    foreign_key: :reward_id

  belongs_to :contributor,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id


end
