class CreateReward < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :item, null: false
      t.integer :campaign_id, null: false
      t.integer :price, null: false
    end
  end
end
