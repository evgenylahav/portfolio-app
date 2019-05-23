import * as React from 'react';
import { Container, Alert } from 'react-bootstrap';
import { CodeSnippet as CodeBlock } from '../common/CodeBlock';


export class BlogPythonDependencies extends React.Component<any, any> {
    render(){
        return (
            <Container>
                <h2>Python: Dependencies Management</h2>
                <p>
                It is very important to understand the dependencies management and environments management in Python.

There are general purpose installers as anaconda and miniconda (https://conda.io/miniconda.html). However when developing production products, it is generally a good idea
to bring the working environment as close as possible to production. That is done by working with virtual environments.
                </p>
                <h3>venv:</h3>
                <p>
                The <a href="https://docs.python.org/3.6/library/venv.html#module-venv" style={{color: 'blue'}}>venv</a> module provides support for creating lightweight “virtual environments” with their own site directories, optionally isolated from system site directories. 
Each virtual environment has its own Python binary (allowing creation of environments with various Python versions) and can have its own independent 
set of installed Python packages in its site directories.

venv package is built-in in Python.
                </p>
                
                <h3>Creating a virtual environment</h3>
                <p>
                To create a new project, we simply use this command from within a terminal
                </p>
                <CodeBlock language='bash' code={`# python -m venv /path/to/folder/
# for example
 
$python -m venv ./practice-venv`} />

                <p>
The new environment is created and the content of the folder contains Include, Lib and Scripts folders and a pyvenv.cfg file</p>

                <CodeBlock language='bash' code={`$ ls
Include/  Lib/  pyvenv.cfg  Scripts/`} />

                <p>from this point it will be more convenient to work within the IDE.</p>
                
                <h3>Selecting the interpreter and activating</h3>
                <p>
                To start using the virtual environment one need to select the interpreter and to activate it as following (note: the procedure refers to Pycharm):
                </p>
                <ul>
                    <li>ctrl+alt+s to open settings</li>
                    <li>search for interpreter</li>
                    <li>add new interpreter that is under Scripts/python.exe</li>
                </ul>
                <p>To activate the virtual environment:</p>
                <ul>
                    <li>ctrl+alt+s to open settings</li>
                    <li>tools → Terminal → Shell path</li>
                    <li>Type in: "cmd.exe" /k ""path to \Scripts\activate.bat""</li>
                    <li>close the terminal and open it again. it should now be marked as (local environment name)</li>
                </ul>
                <p>test:</p>
                <CodeBlock language='bash' code={`pip list
>>>
Package    Version
---------- -------
pip        10.0.1
setuptools 39.0.1
 
where python.exe
>>>
path to virtual env/Scripts/python.exe`} />
                
                <h3>Installing Packages</h3>
                <p>
                When working on a local virtual environment, all the packages will be installed locally and will not interfere other projects, or the general installers (miniconda).

To install a package just use pip install
                </p>
                <CodeBlock language='python' code={`# pip install <package name>
pip install numpy
 
 
# to install a specific version, just specify it as following
pip install requests==2.18.4`} />

                
                <h3>Using requirements.txt file</h3>
                <p>
                Instead of installing packages individually, pip allows you to declare all dependencies in a Requirements File. 
For example you could create a requirements.txt file containing:
                </p>
                <Alert variant="info">
                    <Alert.Heading>requirements.txt:</Alert.Heading>
                    <p>requests==2.18.4</p>
                    <p>google-auth==1.1.0</p>                
                </Alert>;
  
                <p>And tell pip to install all of the packages in this file using the -r flag:</p>
                <CodeBlock language='python' code={`pip install -r requirements.txt`} />
                
                <h3>Freezing dependencies</h3>
                <p>
                Pip can export a list of all installed packages and their versions using the freeze command:
                </p>
                
                <CodeBlock language='python' code={`pip freeze`} />
                
                <p>
                which will output a list of package specifiers to the terminal, and later should be copied to the requirement.txt file
                </p>
                <Alert variant="info">
                    <Alert.Heading>requirements.txt:</Alert.Heading>
                    <p>cachetools==2.0.1</p>
                    <p>certifi==2017.7.27.1</p>
                    <p>chardet==3.0.4</p>
                    <p>google-auth==1.1.1</p>
                    <p>idna==2.6</p>
                    <p>pyasn1==0.3.6</p>
                    <p>pyasn1-modules==0.1.4</p>
                    <p>requests==2.18.4</p>
                    <p>rsa==3.4.2</p>
                    <p>six==1.11.0</p>
                    <p>urllib3==1.22</p>                
                </Alert>
             
                <p>
                This is useful for creating requirements file that can re-create the exact versions of all packages installed in the local environment

A lot more material can be found here: <a href="https://packaging.python.org/key_projects/#virtualenv">https://packaging.python.org/key_projects/#virtualenv</a>
                </p>
                
            </Container>
        );
    }
}