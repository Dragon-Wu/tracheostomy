/* 自定义验证提示语 */
function customFormErrMsg(form, customErrMsgKey) {
    customErrMsgKey = customErrMsgKey || 'errmsg';
    let els = form.elements;
    let len = els.length;
    for (let i = 0; i < len; i++) {
        (function (cur) {
            cur.addEventListener('invalid', function () {
                if (!cur.validity.valid) {
                    cur.setCustomValidity(cur.dataset[customErrMsgKey] || '');
                }
            });
            cur.addEventListener('input', function () {
                if (cur.validationMessage) {
                    cur.setCustomValidity('');
                }
            });
            cur.addEventListener('change', function () {
                if (cur.validationMessage) {
                    cur.setCustomValidity('');
                }
            });
        })(els[i]);
    }
}

// 直接返回form表单的验证是否通过，以及未通过验证的元素
function retFormValid(form) {
    let els = form.elements;
    let len = els.length;
    let target = {
        valid: true,
        not: []
    };
    for (let i = 0; i < len; i++) {
        (function (cur) {
            if (!cur.validity.valid) {
                target.valid = false;
                target.not.push(cur);
            }
        })(els[i]);
    }
    return target;
}
