import Nav from 'react-bootstrap/Nav';

function NavBar () {
    return (
        <Nav  fill variant="tabs">
            <Nav.Item>
                <Nav.Link href="./">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/feedback"  >FEEDBACK</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default NavBar;