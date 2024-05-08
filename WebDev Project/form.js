document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');

    const loadForm = () => {
        form.elements['inputEmail4'].value = sessionStorage.getItem('inputEmail4') || '';
        form.elements['inputPassword4'].value = sessionStorage.getItem('inputPassword4') || '';
        form.elements['inputAddress'].value = sessionStorage.getItem('inputAddress') || '';
        form.elements['inputAddress2'].value = sessionStorage.getItem('inputAddress2') || '';
        form.elements['inputCity'].value = sessionStorage.getItem('inputCity') || '';
        form.elements['inputState'].value = sessionStorage.getItem('inputState') || 'Ohio';
        form.elements['inputZip'].value = sessionStorage.getItem('inputZip') || '';
        form.elements['gridCheck'].checked = sessionStorage.getItem('gridCheck') === 'true';
    };

    const saveForm = () => {
        sessionStorage.setItem('inputEmail4', form.elements['inputEmail4'].value);
        sessionStorage.setItem('inputPassword4', form.elements['inputPassword4'].value);
        sessionStorage.setItem('inputAddress', form.elements['inputAddress'].value);
        sessionStorage.setItem('inputAddress2', form.elements['inputAddress2'].value);
        sessionStorage.setItem('inputCity', form.elements['inputCity'].value);
        sessionStorage.setItem('inputState', form.elements['inputState'].value);
        sessionStorage.setItem('inputZip', form.elements['inputZip'].value);
        sessionStorage.setItem('gridCheck', form.elements['gridCheck'].checked);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        saveForm();
        alert('Form data saved locally in sessionStorage');
    });

    loadForm();
});

