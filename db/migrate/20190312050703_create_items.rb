class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :picture
      t.text :description
      t.references :company

      t.timestamps
    end
  end
end