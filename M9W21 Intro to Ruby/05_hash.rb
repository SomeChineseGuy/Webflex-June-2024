#  Hash is a collection of key/value pairs just like an object

user = {
  "something" => "Cool",
  "username" => "Tron",
  "password" => 123
}

# puts user.password will not work because password is not a method the hash can call

# puts user["something"]
# puts user["password"]
# puts user["username"]

# instead of using a string you can use a symbol

new_user = {
  :username => "Jason",
  :password => 1233
}

p new_user[:username]
p new_user[:password]

puts new_user[:username]
puts new_user[:password]
 
p new_user.methods

# const arr = [1,2,3]