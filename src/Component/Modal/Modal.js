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

function Model(props) {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }
    props.open(handleClickOpen)

    function handleClose() {
        setOpen(false);
    }
    const CURRENCY = ["EUR", "GBP", "DZD", "ARP", "AUD", "ATS", "BSD", "BBD", "BEF", "BMD", "BRR", "BGL", "CAD", "CLP", "CNY", "CYP", "CSK", "DKK", "NLG", "XCD", "EGP", "FJD", "FIM", "FRF", "DEM", "XAU", "GRD", "HKD", "HUF", "ISK", "INR", "IDR", "IEP", "ILS", "ITL", "JMD", "JPY", "JOD", "KRW", "LBP", "LUF", "MYR", "MXP", "NLG", "NZD", "NOK", "PKR", "XPD", "PHP", "XPT", "PLZ", "PTE", "ROL", "RUR", "SAR", "XAG", "SGD", "SKK", "ZAR", "KRW", "ESP", "XDR", "SDD", "SEK", "CHF", "TWD", "THB", "TTD", "TRL", "VEB", "ZMK", "EUR", "XCD", "XDR", "XAG", "XAU", "XPD", "XPT",]
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
                                input={<FilledInput name="Currency" id="filled-age-native-simple" />}
                            >
                                <option value="" />
                                {CURRENCY.map((e) => <option value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <label style={{color:"black"}}>Attach Proposal(PDF)</label>
                        &nbsp;&nbsp;&nbsp;
                        <input
                            required
                            id="outlined-file"
                            accept="application/pdf"
                            type="file"
                        />
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default Model




