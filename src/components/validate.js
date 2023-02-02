

//проверка валидации форм
function showInputError (formElement, inputElement, errorMessage, objectSelector) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(objectSelector.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objectSelector.errorClass)
}

function hideInputError (formElement, inputElement, objectSelector) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(objectSelector.inputErrorClass);
    errorElement.classList.remove(objectSelector.errorClass);
    errorElement.textContent = '';
}

function isValid (formElement, inputElement, objectSelector) {
    if (!inputElement.validity.valid) {
        showInputError (formElement, inputElement, inputElement.validationMessage, objectSelector);
    }
    else {
        hideInputError (formElement, inputElement, objectSelector);
    }
}

function controlInputValidity (formElement, objectSelector){
    const inputList = Array.from(formElement.querySelectorAll(objectSelector.inputSelector));
    const buttonElement = formElement.querySelector(objectSelector.submitButtonSelector);
    changeButtonState (inputList, buttonElement, objectSelector)
    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function(){
            isValid(formElement, inputElement, objectSelector);
            changeButtonState (inputList, buttonElement, objectSelector)
        })
    })
}

function controlFormValidity (objectSelector) {
    const formList = Array.from(document.querySelectorAll(objectSelector.formSelector));
    formList.forEach(function(formElement){
        controlInputValidity(formElement, objectSelector);
    })
}

//работоспособность кнопок форм
function hasInvalidInput (inputList) {
    return  inputList.some(function(inputElement){
        if (inputElement.validity.valid) {
            return false;
        }
        else {
            return true;
        }
    })
}

function changeButtonState (inputList, buttonElement, objectSelector){
    if (hasInvalidInput (inputList)) {
        buttonElement.setAttribute('disabled', true);
        buttonElement.classList.add(objectSelector.inactiveButtonClass);
    }
    else {
        buttonElement.removeAttribute('disabled');
        buttonElement.classList.remove(objectSelector.inactiveButtonClass);
    }
}

export function enableValidation (objectSelector) {
    controlFormValidity (objectSelector);
 }