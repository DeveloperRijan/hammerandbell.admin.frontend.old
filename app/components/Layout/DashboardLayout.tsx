import React from 'react'
import Header from '../common/Header'
import SideMenu from '../common/SideMenu'
import Footer from '../common/Footer'

const DashboardLayout = (props: React.PropsWithChildren) => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className='flex items-center'>

                <aside className='w-[20%]'>
                    <SideMenu />
                </aside>
                <section  className='w-[80%]'>
                    {props.children}
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default DashboardLayout