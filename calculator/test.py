import re 


x = 0
y = []
z = 0

print('welcome to Emma Wap\'s Calculator')

def uinput():
    global x, y, z
    x,y,z = (input("Enter your math equation")).split(' ')
    # y = input("Enter a mathamatical sign, +, -, *, /, ")
    # z = input("Now enter a third number ")
    x = int(x)
    z = int(z)
    if y == '+' :
        a = x + z
        print(x,y,z,'= ',a)
    elif y == '-' :
        s = x - z
        print(x,y,z,'= ',s)
    elif y == '*':
        m = x * z
        print(x,y,z,' =',m)
    elif y == '/':
        d = x / z
        print(x,y,z,' =',d)
    else:
        print("make sure you wrote the equation spaced out and chose the correct operators")

uinput()

while True:
    uinput()