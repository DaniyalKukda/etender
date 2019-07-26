import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux"
import Swal from "sweetalert2"
function Awardmodel(props) {
    const [open, setOpen] = React.useState(false);

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
        let obj = {
            totalAmount,
            Currency,
            LOA
        }
        
        // props.getData(obj)
        handleClose()
    }
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
                            value={props.data.totalAmount}
                            disabled={true}
                        />
                        <br />
                        <br />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="Currency"
                            label="Currency"
                            value={props.data.Currency}
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
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleInput} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
const mapStateToProps = (state) => {
    return ({
        data: state.authReducers.data
    })
}

export default connect(mapStateToProps, null)(Awardmodel)




