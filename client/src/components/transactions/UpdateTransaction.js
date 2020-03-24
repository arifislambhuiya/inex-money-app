
import React, { Component } from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { updateTransaction } from '../../store/actions/transactionsAction'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


class UpdateTransaction extends Component {

    state = {
        amount: 0,
        note: ''
    }

    componentDidMount() {
        this.setState({
            amount: this.props.transaction.amount,
            note: this.props.transaction.note
        })
    }


    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.updateTransaction(this.props.transaction._id, this.state)
        this.props.close()
    }

    render() {
        let { amount, note } = this.state
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.close}
                style={customStyles}

            >
                <form onSubmit={this.submitHandler}>
                    <h3>Create A New Transactions</h3>
                    <div className='form-group'>
                        <label htmlFor='amount'>Amount:</label>
                        <input
                            type='number'
                            className='form-control'
                            placeholder='Enter Your Email'
                            name='amount'
                            id='amount'
                            value={amount}
                            onChange={this.changeHandler}
                        />

                    </div>


                    <div className='form-group'>
                        <label htmlFor='note'>Amount:</label>
                        <textarea

                            className='form-control'
                            placeholder='Enter Your Note'
                            name='note'
                            id='note'
                            value={note}
                            onChange={this.changeHandler}
                        />

                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>

            </Modal>
        )
    }
}
export default connect(null, { updateTransaction })(UpdateTransaction)
