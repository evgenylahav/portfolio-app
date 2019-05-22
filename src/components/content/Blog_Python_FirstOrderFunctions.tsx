import * as React from 'react';
import { Container } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common/CodeBlock';
import './BlogsStyling.scss';

export class BlogPythonFirstOrderFunctions extends React.Component<any, any> {
    render(){
        return (
            <Container>
                <h2>Python Blog: first class functions and closures</h2>
                <p>First class functions and closures are an important concept in Python. As we know, everything in Python is an object with regular and special methods. First order functions and closures are also an important concepts for explaining and using decorators, which we will explain in the upcoming blogs.</p>
                <h3>First class functions</h3>
              
                <p>
                    First class objects in a language may be stored in data structures, passed as arguments, or used in control structures. A programming language is said to support first-class functions if it treats functions as first-class objects. Python supports the concept of First Class functions.
                </p>
                <p>
                    Basically, a first class function is a function that can be passed as an argument, stored in a variable, returned from a function and stored in a data structure (list, dict,...)
                </p>
                <p>
                    <strong>Example 1:</strong>
                </p>
                <CodeBlock language='python' code={`def shout(text):
    return text.upper()
 
 
print(shout('Hello'))
>>> HELLO

yell = shout
print(yell('Hello'))
>>> HELLO

print(type(yell))
>>> <class 'function'>
`} />

                <p>
                In this example, we assign the function object 'shout' to a variable 'yell', and use the variable 'yell' with an argument 'Hello'.
The type of the variable 'yell' is a class function.
Note that the function is assigned without brackets ()
                </p>

                <p>
                <strong>Example 2:</strong>
                </p>
                <CodeBlock language='python' code={`def shout(text):
    return text.upper()
 
 
def whisper(text):
    return text.lower()
 
 
def greet(func):
    # storing the function in a variable
    greeting = func("Hi, I am created by a function passed as an argument.")
    print(greeting)
 
 
greet(shout)
>>> HI, I AM CREATED BY A FUNCTION PASSED AS AN ARGUMENT.

greet(whisper)
>>> hi, i am created by a function passed as an argument.
`} />


                <p>
                    In this example, we're using the first class functions as arguments to other functions. We created two functions 'whisper' and 'shout', and we call the greet function
                    passing in one of the functions we created. The whisper function will turn the input string to lower letters and the shout function will turn it to capital letters. 
                </p>

                <p>
                <strong>Example 3</strong>
                </p>
                <p>
                    In this example we implement a mapping functionality by ourselves by passing a function into a my_map function and implementing it
                    for all elements in the list. 
                </p>
                <CodeBlock language='python' code={`from typing import List, Callable, Union
NumericType = Union[int, float]
 
def square(x: NumericType) -> NumericType:
    return x * x
 
def my_map(func: Callable[[NumericType], NumericType], arg_list: List) -> List:
    result = list()
    for i in arg_list:
        result.append(func(i))
    return result
 
num = [1, 2, 3, 4, 5]
square_num = my_map(square, num)

print(square_num)
>>> [1, 4, 9, 16, 25]
`} />

                <p>
                    Note the usage of typing here. Every function clearly defines its inputs and outputs and their types. This is a good programming practice, although not enforced in Python, being a strongly dynamic typed language.

                    For stating a function as an input of an output, use:</p> 
                <CodeBlock language='python' code={`Callable[[<input types>], <output types>]`} />
                
                <p>
                    <strong>Example 4:</strong>
                </p>
                <p>
                    In this example we will demonstrate the last and possibly the most confusing part of first class functions - returning a function.
                </p>
                <CodeBlock language='python' code={`def html_tag(tag: str) -> Callable[[str], None]:
    def wrap_text(msg: str) -> None:
        print("<{0}>{1}</{0}>".format(tag, msg))
 
    return wrap_text
 
print_h1 = html_tag('h1')

print_h1("I'm headline 1")
>>> <h1>I'm headline 1</h1>

print_h1("I'm headline 2")
>>> <h1>I'm headline 2</h1>

print_div = html_tag('div')

print_div("I'm div 1")
>>> <div>I'm div 1</div>

print_div("I'm div 2")
>>> <div>I'm div 2</div>
`} />

                <p>
                    This function creates a wrapper of a text with HTML tags. We create a function object print_h1 which will wrap each message it will get with the correct h1 tags on both sides.
                    This example actually demonstrates a closure, which will be discussed next.

                    Note - the usage of .format in a string. This is very useful for creating dynamic strings and messages.
                </p>
                
                <h3>Closures</h3>
                
                <p>
                    Closures in their most basic form are nested functions that return function objects. A better way to describe closures is to say that it is a record that stores a function together with an environment: a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created.
                </p>
                <p>
                    A classical use for closures is as callback functions. It will also be a useful for understanding and using decorators.
                </p>
                <p>
                    <strong>Example 1:</strong>
                </p>
                <p>
                    Let's examine a simple example describing closures:
                </p>
                <CodeBlock language='python' code={`def outer_function(text):
    def inner_function():
        print(text)
 
    return inner_function
 
func1 = outer_function('Hey!')
func1()

>>> Hey!
`} />

                <p>
                    In this example we're using a first class function - 'inner_function' and return it. A small addition to the first class functions concept, is that the inner function is aware of the outer
                    function variables ('text' in our case) and is using it to print a message. Later on 'func1' will always "remember" that it was created with a string 'Hey!' and will be able to fetch it.
                </p>
                <p>
                    Note - we are returning the function without parentheses
                </p>

                <p>
                    <strong>Example 2:</strong>
                </p>
                <p>
                    A very nice example to demonstrate closures is with the help of the logging module:
                </p>
                <CodeBlock language='python' code={`import logging
 
 logging.basicConfig(filename='example.log', level=logging.INFO)
  
 def logger(func):
     def log_func(*args):
         logging.info(
             'Running "{}" with arguments {}'.format(func.__name__, args))
         print(func(*args))
  
     return log_func
  
 def add(x, y):
     return x + y
  
 def sub(x, y):
     return x - y
  
 add_logger = logger(add)
 sub_logger = logger(sub)
  
 add_logger(3, 3)
 >>> 6

 add_logger(4, 5)
 >>> 9

 sub_logger(10, 5)
 >>> 5

 sub_logger(20, 10)
 >>> 10
 `} /> 

                <p>
                    In this example we can see the logger wrapper over any given input function. The output in the python console shows just the results of the functions and the log text file shows the whole message.
                </p>
                <CodeBlock language='python' code={`# In the log:
INFO:root:Running "add" with arguments (3, 3)
INFO:root:Running "add" with arguments (4, 5)
INFO:root:Running "sub" with arguments (10, 5)
INFO:root:Running "sub" with arguments (20, 10)`} />

                <h3>Sumary:</h3>
                <p>In this blog we covered the topic of first order functions and closures. First order functions are function objects that are allowed to be passed as arguments and stored in different data structures. Closure is a structure of functions that return a function. 
                    The usages of these concepts are different, and in Python we will find them mostly as wrappers in general  and decorators in particular.</p>
            </Container>
        );
    }
}