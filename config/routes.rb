Rails.application.routes.draw do
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # get '/random_greeting', to: 'greetings#random'
  # Defines the root path route ("/")
  get '/api/greetings/random', to: 'greetings#random'
end
