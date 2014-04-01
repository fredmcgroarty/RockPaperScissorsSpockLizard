require 'sinatra'
require_relative './index'

get '/' do 
	erb :index
end