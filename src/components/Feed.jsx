import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos } from "../components";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        backgroundColor: "#0f0f0f",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
          marginLeft: "30px",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          fontFamily="Lexend Deca"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Developed by Mohammad Shariq
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          fontFamily="Lexend Deca"
          letterSpacing={-0.8}
          mt={-1}
          mb={6}
          ml={2}
          sx={{
            color: "#fff",
          }}
        >
          {selectedCategory} <span style={{ color: "#eb161e" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
