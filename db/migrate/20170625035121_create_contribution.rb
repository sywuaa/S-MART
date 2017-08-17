class CreateContribution < ActiveRecord::Migration[5.0]
  def change
    create_table :contributions do |t|
      t.integer :user_id, null: false
      t.integer :reward_id, null: false
      t.integer :campaign_id, null: false
      t.integer :amount, null: false

      t.timestamps
    end
  end
end
