class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :string
      t.integer :contact
      t.string :location
      t.text :description
      t.references :client
      t.references :item

      t.timestamps
    end
  end
end
