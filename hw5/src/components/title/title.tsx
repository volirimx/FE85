
interface ITitle {
    titleContent: string
}



const CustomTitle = ({ titleContent }: ITitle) => {
    return (
        <h1>{titleContent}</h1>
    )
}


export default CustomTitle