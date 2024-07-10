function Project({ work }) {
    return (
        <>
            <li>
                <div>
                    {/* <h3>{work.title}</h3> */}
                    <a className="fancybox-thumb" rel="fancybox-thumb" style={{width:"100%"}} href={work.github} title="Image 01"><img src={work.img} style={{ width: "100%" }} alt="" /></a></div>
            </li>
        </>
    )
}

export default Project