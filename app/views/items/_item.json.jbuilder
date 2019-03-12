json.extract! item, :id, :name, :picture, :description, :reference, :created_at, :updated_at
json.url item_url(item, format: :json)
