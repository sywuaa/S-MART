class CreateCampaign < ActiveRecord::Migration[5.0]
  def change
    create_table :campaigns do |t|
      t.integer :user_id
      t.integer :goal_amt
      t.string :title
      t.text :story
      t.string :country
    end
  end
end
