class AddAttachmentCarouselImageToCampaigns < ActiveRecord::Migration
  def self.up
    change_table :campaigns do |t|
      t.attachment :carousel_image
    end
  end

  def self.down
    remove_attachment :campaigns, :carousel_image
  end
end
