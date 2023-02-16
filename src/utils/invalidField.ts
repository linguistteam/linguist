/* Checks if field has been touched and does NOT pass validation */
const invalidField = (touched: boolean, validate: boolean) => touched && validate;

export default invalidField;
