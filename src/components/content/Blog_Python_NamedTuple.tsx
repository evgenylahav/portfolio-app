import * as React from 'react';
import { Container } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common/CodeBlock';
import './BlogsStyling.scss';


export class BlogPythonNamedTuple extends React.Component<any, any> {
    render(){
        return (
            <Container className='blog-container'>
                <h2>Python Blog: Collections Module - namedtuple()</h2>
                <p>                
                    Collections module provides special enhancements for the regular containers in Python, such as dict, list, tuple and set. This blog will cover the <i>namedtuple()</i> factory function that creates tuples with named fields.
                </p>

                <h3>problem description:</h3>
                <p>
                    The standard tuple uses numerical indexes to access its members. This makes tuples convenient containers for simple uses.

                    On the other hand, remembering which index should be used for each value can lead to errors, especially if the tuple has a lot of fields and is constructed far from where it is used. A namedtuple assigns field names to each member of the tuple, which makes it more readable and self-documenting code.
                </p>
                <CodeBlock language='python' code={`# regular tuples
bob = ('Bob', 30, 'male')
jane = ('Jane', 29, 'female')

for p in [bob, jane]:
    print('{} is a {} year old {}'.format(p[0], p[1], p[2]))
    
>>> Bob is a 30 year old male
>>> Jane is a 29 year old female
`} />
                
                <h3>namedtuple definition:</h3>
                
                <p>
                    namedtuple instances are just as memory efficient as regular tuples because they do not have per-instance dictionaries. Each kind of namedtuple is represented by its own class, created by using the namedtuple() factory function. The arguments are the name of the new class and a string containing the names of the elements.

                    signature: collections.namedtuple(typename, field_names, *, rename=False, defaults=None, module=None)
                </p>

                <CodeBlock language='python' code={`# named tuples
from collections import namedtuple
 
Person = namedtuple('Person', ['name', 'age', 'gender'])
 
bob = Person(name='Bob', age=30, gender='male')
jane = Person(name='Jane', age=29, gender='female')
 
for p in [bob, jane]:
    print('{} is a {} year old {}'.format(p.name, p.age, p.gender))
    
>>> Bob is a 30 year old male
>>> Jane is a 29 year old female
`} />

                <p>
                    <strong><i>rename</i></strong> handles cases where the field names of the tuple are invalid - duplicated or using keywords as 'def'. if 'rename' is defined to True, it will handle those invalid field names and will not raise an exception. For example, ['abc', 'def', 'ghi', 'abc'] is converted to ['abc', '_1', 'ghi', '_3'], eliminating the keyword def and the duplicate fieldname abc.
                </p>
                <p>    
                    <strong><i>defaults</i></strong> can be None or an iterable of default values. Since fields with a default value must come after any fields without a default, the defaults are applied to the rightmost parameters. For example, if the fieldnames are ['x', 'y', 'z'] and the defaults are (1, 2), then x will be a required argument, y will default to 1, and z will default to 2.
                </p>
                <p> 
                    If <strong><i>module</i></strong> is defined, the __module__ attribute of the named tuple is set to that value.
                </p>
                <p/>
                <p>
                    since a namedtuple is a class, we can modify it for different purposes. for example - printing. Note - defining __slots__ as an empty tuple is a technique to avoid creation of instance dictionaries, and by this keeping low memory requirements.
                </p>
                <CodeBlock language='python' code={`# named tuples with modifications
from collections import namedtuple
 
 
class Person(namedtuple('Person', ['name', 'age', 'gender'])):
    __slots__ = ()
 
    def __str__(self):
        return '{} is a {} year old {}'.format(self.name, self.age, self.gender)
 
 
bob = Person(name='Bob', age=30, gender='male')
jane = Person(name='Jane', age=29, gender='female')
 
for p in [bob, jane]:
    print('{} is a {} year old {}'.format(p.name, p.age, p.gender))
    
>>> Bob is a 30 year old male
>>> Jane is a 29 year old female
`} />

                <p>
                    _make method makes a new instance from an existing sequence or iterable:
                </p>
                <CodeBlock language='python' code={`# using _make
from collections import namedtuple
 
Account = namedtuple('Account', ['owner', 'balance', 'transaction_count'])
John = ['John Doe', 1000, 1]
johns_account = Account._make(John)
 
print(johns_account)

>>> Account(owner='John Doe', balance=1000, transaction_count=1)`} />

                <p>
                    it is also easy to add fields to namedtuples by using the _fields attribute:
                </p>
                <CodeBlock language='python' code={`# adding fields
from collections import namedtuple
 
Point = namedtuple('Point', ['x', 'y'])
 
Point3D = namedtuple('Point3D', Point._fields + ('z',))
 
for p in Point(3,4), Point3D(10, 0, 3):
    print(p)
    
>>> Point(x=3, y=4)
>>> Point3D(x=10, y=0, z=3)
`} />

                <p>
                    lastly, for creating defaults or templates namedtuples, that will later be modified, we should use the _replace attribute.
                </p>
                <p>
                    trying to replace the fields directly, will result in AttributeError:
                </p>
                <CodeBlock language='python' code={`from collections import namedtuple
 
Account = namedtuple('Account', ['owner', 'balance', 'transaction_count'])
default_account = Account('<owner name>', 0.0, 0)
johns_account = default_account
johns_account.owner = 'John'
 
 
>>>
Traceback (most recent call last):
  File "<input>", line 6, in <module>
AttributeError: can't set attribute`} />

                <p>
                    the right way to do that is:
                </p>
                <CodeBlock language='python' code={`from collections import namedtuple
 
Account = namedtuple('Account', ['owner', 'balance', 'transaction_count'])
default_account = Account('<owner name>', 0.0, 0)
 
johns_account = default_account._replace(owner='John')
print(johns_account)
 
 
>>>
Account(owner='John', balance=0.0, transaction_count=0)`} />

                <p>
                    Named tuples can be extremely useful when working with csv files. Say we have this csv file:
                </p>
                <CodeBlock language='csv' code={`empl.csv

John Smith, 35, Accounting
Erica Meyers, 29, IT`} />
                <p>
                    We could use namedtuple() to parse it
                </p>

                <CodeBlock language='python' code={`# csv reader
 
import csv
from collections import namedtuple

EmployeeRecord = namedtuple('EmployeeRecord', ['name', 'age', 'title'])
 
a = csv.reader(open("empl.csv", "rt"))
for emp in map(EmployeeRecord._make, a):
    print(emp.name, emp.title)
    
>>> John Smith  Accounting
>>> Erica Meyers  IT
`} />

                
                <hr />

                <p>
                    find more information about namedtuples and the collections module in the official python documentation:               
                    <a href='https://docs.python.org/3/library/collections.html' target='_blank'>    
                        https://docs.python.org/3/library/collections.html
                    </a>
                </p>
            </Container>
        );
    }
}