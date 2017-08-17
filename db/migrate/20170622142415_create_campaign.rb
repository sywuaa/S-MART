class CreateCampaign < ActiveRecord::Migration[5.0]
  def change
    create_table :campaigns do |t|

      # basic
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :goal, null: false
      t.string :slogan, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.date :start_date
      t.date :end_date

      # story
      t.string :vid_url, null: false
      t.string :overview, null: false
      t.string :story, null: false

      t.timestamps

    end
  end
end
