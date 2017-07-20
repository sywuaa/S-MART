# == Schema Information
#
# Table name: campaigns
#
#  id                          :integer          not null, primary key
#  user_id                     :integer
#  title                       :string
#  goal                        :integer
#  slogan                      :string
#  city                        :string
#  country                     :string
#  start_date                  :date
#  end_date                    :date
#  vid_url                     :string
#  overview                    :string
#  story                       :string
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  square_image_file_name      :string
#  square_image_content_type   :string
#  square_image_file_size      :integer
#  square_image_updated_at     :datetime
#  overview_image_file_name    :string
#  overview_image_content_type :string
#  overview_image_file_size    :integer
#  overview_image_updated_at   :datetime
#

class Campaign < ActiveRecord::Base
  validates :title, presence: true

  has_attached_file :square_image, default_url: "miu.jpg"
  validates_attachment_content_type :square_image, content_type: /\Aimage\/.*\z/

  has_attached_file :overview_image, default_url: "miu.jpg"
  validates_attachment_content_type :overview_image, content_type: /\Aimage\/.*\z/

  # has_attached_file :carousel_image, default_url: "miu.jpg"
  # validates_attachment_content_type :carousel_image, content_type: /\Aimage\/.*\z/

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
    class_name: :Contribution,
    primary_key: :id,
    foreign_key: :campaign_id


  accepts_nested_attributes_for :rewards

end
