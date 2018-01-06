a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
less = []
more = []

for i in range (0, len(a)):
    if a[i] < 5:
        less.append(a[i])
    else:
        more.append(a[i])
print(less, more)