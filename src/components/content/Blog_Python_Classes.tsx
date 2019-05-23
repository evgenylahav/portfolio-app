import * as React from 'react';
import { Container, Alert } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common/CodeBlock';

export class BlogPythonClasses extends React.Component<any, any> {
    render(){
        return (
            <Container>
                <h2>Python: Constructing Classes</h2>
                <p>
                This topic is a corner stone for SW development in general and in O.O languages as Python in particular. There are a lot of general good practices for constructing classes, and some that are specific to Python. This blog will cover some
of these concepts. Enjoy.
                </p>
                <h3>Documentation:</h3>
                <p>
                    What does the class do. Recommended to use: docstrings
                </p>
                <CodeBlock language='python' code={`class Circle:
    """
    advanced circle toolkit
    """`} />
                <h3>Initialization:</h3>
                <p>
                Use the __init__ method to initialize the instance variables. Note: __init__ is not a constructor (more about it later)
                </p>
                <CodeBlock language='python' code={`    def __init__(self, radius):
        """
        __init__ is not a constructor. its job is to initialize the
        instance variables
        """
        self.radius = radius # instance variable`} />

                <h3>Class and instance variables:</h3>
                <p>
Opposed to other OO languages, instance variables and class variables are not protected, and are open for users' modification. In Python, all doors are opened.
                </p>
                <CodeBlock language='python' code={`class Circle:
    """
    an advanced circle toolkit
    """
    version = "0.1" # class variable`} />
                <p>
                    Class variables have the same values across all class instances. Defined after class definition.

                    Instance variables have different values for each object instance.
                </p>
                
                <h3>Classes inheritance:</h3>
                <p>
                    Every class is able to inherit from another class and by that to either use, extend or override its functionality.

When not defining a specific functionality in the child class, we're using the functionality of the parent class (as for example the __init__ and perimeter methods in the example below).

When using the parent class method and adding some functionality to it, we're extending the functionality (as in the perimeter method).

When replacing a parent class method with a method of our own, we're overriding its functionality.
                </p>
                <p>
                Defining a perimeter method in the Circle class:
                </p>
                <CodeBlock language='python' code={`    def perimeter(self):
        return 2 * math.pi * self.radius`} />

                <p>
                    Defining a new class and overriding the perimeter method:
                </p>

                <CodeBlock language='python' code={`class Tire(Circle):
    """
    Tires are circles with a corrected perimeter calculation
    """
    def perimeter(self):
        return Circle.perimeter(self) * 1.25`} />

                <Alert variant="info">When writing classes, expect them to be inherited and modified</Alert>
                
                <h3>Alternative constructors:</h3>
                <p>
                Sometimes we wish to provide several options to construct a class. One way to find those different constructors is by looking for a from_ method.
For example: 
                </p>
                <CodeBlock language='python' code={`dict.fromkeys()`} />
                
                <p>
                In our example, we are adding a new method and decorating it with a @classmethod decorator.
                </p>
                <CodeBlock language='python' code={`@classmethod
def from_bbd(cls, bbd):
    """ construct a circle from a bounding box diagonal """
    radius = bbd / 2.0 / math.sqrt(2.0)
    return cls(radius)`} />

                
                <p>Note that when returning, we are using the cls instance and not Circle, because, when our sub-classes will use it, we don't want to explicitly return Circle, but the same class type they were using to construct (like Tire for example)</p>

                <h3>Adding functionality:</h3>
                <p>
                To attach functions to classes we use the @staticmethod decorator.
                </p>
                
                <CodeBlock language='python' code={`@staticmethod
def angle_to_grade(angle):
    """ convert angle in degree to a percentage grade """
    return math.tan(math.radians(angle)) * 100.0`} />
                
                <p>
One of the main reasons for attaching functions in such way is to improve the findability of the function and to make sure that it is used in the right context</p>

                <h3>Class local references:</h3>
                <p>
                Let's assume that we want to update the functionality of our perimeter method. We can just change it, but then we will break the functionality of all the classes that inherit our class.
The solution to this issue is to use dunders. In our case, we could define __perimeter method, and then use it within our class.

The class local references will not be available for out of class context structures. 
                </p>
                
                <CodeBlock language='python' code={`# usage - self.__perimeter()
 
 
 def __perimeter(self):
     return 2 * math.pi * self.radius`} />
                
                <h3>
                    Properties:
                </h3>
                <p>
                Now we have a new request. We need to remove the radius instance variable and to introduce a new one - diameter. One way to do it is to break all our code and API.

A better way would be to use properties. A property decorator actually converts dotted access to method calls (which means it replaces a getter) and the radius.setter
decorator creates a setter.

This way, each time the radius is called, within our class or from outside, it will initiate these two new methods, and the rest of the class remains unchanged.
                </p>
                
                <CodeBlock language='python' code={`@property
def radius(self):
    """ radius of circle """
    return self.diameter / 2.0`} />                        

                <Alert variant="info">The main purpose of properties is to avoid using getters in setters in Python.</Alert>

                <h3>Summary:</h3>
                <p>Here is a summary of all the concepts that are supposed to make our classes better:</p>
                <ul>
                    <li>Instance variables for information unique to an instance</li>
                    <li>Class variables for data shared among all instances</li>
                    <li>Regular methods need 'self' to operate on instance data</li>
                    <li>Class methods implement alternative constructors. They need 'cls' so they can create subclass instances as well</li>
                    <li>Static methods attach functions to classes. They don't need 'self'. Static methods improve discoverability and require context to be specified</li>
                    <li>Dunder methods are used for a class local references, that is used only within the class</li>
                    <li>A property() lets getter and setter methods be invoked automatically by attribute access. This allows Python classes to freely expose their instance variables.</li>
                </ul>

            </Container>
            
        );
    }
}