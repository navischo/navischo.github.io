import {win77} from "../dne-cli.js";

const initCollector = () => {

// idea from: https://square.geex-arts.com/

// console.clear();
    win77.collector = {};

    let x = 0,
        y = 0;
    let mouseX = 0,
        mouseY = 0,
        tilt;
    const speed = 20; // higher = faster

    win77.queryScene = () => {
        win77.collector.body = $('#collector-body');
        win77.collector.scene = $('#collector-body .scene');
        win77.collector.title = $('#collector-body .title');
        // console.log("scene, title", win77.collector.scene, win77.collector.title);
    }

    win77.queryScene();

    win77.collector.body.on('mousemove', function (e) {
        mouseX = (win77.collector.body.innerWidth() / 2) - e.clientX;
        mouseY = (win77.collector.body.innerHeight() / 2) - e.clientY;
    });
// const scene = $('#collector-body .scene');
// const title = $('#collector-body .title');
    let moving = true;
    win77.collector.onPause = false;


    const move = () => {
        win77.queryScene();
        if (moving && !win77.collector.onPause) {
            // get the current transform of the scene
            // theres a easier way i guess
            let transform = win77.collector.scene.css('transform');
            transform = transform.replace('matrix(', '').replace(')', '');
            transform = transform.split(',');
            let transformX = transform[4];
            let transformY = transform[5];

            x = x + (speed * (mouseX / win77.collector.body.innerWidth()));
            y = y + (speed * (mouseY / win77.collector.body.innerHeight()));

            let maxX = (win77.collector.scene.outerWidth() - win77.collector.body.innerWidth()) / 2 + (win77.collector.body.innerWidth() / 2);
            let maxY = (win77.collector.scene.outerHeight() - win77.collector.body.innerHeight()) / 2 + (win77.collector.body.innerHeight() / 2);

            if (x >= maxX) {
                x = maxX;
            } else if (x <= -maxX) {
                x = -maxX;
            }

            if (y >= maxY) {
                y = maxY;
            } else if (y <= -maxY) {
                y = -maxY;
            }

            tilt = mouseX / win77.collector.body.innerWidth();

            TweenLite.to(win77.collector.scene, .1, {
                rotate: `${tilt * 20}deg`,
                ease: Power4.easeInOut
            });
            TweenLite.to(win77.collector.title, .1, {
                rotate: `${tilt * -60}deg`,
                ease: Power4.easeInOut
            });
            TweenLite.to(win77.collector.scene, 1, {
                x: x,
                y: y,
                ease: Power4.easeOut
            });
        }

        if (!win77.collector.onPause) {
            requestAnimationFrame(move);
        }
    }


// add each sticker in the scene to the collection bar
    $('#collector-body .scene .sticker').each(function () {
        let stickerEl = $(this).clone().addClass('sticker--empty');
        $('.sticker-collection').prepend(stickerEl);
    });


    const stickerCollection = $('#collector-body .sticker-collection');
    const colorWheel = $('#collector-body .color-wheel');

    const openCollection = () => {
        TweenMax.to(stickerCollection, .5, {
            y: 0,
            ease: Power4.easeOut
        });
    }

    const closeCollection = () => {
        let collectionHeight = stickerCollection.innerHeight();
        moving = true;
        TweenMax.to(stickerCollection, .5, {
            y: collectionHeight,
            ease: Power4.easeOut,
        });
    }

    const addSticker = (sticker) => {
        moving = false;
        openCollection();

        // rotate scene back to 0
        TweenLite.to(win77.collector.scene, 1, {
            rotate: `0deg`,
            ease: Power4.easeInOut
        });

        // move scene mid to clicked sticker
        // get the transform of the scene
        let transform = win77.collector.scene.css('transform');
        transform = transform.replace('matrix(', '').replace(')', '');
        transform = transform.split(',');
        let transformX = transform[4];
        let transformY = transform[5];
        let currentX = sticker.offset().left + (sticker.outerWidth() / 2) - (win77.collector.body.innerWidth() / 2),
            currentY = sticker.offset().top + (sticker.outerHeight() / 2) - (win77.collector.body.innerHeight() / 2);
        let transformOffsetX = transformX - currentX;
        let transformOffsetY = transformY - currentY;

        x = transformOffsetX;
        y = transformOffsetY;
        mouseX = 0;
        mouseY = 0;
        tilt = 0;

        TweenMax.to(win77.collector.scene, 1, {
            x: transformOffsetX,
            y: transformOffsetY,
            ease: Power4.easeOut
        });
        TweenMax.to(win77.collector.title, .25, {
            y: '-100px',
            rotate: 0,
            ease: Power4.easeInOut,
            delay: .25
        });


        // animation of sticker
        setTimeout(() => {
            // create a clone of the clicked sticker and append to body
            let stickerClone = sticker.clone().addClass('animating-sticker').appendTo("#collector-body");

            // get the position of the clicked sticker
            let currentX = sticker.offset().left + (sticker.outerWidth() / 2) - (win77.collector.body.innerWidth() / 2),
                currentY = sticker.offset().top + (sticker.outerHeight() / 2) - (win77.collector.body.innerHeight() / 2);

            // get the position of the sticker in the collection
            let stickername = sticker.attr('data-sticker');
            let collectionSticker = $(`.sticker-collection [data-sticker="${stickername}"]`);
            let collectionOffsetX = collectionSticker.offset().left + (collectionSticker.outerWidth() / 2) - (win77.collector.body.innerWidth() / 2),
                collectionOffsetY = collectionSticker.offset().top + (collectionSticker.outerHeight() / 2) - (win77.collector.body.innerHeight() / 2);
            let collectionWidth = collectionSticker.outerWidth(),
                collectionHeight = collectionSticker.outerHeight();

            const tl = new TimelineMax();

            tl.set(sticker, {
                opacity: 0
            });
            tl.set(stickerClone, {
                x: currentX,
                y: currentY,
            });
            tl.to(stickerClone, .5, {
                scale: 2,
                ease: Power4.easeInOut
            });
            tl.to(colorWheel, .5, {
                scale: 1.5,
                ease: Power4.easeInOut
            }, '-=.5');
            tl.to(colorWheel, .5, {
                scale: 0,
                ease: Power4.easeInOut,
                delay: 1,
            });
            tl.to(stickerClone, 1, {
                x: collectionOffsetX,
                y: collectionOffsetY,
                scale: 1,
                width: collectionWidth,
                height: collectionHeight,
                ease: Power4.easeOut,
                delay: 1,
                onComplete: () => {
                    collectionSticker.addClass('sticker--found');
                    moving = true;
                }
            }, '-=1.4');
            tl.to(title, .25, {
                y: 0,
                ease: Power4.easeInOut,
            }, '-=.5');
            tl.to(stickerClone, 1, {
                opacity: 0,
                onComplete: () => {
                    stickerClone.remove();
                    closeCollection();
                }
            });
        }, 500);

    }

    $('.scene .sticker').on('click', function () {
        addSticker($(this));
    });

    $('.sticker-collection__trigger').on('mouseover', function () {
        moving = false;
        TweenLite.to(win77.collector.scene, 1, {
            rotate: `0deg`,
            ease: Power4.easeInOut
        });
        openCollection();
    });
    $('.sticker-collection').on('mouseleave', function () {
        closeCollection();
    });


    const start = () => {
        closeCollection();
        move();
    }

    win77.collector.togglePause = () => {
        if (!win77.collector.onPause) {
            win77.collector.onPause = !win77.collector.onPause;
        } else {
            win77.collector.resume();
        }
    }
    win77.pauseCollector = () => win77.collector.onPause = true;
    win77.collector.resume = () => {
        win77.collector.onPause = false;
        start();
    }
    win77.startCollector = start;

}

export {initCollector};

