class CreateUser < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null:false
      t.string :country, null:false
      t.string :city, null: false
      t.integer :total_contributions, default: 0

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :password_digest, unique: true
  end
end
