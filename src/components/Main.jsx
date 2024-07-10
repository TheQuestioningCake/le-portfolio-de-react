function Main( {title, pros} ) {
    return(
        <>
        <main className="left">
        <div className={pros?pros:''}>
            <strong><em> {title}</em></strong>
        </div>
    </main>
        </>
    )
}

export default Main