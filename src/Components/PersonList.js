import React from "react"
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './PersonList.css'
import {  FaGem ,FaBars} from 'react-icons/fa';
import { AiOutlineSetting, AiFillFileMarkdown } from 'react-icons/ai'
import { BiSearch, BiTestTube, BiCoinStack } from 'react-icons/bi'
import { FiRefreshCw } from 'react-icons/fi'
import { FcBinoculars } from 'react-icons/fc'
import { RiArchiveDrawerFill } from 'react-icons/ri'


const rawState = {
    collapsed: false,
    popperArrow: false
}


export default class PersonList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state=rawState

        this.handleChange=this.handleChange.bind(this);
    }

    handleChange = (e) => {
         this.setState({
            collapsed:!this.state.collapsed
         },
         console.log("changed",e.target.value,e.target.checked,this.state.collapsed)
         )
    }

    render() {
        return (
            <div className="main"> 
                <ProSidebar className="sidebar" collapsed={this.state.collapsed} rtl={false} toggled="abcd" >
                    <SidebarHeader className="Header">
                        <p><BiSearch className="searchimg" /><FaBars className="image" value="collapsed" onClick={this.handleChange}/></p>
                        
                    </SidebarHeader>
                    
                    <SidebarContent>
                        <Menu iconShape="circle" popperArrow={this.state.popperArrow}>
                            <MenuItem icon={<AiFillFileMarkdown />} >Project Management</MenuItem>
                            <MenuItem icon={<BiCoinStack />} >Data Management</MenuItem>
                            <SubMenu title="EDA" icon={<FiRefreshCw />} >
                                <MenuItem>Preliminary Steps</MenuItem>
                                <MenuItem>Treating Outliers</MenuItem>
                                <MenuItem>Missing Value Imputation</MenuItem>
                                <MenuItem>Variable Analysis</MenuItem>
                                <MenuItem>Statistical Tests</MenuItem>
                            </SubMenu>
                            
                            <MenuItem icon={<FaGem />} >Data Transformation</MenuItem>
                            <MenuItem icon={<FcBinoculars />} >Sampling</MenuItem>
                            <MenuItem icon={<AiFillFileMarkdown />} >Model Estimation</MenuItem>
                            <MenuItem icon={<BiTestTube />} >Model Testing</MenuItem>
                            <MenuItem icon={<RiArchiveDrawerFill />} >Automated Documentation</MenuItem>
                            <MenuItem icon={<FaGem />} >Model Management</MenuItem>
                        </Menu>
                    </SidebarContent>

                    <SidebarFooter className="Footer">
                        <Menu><MenuItem icon={<AiOutlineSetting />} >Settings</MenuItem></Menu>
                        
                    </SidebarFooter>
                </ProSidebar>
            </div>
        )
    }

}