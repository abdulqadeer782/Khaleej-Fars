import React from 'react'
import { Layout} from 'antd'
import HeaderComponent from '../Components/HeaderComponent';
import Banner from '../Components/Home/banner';

const { Footer, Content } = Layout;

const Main = () => {

    return (
        <Layout style={{ height: '100vh' }}>
            <HeaderComponent/>
            <Content id='Content'>
                <Banner/>
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
                <h2>sfdsf</h2><br />
            </Content>
            <Footer id='Footer'>Copyright @ 2021. All Right Reserved.</Footer>
        </Layout>
    )
}


export default Main;