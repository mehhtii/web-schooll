


const Connections = ({icon, title, body,display})=>{
    return(
        <div className={`row h-100 d-flex ${display} justify-content-center`}>
            <div className="col col-4 d-flex align-items-center justify-content-end">
                <div className={`circle-phone-box d-flex justify-content-center align-items-center`}>
                    {icon}
                </div>
            </div>
            <div className="col col-8 d-flex flex-column align-items-start justify-content-center">
                <span>{title}</span>
                <small>{body}</small>
            </div>
        </div>
    )
}

export default Connections;