import React from "react";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const LoadingIndicator = () => {
  const [loading, setLoading] = React.useState(true);
  const [color, setColor] = React.useState("#ffffff");

  return (
    <div className="sweet-loading">
      {/* No necesitamos el botón y el input de color aquí */}
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}

        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingIndicator;