# x_one = 1
# x_two = 1

# y_one = 5
# y_two = 20

# if x_one == x_two:
#     print("the line is vertical")
#     print("x = " + str(x_one))
# else:

#     m = (y_two-y_one)/(x_two - x_one)
#     b = y_one - m * x_one

#     if m==0:
#         print("the line is horizontal")
#     elif m > 0:
#         print("the line is rising")
#     else:
#         print("the line is falling")
#     print("the equation of the line is: y = " + str(m) + " * x + " +str(b))

number = 23
isPrime = True

divideBy = range(2,number)

index = 0
while divideBy[index] < number-1:
    if number%divideBy[index]==0:
        isPrime = False
        print(str(number) + " is not prime")
        print(str(number)+ " is divisible by " + str(divideBy[index]))
        exit()
    index+=1
print(str(number) + " is prime")
