import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider, Container, Typography } from "@material-ui/core";
import SimplePopover from "./components/SimplePopover";
import SimpleDialog from "./components/SimpleDialog";
import FullScreenModal from "./components/FullScreenModal";
import PositionedPoper from "./components/PositionedPoper";
import FormDialog from "./components/FormDialog";
import ColorSample from "./components/ColorSample";
import TypographySample from "./components/TypographySample";
import Buttons from "./components/Buttons";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";
import Sliders from "./components/Sliders";
import Switch from "./components/Switch";
import TextField from "./components/TextField";
import TransferList from "./components/TransferList";
import BottomNavigation from "./components/BottomNavigation";
import Breadcrumbs from "./components/BreadCrumb";
import Stepper from "./components/Stepper";
import VerticalStepper from "./components/VerticalStepper";
import SimpleTabs from "./components/SimpleTabs";
import VerticalTabs from "./components/VerticalTabs";
import Paper from "./components/Paper";
import Card from "./components/Card";
import ExpansionPanel from "./components/ExpansionPanel";
import Progress from "./components/Progress";
import Snackbar from "./components/Snackbar";
import PositionedSnackbar from "./components/PositionedSnackbar";
import Backdrop from "./components/Backdrop";
import Badges from "./components/Badges";
import Icons from "./components/Icons";
import Lists from "./components/Lists";
import Table from "./components/Table";
import Tooltips from "./components/Tooltips";
import CustomizedTooltips from "./components/CustomizedTooltips";
import Chips from "./components/Chips";
import Shadows from "./components/Shadows";
import Spacing from "./components/Spacing";
import BasicGrid from "./components/BasicGrid";
import DatePicker from "./components/DatePicker";

import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <Typography variant="h1" gutterBottom>
            Hello Material Sandbox
          </Typography>
          <Typography variant="h4" gutterBottom>
            Color Sample
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ColorSample />
          </Typography>
          <br />
          <Typography variant="h4" gutterBottom>
            Typography
          </Typography>
          <TypographySample />
          <br />
          <Typography variant="h4" gutterBottom>
            Spacing
          </Typography>
          <Spacing />
          <br />
          <Typography variant="h4" gutterBottom>
            BasicGrid
          </Typography>
          <BasicGrid />
          <br />
          <Typography variant="h4" gutterBottom>
            Shadows
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Shadows />
          </Typography>
          <br />
          <Typography variant="h4" gutterBottom>
            Simple Popover
          </Typography>
          <SimplePopover />
          <br />
          <Typography variant="h4" gutterBottom>
            Simple Dialog
          </Typography>
          <SimpleDialog />
          <br />
          <Typography variant="h4" gutterBottom>
            FullScreen Modal
          </Typography>
          <FullScreenModal />
          <br />
          <Typography variant="h4" gutterBottom>
            Positioned Poper
          </Typography>
          <PositionedPoper />
          <br />
          <Typography variant="h4" gutterBottom>
            Form Dialog
          </Typography>
          <FormDialog />
          <br />
          <Typography variant="h4" gutterBottom>
            Buttons
          </Typography>
          <Buttons />
          <br />
          <Typography variant="h4" gutterBottom>
            Checkbox
          </Typography>
          <Checkbox />
          <br />
          <Typography variant="h4" gutterBottom>
            Radio
          </Typography>
          <Radio />
          <br />
          <Typography variant="h4" gutterBottom>
            Select
          </Typography>
          <Select />
          <br />
          <Typography variant="h4" gutterBottom>
            Sliders
          </Typography>
          <Sliders />
          <br />
          <Typography variant="h4" gutterBottom>
            Switch
          </Typography>
          <Switch />
          <br />
          <Typography variant="h4" gutterBottom>
            TextField
          </Typography>
          <TextField />
          <br />
          <Typography variant="h4" gutterBottom>
            DatePicker
          </Typography>
          <DatePicker />
          <br />
          <Typography variant="h4" gutterBottom>
            TransferList
          </Typography>
          <TransferList />
          <br />
          <Typography variant="h4" gutterBottom>
            BottomNavigation
          </Typography>
          <BottomNavigation />
          <br />
          <Typography variant="h4" gutterBottom>
            Breadcrumbs
          </Typography>
          <Breadcrumbs />
          <br />
          <Typography variant="h4" gutterBottom>
            Stepper
          </Typography>
          <Stepper />
          <br />
          <Typography variant="h4" gutterBottom>
            Vertical Stepper
          </Typography>
          <VerticalStepper />
          <br />
          <Typography variant="h4" gutterBottom>
            SimpleTabs
          </Typography>
          <SimpleTabs />
          <br />
          <Typography variant="h4" gutterBottom>
            VerticalTabs
          </Typography>
          <VerticalTabs />
          <br />
          <Typography variant="h4" gutterBottom>
            Paper
          </Typography>
          <Paper />
          <br />
          <Typography variant="h4" gutterBottom>
            Card
          </Typography>
          <Card />
          <br />
          <Typography variant="h4" gutterBottom>
            ExpansionPanel
          </Typography>
          <ExpansionPanel />
          <br />
          <Typography variant="h4" gutterBottom>
            Snackbar
          </Typography>
          <Snackbar />
          <br />
          <Typography variant="h4" gutterBottom>
            PositionedSnackbar
          </Typography>
          <PositionedSnackbar />
          <br />
          <Typography variant="h4" gutterBottom>
            Progress
          </Typography>
          <Progress />
          <br />
          <Typography variant="h4" gutterBottom>
            Backdrop
          </Typography>
          <Backdrop />
          <br />
          <Typography variant="h4" gutterBottom>
            Badges
          </Typography>
          <Badges />
          <br />
          <Typography variant="h4" gutterBottom>
            Icons
          </Typography>
          <Icons />
          <br />
          <Typography variant="h4" gutterBottom>
            Lists
          </Typography>
          <Lists />
          <br />
          <Typography variant="h4" gutterBottom>
            Table
          </Typography>
          <Table />
          <br />
          <Typography variant="h4" gutterBottom>
            Tooltips
          </Typography>
          <Tooltips />
          <br />
          <Typography variant="h4" gutterBottom>
            CustomizedTooltips
          </Typography>
          <CustomizedTooltips />
          <br />
          <Typography variant="h4" gutterBottom>
            Chips
          </Typography>
          <Chips />
        </Container>
      </ThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
