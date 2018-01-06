num = input("Enter a number")
store = []
for i in range (1, num+1):
    if (num % i) == 0:
        store.append(i)
print(store)
