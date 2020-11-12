import React from 'react';
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
        formValidated: false,
        total: 0,
        stripeFee: 0
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
        }, this.handleAmountTotal())
    }

    handleLineItemDelete = (e) => {
        let index = e.target.data
        let items = this.state.items
        items.splice(index, 1)
        this.setState({
            items
        }, this.handleAmountTotal())
    }

    handleAddLineItem = (e) => {
        console.log(this.state.amount, this.state.description)
        if (this.state.amount > 0 && this.state.description !== "") {
            let newItem = {
                amount: this.state.amount,
                currency: this.state.currency,
                description: this.state.description
            }
            let items = this.state.items
            items.push(newItem)
            this.setState({
                items
            }, this.handleAmountTotal())
        } else (
            toast.error('Please make sure there is a value and description for the line item.')
        )
    }

    handleAmountTotal = () => {
        let items = this.state.items;
        let total = 0;
        items.forEach((itemObj) => {
            total = total + parseInt(itemObj.amount)
        })
        let newNum = this.handleFormatMoney(total)
        let stripeFee = this.handleFormatMoney(total * 0.032)
        this.setState({
            total: newNum,
            stripeFee
        })
    }

    handleFormatMoney = (total) => {
        let num = total.toString().split('').reverse()
        num.splice(2, 0, '.')
        return num.reverse().join('')
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
    }

    render() {
        return(
            <div className="invoice-form" style={{ maxWidth: '800px', margin: '0 auto'}}>
                <h2 style={{marginTop: '12px'}}>Create an Invoice</h2>
                <h6 className='supporting-invoice-title'>Stripe has a 3.2% processing fee.</h6>
                <h6 className='supporting-invoice-title'>Link to Stripe Dashboard</h6>
                <Form onSubmit={this.handleInvoiceSubmit}>
                    <h4 style={{textAlign: 'left'}}>Client Email</h4>
                    <Form.Row>
                        <Form.Group as={Col}>
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
                            <h4 style={{textAlign: 'left'}}>Line Items</h4>
                            {this.state.items.map((item, i) => {
                                return <>
                                    <Form.Row key={i}>
                                        <Form.Group as={Col}>
                                            <Form.Control className="invoice-input invoice-line-item" onChange={this.handleExistingLineItemChange} name="description" data={i} value={item.description}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Form.Control className="invoice-input invoice-line-item" onChange={this.handleExistingLineItemChange} name="amount" data={i} type="number" min="0.01" step="0.01" value={item.amount}/>
                                        </Form.Group>
                                        <Form.Group as={Col}>
                                            <Button className="invoice-button" onClick={this.handleLineItemDelete} data={i} variant="outline-danger" block>Delete Line Item</Button>
                                        </Form.Group>
                                    </Form.Row>
                                </>
                            })}
                        </>
                        : null
                    }
                    <Form.Row>
                        <Form.Group as={Col}>
                            <h4><b>{`The Invoice Total is $${this.state.total}`}</b></h4>
                            <h6 className='supporting-invoice-title'>{`Stripe Fee Calculated at $${this.state.stripeFee}`}</h6>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            {!this.state.confirmSubmit
                                ? <Button className="invoice-button" onClick={this.handleConfirmSubmit} variant="outline-success" block>Submit Invoice</Button>
                                : <>
                                    <Button className="invoice-button" onClick={this.handleCancel} variant="danger">Cancel</Button>
                                    <Button className="invoice-button" type="submit" variant="primary">Confirm Invoice</Button>
                                </>
                            }
                        </Form.Group>
                    </Form.Row>
                    <br/><br/><br />
                    <h4>Add Line Items</h4>
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
                            <Button block className="invoice-button" onClick={this.handleAddLineItem} variant="outline-primary">Add Line Item</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}