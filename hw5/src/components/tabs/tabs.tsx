import exp from 'constants'
import './tabs.css'

interface Itab {
    tab: number;
    setTab: (arg: number) => void
}


const Tabs = ({ tab, setTab }: Itab) => {
    return (
        <div className='component'>
            <div className='tabs-container'>
                <div className={tab === 0 ? 'tab-active' : ''} onClick={() => setTab(0)}>All</div>
                <div className={tab === 1 ? 'tab-active' : ''} onClick={() => setTab(1)}>My favourites</div>
                <div className={tab === 2 ? 'tab-active' : ''} onClick={() => setTab(2)}>Popular</div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}



export default Tabs