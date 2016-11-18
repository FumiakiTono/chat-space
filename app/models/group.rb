class Group < ApplicationRecord
  validates :name, presence: { message: "を入力してください" }
  has_many :users_groups
  has_many :users, through: :users_groups
  accepts_nested_attributes_for :users
end
