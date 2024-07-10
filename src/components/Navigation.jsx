// import Modal from './Modal'

function Navigation() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-inner" style={{width:"100%"}}>
                    <div className="container"> <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </a> <a className="brand" style={{width:"25%"}} href="/"><img style={{width: "20%", marginRight:"10%"}}src="img/P1170066-Enhanced-NR.jpg" alt="" /><span >Wayne Perry</span></a>
                        <ul className="nav nav-collapse pull-right" style={{width:"70%"}}>
                            <li><a href="/About" className="active"><i className="icon-user"></i> About</a></li>
                            <li><a href="/Skills"><i className="icon-trophy"></i> Skills</a></li>
                            <li><a href="/Projects"><i className="icon-picture"></i> Projects</a></li>
                            <li><a href="/Resume"><i className="icon-doc-text"></i> Resume</a></li>
                            {/* <li><a href="#myModal" role="button" data-toggle="modal"> <i className="icon-mail"></i> CONTACT</a></li> */}
                        </ul>
                        <div className="nav-collapse collapse"></div>
                    </div>
                </div>
            </div>
            {/* <Modal /> */}
        </>
    )
}

export default Navigation