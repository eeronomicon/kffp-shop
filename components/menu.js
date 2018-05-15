import Link from 'next/link';
import { Container, Menu } from 'semantic-ui-react';

export const TopMenu = () => (
    <Menu fixed="top" inverted>
        <Container>
            <Menu.Item header>
                Freeform Portland Store
            </Menu.Item>
            <Menu.Item href="/" as="a">Home</Menu.Item>
            <Menu.Item className="snipcart-checkout" href="#">
                <i className="shopping cart icon"></i>
            </Menu.Item>
        </Container>
    </Menu>
);
