class CreateContribution < ActiveRecord::Migration[5.0]
  def change
    create_table :contributions do |t|
      t.integer :user_id
      t.integer :reward_id

      t.timestamps
    end
  end
end
