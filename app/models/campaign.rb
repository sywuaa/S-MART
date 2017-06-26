# == Schema Information
#
# Table name: campaigns
#
#  id                 :integer          not null, primary key
#  user_id            :integer
#  title              :string
#  goal               :integer
#  slogan             :string
#  square_image_url   :string
#  city               :string
#  country            :string
#  start_date         :date
#  end_date           :date
#  vid_url            :string
#  vid_olay_image_url :string
#  overview_image_url :string
#  overview           :string
#  story              :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Campaign < ActiveRecord::Base

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  has_many :rewards,
    class_name: :Reward,
    primary_key: :id,
    foreign_key: :campaign_id

  has_many :contributions,
    through: :rewards,
    source: :contributions



end
