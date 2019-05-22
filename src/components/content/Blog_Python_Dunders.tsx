import * as React from 'react';
import { Container } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common/CodeBlock';

export class BlogPythonDunders extends React.Component<any, any> {
    render(){
        return (
            <Container>
                <h2>Python: Dunders</h2>
                <p>
                        Dunder stands for double-underscore. Dunders are also known as special methods or magical methods. 
                        
                        In Python, special methods are a set of predefined methods you can use to enrich your classes. They are easy to recognize because they start and end with double underscores, for example __init__ or __str__.
                        
                        Every object in Python has its own dunders, and knowing how to manipulate and use them, will make your objects more "Pythonic", the code more readable and easy to use and maintain.
                </p>
                <p>
                    First, to list all available dunders of an object, use the dir() command
                </p>
                <CodeBlock language='python' code={`# dir on a list
dir([])

>>> ['__repr__', '__hash__', '__getattribute__', '__lt__', '__le__', '__eq__', '__ne__', '__gt__', '__ge__', '__iter__', '__init__', '__len__', '__getitem__', '__setitem__', '__delitem__', '__add__', '__mul__', '__rmul__', '__contains__', '__iadd__', '__imul__', '__new__', '__reversed__', '__sizeof__', 'clear', 'copy', 'append', 'insert', 'extend', 'pop', 'remove', 'index', 'count', 'reverse', 'sort', '__doc__', '__str__', '__setattr__', '__delattr__', '__reduce_ex__', '__reduce__', '__subclasshook__', '__init_subclass__', '__format__', '__dir__', '__class__']

# dir on a string
dir('')
>>> ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']

# dir on a new class
class NewObj(object):
    pass
                         
n = NewObj()
dir(n)

>>> ['__module__', '__dict__', '__weakref__', '__doc__', '__repr__', '__hash__', '__str__', '__getattribute__', '__setattr__', '__delattr__', '__lt__', '__le__', '__eq__', '__ne__', '__gt__', '__ge__', '__init__', '__new__', '__reduce_ex__', '__reduce__', '__subclasshook__', '__init_subclass__', '__format__', '__sizeof__', '__dir__', '__class__']`} />

                <p>
                    This example demonstrates that a built in type (list) has plenty of its own dunders, and also a new class, has quite a few of them as well.
                        
                    In the next examples we will go through the most notable and used dunders in Python.
                </p>
                <h3>Object constructor: __init__</h3>
                <p>
                    The plain known constructor is actually a special method: __init__
                        
                    Rarely you will see classes without this object
                </p>
                <CodeBlock language='python' code={`class Account:
"""A simple account class"""

def __init__(self, owner, amount=0):
"""
This is the constructor that lets us create
objects from this class
"""
    self.owner = owner
    self.amount = amount
    self._transactions = []`} />
                
                <p>
                    In this example we initialize a few properties of the Account class with the inputs that are passed in the class initialization.
                        
                    Note the self._transactions property. The convention in Python is that an internal property or method, will be marked with a single underscore (opposed to dunders).

                    These methods and properties are still accessible from outside but a good programming practice is to use them only inside the scope where they are defined.
                        
                    The instance of the class will be created like this:
                </p>
                <CodeBlock language='python' code={`>>> acc = Account('Alice')  # default amount = 0
>>> acc = Account('Bob', 10)`} />

                <h3>Object Name: __name__</h3>
                <p>
                    The name of the object is by default the name of the class, but it can be changed programatically. The most wide known use of __name__ is as a runner within the module:
                </p>
                <CodeBlock language='python' code={`def main():
acc = Account('Alice')  # default amount = 0
acc = Account('Bob', 10)

print(Account.__name__)

if __name__ == '__main__':
    main()`} />
                
                <p>
                    this usage basically lets the programmer to run the module itself, which can be convenient during development.

                    Note - a good programming practice for production code is not to use this pattern. A better way is to run the module from its testing module
                </p>

                <h3>Object Representation: __str__, __repr__</h3>
                <p>
                    A common way to get meaningful representation and printing of an object is to use __str__ and __repr__.
                        
                    __str__ will print a specified message when using print(obj) or str(obj) and __repr__ will be used when using repr(obj).
                </p>
                <p>
                    Let's add these two special methods to the Account class
                </p>
                <CodeBlock language='python' code={`class Account:
# ... (see above)

def __repr__(self):
    return 'Account({!r}, {!r})'.format(self.owner, self.amount)
                         
def __str__(self):
    return 'Account of {} with starting amount: {}'.format(self.owner, self.amount)
                         
>>> str(acc)
'Account of bob with starting amount: 10'
                         
>>> print(acc)
"Account of bob with starting amount: 10"
                         
>>> repr(acc)
"Account('bob', 10)"`} />
                
                <h3>Iteration special methods: __len__, __getitem__</h3>
                <p>
                    These special methods are used to iterate through the objects in the class. In the __init__ method we defined the _transaction property as a list.
                    Now it's time to use it. 
                </p>
                <p>
                    We're defining four new methods - two special methods __len__ and __getitem__, add_transaction method which stores each transaction in the ._transaction list
                    and the property balance.
                </p>
                <CodeBlock language='python' code={`class Account:
# ... (see above)
                         
def __len__(self):
    return len(self._transactions)
                         
def __getitem__(self, position):
    return self._transactions[position]
                         
def add_transaction(self, amount):
    if not isinstance(amount, int):
        raise ValueError('please use int for amount')
    self._transactions.append(amount)
                         
@property
def balance(self):
    return self.amount + sum(self._transactions)
                        
>>> acc = Account('bob', 10)                        
>>> acc.add_transaction(20)
>>> acc.add_transaction(-10)
>>> acc.add_transaction(50)
>>> acc.add_transaction(-20)
>>> acc.add_transaction(30)
>>> acc.balance
80
>>> len(acc)
5
>>> for t in acc:
...    print(t)
20
-10
50
-20
30`} />
                <p>
                    special method __len__ returns the specified value when using len(obj). If you'd try to use len(obj) on our Account class without defining __len__, it would raise a TypeError.
                        
                    special method __getitem__ allows to iterate through an object as shown in the example. It is a very convenient and important special method to use.
                </p>
                <h3>
                    Comparing operators: __eq__, __lt__
                </h3>
                <p>
                    What can you do to compare the objects you create? A logical way to compare two accounts object is to say who has a higher balance. To do that we need to implement all the comparison
                    dunders. Instead of doing that, we will only implement two dunders (equal - __eq__ and less than __lt__) and all the others will fall in place thanks to the wonders of the functools.total_ordering decorator.
                </p>
                <p>
                    Changing the class a little:
                </p>
                <CodeBlock language='python' code={`from functools import total_ordering
                         
@total_ordering
class Account:

# ... (see above)
                          
def __eq__(self, other):
    return self.balance == other.balance
                          
def __lt__(self, other):
    return self.balance < other.balance`} />

                <p>
                    So, introducing these two new methods allow us to compare the balances of the accounts:
                </p>
                <CodeBlock language='python' code={`acc1 = Account('elza', 10)
acc2 = Account('tim', 100)
                         
                         
>>> acc2 > acc1
True
                         
>>> acc2 < acc1
False
                         
>>> acc2 == acc1
False`} />

                <p>
                    Decorators is a "heavy" topic in Python, and we will deal with it in the next blogs. However just to make it short, a decorator is a wrapper of a function, a method or a class, alternating or adding to its original functionalities. In our case, this decorator makes it possible to avoid defining all other comparison dunders, which can be tedious, and still to get the comparison functionality.
                </p>

                <h3>Adding operator: __add__</h3>
                <p>
                    A very common operator in Python is +. It can add numbers, strings and other objects. The wonders of '+' are due to the __add__ special method. In the known objects of int and str,
                        
                    they are implemented to sum numbers and concatenate strings. In our Account object, we can use it to merge two accounts. Adding the __add__ special method to our class:
                </p>
                <CodeBlock language='python' code={`def __add__(self, other):
owner = self.owner + ' & ' + other.owner
start_amount = self.balance + other.balance
return Account(owner, start_amount)
                                                
>>> acc3 = acc1 + acc2
>>> print(acc3.balance)
>>> print(acc3.owner)
110
elza & tim`} />

                <h3>Callable objects: __call__</h3>
                <p>
                    This special method makes an object callable. Which means it can be used as a function. In the case of the Account object we can use the __call__ method to
                    make a nice printout of the account, but it really can be anything we want.
                </p>
                <CodeBlock language='python' code={`class Account:
# ... (see above)
                         
def __call__(self):
    print('Start amount: {}'.format(self.amount))
    print('Transactions: ')
    for transaction in self:
        print(transaction)
    print('\nBalance: {}'.format(self.balance))
                        
>>> acc3()
Start amount: 110
Transactions:
                         
Balance: 110`} />
                <p>
                    Note: often it wouldn't be a good programming practice to use the __call__ method this way. It would be much better to have a regular method dealing with the printout explicitly.
                        
                    One good use case for a callable method, is by using a mock patch for testing functions generating random values
                </p>
                <h3>Context manager support: __enter__, __exit__</h3>
                <p>
                    This dunder is a little more advanced than the previous ones. We will introduce what should be added to the object to make it used with the "with" statement.
                        
                    First - a context manager is a simple interface that your object needs to follow so it can be used with the with statement. Basically all you need to do is add __enter__ and __exit__ methods to an object if you want it to function as a context manager.
                        
                    We will demonstrate that in our Account class, as a rollback functionality, so that if too much money was asked to be withdrawn, it will cancel the transaction
                    request.
                </p>
                <p>
                    Adding these 2 new methods to our class and a helper function (outside of the class):
                </p>
                <CodeBlock language='python' code={`class Account:
# ... (see above)
                         
def __enter__(self):
    print('ENTER WITH: Making backup of transactions for rollback')
    self._copy_transactions = list(self._transactions)
    return self
                         
def __exit__(self, exc_type, exc_val, exc_tb):
    print('EXIT WITH:', end=' ')
    if exc_type:
        self._transactions = self._copy_transactions
        print('Rolling back to previous transactions')
        print('Transaction resulted in {} ({})'.format(
            exc_type.__name__, exc_val))
        else:
            print('Transaction OK')
                         
                         
def validate_transaction(acc, amount_to_add):
    with acc as a:
        print('Adding {} to account'.format(amount_to_add))
        a.add_transaction(amount_to_add)
        print('New balance would be: {}'.format(a.balance))
        if a.balance < 0:
            raise ValueError('sorry cannot go in debt!')           
                        
                        
>>> acc4 = Account('Danny', 10)
>>> validate_transaction(acc4, 30)
                         
                         
ENTER WITH: Making backup of transactions for rollback
Adding 30 to account
New balance would be: 40
EXIT WITH: Transaction OK                        
                         
>>> validate_transaction(acc4, -60)
                         
ENTER WITH: Making backup of transactions for rollback
Adding -60 to account
New balance would be: -20
EXIT WITH: Rolling back to previous transactions
Transaction resulted in ValueError (sorry cannot go in debt!)`} />
                
                <p>
                    Ok, so what happened here?
                        
                    First, we defined two special methods. The __enter__ method is executed on the beginning of the 'with' statement and the __exit__ statement is executed at the end
                    of the 'with' statement. In the __exit__ method, the signature states that it could end with an exception or without it. If it will end without an exception, we will see a statement
                    "Transaction OK", otherwise it will go to a rollback flow and print the rollback statements.
                        
                    The helper function just generates an exception is the balance becomes negative, and that is executed via the __exit__ method.
                </p>
                <h3>Summary:</h3>
                <p>                    
                    There are many more dunders to check out. Some useful some not so much. This blog should give you the confidence to go for it and investigate, to make your classes
                    more elegant, more "Pythonic" and more useful.
                </p>                
            </Container>
        );
    }
}