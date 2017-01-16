class User < ApplicationRecord
  validates :username, :password_digest, :email, :zipcode, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :routes
  has_many :workouts
  has_many :out_friends, foreign_key: :user_id, class_name: :Friend
  has_many :friends, through: :out_friends, source: :user

  after_initialize :ensure_session_token

  def self.find_user_by_credentials(username, password)
    user = User.find_by(username: username)
    return if user.nil?
    return user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    pass = BCrypt::Password.new(self.password_digest)
    pass.is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
