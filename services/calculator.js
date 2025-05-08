document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('priceForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');

    form.addEventListener('reset', () => {
        result.textContent = '';
    });

    calculateBtn.addEventListener('click', () => {
        const siteType = document.getElementById('siteType').value;
        const numPages = parseInt(document.getElementById('numPages').value);
        const customDesign = document.querySelector('input[name="customDesign"]:checked');


        if (!siteType || isNaN(numPages) || numPages < 1 || numPages > 10 || !customDesign) {
            result.textContent = 'Please fill out all fields correctly.';
            return;
        }

        let basePrice = 0;
        if (siteType === 'business') basePrice = 1000;
        else if (siteType === 'store') basePrice = 2000;
        else if (siteType === 'blog') basePrice = 1500;

        let extraPages = Math.max(0, numPages - 1);
        let extraPagesPrice = extraPages * 200;

        let customDesignPrice = customDesign.value === 'yes' ? 1000 : 0;

        let totalPrice = basePrice + extraPagesPrice + customDesignPrice;

        result.textContent = `Estimated Price: ₪${totalPrice}`;
    });
});