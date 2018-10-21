function is_square(num) {
  const sqrt = Math.sqrt(num)
  return Math.floor(sqrt) * Math.floor(sqrt) === num ? true : false
};

is_square(-1) // # => false
is_square(0) // # => true
is_square(3) // # => false
is_square(4) // # => true
is_square(25) // # => true
is_square(26) // # => false
