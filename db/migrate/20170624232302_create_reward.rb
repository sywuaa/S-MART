class CreateReward < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.string :title
      t.string :description
      t.integer :campaign_id
      t.integer :price
    end
  end
end
