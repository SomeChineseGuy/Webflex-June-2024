# In Ruby Classes are a huge thing - read only, write only, read and write classes
# Private methods in classes

class Car
  # same as constructor
  def initialize make, model, year
    # this.make === make
    @make = make
    @year = year
    @model = model
  end

  # Read function
  # def show_make
  #   @make 
  # end

  # def change_make (new_car)
  #   puts new_name
  #   @make = new_car
  # end
  
  # Ruby has built in Getters and Setters for classes
  # Getter
  # attr_reader :make, :year, :model
  
  # Setter
  # attr_writer :make, :year, :model

  # Setter/Getter
  attr_accessor :make, :year, :model

  def show_make 
    @make

  end
  private
  def new_name
    'hello'
  end

end

# const myCar = new Car()
my_car = Car.new 'Ford', 'F150', 2000
p my_car
p my_car.make
p my_car.year
p my_car.model

my_car.make = 'Honda'
my_car.year = 1990
my_car.model = 'Civic'

p my_car.make
p my_car.year
p my_car.model

p my_car.show_make