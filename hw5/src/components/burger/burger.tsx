import './burger.css'

interface IBurger {
    open: boolean;
    setOpen: (arg: boolean) => void;
}


const Burger = ({open, setOpen}: IBurger) => {
    return (
        <div>
            <div onClick={() => setOpen(!open)} className={open ? 'active-burger' : 'disabled-burger'}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={open ? 'active-menu' : 'disabledMenu'}>
                <div className='title'>SS</div>
                <div className='content'>Solid Snake</div>
            </div>
        </div>
    
    )
}


export default Burger