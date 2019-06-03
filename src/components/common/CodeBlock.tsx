import * as React from 'react';
import Highlight from 'react-highlight'
import './dracula.css';

export interface CodeBlockProps {
    code: string;
    language: string;
}
export interface CodeBlockState {}

export class CodeSnippet extends React.Component<CodeBlockProps, CodeBlockState> {
    render() {
        return(
            <div data-test="code-snippet-div">
                <Highlight language={this.props.language}>
                     {this.props.code}
                </Highlight>
            </div>);
    }
}