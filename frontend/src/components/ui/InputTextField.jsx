import React, { useState, useEffect, useCallback } from "react";

export const TextField = ({
  name,
  valueRef,
  label = null,
  inputType = "text",
  defaultValue = "",
  placeholder = null,
  otherClassName = "",
  validationCallback = null,
}) => {
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (valueRef?.current) {
      valueRef.current.value = defaultValue;
      valueRef.current.className = otherClassName;
      valueRef.current.type = inputType;
      valueRef.current.name = name || "";

      if (placeholder instanceof Promise) {
        placeholder.then((resolved) => {
          valueRef.current.placeholder = resolved || "";
        });
      } else {
        valueRef.current.placeholder = placeholder || "";
      }

      const value = valueRef.current.value;
      const validate = (fn) => {
        const error = fn(value);
        if (error !== errorText) setErrorText(error);
      };

      if (value && validationCallback) {
        if (validationCallback instanceof Promise) {
          validationCallback.then(validate);
        } else {
          validate(validationCallback);
        }
      }
    }
  }, []);

  const handleErrorMessage = useCallback(() => {
    if (!valueRef?.current || !validationCallback) return;

    const checkValidation = (validation) => {
      const newError = validation(valueRef?.current.value);
      if (newError !== errorText) {
        setErrorText(newError);
      }
    };

    if (validationCallback instanceof Promise) {
      validationCallback.then(checkValidation);
    } else {
      checkValidation(validationCallback);
    }
    console.log(
      `${name || label || placeholder} field Validation Error is ${errorText}`
    );
  }, [errorText]);

  const debounce = (delay) => {
    let timer;
    return () => {
      handleErrorMessage();
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(
          `${name || label || placeholder} field current value is ${
            valueRef?.current.value
          }`
        );
      }, delay);
    };
  };

  const debouncedHandleChange = useCallback(debounce(1000), [errorText]);

  console.log(
    `${name || label || placeholder} TextField component rendered ⚡️`
  );

  return (
    <div className={`text-field ${otherClassName}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input ref={valueRef} onChange={debouncedHandleChange} />
      {errorText && <span className="error-text">{errorText}</span>}
    </div>
  );
};

