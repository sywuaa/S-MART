class AddAttachmentSquareImageUrlToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :square_image
    end
  end

  def self.down
    remove_attachment :campaigns, :square_image
  end
end
