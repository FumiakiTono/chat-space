class AddReferenceToMessages < ActiveRecord::Migration[5.0]
  def change
    add_reference :messages, :group
    add_reference :messages, :user
  end
end
