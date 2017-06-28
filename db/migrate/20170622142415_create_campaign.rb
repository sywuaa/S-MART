class CreateCampaign < ActiveRecord::Migration[5.0]
  def change
    create_table :campaigns do |t|

      # basic
      t.integer :user_id
      t.string :title
      t.integer :goal
      t.string :slogan
      t.string :city
      t.string :country
      t.date :start_date
      t.date :end_date

      # story
      t.string :vid_url
      t.string :overview
      t.string :story

      t.timestamps

    end
  end
end
