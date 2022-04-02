import { NextPageWithLayout } from '@custom-types/page'
import type { ReactElement, ReactNode } from 'react'

import { Center, Heading } from '@chakra-ui/react'


const Home: NextPageWithLayout = () => {
    return (
        <>
            <Center>
                <Heading>Home</Heading>
            </Center>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
}

export default Home
