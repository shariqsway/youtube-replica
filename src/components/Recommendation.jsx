import { Stack } from "@mui/material";
import { recommendations } from "../utils/constants";

const Recommendation = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      flexDirection: { md: "row" },
    }}
  >
    {recommendations.map((category) => (
      <button
        className="recommendation-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#f1f1f1",
          color: "#fff",
          fontFamily: "Lexend Deca",
          marginRight: "5px",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#272727" : "white",
            opacity: category.name === selectedCategory ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Recommendation;
