import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./contact.css"

const ContactUs = () => {
  const contactItems = [
    {
      icon: "bi-question-circle",
      title: "Help Center",
      desc: "Find help articles and tips on how to use our product.",
      linkText: "Visit Help Center",
    },
    {
      icon: "bi-chat-dots",
      title: "Customer Support",
      desc: "Contact us for all support requests.",
      linkText: "Contact Customer Support",
    },
    {
      icon: "bi-puzzle",
      title: "Developer Support",
      desc: "Contact our API and platform support team.",
      linkText: "Contact Developer Support",
    },
    {
      icon: "bi-diagram-3",
      title: "Resellers",
      desc: "Join our Partner Network and grow with us.",
      linkText: "Join Partner Network",
    },
    {
      icon: "bi-box-seam",
      title: "Brand Guidelines",
      desc: "Contact us about logo or brand usage.",
      linkText: "View Brand Guidelines",
    },
    {
      icon: "bi-file-earmark-text",
      title: "Press Inquiries",
      desc: "Contact our press and media team.",
      linkText: "Contact Press Team",
    },
    {
      icon: "bi-briefcase",
      title: "Sales Contact",
      desc: "Contact sales about purchasing our products.",
      linkText: "Contact Sales Team",
    },
    {
      icon: "bi-envelope",
      title: "Other Requests",
      desc: "Can’t find the right category? Submit a general request.",
      linkText: "Submit General Request",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5 heading-text text-color">Contact Us</h2>

      <div className="row g-4">
        {contactItems.map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6 pointer-event text-color" >
            <div className="text-center p-3 border rounded-3 shadow-sm h-100" >
              <i className={`${item.icon} fs-1 text-primary mb-3 text-color`}></i>
              <h5 className="fw-semibold text-color">{item.title}</h5>
              <p className="text-muted small text-color">{item.desc}</p>
              <a href="#" className="fw-semibold text-decoration-none text-color">
                {item.linkText} <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
