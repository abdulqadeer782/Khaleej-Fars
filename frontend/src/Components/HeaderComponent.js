import React,{useState} from 'react'
import { Layout,Drawer } from 'antd'
import { useMediaQuery } from 'react-responsive'
import MenuItems from './MenuItems';
import {MenuOutlined} from '@ant-design/icons'


const { Header } = Layout;

const style = {
    fontSize : '2rem',
    paddingTop: '15px',
    float:"right"
}

export default function HeaderComponent() {

    const [isToggled,setIsToggled] = useState(false)

    // mediaquey
    const is_mobile = useMediaQuery({
        query: '(min-width:768px)'
    })

    const menuToggle = () => {
        setIsToggled(true)
        console.log('working')
    }

    const onClose = () => {
        setIsToggled(false)
    }

    return (
        <Header id='Header' style={{ backgroundColor: "#fff" }}>
            <div className='container'>
                <Header id='Header' style={{ backgroundColor: "#fff" }}>
                    <div className="logo">
                        Khaleej Fars
                    </div>
                    
                    {is_mobile? 
                        <MenuItems mode='horizontal'/> : <MenuOutlined onClick={menuToggle} style={style}/>
                    }
                    <Drawer
                        placement="left"
                        onClose={onClose}
                        width={150}
                        mask={true}
                        closable={true}
                        visible={isToggled}
                    >
                        <MenuItems mode='vertical'/>

                    </Drawer>

                </Header>
            </div>
        </Header>
    )
}
