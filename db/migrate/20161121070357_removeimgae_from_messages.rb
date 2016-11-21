class RemoveimgaeFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :imgae
  end
end
