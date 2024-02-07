import { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, TextField, Paper } from "@mui/material";
export function Header({ title, description, setTitle, setDescription }) {
  return (
    <Fragment>
      <Box sx={{ mb: 3 }}>
        <Paper elevation={2} sx={{ p: 3, borderTop: "8px solid #010C80" }}>
          <TextField
            defaultValue={title}
            onBlur={(e) => setTitle(e.target.value)}
            variant="standard"
            placeholder="Form Title"
            name="title"
            sx={{ mb: 3 }}
            fullWidth
          />
          <TextField
            name="description"
            defaultValue={description}
            onBlur={(e) => setDescription(e.target.value)}
            variant="standard"
            placeholder="Form Description"
            fullWidth
            sx={{ mb: 2 }}
            multiline
            rows={2}
          />
        </Paper>
      </Box>
    </Fragment>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
};
