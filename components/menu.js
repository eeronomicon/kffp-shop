import Link from 'next/link';
import { Container, Menu } from 'semantic-ui-react';

export const TopMenu = () => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item header>
                KFFP Store
            </Menu.Item>
            <Link href="/">
                <Menu.Item as='a'>Home</Menu.Item>
            </Link>
        </Container>
    </Menu>
);
