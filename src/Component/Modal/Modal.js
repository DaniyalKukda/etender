import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import Swal from "sweetalert2"
function Model(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
        console.log(props.data)
    }
    props.open(handleClickOpen)

    function handleClose() {
        setOpen(false);
    }
    function handleInput() {
        let totalAmount = document.getElementById("totalAmount").value;
        let Currency = document.getElementById("Currency").value;
        let Proposal = document.getElementById("outlined-file-model").files[0];
        if(totalAmount === "") {
            Swal.fire({
                position: 'top-end',
                showConfirmButton: false,
                type: 'error',
                title: 'Oops',
                text: 'Enter Total Amount...',
            })
            return false
        }
        if(Currency === "") {
            Swal.fire({
                position: 'top-end',
                showConfirmButton: false,
                type: 'error',
                title: 'Oops',
                text: 'Select Currency...',
            })
            return false
        }
        if(Proposal === undefined) {
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
            Proposal
        }
        props.getData(obj)
        handleClose()
    }
    const CURRENCY = ["USD" , "AED" , "EUR" , "GBP"]
    return (
        <div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Bid Now!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="totalAmount"
                            label="Total Amount"
                            type="number"
                            fullWidth
                         />
                        <br />
                        <br />
                        <FormControl variant="filled" fullWidth={true}>
                            <InputLabel htmlFor="filled-age-native-simple">Currency</InputLabel>
                            <Select
                                fullWidth
                                native
                                name="Currency"
                                id="Currency"
                                input={<FilledInput name="Currency" id="filled-age-native-simple" />}
                            >
                                <option value="" />
                                {CURRENCY.map((e) => <option value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <label style={{ color: "black" }}>Attach Proposal(PDF)</label>
                        &nbsp;&nbsp;&nbsp;
                        <input
                            required
                            id="outlined-file-model"
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
export default Model




