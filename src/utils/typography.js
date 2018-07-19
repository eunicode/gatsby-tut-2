import Typography from "typography";

// Typography.js themes are simple Javascript objects (Source: Typography readme).

// The Lawton theme adds Google Fonts. Restart the dev server to load the new 
// Google Fonts).

import lawtonTheme from "typography-theme-lawton";

const typography = new Typography(lawtonTheme);

// Typography module
export default typography;