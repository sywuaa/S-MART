class AddItemToReward < ActiveRecord::Migration[5.0]
  def change
    add_column :rewards, :item, :string
  end
end
