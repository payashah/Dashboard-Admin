import "./Users.css"
import React, { useEffect, useState } from "react"
import { Table, Modal, Button, Form } from "react-bootstrap"
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";



function Users() {

    const [users, setUsers] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [usersID, setUsersID] = useState("")
    const [realTime, setRealTime] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(async () => {
        await fetch("https://paya-react-default-rtdb.firebaseio.com/users.json")
            .then(response => response.json())
            .then((data) => {
                setUsers(Object.entries(data))
            })

    }, [realTime])

    useEffect(() => {
        let mainUserEdit = users.find((user) => {
            user[0] = usersID
        })
        if (mainUserEdit) {
            setFirstName(mainUserEdit[1].firstName)
            setLastName(mainUserEdit[1].lastName)
            setEmail(mainUserEdit[1].email)
        }
    }, [usersID])

    const RemoveHandler = (async () => {
        setShowDeleteModal(false)

        await fetch(`https://paya-react-default-rtdb.firebaseio.com/users/${usersID}.json`, {
            method: "DELETE"
        })
            .then(response => console.log(response))
        setRealTime((prev) => !prev)
    })

    const EditHandler = async () => {
        setShowEditModal(false)

        let UserInputEdit = {
            firstName,
            lastName,
            email
        }

        await fetch(`https://paya-react-default-rtdb.firebaseio.com/users/${usersID}.json`, {
            method: "PUT",
            body: JSON.stringify(UserInputEdit)
        })
    }



    return (
        <div className="table-ctrl">
            <Table className="table" style={{ width: 700 }} striped bordered hover>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user[1].firstName}</td>
                            <td>{user[1].lastName}</td>
                            <td>{user[1].email}</td>
                            <td>
                                <Link style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                    <MdOutlineDelete style={{ color: "red" }}
                                        onClick={() => (setShowDeleteModal(true), setUsersID(user[0]))}
                                    ></MdOutlineDelete>
                                    <CiEdit onClick={() => (setShowEditModal(true), setUsersID(user[0]))}></CiEdit>
                                </Link>
                            </td>
                        </tr>
                    ))}

                </tbody>

                {/* {delete Modal} */}
            </Table>
            <Modal show={showDeleteModal}>
                <Modal.Header >
                    <Modal.Title>Delete Item !</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure To Delete It ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={RemoveHandler}>
                        Yes, Do it.
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* {Edit Modal} */}
            <Modal show={showEditModal}>
                <Modal.Header >
                    <Modal.Title>Edit Item !</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" placeholder="Email Address" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>



                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={EditHandler}>
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Users
