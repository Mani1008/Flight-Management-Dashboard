"use client"
import { useState } from 'react'
import StickyHeadTable from './userslist'
import Layout from '../components/layout'
import Button from '@mui/material/Button';
import UserDetails from './userDetails'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const users = () => {

    const [addUser, setAddUser] = useState(false);

    return (
        <>
            <Layout>
                {addUser ? (<UserDetails />) : (<><div>
                    <div className='flex justify-between mb-3'>
                        <h2 className='text-xl font-bold'>Users</h2>
                        <Button onClick={() => setAddUser(true)} variant="outlined" startIcon={<AddCircleIcon />}>
                            Add User
                        </Button> 
                    </div>
                </div><StickyHeadTable /></>)
                }

            </Layout >


        </>
    )
}

export default users