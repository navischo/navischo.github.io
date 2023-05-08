const initGradient = () => {
    const colors = [
        [62,35,255],
        [60,255,60],
        [255,35,98],
        [45,175,230],
        [255,0,255],
        [255,128,0]
    ];

    let step = 0;
    // color table indices for:
    // current color left
    // next color left
    // current color right
    // next color right
    let colorIndices = [0,1,2,3];

    //transition speed
    let gradientSpeed = .0015;

    function updateGradient()
    {
        const parent = document.querySelector("#gradient");
        if (parent) {
            let c0_0 = colors[colorIndices[0]];
            let c0_1 = colors[colorIndices[1]];
            let c1_0 = colors[colorIndices[2]];
            let c1_1 = colors[colorIndices[3]];

            let istep = 1 - step;
            let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            let color1 = "#" + ((r1 << 16) | (g1 << 8) | b1).toString(16);

            let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
            let color2 = "#" + ((r2 << 16) | (g2 << 8) | b2).toString(16);

            parent.style.background = "-webkit-radial-gradient(center, circle cover, " + color1 + "," + color2 + ")";

            step += gradientSpeed;
            if (step >= 1) {
                step %= 1;
                colorIndices[0] = colorIndices[1];
                colorIndices[2] = colorIndices[3];

                //pick two new target color indices
                //do not pick the same as the current one
                colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
                colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

            }
        } else {
            clearInterval(interval);
        }
    }

    const interval = setInterval(updateGradient,10);
}

export { initGradient };
