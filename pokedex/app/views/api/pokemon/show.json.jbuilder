json.pokemon do
  json.merge! @pokemon.attributes
end
json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.merge! item.attributes
    end
  end
end