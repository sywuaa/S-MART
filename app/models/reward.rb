# == Schema Information
#
# Table name: rewards
#
#  id          :integer          not null, primary key
#  title       :string
#  description :string
#  campaign_id :integer
#  price       :integer
#

class Reward < ActiveRecord::Base

  belongs_to :campaign,
    class_name: :Campaign,
    primary_key: :id,
    foreign_key: :campaign_id

  has_many :contributions,
    class_name: :Contribution,
    primary_key: :id,
    foreign_key: :reward_id
end