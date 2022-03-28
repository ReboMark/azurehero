import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Login.module.css';
import { Nav, Button, Navbar, Container, Offcanvas, NavDropdown, Form, FormControl, NavbarBrand } from 'react-bootstrap'
const NavGlobal = () => {
    const router = useRouter();
    const [user, setUser] = useState("");

    const userValidate = () => {
        if (user != "") {
            return (
                <>
                    Welcome, {user}
                </>
            )
        }
        else {
            return (
                <>
                    <a onClick={() => {router.push("/login")}}> Login to your account </a>
                </>
            )
        }
    }

    useEffect(() => {
        setUser(localStorage.getItem("7eec54842ae92700ea21f7289a2ed383"));
        userValidate();
    },[user])

    return(
        <>
            <Navbar bg="white" expand={false}>
                <Container fluid>
                    <NavbarBrand className={styles.font}>
                        Staycation Hub
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls='sidebar'/>
                    <Navbar.Offcanvas 
                        id="sidebar"
                        aria-labelledby="sidebarLabel"
                        placement="end" 
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="sidebarLabel">
                                {userValidate()}
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className={`${styles.font}` +" justify-content-end flex-grow-1 pe-3"}>
                                <NavDropdown.Divider />
                                <Nav.Link href="/">Active Booking</Nav.Link>
                                <NavDropdown.Divider />
                                <Nav.Link href="/">Booking History</Nav.Link>
                                <NavDropdown.Divider />
                                <Nav.Link href="#action2">Hotel List</Nav.Link>
                                <NavDropdown.Divider />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavGlobal;