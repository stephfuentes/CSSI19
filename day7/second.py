#read in user's input
num = raw_input("Enter a number: ")
#convert num to an int 
num = int(num)

if type(num) != type(int()):
    print "not an integer"
elif num < 1 or num > 10:
    print"out of range"
elif num % 2 == 0:
    if num ==2:
        print"your number is prime"
    else:
        print"your number is not prime"
else:
    if num == 3 or num == 5 or num ==7:
        print "your number is prime"
    else:
        print"your number is not prime"
