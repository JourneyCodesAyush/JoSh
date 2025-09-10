// Central export for all terminal command handlers

/// <reference path="../types.js" />


/**
 * @module js/commands/registry
 * 
 * Central registry of all terminal command handlers.
 * Re-exports individual command functions to be used by the terminal command executor.
 * 
 * 
 * @exports handleCat
 * @exports handleCd
 * @exports handleClear
 * @exports handleDate
 * @exports handleEcho
 * @exports handleHelp
 * @exports handleHistory
 * @exports handleLs
 * @exports handleMan
 * @exports handlePwd
 * @exports handleSetName
 * @exports handleSocial
 * @exports handleTheme
 * @exports handleWhoAmI
 */


export { handleCat } from "./cat.js";
export { handleCd } from "./cd.js";
export { handleClear } from "./clear.js";
export { handleDate } from "./date.js";
export { handleEcho } from "./echo.js";
export { handleHelp } from "./help.js";
export { handleHistory } from "./history.js";
export { handleLs } from "./ls.js";
export { handleMan } from "./man.js";
export { handlePwd } from "./pwd.js";
export { handleSetName } from "./setname.js";
export { handleSocial } from "./social.js";
export { handleTheme } from "./theme.js";
export { handleWhoAmI } from "./whoami.js";

