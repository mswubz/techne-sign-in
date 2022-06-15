import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardContent, CardMedia } from '@mui/material';
import TechneLogo from '../assets/Techne_Logo.png';


var Airtable = require('airtable')
Airtable.configure({
    endpointURL: 'https://api.airtable.com', 
    apiKey: 'keyEOjUyGItu37JGT'
})

var base = Airtable.base('appHXAbts9gzvkaWb')

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    render () {
        var firstName 
        var lastName 
        var email 
        var current = new Date() 
        var cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate() 

        const handleClick = function (event) {
            base('Front Door Sign In').create([
                {
                    'fields': {
                        'First Name': firstName,
                        'Last Name': lastName, 
                        'Email': email,
                        'Date': cDate
                    }
                }
            ])
        }

        const handleChangeFirstName = function (event) {
            firstName = event.target.value
        }

        const handleChangeLastName = function(event) {
            lastName = event.target.value
        }

        const handleChangeEmail = function(event) {
            email = event.target.value
        }

        return (
            <div style={{
                display:'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                paddingTop: 100
            }}>
                <Card 
                    sx={{maxWidth: 700}}
                >
                    <CardMedia 
                        component='img'
                        width='150'
                        image={TechneLogo}
                        alt='techne logo'
                    />
                    <CardContent>
                        <Grid 
                        container
                        direction='column'
                        justifyContent='center'
                        alignItems='center'
                        spacing={2}
                        >
                            <Grid item>
                                <Typography variant='h2'>
                                    Sign In
                                </Typography>
                            </Grid>
                            <Grid item>
                                <TextField 
                                    label='First Name' 
                                    id='firstName'
                                    onChange={handleChangeFirstName}
                                    variant='standard'
                                />
                            </Grid>
                            <Grid item>
                                <TextField 
                                    label='Last Name'  
                                    id='lastName'
                                    onChange={handleChangeLastName}
                                    variant='standard'
                                />
                            </Grid>
                            <Grid item>
                                <TextField 
                                    label='Email' 
                                    id='email'
                                    onChange={handleChangeEmail}
                                    variant='standard'
                                />
                            </Grid>
                            <Grid item>
                                <Button 
                                    variant='contained'
                                    onClick={handleClick}
                                    size='large'
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>   
        )
    }
}

export default Signup