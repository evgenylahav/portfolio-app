import * as React from 'react';
import { Container } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common';
import './BlogsStyling.scss';


export class BlogPythonFunctionsAdvanced extends React.Component<any, any> {
    render(){
        return (
            <Container className='blog-container'>
                <h2>Python Blog: Enhance your functions - advanced</h2>
                <p>                
                Following the blog post from last week, we want to continue investigating different capabilities of functions.

This time we want to check out some gotchas and common "Pythonic" approaches when working with functions.
                </p>

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