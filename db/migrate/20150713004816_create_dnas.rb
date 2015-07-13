class CreateDnas < ActiveRecord::Migration
  def change
    create_table :dnas do |t|
      t.string :name
      t.text :sequence, null: false

      t.timestamps
    end
    add_index :dnas, :name
    add_index :dnas, :sequence
  end
end
