import { TextField, IconButton, Paper, Grid, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchAndFilter = ({ searchTerm, handleSearchChange, handleSearchSubmit }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginBottom: 3 }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        
          <TextField
            placeholder="Search..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              backgroundColor: "#fff",
              borderRadius: 2,
              width: "70%",
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
              },
              marginLeft: "50px"
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearchSubmit}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
      </Grid>
    </Grid>
  );
};

export default SearchAndFilter;
