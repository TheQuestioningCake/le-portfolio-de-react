import Modal from './Modal'
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/TheQuestioningCake"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/wayne-perry-824761318/"
    },
    {
      name: "fab fa-instagram",
      link: "https://www.instagram.com/sadmanphotographs/"
    }
  ]
  return (
    <>

      <div className="footer" href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css">
        <div className="container">
          <span style={{ position: "relative", top: "20px", right: "50px" }}>
            {icons.map(icon =>
            (
              <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px" }}><i className={`${icon.name} fa-xl`}></i></a>
            )
            )}
          </span>
          <p className="pull-right"><a href="#myModal" role="button" data-toggle="modal"> <i className="icon-mail"></i> CONTACT</a></p>
        </div>
      </div>
      <Modal />
    </>
  )
}

export default Footer