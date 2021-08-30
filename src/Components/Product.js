import { Grid, Typography,TextField, Button } from '@material-ui/core'
import React from 'react'

export default function Product() {
    return (
        <Grid container>
            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>

            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
                <Typography>PRODUCT APP</Typography>
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Product name"
                margin="normal"
                />
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Manufacturer"
                margin="normal"
                />
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Distributor"
                margin="normal"
                />
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Manufacturing date"
                margin="normal"
                />
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Expiry date"
                margin="normal"
                />
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Retail price"
                margin="normal"

                />
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Wholesale price"
                margin="normal"

                />
                <TextField
                required
                fullWidth
                variant="outlined"
                label="Year"
                margin="normal"
                />
                <Button
                variant="contained"
                color="secondary"
                >SUBMIT</Button>
                

        


            </Grid>
            <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>

            </Grid>


        </Grid>
    )
}
