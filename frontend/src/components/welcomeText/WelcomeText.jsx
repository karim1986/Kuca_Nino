import "./welcomeText.scss";

const WelcomeText = ({ toggle }) => {
  return (
    <div className="text--box">
      {!toggle && (
        <div className="text__welcome">
          <h3>Lošinj - Kroatien</h3>
          <h1>
            <span>Willkommen </span> im Kuca Nino
          </h1>
        </div>
      )}
    </div>
  );
};

export default WelcomeText;
