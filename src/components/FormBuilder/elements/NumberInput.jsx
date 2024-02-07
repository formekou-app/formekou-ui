import { Fragment } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Box,
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  Divider,
  IconButton,
  Tooltip,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import {
  DragIndicator,
  DeleteOutlineOutlined,
  FileCopy,
} from "@mui/icons-material";

// Form Elements
import { formEl } from "../constants";

export function NumberInput({
  item,
  handleValue,
  deleteEl,
  handleRequired,
  handleElType,
  duplicateElement,
}) {
  return (
    <Fragment>
      <Paper elevation={1}>
        <Box sx={{ textAlign: "center" }}>
          <DragIndicator
            sx={{ transform: "rotate(-90deg)", cursor: "all-scroll" }}
          />
        </Box>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <TextField
                defaultValue={item.value}
                variant="outlined"
                onBlur={(e) => handleValue(item.id, e)}
                fullWidth
                required={item.required}
                placeholder="Number Label"
                sx={{ mb: 2 }}
              />
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Number Input Field"
                disabled
                type="number"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id="el-type-label">Type</InputLabel>
                <Select
                  labelId="el-type-label"
                  id="el-type"
                  label="Type"
                  value={item.type}
                  onChange={(e) => handleElType(item.id, e.target.value)}
                >
                  {formEl &&
                    formEl.map((el, key) => (
                      <MenuItem key={key} value={el.value}>
                        {el.label}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Divider light />
        <FormGroup row sx={{ alignItems: "center" }}>
          <Tooltip title="Delete Element" aria-label="delete-element">
            <IconButton
              aria-label="delete-element"
              onClick={() => deleteEl(item.id)}
              sx={{ ml: 2, color: "#010C80" }}
            >
              <DeleteOutlineOutlined sx={{ color: "#010C80" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Duplicate Element" aria-label="duplicate-element">
            <IconButton
              aria-label="duplicate-element"
              onClick={() => duplicateElement(item.id, item.type)}
              sx={{ ml: 2, color: "#010C80" }}
            >
              <FileCopy sx={{ color: "#010C80" }} />
            </IconButton>
          </Tooltip>

          <FormControlLabel
            control={
              <Switch
                checked={item.required}
                onChange={() => handleRequired(item.id)}
                name="required-field"
                sx={{ color: "#010C80" }}
              />
            }
            label="Required"
            sx={{ ml: 2, color: "#010C80" }}
          />
        </FormGroup>
      </Paper>
    </Fragment>
  );
}
NumberInput.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  handleValue: PropTypes.func.isRequired,
  deleteEl: PropTypes.func.isRequired,
  handleRequired: PropTypes.func.isRequired,
  handleElType: PropTypes.func.isRequired,
  duplicateElement: PropTypes.func.isRequired,
};
