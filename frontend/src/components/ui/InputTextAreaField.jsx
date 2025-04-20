import React, { useState, useCallback, useLayoutEffect } from "react";

export const TextAreaField = ({
  name,
  valueRef,
  label = null,
  defaultValue = "",
  placeholder = null,
  otherClassName = "",
  validationCallback = null,
  internalDebounceCallBack = () => {},
  externalDebounceCallBack = () => {},
  onKeyDown = () => {},
  defaultRows = 2,
}) => {
  const [errorText, setErrorText] = useState("");

  useLayoutEffect(() => {
    if (valueRef?.current) {
      valueRef.current.value = defaultValue;
      valueRef.current.className = otherClassName;
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
      externalDebounceCallBack();
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        internalDebounceCallBack();
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
    <div className={`textarea-container ${otherClassName}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        ref={valueRef}
        onChange={debouncedHandleChange}
        rows={defaultRows}
        onKeyDown={onKeyDown}
      />
      {errorText && <span className="error-text">{errorText}</span>}
    </div>
  );
};
