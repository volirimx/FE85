import exp from 'constants'
import './tabs.css'


interface IElement {
    id: number;
    content: string;
    disabled: boolean
}
interface Itab {
    item: IElement[]
    tab: number;
    setTab: (arg: number) => void
}


const Tabs = ({item, tab, setTab}: Itab) => {
    return (
        <div className='component'>
            <div className='tabs-container'>
                {item.map((el) => <div className={tab === el.id ? 'tab-active' : ''} onClick={() => setTab(el.id)}>{el.content}</div>)}
            </div>
        </div>
    )
}



export default Tabs