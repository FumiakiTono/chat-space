class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user
  validates :body, presence: true
  mount_uploader :image, ImageUploader

  def create_hash(message)
    data =
     {  name: message.user.name,
        body: message.body,
        user_id: message.user_id,
        created_at: message.created_at,
        image: message.image.url(:thumb),
        updated_at: message.updated_at,
        group_id: message.group_id,
        id: message.id
     }
    return data
  end

end
