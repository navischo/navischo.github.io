const openPopup = (id) => {
    $.magnificPopup.open({
        items: {
            src: `${id}`,
        },
        type: 'inline'
    });
}

export { openPopup };
