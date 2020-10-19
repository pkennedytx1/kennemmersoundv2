import React from 'react';
import firebase from 'firebase';
import axios from 'axios';
import { Form, Col, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './invoice.css'

export default class Invoice extends React.Component {
    state = {
        clientEmail: "",
        items: [],
        amount: 0,
        currency: "usd",
        description: "",
        confirmSubmit: false,
        formValidated: false
    }

    handleNewLineItemChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        this.setState({
            [name]: value
        })
    }

    handleExistingLineItemChange = (e) => {
        let index = parseInt(e.target.getAttribute('data'))
        let name = e.target.name
        let value = e.target.value
        let items = this.state.items
        items[index][name] = value
        this.setState({
            items
        })
    }

    handleLineItemDelete = (e) => {
        let index = e.target.data
        let items = this.state.items
        items.splice(index, 1)
        this.setState({
            items
        })
    }

    handleAddLineItem = (e) => {
        console.log(this.state.amount, this.state.description)
        if (this.state.amount > 0 && this.state.description !== "") {
            let newItem = {
                amount: this.state.amount,
                curreny: this.state.currency,
                description: this.state.description
            }
            let items = this.state.items
            items.push(newItem)
            this.setState({
                items
            })
        } else (
            toast.error('Please make sure there is a value and description for the line item.')
        )
    }

    handleCancel = () => {
        this.setState({
            confirmSubmit: false
        })
    }

    handleConfirmSubmit = (e) => {
        console.log(this.state.items, this.state.clientEmail)
        if (this.state.clientEmail !== "" && this.state.items.length > 0) {
            this.setState({
                confirmSubmit: true
            })
        } else {
            toast.error('Please make sure there is a client email and line items for the invoice.')
        }
    }

    handleInvoiceSubmit = async (e) => {
        e.preventDefault()
        console.log(this.state.items)
        const email = this.state.clientEmail
        const items = this.state.items
        const data = {email, items}
        // const db = firebase.firestore();
        const headers = {
            headers: {
                "Access-Control-Allow-Origin": "https://josephkennemer.com"
            }
        }
        await axios.post('https://us-central1-kennemersound.cloudfunctions.net/addInvoice', data, headers)
        .then((newInvoiceRef) => {
            toast.success(`Invoice created and sent to ${email}`)
            toast.success('You can view this invoice in the Stripe Dashboard.')
            console.log(newInvoiceRef)
        }).catch((error) => {
            toast.error('There was an error sending the invoice to the server.')
        })
        // await db.collection('invoices').add({
        //     email,
        //     items
        // }).then((newInvoiceRef) => {
        //     toast.success(`Invoice created and sent to ${email}`)
        //     toast.success('You can view this invoice in the Stripe Dashboard.')
        //     console.log(newInvoiceRef)
        // })
    }

    render() {
        return(
            <div className="invoice-form" style={{ maxWidth: '800px', margin: '0 auto'}}>
                <h1>Create an Invoice</h1>
                <Form onSubmit={this.handleInvoiceSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Client Email</Form.Label>
                            <Form.Control
                                name="clientEmail"
                                className="invoice-input"
                                onChange={this.handleNewLineItemChange}
                                value={this.state.email}
                                type="email"
                                placeholder="Enter Client Email"/>
                        </Form.Group>
                    </Form.Row>
                    {this.state.items.length > 0 ?
                        <>
                            {this.state.items.map((item, i) => {
                                return <>
                                    <Form.Row key={i}>
                                        <Form.Group as={Col}>
                                            <Form.Control className="invoice-input" onChange={this.handleExistingLineItemChange} name="description" data={i} value={item.description}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Control className="invoice-input" onChange={this.handleExistingLineItemChange} name="amount" data={i} type="number" min="0.01" step="0.01" value={item.amount}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Button className="invoice-button" onClick={this.handleLineItemDelete} data={i} variant="primary" block>Delete Line Item</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </>
                            })}
                        </>
                        : null
                    }
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Line Item Description</Form.Label>
                            <Form.Control className="invoice-input" onChange={this.handleNewLineItemChange} value={this.state.description} name="description" />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control className="invoice-input" onChange={this.handleNewLineItemChange} value={this.state.amount} name="amount" type="number" min="0.01" step="0.01"/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button block className="invoice-button" onClick={this.handleAddLineItem} variant="primary">Add Line Item</Button>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            {!this.state.confirmSubmit
                                ? <Button className="invoice-button" onClick={this.handleConfirmSubmit} variant="success" block>Submit Invoice</Button>
                                : <>
                                    <Button className="invoice-button" onClick={this.handleCancel} variant="danger">Cancel</Button>
                                    <Button className="invoice-button" type="submit" variant="primary">Confirm Invoice</Button>
                                </>
                            }
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}