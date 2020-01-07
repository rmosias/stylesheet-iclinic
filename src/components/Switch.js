import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <Switch
        checked={state.checkedA}
        onChange={handleChange("checkedA")}
        value="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange("checkedB")}
        value="checkedB"
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        value="checkedC"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        disabled
        value="checkedD"
        inputProps={{ "aria-label": "disabled checkbox" }}
      />
      <Switch
        disabled
        checked
        value="checkedE"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Switch
        defaultChecked
        value="checkedF"
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedC}
            onChange={handleChange("checkedC")}
            value="checkedA"
          />
        }
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedD}
            onChange={handleChange("checkedD")}
            value="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel
        control={<Switch value="checkedC" />}
        label="Uncontrolled"
      />
      <FormControlLabel
        disabled
        control={<Switch value="checkedD" />}
        label="Disabled"
      />
      <FormControlLabel
        disabled
        control={<Switch checked value="checkedE" />}
        label="Disabled"
      />
      <FormControlLabel
        control={<Switch size="small" checked />}
        label="Small"
      />
      <FormControlLabel control={<Switch checked />} label="Normal" />
      <FormControlLabel
        value="top"
        control={<Switch color="primary" />}
        label="Top"
        labelPlacement="top"
      />
      <FormControlLabel
        value="start"
        control={<Switch color="primary" />}
        label="Start"
        labelPlacement="start"
      />
      <FormControlLabel
        value="bottom"
        control={<Switch color="primary" />}
        label="Bottom"
        labelPlacement="bottom"
      />
      <FormControlLabel
        value="end"
        control={<Switch color="primary" />}
        label="End"
        labelPlacement="end"
      />
    </FormGroup>
  );
}
