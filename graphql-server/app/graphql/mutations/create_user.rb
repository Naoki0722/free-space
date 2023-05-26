module Mutations
  class CreateUser < BaseMutation
    # TODO: define return fields
    field :user, Types::UserType, null: false

    # TODO: define arguments
    argument :email, String, required: true
    argument :first_name, String, required: true
    argument :last_name, String, required: true
    argument :age, Integer, required: true

    def resolve(**params)
      user = User.create!(params)
      { user: user }
    end
  end
end
