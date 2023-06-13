class GreetingsController < ApplicationController
    def random
      random_greeting = Message.order(Arel.sql('RANDOM()')).first
      render json: { greeting: random_greeting&.content }
    end
  
    def random_batch
      count = params[:count].to_i
      random_greetings = Message.order(Arel.sql('RANDOM()')).limit(count)
      greetings = random_greetings.map(&:content)
      render json: { greetings: greetings }
    end
  end
  