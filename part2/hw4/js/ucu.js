// 2. Validate each input on the fly using onchange event without realization.
function validateMe(event) {
    event.preventDefault();

    const nameNode = event.target.elements['name'];
    const nameErrorNode = nameNode.parentNode.querySelector('p.help-block');
    nameErrorNode.innerHTML = '';

    const messageNode = event.target.elements['message'];
    const messageErrorNode = messageNode.parentNode.querySelector('p.help-block');
    messageErrorNode.innerHTML = '';

    const emailNode = event.target.elements['email'];
    const emailErrorNode = emailNode.parentNode.querySelector('p.help-block');
    emailErrorNode.innerHTML = '';

    const phoneNode = event.target.elements['phone'];
    const phoneErrorNode = phoneNode.parentNode.querySelector('p.help-block');
    phoneErrorNode.innerHTML = '';

    let nameErrors = document.createElement('ul');
    nameErrors.setAttribute("role", "alert");

    let emailErrors = document.createElement('ul');
    emailErrors.setAttribute("role", "alert");

    let phoneErrors = document.createElement('ul');
    phoneErrors.setAttribute("role", "alert");

    let messageErrors = document.createElement('ul');
    phoneErrors.setAttribute("role", "alert");

    function length_validator(val, error, message) {
        if (val) {
            let li = document.createElement('li');
            li.innerText = message;
            error.appendChild(li);
        }
    }

    function format_validator(name, re, errors, message) {
        if (!name.value.match(re)) {
            let li = document.createElement('li');
            li.innerText = message;
            errors.appendChild(li);
        }
    }

    format_validator(nameNode, /^(([A-Z])\w+ ([A-Z])\w+) ([A-Z])\w+|([A-Z])\w+/g, nameErrors, 'incorrect name');
    format_validator(messageNode, /(?![^!@#$%^&*]*(ugly|dumm|stupid|pig|ignorant)[^!@#$%^&*]*)/g, messageErrors, 'Message, probably, contains bad language');
    format_validator(emailNode, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, emailErrors, 'incorrect email format');
    // Valid phone formats:
    // (123) 456-7890
    // (123)456-7890
    // 123-456-7890
    // 123.456.7890
    // 1234567890
    // +31636363634
    // 075-63546725
    format_validator(phoneNode, /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, phoneErrors, 'valid phone format');
    length_validator((nameNode.value.length < 1), nameErrors, 'Name is too short');
    length_validator((messageNode.value.length < 10), messageErrors, 'Message is too short');
    length_validator((emailNode.value.length < 5), emailErrors, 'Email is too short');
    length_validator((phoneNode.value.length < 12), phoneErrors, 'Phone number is too short');
    length_validator((emailNode.value.length > 50), emailErrors, 'Email is too long');

    if (nameErrors.childElementCount > 0) {
        nameErrorNode.appendChild(nameErrors)
    }

    if (emailErrors.childElementCount > 0) {
        emailErrorNode.appendChild(emailErrors)
    }

    if (phoneErrors.childElementCount > 0) {
        phoneErrorNode.appendChild(phoneErrors)
    }

    if (messageErrors.childElementCount > 0) {
        messageErrorNode.appendChild(messageErrors)
    }

    return false;
}
