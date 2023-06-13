class GreetingsController < ApplicationController
    def random
      random_greeting = Message.order(Arel.sql('RANDOM()')).first
      render json: { greeting: random_greeting&.content }
    end
  end
  