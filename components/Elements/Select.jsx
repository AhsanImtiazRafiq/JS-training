import React, { forwardRef } from "react";
import Select from "react-select";
import { useTheme } from "@mui/material/styles";

const SelectField = forwardRef((props, ref) => {
  const theme = useTheme();

  // Define custom styles using theme variables
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused
        ? theme.palette.primary.main
        : theme.palette.grey[400],
      boxShadow: "none",
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1.5),
      height: 50,
      "&:hover": {
        borderColor: theme.palette.primary.main,
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "1rem",
      margin: 0,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
    }),
    clearIndicator: (provided) => ({
      ...provided,
      paddingBlock: 0,
    }),
    input: (provided) => ({
      ...provided,
      margin: 0,
      height: 20,
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: theme.shape.borderRadius,
      zIndex: 10,
      backgroundColor: theme.palette.background.paper,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? theme.palette.action.hover
        : theme.palette.background.paper,
      color: theme.palette.text.primary,
      "&:active": {
        backgroundColor: theme.palette.action.selected,
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.light,
      borderRadius: 2,
      padding: theme.spacing(0.25, 1),
      fontSize: "0.8rem",
      marginBlock: 0,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: theme.palette.text.light,
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      cursor: "pointer",
      "&:hover": {
        opacity: 0.7,
      },
    }),
  };

  return (
    <Select
      ref={ref} // Ensure the ref is passed correctly
      classNamePrefix="reactSelect"
      {...props} // Spread the rest of the props
      styles={customStyles}
    />
  );
});

export default SelectField;
