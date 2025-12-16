// form layout

export const SectionContainer = ({children}) => {
    return (
        <div style={{border: "2px solid gray", margin: "10px", padding: "10px"}}>
            {children}
        </div>
    )
}

export const TitleHead = ({ title, onClick, button = false, main = true }) => {
    return (
        <>
            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: 'center'}}>
                {main ? (<h2>{title}</h2>) : (<h4>{title}</h4>)}
                {button ? (
                    <button
                        className={main ? "title-btn" : "add"}
                        onClick={onClick}
                    >
                        Add {title}
                    </button>
                ): ("")}
            </div>
            {main ? (<hr />) : ("")}
        </>
    )
}

// Preview layout

export const Title = ({title, remove = false, children}) => {
    return (
        <div>
            <h3>{title}</h3>
            {remove ? ("") : (<hr style={{width: " 100%"}}/>)}
            <div style={{marginLeft: "1.5rem"}}>
                {children}
            </div>
        </div>
    )
}
