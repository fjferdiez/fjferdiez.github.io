import React, {useState} from 'react'
import {Menu, Sidebar, Icon} from 'semantic-ui-react'
import {Link} from 'react-scroll'
import {Media} from './Media'

const NavBarMobile = (props)  => {
    const {onPusherClick, onToggle, visible, children} = props
    return(
        <div>
        <Menu className="MainMenu" inverted borderless fixed="top" size="huge">
            <Menu.Item onClick={onToggle} position="right">
                <Icon name="sidebar" />
            </Menu.Item>
        </Menu>
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible={visible}
                className="MainMenu Sidebar-Menu"
                direction="top"
            >
                <Menu.Item
                    as={Link} to="Welcome"
                    name='home'
                    activeClass="active"
                    smooth={true}
                    onClick={onToggle}
                    
                />
                <Menu.Item
                    name='biography'
                    as={Link} to="Biography"
                    activeClass="active"
                    smooth={true}
                    onClick={onToggle}
                />
                <Menu.Item
                    name='Artistic Portfolio'
                    as={Link} to="Art-Portfolio"
                    activeClass="active"
                    smooth={true}
                    onClick={onToggle}
                />
                <Menu.Item
                    name='Tech Skills'
                    as={Link} to="Engineering-Portfolio"
                    activeClass="active"
                    smooth={true}
                    onClick={onToggle}
                />
                <Menu.Item
                    name='Contact'
                    as={Link} to="Contact"
                    activeClass="active"
                    smooth={true}
                    onClick={onToggle}
                />
            </Sidebar>
            <Sidebar.Pusher
                dimmed={visible}
                onClick={onPusherClick}
            >
                {children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
    )
}

const NavBarDesktop = (props) => {
    const {children} = props
    return(
        <div className="NavBarDesktop">
            <Menu className="MainMenu" inverted borderless color="grey" fixed="top" size="huge">
                <Menu.Item
                    as={Link} to="Welcome"
                    name='home'
                    activeClass="active"
                    smooth={true}
                />
                <Menu.Item
                    name='biography'
                    as={Link} to="Biography"
                    activeClass="active"
                    smooth={true}
                />
                <Menu.Item
                    name='Artistic Portfolio'
                    as={Link} to="Art-Portfolio"
                    activeClass="active"
                    smooth={true}
                />
                <Menu.Item
                    name='Tech Skills'
                    as={Link} to="Engineering-Portfolio"
                    activeClass="active"
                    smooth={true}
                />
                <Menu.Item
                    name='Contact'
                    position="right"
                    as={Link} to="Contact"
                    activeClass="active"
                    smooth={true}
                />
            </Menu>
            {children}
        </div>
    )
}

export default function MainMenu (props) {
    const {children} = props
    const [visible, setVisible] = useState(false)

    const handlePusher = () => {
        if(visible){
            setVisible(false)
        }
        
    }
    const handleToggle = () => {
        setVisible(!visible)
    }
    return(
        <div id="MainMenu">
            <Media at="mobile">
                <NavBarMobile
                    onPusherClick={handlePusher}
                    onToggle={handleToggle}
                    visible={visible}
                >
                    {children}
                </NavBarMobile>
            </Media>
            <Media greaterThan="mobile">
                <NavBarDesktop> 
                    {children}
                </NavBarDesktop>
            </Media>
        </div>
    )
}