import { PhoneNumberUtil } from "google-libphonenumber";

/* min 8 characters, min 1 number and special character */
const passwordRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.^,/'"(){}|;:+=_\-\\[\]<>`])[A-Za-z\d@$!%*#?&.^,/'"(){}|;:+=_\-\\[\]<>`]{8,}$/;

/* no number, no special characters but allow white space */
const textFieldRegExp = /^[a-zA-Z\s]*$/;

const validatePhoneNumber = (value: string | undefined) => {
    let result = false;
    try {
        const phoneUtil = PhoneNumberUtil.getInstance();
        result = phoneUtil.isValidNumber(phoneUtil.parse(value, "AU"));
    } catch (e) {
        result = false;
    }
    return result;
};

const validatePercentage = (value: number | undefined) => {
    let result = false;
    if (!value) return false;
    try {
        if (100 > value && value > 0) {
            result = true;
        }
    } catch (e) {
        result = false;
    }
    return result;
};

/**
 * Check if 2 numbers both add up to exactly 100.
 */
const validateSplitPercentage = (value1: number, value2: number) => {
    return Math.round(value1 + value2) === 100;
};
