import { Outlet } from 'react-router-dom'

function Aside( ) {
    return(
        <>
        <aside>
            <Outlet />
        </aside>
        </>
    )
}

export default Aside