import * as React from 'react';
import { Container, Alert } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common';
import { Link } from 'react-router-dom';

export class BlogPythonDecorators extends React.Component<any, any> {
    render(){
        return (
            <Container>
                <h2>Python: Decorators</h2>
                
                <h3>Definition:</h3>
                <p>
                A decorator is a function that takes another function as an argument and returns a different function as an output. Decorators use some of the concepts that were described in the first class functions and closures <Link to="/portfolio-app/blog_2" style={{color: 'blue'}}>blog</Link>.

Decorators are a great way to wrap existing functions and add some functionality to them. For example, when we want to keep the existing code base and tests, and add a new functionality, we can use a decorator that will alter
the function behavior, without changing its code.
                </p>
                
                <h3>A Simple Example:</h3>
                <p>
                A very simple example to a decorator is shown here:
                </p>
                <CodeBlock language='python' code={`def another_function():
    print("I'm another function")


def turn_into_another_function(func):
    return another_function


def a_function():
    print("I'm a function")


a_function = turn_into_another_function(a_function)
a_function()

>>> I'm another function`} />

                <p>
                We can see that the function a_function is assigned with yet another function which is called another_function, and then when a_function is executed, it actually executes another_function.
                </p>
                <p>Python has a syntactic sugaring that allows us using decorators in a much prettier way:</p>
                <CodeBlock language='python' code={`def another_function():
    print("I'm another function")
 
def turn_into_another_function(func):
    return another_function
 
@turn_into_another_function
def a_function():
    print("I'm a function")
 
a_function()
 
>>> I'm another function`} />
                
                <h3>Using inner() function:</h3>
                <p>
                The simple example is not something that we will be using in real life code. To be able using decorators, we will define the decorator function as a closure. Let's check the following example.

Assuming that we have a function that knows how to get a string of a snake form ("hello_world") and to transfer it to a capital camel case form ("HelloWorld"). This is how this function would look like:
                </p>
                <CodeBlock language='python' code={`def camelcase(s: str) -> str:
    """ turns string_like to StringLike """
    return ''.join([word.capitalize() for word in s.split('_')])
 
 
if __name__ == '__main__':
    print(camelcase("hello_world"))
 
 
>>> camelcase("hello_world")
HelloWorld`} />

                <p>Now, we want to expand our capabilities so that the input to the camelcase function will be a list of strings.

One option is to change the function camelcase(). A better way is to use a decorator as following:</p>
                
                
                <CodeBlock language='python' code={`def mapper(func):
    def inner(list_of_strings):
        return [func(value) for value in list_of_strings]
    return inner
 
@mapper
def camelcase(s: str) -> str:
    """ turns string_like to StringLike """
    return ''.join([word.capitalize() for word in s.split('_')])
 
names = ["lebron_james", "michael_jordan", "kobe_bryant"]
print(camelcase(names))

 
>>> ['LebronJames', 'MichaelJordan', 'KobeBryant']`} />


                <p>The mapper function is a decorator. it gets the argument func, which really is the wrapped function (the decorated function). Then it has an inner function, which gets the arguments of the wrapped function.
In our case it is a list of strings. The inner function loops on the list, and uses the camelcase function on each string. Finally the mapper returns the inner function (note that there are no parentheses () because
we return the function and not executing it). 

Now when calling a camelcase on a list of strings, we're getting back a list of camel case strings that we got with the use of the decorator.</p>
                
                <Alert variant="info">
                Note: In this implementation, if we'd use this code on a regular string, it will break it down to letters, as string is also an iterable structure. We could check it in our wrapper, by examining the type of the input, but it is not recommended.

It is recommended to stick to a strong typed function, and for different type, to use a different function.
                </Alert>

                <h3>Decorators with arguments:</h3>
                <p>Let's say now that we want our decorator to be able to get arguments. For example, we have a function that generates random values out of a given list:</p>

                <CodeBlock language='python' code={`import random


def random_odd_digit():
    return random.choice([1, 3, 5, 7, 9])

print(random_odd_digit())

>>> 7`} />
                <p>Now we want to decorate that function with a function that takes this random value and calculates a power of 2 and prints it out. We will use a regular decorator as we saw previously for that:</p>

                <CodeBlock language='python' code={`import random
 
def power_of_2(func):
    def inner():
        return func() ** 2
    return inner
  
@power_of_2
def random_odd_digit():
    return random.choice([1, 3, 5, 7, 9])
  
print(random_odd_digit()) 
  
>>> 25`} />

                <p>Lastly, we want to be able to state to the decorator which power should we be using as an argument. To do that we add another level of abstraction as following</p>

                <CodeBlock language='python' code={`import random
 
def power_of(exponent):
    def decorator(func):
        def inner():
            return func() ** exponent
        return inner
    return decorator
  
@power_of(3)
def random_odd_digit():
    return random.choice([1, 3, 5, 7, 9])
  
print(random_odd_digit())
  
>>> 343`} />

                <p>Note that the function power_of actually returns a decorator, which is the one that decorates random_odd_digit() and it uses the decorator argument exponent, within the nested function of the decorator (inner())</p>

                <h3>Debugging decorators</h3>

                <p>One thing that we should remember is that when using decorators, basically the inner function of the decorator replaces the decorated function, including its name, docstrings, etc...

To avoid that, and keep things within the correct context, we should use wraps module out of the functools package. Going back to our second example to demonstrate it</p>

<CodeBlock language='python' code={`def mapper(func):
    def inner(list_of_strings):
        """ this is inner """
        return [func(value) for value in list_of_strings]
    return inner
 
@mapper
def camelcase(s: str) -> str:
    """ turns string_like to StringLike """
    return ''.join([word.capitalize() for word in s.split('_')])
 
print(camelcase.__name__)
print(camelcase.__doc__)
 
>>> inner
>>> this is inner`} />

                <p>So, camelcase is replaced with the properties of inner(). let's now use wraps decorator:</p>

                <CodeBlock language='python' code={`from functools import wraps

def mapper(func):
    @wraps(func)
    def inner(list_of_strings):
        """ this is inner """
        return [func(value) for value in list_of_strings]

    return inner

@mapper
def camelcase(s: str) -> str:
    """ turns string_like to StringLike """
    return ''.join([word.capitalize() for word in s.split('_')])

print(camelcase.__name__)
print(camelcase.__doc__)

>>> camelcase
>>> turns string_like to StringLike`} />


  <p>As already stated, it is also important for debugging. In this example the arguments are explicitely defined in the function body, but when working with tests or calls from outer scopes, it is not the case, and wraps must be used
for proper debugging.</p>

                <h3>Decorating a function with a class:</h3>
                <p>
                One handy feature of decorating a function with a class is memory. A class decorator can "remember" the instances that happened along the execution of the function, which can be later used in different ways.

Defining a decorator as a class should have a callable dunder (__call__).
                </p>
                
                <CodeBlock language='python' code={`import random
 
class Elephant:
    def __init__(self, fnc):
        self._fnc = fnc
  
    def __call__(self):
        return self._fnc()
  
@Elephant
def random_odd_digit():
    return random.choice([1, 3, 5, 7, 9])
  
>>> print(random_odd_digit())
9`} />
                
                <p>
The decorator passes the function to the constructor (__init__), and then it executes it, each time this function is called.

Now, let's extend the functionality of the class, to use its built-in features for our purpose.</p>

                
                <CodeBlock language='python' code={`import random
 
class Elephant:
    def __init__(self, fnc):
        self._fnc = fnc
        self._memory = []
  
    def __call__(self):
        retval = self._fnc()
        self._memory.append(retval)
        return retval
  
    def memory(self):
        return self._memory
  
@Elephant
def random_odd_digit():
    return random.choice([1, 3, 5, 7, 9])
  
>>> print(random_odd_digit())
9
>>> print(random_odd_digit())
3
>>> print(random_odd_digit())
1
>>> print(random_odd_digit())
9
>>> print(random_odd_digit.memory())
[9, 3, 1, 9]`} />

                <p>So what happened here?</p>
                <ul>
                    <li>We added a new property - _memory which is an empty list</li>
                    <li>We changed the __call__ method, by appending each call to _fnc to the _memory list</li>
                    <li>We added a memory() method which returns the _memory list</li>
                </ul>
                <p>Basically this new list, which is a property of the decorator class, remembers all the previous calls of this function.

It can be useful for example when using a mock.patch decorator for testing.</p>

                <h3>Decorating a class:</h3>
                <p>
                Decorators are not limited to acting on functions, they can act on classes as well. Say for example we have a class that does a lot of very important stuff and we want to time everything it does.
                </p>
                
                <CodeBlock language='python' code={`def time_this(fnc):
    def new_function():
        import datetime
        before = datetime.datetime.now()
        x = fnc()
        after = datetime.datetime.now()
        print("Elapsed Time = {0}".format(after-before))
        return x
    return new_function
 
 
class ImportantStuff(object):
    @time_this
    def do_stuff_1(self):
        ...
    @time_this
    def do_stuff_2(self):
        ...
    @time_this
    def do_stuff_3(self):
        ...`} />
        <p>That would work just fine. But it's quite a few extra lines of code within the class. And what if we write some more class methods and forget to decorate one of them? What if we decide we dont want to time the class any more? There is definitely space for human error here. It would be much nicer to re-write the class like this:</p>                        
            
        <CodeBlock language='python' code={`@time_all_class_methods
class ImportantStuff:
    def do_stuff_1(self):
        ...
    def do_stuff_2(self):
        ...
    def do_stuff_3(self):
        ...`} />

        <p>That code is equivalent to:</p>
        <CodeBlock language='python' code={`class ImportantStuff:
    def do_stuff_1(self):
        ...
    def do_stuff_2(self):
        ...
    def do_stuff_3(self):
        ...
         
ImportantStuff = time_all_class_methods(ImportantStuff)`} />

        <p>So how would time_all_class_methods work?
Firstly, we know it needs to take in a class as an argument, and return a class. We also know that the functions of the returned class should look the same as the functions of the original ImportantStuff class.

That is, we still want to be able to do our important stuff, we just want to time it as well. And here is how we will do it.

First, we will use the same time_this function as previously</p>

<CodeBlock language='python' code={`def time_this(original_function):
    print("decorating")
    def new_function(*args,**kwargs):
        print("starting timer")
        import datetime
        before = datetime.datetime.now()
        x = original_function(*args,**kwargs)
        after = datetime.datetime.now()
        print("Elapsed Time = {0}".format(after-before))
        return x
    return new_function`} />
            
            <Alert variant="info">
                Note the usage of args and kwargs here. Remember that a function should be able to be used with its arguments, and that's why we have to handle it in our decorator                
            </Alert>
            
            <p>Second, we define a new function, that handles a class</p>

            <CodeBlock language='python' code={`def time_all_class_methods(Cls):
    class NewCls(object):
        def __init__(self, *args, **kwargs):
            self.oInstance = Cls(*args, **kwargs)
        def __getattribute__(self, s):
            """
            this is called whenever any attribute of a NewCls object is accessed. This function first tries to
            get the attribute off NewCls. If it fails then it tries to fetch the attribute from self.oInstance (an
            instance of the decorated class). If it manages to fetch the attribute from self.oInstance, and
            the attribute is an instance method then 'time_this' is applied.
            """
            try:
                x = super(NewCls,self).__getattribute__(s)
            except AttributeError:
                pass
            else:
                return x
            x = self.oInstance.__getattribute__(s)
            if type(x) == type(self.__init__):  # it is an instance method
                return time_this(x)  # this is equivalent of just decorating the method with time_this
            else:
                return x
    return NewCls`} />

            <p>Lastly, we try it on a simple class with a timeout:</p>
            <CodeBlock language='python' code={`@time_all_class_methods
class Foo(object):
    def a(self):
        print("entering a")
        import time
        time.sleep(3)
        print("exiting a")
 
>>> oF = Foo()
>>> oF.a()
 
 
decorating
starting timer
entering a
exiting a
Elapsed Time = 0:00:03.000347`} />
            </Container>
        );
    }
}