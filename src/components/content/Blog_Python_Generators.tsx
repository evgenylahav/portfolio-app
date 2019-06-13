import * as React from 'react';
import { Container } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common';
import './BlogsStyling.scss';


export class BlogPythonGenerators extends React.Component<any, any> {
    render(){
        return (
            <Container className='blog-container'>
                <h2>Python Blog: Generators and Iterators</h2>
                <h3>Iterators</h3>
                <p>
                Each object that can be used in a for loop is called an <strong>iterable object</strong>. Examples to such objects are lists, strings, dictionaries, sets, a text file, etc...

A built-in iter() function, takes in a interable object and returns an iterator.
                </p>
                <CodeBlock language='python' code={`a = [1, 2, 3]
b = iter(a)
 
print("a is a: {}".format(type(a)))
print("b is a: {}".format(type(b)))
>>>
a is a: <class 'list'>
b is a: <class 'list_iterator'>
`} />
                         
                <p>
                So, every iterable object can be transformed to an iterator. An iterator is an object that returns the next element each time we use next() built-in function on it (behind the scenes it implements the dunder method __next__ of the iterator class), until there are no more elements in the iterable object and then a StopIteration exception is raised:
                </p>

                <CodeBlock language='python' code={`print(next(b))
print(next(b))
print(next(b))
print(next(b))
 
>>>
1
2
3
StopIteration
`} />
                <p>Each iterator must have an __iter__ dunder as well. This dunder is the one that is executed by the iter() built-in command. 

Generally the __iter__ dunder just returns the iterator itself.

Below you can find an example to a simple iterator class that implements the built-in <strong>xrange()</strong> function, that gets a number n, and returns an iterator of all the inegers between 0 to n-1.

</p>
                <CodeBlock language='python' code={`class yrange:
    def __init__(self, n):
        self.i = 0
        self.n = n
 
    def __iter__(self):
        return self
 
    def __next__(self):
        if self.i < self.n:
            i = self.i
            self.i += 1
            return i
        else:
            raise StopIteration()
 
a = yrange(5)
print(sum(a))
 
>>>
10
`} />

                <p>
                Note - there are many built-in functions in Python that accept iterators as arguments: sum(), max(), min(), list() and others
                </p>
                <p>
                A known issue with iterators is that they are executed only once. After that, the function that will get an exhausted iterator will not be able to distinguish it from an empty list.

There is a way to overcome it when creating iterators, by creating a helper class which effectively creates a duplication of the iterator without exhausting it:
                </p>
                <CodeBlock language='python' code={`class zrange:
    def __init__(self, n):
        self.n = n
 
    def __iter__(self):
        return zrange_iter(self.n)
 
class zrange_iter:
    def __init__(self, n):
        self.i = 0
        self.n = n
 
    def __iter__(self):
        # Iterators are iterables too.
        # Adding this functions to make them so.
        return self
 
    def __next__(self):
        if self.i < self.n:
            i = self.i
            self.i += 1
            return i
        else:
            raise StopIteration()
`} />
            <p>Now, we are able to compare the regular yrange to the new zrange:</p>
            <CodeBlock language='python' code={`y = yrange(5)
print(list(y))
print(list(y))
 
z = zrange(5)
print(list(z))
print(list(z))
 
>>>
[0, 1, 2, 3, 4]
[]
[0, 1, 2, 3, 4]
[0, 1, 2, 3, 4]
`} />
            <p>So, to sum up: iterators are objects that can be iterated upon. This object will return data by one element at a time.

We can build our own iterators by implementing __next__ and __iter__ methods.</p>
            
            <h3>Generators</h3>
            <p>Generators is a way to create iterators. A generator is a function that produces a sequence of results instead of a single value in a regular function.

Thus, a generator uses yield instead of return:</p>

            <CodeBlock language='python' code={`def yrange_gen(n):
    i = 0
    while i < n:
        yield i
        i += 1
 
y = yrange_gen(5)
print(list(y))
>>>
[0, 1, 2, 3, 4]
            `} />
            <p>So, instead of defining a whole class and implementing all the required methods, we can just use yield, and generate the same iterator.
            A generator works as following:
            </p>
            <ul>
                <li>Generator object is created (y = yrange_gen(5) in our example above)</li>
                <li>When a next method is invoked for the first time, the generator function starts executing until it reaches the yield statement and returns the yielded value (yield i)</li>
                <li>The following "next" method will continue from the next statement after yield (i += 1 and repeating the while loop)</li>
                <li>The flow will continue until a StopIteration exception is raised</li>
            </ul>
            <p>A very common way of using generators is instead of using large lists that can create memory issues. Always remember though that a generator can be executed only once until exhausted.</p>

            <h3>Generator Expressions</h3>
            <p>Generator expressions is the generator version of lists comprehension. They look identical except using regular parentheses () instead square ones [].</p>
            <CodeBlock language='python' code={`a = (2*x for x in range(10))
print(a)
print(sum(a))
 
 
>>>
<generator object <genexpr> at 0x000001A181B2CAF0>
90
            `} />

            <h3>Summary:</h3>
            <p>In this blog we covered the iterators and generators concepts, the differences between them and when and how to use them properly. It can be confusing first, but it's worth the effort of getting used to and start using it in your functions.</p>


            </Container>
        );
    }
}