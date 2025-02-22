import { styled, useTheme } from "@mui/material/styles";
import { CheckboxProps } from "@mui/material/Checkbox";
import { Checkbox } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes"; // Import next-themes hook

const BpIcon = styled("span")(() => {
  const theme = useTheme(); // Use the MUI theme here
  return {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#12beed" : "#415A77",
    backgroundImage:
      theme.palette.mode === "dark"
        ? "linear-gradient(180deg, hsla(0, 0%, 100%, 0.05), hsla(0, 0%, 100%, 0))"
        : "linear-gradient(160deg, hsla(50, 0%, 100%, 0.99), hsla(0, 0%, 90%, 0.3))",
    ".Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#A3B6CC",
      backgroundImage:
        "linear-gradient(160deg, hsla(50, 0%, 100%, 0.99), hsla(0, 0%, 90%, 0.3))",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,0.5)",
    },
  };
});

const BpCheckedIcon = styled(BpIcon)(() => {
  const theme = useTheme(); // Use the MUI theme here
  return {
    backgroundImage:
      "linear-gradient(160deg, hsla(50, 0%, 100%, 0.89), hsla(0, 0%, 90%, 0.3))",
    "&::before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#02c39a",
      backgroundImage:
        "linear-gradient(160deg, hsla(50, 0%, 100%, 0.89), hsla(0, 0%, 90%, 0.3))",
    },
    backgroundColor: theme.palette.mode === "dark" ? "#12beed" : "#83C5BE",
  };
});

export function BpCheckbox(props: CheckboxProps) {
  const { theme } = useNextTheme(); // Get theme from next-themes (light or dark)

  // Pass MUI's theme to the styled components, but without passing the theme prop directly
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />} // Do not pass the theme prop directly here
      icon={<BpIcon />} // Do not pass the theme prop directly here
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}
