class AddAttachmentOverviewImageToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :overview_image
    end
  end

  def self.down
    remove_attachment :campaigns, :overview_image
  end
end
