# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string           not null
#  last_name           :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  country             :string           not null
#  city                :string           not null
#  total_contributions :integer          default(0)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class User < ActiveRecord::Base

  validates :first_name, :last_name, :email, :password_digest, :session_token, :country, :city, presence: true
  validates :password_digest, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    (user && user.is_password?(password)) ? user : nil
  end


  def is_password?(pwd)
    BCrypt::Password.new(self.password_digest).is_password?(pwd)
  end

  def password=(pwd)
    @password = pwd
    self.password_digest = BCrypt::Password.create(pwd)
  end


  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end


end
