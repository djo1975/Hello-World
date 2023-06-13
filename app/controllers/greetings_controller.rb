class GreetingsController < ApplicationController
  def random_batch
    random_greetings = Message.order(Arel.sql('RANDOM()')).limit(5).pluck(:content)
    render json: { greetings: random_greetings }
  end
end
