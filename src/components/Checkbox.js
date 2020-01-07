import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = event => {
    setChecked(event.target.checked);
  };
  const handleChangeState = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        value="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Checkbox
        value="uncontrolled"
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
      />
      <Checkbox
        disabled
        value="disabled"
        inputProps={{ "aria-label": "disabled checkbox" }}
      />
      <Checkbox
        disabled
        checked
        value="disabled checked"
        inputProps={{ "aria-label": "disabled checked checkbox" }}
      />
      <Checkbox
        defaultChecked
        value="indeterminate"
        indeterminate
        inputProps={{ "aria-label": "indeterminate checkbox" }}
      />
      <Checkbox
        defaultChecked
        color="default"
        value="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
      <Checkbox
        defaultChecked
        size="small"
        value="small"
        inputProps={{ "aria-label": "checkbox with small size" }}
      />
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChangeState("checkedA")}
              value="checkedA"
            />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChangeState("checkedB")}
              value="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel
          control={<Checkbox value="checkedC" />}
          label="Uncontrolled"
        />
        <FormControlLabel
          disabled
          control={<Checkbox value="checkedD" />}
          label="Disabled"
        />
        <FormControlLabel
          disabled
          control={<Checkbox checked value="checkedE" />}
          label="Disabled"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChangeState("checkedF")}
              value="checkedF"
              indeterminate
            />
          }
          label="Indeterminate"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              value="checkedH"
            />
          }
          label="Custom icon"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              value="checkedI"
            />
          }
          label="Custom size"
        />
      </FormGroup>
      <FormControl component="fieldset">
        <FormLabel component="legend">Label Placement</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Checkbox color="primary" />}
            label="Top"
            labelPlacement="top"
          />
          <FormControlLabel
            value="start"
            control={<Checkbox color="primary" />}
            label="Start"
            labelPlacement="start"
          />
          <FormControlLabel
            value="bottom"
            control={<Checkbox color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
