import { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = props.contact ? {...props.contact} : { id: 0, fullName: "", mobile: "", mailId: "" };
    }

    reset = () => this.setState({ id: 0, fullName: "", mobile: "", mailId: "" });

    saveBtnClicked = e => {
        this.props.save({ ...this.state });
        this.reset();
    }    
    
    cancelBtnClicked = e => {
        this.props.cancelEdit ? this.props.cancelEdit(this.state.id) :  this.reset();
    }

    render() {

        let { id, fullName, mobile, mailId } = this.state;

        return (
            <form className='row border-bottom border-primary p-2'>
                <div className='col-1 text-end'>
                    {id}
                </div>
                <div className='col'>
                    <input type="text" value={fullName} className='form-control' placeholder='full name'
                        onChange={e => this.setState({ fullName: e.target.value })} />
                </div>
                <div className='col-2'>
                    <input type="text" value={mobile} className='form-control' placeholder='mobile number'
                        onChange={e => this.setState({ mobile: e.target.value })} />
                </div>
                <div className='col-2'>
                    <input type="text" value={mailId} className='form-control' placeholder='mail id'
                        onChange={e => this.setState({ mailId: e.target.value })} />
                </div>
                <div className='col-2'>
                    <button type="button" className='btn btn-sm btn-primary' onClick={this.saveBtnClicked}>
                        SAVE
                    </button>
                    <button type="button" className='btn btn-sm btn-danger ms-1' onClick={this.cancelBtnClicked}>
                        CANCEL
                    </button>
                </div>
            </form>
        );
    }
}

export default ContactForm;