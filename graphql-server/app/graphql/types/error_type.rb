# frozen_string_literal: true

module Types
  class ErrorType < Types::BaseObject
    field :field, String, null: true
    field :message, String, null: true
  end
end