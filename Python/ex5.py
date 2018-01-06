a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
c = []

for i, j in zip(a, b):
    #print(i, j)
    if i in b:
        c.append(i)

    elif j in a:
        c.append(j)
        
print(c)