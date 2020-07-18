'''
File: fizzbuzz.py
--------------------
This program prints out the numbers from 1 to 100, with some
special rules.  for multiples of three it prints “Fizz” 
instead of the number and for multiples of five it prints
“Buzz” instead of the number. For numbers that are multiples 
of both three and five, it prints “FizzBuzz” instead of the number.
'''

MAX_NUM = 100

def main():
	for i in range(MAX_NUM):
		if i % 3 == 0 and i % 5 == 0:
			print("FizzBuzz")
		elif i % 3 == 0:
			print("Fizz")
		elif i % 5 == 0:
			print("Buzz")
		else:
			print(i)


if __name__ == '__main__':
    main()