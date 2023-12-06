const initInventoryPopupJquery = () => {
    // console.log($('.inventory-item'));
    $('.js-inventory-popup').magnificPopup({
        type: 'inline',
        midClick: true
    });
}

export { initInventoryPopupJquery };
