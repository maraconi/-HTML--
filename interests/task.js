const checkBox = document.querySelectorAll('.interest');

for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener('change', function() {
        let element = event.currentTarget;
        let interestCheck = element.querySelector('.interest__check');
        let interestCheckAll = element.querySelectorAll('.interest__check');
        if (event.target === interestCheck) {
            for (let j = 0; j < interestCheckAll.length; j++) {
                interestCheckAll[j].checked = interestCheck.checked;
            }
        } else {
            let interestChecked = event.target.closest('ul').querySelectorAll('.interest__check:checked');
            if (interestChecked.length === 0) {
                interestCheck.checked = false;
                interestCheck.indeterminate = false;
            } else if (interestChecked.length === childCheckbox.length - 1) {
                interestCheck.checked = false;
                interestCheck.indeterminate = false;
            } else {
                interestCheck.indeterminate = false;
            }
        }
    });
};