const openPopup = (id) => {
    $.magnificPopup.open({
        items: {
            src: `${id}`,
        },
        type: 'inline'
    });
}

const closePopup = () => {
    $.magnificPopup.close();
}

export { openPopup, closePopup };
