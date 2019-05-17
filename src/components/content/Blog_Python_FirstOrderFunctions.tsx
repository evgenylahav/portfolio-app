import * as React from 'react';
import { Container } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common/CodeBlock';
import './BlogsStyling.scss';

export class BlogPythonFirstOrderFunctions extends React.Component<any, any> {
    render(){
        return (
            <Container>
                <h2>Python Blog: first class functions and closures</h2>
                <h3>First class functions</h3>
              
                <p>
                    First class objects in a language are handled uniformly throughout. They may be stored in data structures, passed as arguments, or used in control structures. A programming language is said to support first-class functions if it treats functions as first-class objects. Python supports the concept of First Class functions.
                </p>
                <p>
                    Basically a first class function is a function that can be passed as an argument, stored in a variable, returned from a function and stored in a data structure (list, dict,...)
                </p>
                <p>
                    Example 1:
                </p>
                <CodeBlock language='python' code={`def shout(text):
    return text.upper()
 
 
print(shout('Hello'))
yell = shout
print(yell('Hello'))
print(type(yell))`} />

                <p>
                In this example, we assign the function object 'shout' to a variable 'yell', and use the variable 'yell' with an argument 'HELLO'.
The type of the variable 'yell' is a class function.
                </p>
                <p>
                    Note that the function is assigned without brackets ()

                    This is how the output looks like:
                </p>
                <CodeBlock language='python' code={`HELLO
HELLO
<class 'function'>`} />

                <p>
                    Example 2:
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
greet(whisper)`} />


                <p>
                    In this example, we're using the first class functions as arguments to other functions. We created two functions 'whisper' and 'shout', and we call the greet function
                    passing in one of the functions we created. The whisper function will turn the input string to lower letters and the shout function will turn it to capital letters. 
                    
                    The result of this looks like this:
                </p>
                <CodeBlock language='python' code={`HI, I AM CREATED BY A FUNCTION PASSED AS AN ARGUMENT.
hi, i am created by a function passed as an argument.`} />

                <p>
                    Example 3
                    This time we implement a map functionality by ourselves by passing a function into a my_map function and implementing it
                    over a list of arguments. 
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
print(square_num)`} />

                <p>
                    Note the usage of typing here. Every function should clearly define its inputs and outputs

                    For stating a function as an input of an output, use:</p> 
                <CodeBlock language='python' code={`Callable[[<input types>], <output types>]`} />
                
                <p>
                    the results shows as that each item in num was mapped to a square:
                </p>
                <CodeBlock language='python' code={`[1, 4, 9, 16, 25]`} />

                <p>
                    Example 4:
                    in this example we will demonstrate the last and possibly the most confusing part of first class functions - returning a function.
                </p>
                <CodeBlock language='python' code={`def html_tag(tag: str) -> Callable[[str], None]:
    def wrap_text(msg: str) -> None:
        print("<{0}>{1}</{0}>".format(tag, msg))
 
    return wrap_text
 
print_h1 = html_tag('h1')
print_h1("I'm headline 1")
print_h1("I'm headline 2")
 
print_div = html_tag('div')
print_div("I'm div 1")
print_div("I'm div 2")`} />

                <p>
                    So this function creates a wrapper of a text with HTML tags. We create a function object print_h1 which will wrap each message it will get with the correct h1 tags on both sides.
                    This example actually demonstrates a closure, which will be discussed next.

                    Note - the usage of .format in a string. This is very useful for creating dynamic strings and messages.
                </p>

                <p>
                    The output looks like this:
                </p>
                <CodeBlock language='html' code={`<h1>I'm headline 1</h1>
<h1>I'm headline 2</h1>
<div>I'm div 1</div>
<div>I'm div 2</div>`} />

                
                <h3>Closures</h3>
                
                <p>
                    Closures in their most basic form are nested functions that return function objects. A better way to describe closures is to say that it is a record that stores a function together with an environment: a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created.
                </p>
                <p>
                    A classical use for closures is as callback functions. It will also be a useful for understanding and using decorators.
                </p>
                <p>
                    Example 1
                    Let's examine a simple example describing closures:
                </p>
                <CodeBlock language='python' code={`def outer_function(text):
    def inner_function():
        print(text)
 
    return inner_function
 
func1 = outer_function('Hey!')
func1()`} />

                <p>
                    In this example we're using a first class function - 'inner_function' and return it. A small addition to the first class functions concept, is that the inner function is aware of the outer
                    function variables ('text' in our case) and is using it to print a message. Later on 'func1' will always "remember" that it was created with a string 'Hey!' and will be able to fetch it.
                </p>
                <p>
                    Note - we are returning the function without parentheses
                    The result:
                </p>
                <CodeBlock language='python' code={`Hey!`} />

                <p>
                    Example 2:
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
 add_logger(4, 5)
  
 sub_logger(10, 5)
 sub_logger(20, 10)`} /> 

                <p>
                    In this example we can see the logger wrapper over any given input function. The output in the python console shows just the results of the functions and the log text file shows the whole message.
                </p>
                <CodeBlock language='python' code={`# in the console
6
9
5
10
 
 
# In the log:
INFO:root:Running "add" with arguments (3, 3)
INFO:root:Running "add" with arguments (4, 5)
INFO:root:Running "sub" with arguments (10, 5)
INFO:root:Running "sub" with arguments (20, 10)`} />

            </Container>
        );
    }
}