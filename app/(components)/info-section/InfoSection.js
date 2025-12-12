import Image from "next/image";
import "./InfoSection.scss";

export default function InfoSection({ title, description, image }) {
  return (
    <section className="infoSection">
      <div className="container">

        <div className="infoContent">

  
          <div className="infoImageWrapper">
            <Image
              src={image}
              alt="info section image"
              fill
              className="infoImage"
            />
          </div>


          {/* Right Content */}
          <div className="infoText">
            <div className="info_text_wrapper">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>

            <div className="stats">

              <div className="stats-box">
                <span>15+</span>
                <p>Years of<br/>Experience</p>
              </div>

              <div className="stats-box">
                <span>12+</span>
                <p>Countries,<br/>Clients Served</p>
              </div>

              <div className="stats-box">
                <span>35+</span>
                <p>Dedicated<br/>Engineers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
