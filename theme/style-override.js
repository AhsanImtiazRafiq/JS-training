export const styleOverrides = {
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      InputLabelProps: {
        shrink: false,
      },
    },
    styleOverrides: {
      root: ({ theme: { typography, palette, spacing } }) => ({
        "& .MuiInputBase-input": {
          ...typography.title3,
        },

        "& .MuiFormLabel-root": {
          position: "relative",
          transform: "none",
          marginBottom: spacing(1),
          color: palette.primary,
          ...typography.body2,
        },

        "& .Mui-focused.MuiFormLabel-root": {
          color: palette.primary,
        },

        "& .MuiInputLabel-root.Mui-error": {
          color: "red",
        },

        "& .MuiFormHelperText-root": {
          marginLeft: 0,
          marginTop: spacing(1),
          ...typography.body2,
        },

        "& .Mui-error .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.error.main,
        },
      }),
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: ({ theme: { typography } }) => ({
        ...typography.body2,
        marginBottom: 4,
      }),
      filled: ({ theme }) => ({
        position: "absolute",
        top: theme.spacing(2),
        fontSize: "1.4rem",
        fontWeight: 400,
      }),
    },
  },

  MuiSelect: {
    // defaultProps: {
    //   IconComponent: ExpandMoreIcon,
    // },
    styleOverrides: {
      root: ({ theme: { palette } }) => ({
        borderRadius: "7px",
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: palette.blackScale[200],
        },
      }),
      select: ({ theme: { palette, typography } }) => ({
        ...typography.title3,
        lineHeight: 1.5,
        borderRadius: "7px",
        backgroundColor: palette.common.white,
        color: palette.text.primary,
        "&:focus": {
          backgroundColor: palette.common.white,
        },
        "&.Mui-error": {
          borderColor: palette.error.main,
        },
      }),
      icon: ({ theme }) => ({
        color: theme.palette.primary.main,
      }),
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
      },
      sizeLg: ({ theme: { spacing } }) => ({
        padding: spacing(4, 5),
      }),
      text: {
        textDecoration: "underline",
        textUnderlineOffset: 3,
      },
    },
  },
};
