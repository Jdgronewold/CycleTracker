Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :hikes, only: [:index, :show, :create, :update, :destroy] do
      get "feed", on: :collection
    end
    resources :workouts, only: [:index, :show, :create, :update, :destroy]
    resources :friends, only: [:index, :show, :create, :destroy] do
      get "search", on: :collection
    end
    resources :comments, only: [:create, :destroy]
  end

end
