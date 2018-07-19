import Typography from "typography";

// Typography.js themes are simple Javascript objects (Source Typography readme).

import bootstrapTheme from "typography-theme-bootstrap";
// import lawtonTheme from "typography-theme-lawton";

const typography = new Typography(bootstrapTheme);
// const typography = new Typography(lawtonTheme);

export default typography;