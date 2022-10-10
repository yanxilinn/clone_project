class User < ApplicationRecord
    has_secure_password

  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, uniqueness: true, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :first_name, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :last_name, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  
  has_many :reviews
  

  attr_reader :password
  before_validation :ensure_session_token

 
  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :first_name
    user = User.find_by(field => credential)
    if user&.authenticate(password)
      return user
    else 
      nil
    end 
  end 

  def is_password?(password)
    pass_obj = BCrypt::Password.new(self.password_digest)
    pass_obj.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end


private

def generate_unique_session_token
  loop do
    token = SecureRandom.base64
    break token unless User.exists?(session_token: token)
  end
end

def ensure_session_token
  self.session_token ||= generate_unique_session_token
end
end
