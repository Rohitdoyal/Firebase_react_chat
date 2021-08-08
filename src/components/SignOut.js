import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
        }}>
            <Button style={{ padding: '20px', fontSize: '15px',backgroundColor: '#ff3939',  left:'-10vw',color:'#FAFAFA',borderRadius: '10px', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</Button>
            <h2 className='firechatlogo'> Firechat App</h2>
        </div>
    )
}

export default SignOut

