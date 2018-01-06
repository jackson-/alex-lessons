name = raw_input("Give me a number ")
try:
    num = int(name)
except:
    print("You dont know NaN")
    exit()
if (num % 2) == 0:
    print("This is even")
elif (num % 2) == 1:
    print("This is odd")