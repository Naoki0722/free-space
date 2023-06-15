class User < ApplicationRecord
  has_many :movies, dependent: :destroy
  validates :email, presence: true, length: { minimum: 10 }
  validates :first_name, presence: true
end
