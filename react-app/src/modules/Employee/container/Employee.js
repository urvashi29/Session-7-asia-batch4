import React, { Component } from "react";
import Form from "../component/Form";
import CardDisplay from "../component/CardDisplay";
import { connect } from "react-redux";
import Posts from "../component/Posts";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

class Employee extends Component {
  state = {
    value: 0,
  };

  handleChange = (e, value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Form" {...a11yProps(0)} />
            <Tab label="Api Data" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={this.state.value} index={0}>
          <Form />
          <CardDisplay employeData={this.props.employeData} />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Posts />
        </TabPanel>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employeData: state.employeData,
  };
};
export default connect(mapStateToProps, null)(Employee);
