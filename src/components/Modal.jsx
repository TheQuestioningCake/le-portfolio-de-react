function Modal() {
  function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const website = document.getElementById('website').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:perrywayne39@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AWebsite:%20${encodeURIComponent(website)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  }

  return (
    <>
      <div id="myModal" className="modal hide fade" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
    <h3 id="myModalLabel"><i className="icon-mail"></i> Contact Me</h3>
  </div>
  <div className="modal-body">
    <form onSubmit={handleSubmit}>
      <input type="text" id="name" placeholder="Your Name" required />
      <input type="email" id="email" placeholder="Your Email" required />
      <input type="text" id="website" placeholder="Website (Optional)" />
      <textarea id="message" rows="3" style={{ width: "80%" }} required></textarea>
      <br />
      <button type="submit" className="btn btn-large"><i className="icon-paper-plane"></i> SUBMIT</button>
    </form>
  </div>
</div>
    </>
  )
}

export default Modal