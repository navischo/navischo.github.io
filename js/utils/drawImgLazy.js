const drawImgLazy = (img, src) => {
    img.src = "img/gif-placeholder-1.webp";
    img.dataset.original = src;
    $(img).lazyload({effect :'fadeIn'});                                                  // creds http://surl.li/girer
}

export { drawImgLazy };
