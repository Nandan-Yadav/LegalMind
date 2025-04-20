// Validation Selector
export const validationSelector = async (fieldType) => {
    switch (fieldType) {
      case "Full Name": 
      const {nameValidation} = await import("./validations/InputValidations.js");
      return  nameValidation;
      case "Email":
        const { emailValidation } = await import("./validations/InputValidations.js");
        return emailValidation;
      case "Phone":
        const { phoneNumberlValidation } = await import("./validations/InputValidations.js");
        return  phoneNumberlValidation;
      default:
        return () => {return ""};
    }
  };

// PlaceHolder Selector
//   export const placeHolderSelector = async (placeHolderType) => {
//     switch (placeHolderType) {
//         case "Full Name":
//             const { namePlaceHolder } = await import("../constants/UI_Elements_Constants.js");
//             return namePlaceHolder;
//         case "Email":
//             const { emailPlaceHolder } = await import("../constants/UI_Elements_Constants.js");
//             return emailPlaceHolder;
//         case "Phone":
//             const { phonePlaceHolder
//             } = await import("../constants/UI_Elements_Constants.js");
//             return phonePlaceHolder;
//         case "Location":
//             const { addressPlaceHolder
//             } = await import("../constants/UI_Elements_Constants.js");
//             return addressPlaceHolder;
//         default:
//             return "Enter Details";
//     }
// };

// //  Input TextField Type Selector 
// export const textFieldTypeSelector = (lable) => {
//     switch (lable) {
//         case "Email": return "email";
//         case "Password": return "password"; 
//         default: return "text";
//     }
// }