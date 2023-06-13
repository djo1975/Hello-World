class AddGreetingsToMessages < ActiveRecord::Migration[7.0]
  def change
    greetings = [
      "Hello!",
      "Hi there!",
      "Greetings!",
      "Welcome!",
      "Good day!"
    ]

    greetings.each do |greeting|
      Message.create(content: greeting)
    end
  end
end

