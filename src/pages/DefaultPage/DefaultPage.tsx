import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
const DefaultPage = () => {
    const navigate = useNavigate()
    return (
        <><Button onClick={() => { navigate('/') }}>return to site
        </Button></>
    )
}

export default DefaultPage