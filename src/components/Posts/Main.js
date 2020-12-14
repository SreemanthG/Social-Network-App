import React from 'react'
import Container from '@material-ui/core/Container';
import ViewCard from './ViewCard'
export default function Main() {
    return (
        <div>
            <Container maxWidth="sm">
  
                <ViewCard />
                <ViewCard />
                <ViewCard />
                <ViewCard />
            </Container>
        </div>
    )
}
