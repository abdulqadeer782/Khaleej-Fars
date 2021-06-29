import React from 'react'
import { Layout } from 'antd'
import HeaderComponent from '../Components/HeaderComponent';
import ContentComponent from '../Components/ContentComponent';


const { Footer, Content } = Layout;

const Main = () => {

    return (
        <Layout style={{ height: '100vh' }}>
            <HeaderComponent />
            <Content id='Content'>
                <ContentComponent></ContentComponent>
            </Content>
            <Footer id='Footer'>
                Copyright @ 2021. Created By Abdul Qadeer.
            </Footer>
        </Layout>
    )
}


export default Main;