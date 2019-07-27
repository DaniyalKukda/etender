import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import { AwardData } from "../../store/action/action"
import Swal from "sweetalert2"

const arr = []

function Awardmodel(props) {
    const [open, setOpen] = React.useState(false);
    var tAmount = props.allData.data.totalAmount;
    var percentage = tAmount * 0.05;
    if (percentage < 500) {
        percentage = 500
    }
    tAmount = parseInt(tAmount) + parseInt(percentage) + 50;

    function handleClickOpen() {
        setOpen(true);
        // console.log(props.data)
    }
    props.open(handleClickOpen)

    function handleClose() {
        setOpen(false);
    }
    function handleInput() {
        let totalAmount = document.getElementById("totalAmount").value;
        let Currency = document.getElementById("Currency").value;
        let LOA = document.getElementById("Attach-file-model").files[0];
        let PolicyAndTerms = document.getElementById("policy").checked;

        if (LOA === undefined) {
            Swal.fire({
                position: 'top-end',
                showConfirmButton: false,
                type: 'error',
                title: 'Oops',
                text: 'Upload Proposal PDF...',
            })
            return false
        }
        if (!PolicyAndTerms) {
            Swal.fire({
                position: 'top-end',
                showConfirmButton: false,
                type: 'error',
                title: 'Oops',
                text: 'Please Check Policy And Terms Checkbox...',
            })
            return false
        }
        let arr =[];
        arr.push(LOA)
        console.log(arr)
        let { data } = props.allData
        data.letter = arr
        data.totalAmount = totalAmount;
        data.Currency = Currency;
        data.PolicyAndTerms = PolicyAndTerms;
        props.AwardData(data)
        // props.getData(obj)
        // handleClose()
    }
    let { data } = props.allData
    let { user } = props.allData

    return (
        <div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Letter of Award</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="totalAmount"
                            label="Total Amount"
                            type="number"
                            fullWidth
                            value={props.allData.data.totalAmount}
                            disabled={true}
                        />
                        <br />
                        <br />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Currency"
                            label="Currency"
                            value={props.allData.data.Currency}
                            disabled={true}
                            fullWidth
                        />
                        <br />
                        <br />
                        <label style={{ color: "black" }}>Attach Letter of Award(PDF)</label>
                        &nbsp;&nbsp;&nbsp;
                        <input
                            required
                            id="Attach-file-model"
                            accept="application/pdf"
                            type="file"
                        />
                        <br />
                        <br />
                        <input type="checkbox" name="Policy&Terms" id="policy" required /> I have read and agree to the Terms and Conditions
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    {
                        props.allData.data.PolicyAndTerms === undefined ? <Button onClick={handleInput} color="primary">Submit</Button>
                            : <div>
                                <form method="POST" action="https://mywallet.bring.ae/sci/form" target="_blank">
                                    <input type="hidden" name="merchant" value="IJ629962" />
                                    <input type="hidden" name="order" value={data.RFQNO + ".1"} />
                                    <input type="hidden" name="item_name" value="Here is the Total Amount After Deduction Of percentage and card charges" />
                                    <input type="hidden" name="item_number" value="123" />
                                    <input type="hidden" name="amount" value={tAmount} />
                                    <input type="hidden" name="quantity" value="1" />
                                    <input type="hidden" name="currency" value={data.Currency} />
                                    <input type="hidden" name="first_name" value={user.fullName} />
                                    <input type="hidden" name="last_name" value={user.fullName} />
                                    <input type="hidden" name="email" value={user.email} />
                                    <input type="hidden" name="phone" value={user.mobileNumber} />
                                    <input type="hidden" name="address" value={user.country} />
                                    <input type="hidden" name="city" value={user.state} />
                                    <input type="hidden" name="state" value={user.state} />
                                    <input type="hidden" name="country" value={user.country} />
                                    <input type="hidden" name="postalcode" value="13809" />
                                    <input type="hidden" name="custom" value="comment" />
                                    <input type="hidden" name="notify_url" value="CALLBACKIPNURL" />
                                    <input type="hidden" name="success_url" value="http://localhost:3000/home/payment_success" />
                                    <input type="hidden" name="fail_link" value="http://localhost:3000/home/payment_fail" />
                                    <Button type="submit">Pay now!</Button>
                                </form>
                            </div>
                    }


                </DialogActions>
            </Dialog>
        </div>
    );
}
const mapStateToProps = (state) => {
    return ({
        allData: state.authReducers
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        AwardData: (awardData) => dispatch(AwardData(awardData))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Awardmodel)




