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
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Campaign < ActiveRecord::Base
  validates :title, presence: true

  has_attached_file :square_image, default_url: "miu.jpg"
  validates_attachment_content_type :square_image, content_type: /\Aimage\/.*\z/

  has_attached_file :overview_image, default_url: "miu.jpg"
  validates_attachment_content_type :overview_image, content_type: /\Aimage\/.*\z/

  belongs_to :creator,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  has_many :rewards,
    class_name: :Reward,
    primary_key: :id,
    foreign_key: :campaign_id,
    inverse_of: :campaign

  has_many :contributions,
    through: :rewards,
    source: :contributions


  accepts_nested_attributes_for :rewards

end
