import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function overrides(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {

          '& input:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0 100px ' + alpha(theme.palette.primary.lighter, 0.9) + 'inset', // Cor de fundo desejada
            '-webkit-text-fill-color': '#000', // Cor do texto
          },

          color: "#9E9E9E",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#9E9E9E",
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          "& .MuiInputLabel-filled": {
            color: "#9E9E9E",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          maxWidth: "100%",
          display: "inline-block",
          verticalAlign: "bottom",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[900], 0.8),
        },
        invisible: {
          background: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Rawline Bold",
          borderRadius: "15px",
          whiteSpace: "nowrap",
          textAlign: "center",
          fontSize: "14px",
        },
        containedInherit: {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.grey[800],
          "&:hover": {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[800],
          },
        },
        contained: {
          color: "#171717"
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6" },
        subheaderTypographyProps: { variant: "body2" },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: alpha(theme.palette.grey[500], 0.24),
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.lighter,
          fontFamily: "Rawline Bold",
          transition: "1s",
        },
        body: {
          fontFamily: "Rawline Medium",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: "1px solid #d3d3d3",
          borderRadius: "10px",
          transition: "1s",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
        },
      },
    },
  };
}
