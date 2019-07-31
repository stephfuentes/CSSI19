story = """Old King Cole was a merry old soul
and a merry old soul was he
He called for his pipe
And he called for his {0}
And he called for his fiddlers {1}
Ev'ry {2} had a fiddle so fine
And a very fine fiddle had he
Oh there's none so rare 
As can compare
With King Cole and his fiddlers {3}"""

adjective = raw_input("Enter an adjective:")
number1 =raw_input("enter a number as a word:")
noun = raw_input("enter a noun:")
number2 = raw_input("enter a number as a word:")

print story .format(adjective,number1,noun,number2)