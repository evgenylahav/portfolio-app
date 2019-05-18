import * as React from 'react';
import Sidebar from "react-sidebar";

export interface SideBarProps {}
export interface SideBarState {
    sidebarOpen: boolean;
}

export class SideBar<SideBarProps, SideBarState> extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            sidebarOpen: true
        };
        
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
    
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    
    render() {
        return(
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                // open={ this.state.sidebarOpen }
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white" } }}
            >
                <button onClick={() => this.onSetSidebarOpen(true)}>
                Open sidebar
                </button>
            </Sidebar>
        );
    }
}