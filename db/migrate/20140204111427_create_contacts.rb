class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :subject
      t.text :comment
      #      t.has_attached_file :attach
      t.string :original_file_name
      t.string :attach_file_name
      t.timestamps
    end
  end
end
