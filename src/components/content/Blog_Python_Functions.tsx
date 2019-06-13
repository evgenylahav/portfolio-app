import * as React from 'react';
import { Container } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common';
import './BlogsStyling.scss';


export class BlogPythonFunctions extends React.Component<any, any> {
    render(){
        return (
            <Container className='blog-container'>
                <h2>Python Blog: Enhance your functions</h2>
                <p>                
                Functions are the most basic and important component in our programs. There are many interesting features and capabilities provided in Python, to make our functions better and less prone to errors. We will review some of these features in this blog, and some next week.

This week we will look at keyword arguments at function input - how to use them and why are they a good practice and how can we enforce using them. In addition we will check exception handling and the usage of generators instead of lists as function outputs.
                </p>

                <h3>Provide optional behavior with keyword arguments:</h3>
                <p>
                In python we can pass arguments to a function by position or with a keyword.

Say we have this simple function taking 2 arguments and calculating the remainder of a number:
                </p>
                <CodeBlock language='python' code={`def remainder(number, divisor):
    return number % divisor
 
print(remainder(20, 7))
 
>>>
6
`} />
                         
                <p>
                Although it is a simple case, it might require the user, to check the function code to understand which argument is responsible for what.

It will be much clearer to use keyword arguments, and it is also not required to keep their positions, so in case of an interface change in the future, the functionality will not break.
                </p>

                <CodeBlock language='python' code={`print(remainder(number=30, divisor=7))
print(remainder(divisor=7, number=30))
 
>>>
2
2
`} />
                <h3>Enforce clarity with keyword-only arguments</h3>
                <p>
                As we have seen, it is very convenient to use keywords in function arguments. The nice thing is that we can enforce that. Let's say that we have a function with a couple of boolean flags as arguments:
                </p>                
                <CodeBlock language='python' code={`def some_function(a, b, flag_1, flag_2):
    pass
 
 
some_function(5, 10, True, False)
`} />

                <p>
                While a and b, might be easy for the user to understand from an appropriate naming and context, remembering the order of the flags could be challenging. We can enforce the usage of some of the arguments by keyword only by using an asterix symbol between the positional arguments and keyword arguments. If the user ignores it, a TypeError will be raised.
                </p>
                <CodeBlock language='python' code={`def some_function_with_kw(a, b, *, flag_1, flag_2):
   pass
 
# wrong way
some_function_with_kw(5, 10, True, False)
 
 
# right way
some_function_with_kw(5, 10, flag_2=True, flag_1=False)
 
>>>
TypeError: some_function_with_kw() takes 2 positional arguments but 4 were given
`} />

                <h3>Prefer exceptions to returning None:</h3>
                <p>
                Functions that return None to indicate special meaning are error prone, because __bool__ check on None is similar to __bool__ check on 0, empty string and empty list.

For example, say we want to create a function that divides 2 numbers, and we want to avoid raising an error, when trying to divide by zero, by catching the ZeroDivisionError and returning a None. In that case we could introduce this error:
                </p>
                <CodeBlock language='python' code={`def divide(a,b):
    try:
        return a/b
    except ZeroDivisionError:
        return None
 
# case 1
x, y = 3, 0
result = divide(x, y)
if not result:
    print('Invalid inputs')
 
# case 2
x, y = 0, 3
result = divide(x, y)
if not result:
    print('Invalid inputs')
 
 
>>>
Invalid inputs
Invalid inputs
`} />

                <p>
                As can be seen, in both cases, we print 'Invalid inputs' although in case 2 the inputs are correct.

A suggested solution, is to leave handling the errors to the callers, and raise an exception from within the function:
                </p>
                <CodeBlock language='python' code={`def divide(a,b):
    try:
        return a/b
    except ZeroDivisionError as e:
        raise ValueError('Invalid inputs') from e
 
# case 1
x, y = 3, 0
try:
    result = divide(x, y)
    print('result: ', result)
except ValueError:
    print('Invalid inputs')
 
# case 2
x, y = 0, 3
try:
    result = divide(x, y)
    print('result: ', result)
except ValueError:
    print('Invalid inputs')
 
 
>>>
Invalid inputs
result:  0.0
`} />
                <h3>Consider returning generators rather than lists:</h3>
                <p>
                In many cases we write functions that return lists. There are two main problems with these functions: noisy code and a risk of running into memory issues for large data sets.

Here is an example of a simple function taking in text and returning the index of the first letter of each word.
                </p>
                <CodeBlock language='python' code={`def index_of_words(text):
    result = []
    if text:
        result.append(0)
    for ind, letter in enumerate(text):
        if letter == " ":
            result.append(ind + 1)
 
    return result
 
text = "Hello, my name is John"
print(index_of_words(text))
 
>>>
[0, 7, 10, 15, 18]
`} />

                <p>
                In this rather simple function, there is quite some redundancy. In addition, as mentioned above, for a large input text, the program could crash for insufficient memory.

A very practical and "Pythonic" solution is to use generators. We will have a separate blog topic regarding generators and iterators, but in short, generators are functions that use yield expressions (instead of return). They don't actually run, but return an iterator, which later can be used within any object by using the __iter__ and __next__ dunders.

Here is an example for the same functions written with generators:
                </p>
                <CodeBlock language='csv' code={`def index_of_words_iter(text):
    if text:
        yield 0
    for ind, letter in enumerate(text):
        if letter == " ":
            yield ind + 1
 
text = "Hello, my name is John"
print(list(index_of_words_iter(text)))
 
>>>
[0, 7, 10, 15, 18]
`} />
                <p>
                The implementation is cleaner and is memory efficient. The list() operator transforms the generator expression back to the same result, but it can be used in many other ways.
                </p>
                <p>
                Note - when defining generators like this, the callers must be aware that the returned iterators are stateful and can't be reused. See example below.
                </p>

                <CodeBlock language='python' code={`text = "Hello, my name is John"
results = index_of_words_iter(text)
print(list(results))
 
print("statefulness check:")
print(list(results))
 
>>>
[0, 7, 10, 15, 18]
statefulness check:
[]
`} />

<h3>Be careful when iterating over lists</h3>
                <p>
                A very common function that we might use / write, is one that gets a list and iterates over its values.

Let's say that we want to calculate the percentage of each item in an integer list, out of the sum of the list
                </p>
                <CodeBlock language='python' code={`def get_percentage(in_list):
    return [100 * x / sum(in_list) for x in in_list]
 
l = [20, 30, 15, 50, 54]
print(get_percentage(l))
 
 
>>>
[11.834319526627219, 17.75147928994083, 8.875739644970414, 29.585798816568047, 31.952662721893493]
`} />
                         
                <p>
                This function will work as many times as we'd like, as long as we keep the interface.

Let's assume now that our function gets a generator. In this case we will get a surprising results:
                </p>

                <CodeBlock language='python' code={`def get_percentage(in_list):
    return [100 * x / sum(in_list) for x in in_list]
 
def create_list():
    lst = [20, 30, 15, 50, 54]
    for x in lst:
        yield x
 
l = create_list()
print(get_percentage(list(l)))
print(get_percentage(list(l)))
 
 
>>>
[11.834319526627219, 17.75147928994083, 8.875739644970414, 29.585798816568047, 31.952662721893493]
[]
`} />
                <p>The cause of this behavior is that an iterator produces its results one time, and then it reaches a StopIteration exception. In that case, our function will not be able to distinguish if it is an exhausted iterator or an empty list. A problem is that we will not get any errors here, which might result in slippery bugs.

</p>
                <h3>Reduce visual noise with positional arguments</h3>
                <p>
                A very common function that we might use / write, is one that gets a list and iterates over its values.

Let's say that we want to calculate the percentage of each item in an integer list, out of the sum of the list
                </p>                
                <CodeBlock language='python' code={`def get_percentage(in_list):
    return [100 * x / sum(in_list) for x in in_list]
 
l = [20, 30, 15, 50, 54]
print(get_percentage(l))
 
 
>>>
[11.834319526627219, 17.75147928994083, 8.875739644970414, 29.585798816568047, 31.952662721893493]
`} />

                <p>
                This function will work as many times as we'd like, as long as we keep the interface.
                </p>
            </Container>
        );
    }
}