import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {NavLink} from "react-router-dom";
import Routers from "./routers";
import UserSwitchOutlined from "@ant-design/icons/es/icons/UserSwitchOutlined";
import {
    BiBarChartSquare,
    BiArchiveIn,
    BiArchive,
    BiFileFind,
    BiBarChartAlt,
    BiCabinet,
    BiWrench,
    BiSearchAlt
} from "react-icons/bi";
import {CBadge, CButton, CCol, CFormGroup, CHeaderNav, CInput, CInputGroup, CInputGroupPrepend} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import TheHeaderDropdown from "../view/components/TheHeaderDropdown";


const {Header, Content, Footer, Sider} = Layout;

class HomeLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (

            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <Menu.Item key="1" icon={<BiBarChartSquare/>}>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<BiArchiveIn/>}>
                            <NavLink to="/inbox"> Inbox <CBadge color="primary" shape="pill" style={{ position: 'static', marginLeft:15 }}>9</CBadge></NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UserSwitchOutlined/>}>
                            <NavLink to="/accounts">Accounts</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<BiArchive/>}>
                            <NavLink to="/schPosts">Schedule Post</NavLink>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<BiFileFind/>}>
                            <NavLink to="/communities">Communities</NavLink>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<BiBarChartAlt/>}>
                            <NavLink to="/analytics">Analytics</NavLink>
                        </Menu.Item>
                        <Menu.Item key="7" icon={<BiCabinet/>}>
                            <NavLink to="/fileFolder">File & Folder</NavLink>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<BiWrench/>}>
                            <NavLink to="/settings">Settings</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}><h1
                        style={{marginLeft: 30, color: '#f1f1f1', display:'inline-block'}}>Khasanov Ibroxim</h1>
                        <TheHeaderDropdown/>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            <Routers/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Khasanov Ibroxim +998 99 304 54 75</Footer>
                </Layout>
            </Layout>

        );
    }
}

export default HomeLayout;