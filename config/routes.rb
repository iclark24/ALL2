Rails.application.routes.draw do

  namespace :api do
    resources :characters do
      resources :cc_lasses
    end
  end
  get '*other', to: 'static#index'
end