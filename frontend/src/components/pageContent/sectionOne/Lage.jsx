import sectionOneFoto from "../../../assets/images/foto2.jpg";
import "./lage.scss";

const Lage = () => {
  return (
    <div className="section--one--container">
      <div className="section__one__block">
        <div className="section__one__foto">
          <img
            className="section__one_pic"
            src={sectionOneFoto}
            alt="secion one foto"
          />
        </div>
        <div className="section__one__info">
          <h1>Lage</h1>
          <p className="section__one__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            dolores nisi quaerat consectetur iure? Voluptates veritatis
            perferendis.quaerat consectetur iure? Voluptates veritatis
            perferendis.
            <p className="section__one__text">
              fugiat quod, minus obcaecati. Nobis officiis expedita fugiat.
              Exercitationem doloremque doloribus a nostrum iure quibusdam sint?
              Maxime at reprehenderit, sapiente saepe incidunt dignissimos
              officiis blanditiis eligendi natus provident dolorem, ut
              reiciendis! Nulla.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lage;
