const initInventoryPopupJquery = () => {
    console.log($('.inventory-item'));
    $('.inventory-item').magnificPopup({
        type: 'inline',
        midClick: true
    });
}

export { initInventoryPopupJquery };
