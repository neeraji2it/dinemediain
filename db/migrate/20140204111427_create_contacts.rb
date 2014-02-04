class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :subject
      t.text :comment
      t.has_attached_file :attach
      t.timestamps
    end
  end
end
