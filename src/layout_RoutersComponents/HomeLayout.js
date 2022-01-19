import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {NavLink, useLocation} from "react-router-dom";
import Routers from "./router";
import UserSwitchOutlined from "@ant-design/icons/es/icons/UserSwitchOutlined";
import ApartmentOutlined from "@ant-design/icons/es/icons/ApartmentOutlined";
import {BsCodeSlash} from "@react-icons/all-files/bs/BsCodeSlash";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
class HomeLayout extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const { collapsed } = this.state;
        return (

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<BsCodeSlash/>}>
                            <NavLink to="/">CodeCraft</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}>
                            <NavLink to="/mentor"> Mentor</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UserSwitchOutlined />}>
                            <NavLink to="/pupils">Pupils</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<ApartmentOutlined />}>
                            <NavLink to="/groups">Groups</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Routers/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>

        );
    }
}

export default HomeLayout;