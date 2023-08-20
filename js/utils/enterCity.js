import { win77 } from "../dne-cli.js";
import { closePopup } from "../popup/dom.popup.jquery.js";

const initForm3D = () => {
    const btn = document.querySelectorAll(".btn span");
    const inputs = document.querySelectorAll(".cube__face input");

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function() {
            document
                .querySelector(
                    "nav .dot.step_" + (parseInt(this.getAttribute("data-step")) + 1) + ""
                )
                .classList.add("done");
            turn(parseInt(this.getAttribute("data-step")));

            console.log("inputs[i]", inputs[i], inputs[i].id, inputs[i].id === "my-space-id");
            if (inputs[i].id === "my-space-id") {
                localStorage.setItem("my-space-id", inputs[i].value);
            }
        });
    }

    function turn(step) {
        if (!!document.querySelector("#step__" + (step - 1))) {
            document.querySelector("#step__" + (step - 1)).classList.add("hidden");
        }

        document.querySelector("#step__" + step).classList.add("cube__face--top");
        document.querySelector("#step__" + step).classList.remove("cube__face--front");

        step += 1;
        if (!!document.querySelector("#step__" + step)) {
            document.querySelector("#step__" + step).classList.add("cube__face--front");
            if (!!document.querySelector("#step__" + step + " input")) {
                document.querySelector("#step__" + step + " input").focus();
            }
            document
                .querySelector("#step__" + step)
                .classList.remove("cube__face--bottom");
        }

        step += 1;
        if (!!document.querySelector("#step__" + step)) {
            document.querySelector("#step__" + step).classList.add("cube__face--bottom");
        }
    }

    document.querySelector(".checkbox").addEventListener("click", function() {
        this.classList.toggle("checked");
        document.querySelector(".form-scene").classList.add("end");

        document.querySelector(".welcome").classList.add("show");
        win77.swiper.slideTo(1, 0);
        win77.adminSwiper.slideTo(4, 0);
        closePopup();
    });

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keyup", function(e) {
            if (this.getAttribute("type") === "text" || this.getAttribute("type") === "number") {
                if (this.value.length > 1) {
                    this.closest(".container")
                        .querySelector(".btn")
                        .classList.add("show");
                    if (e.keyCode == 13) {
                        this.closest(".container")
                            .querySelector(".btn span")
                            .click();
                    }
                } else {
                    this.closest(".container")
                        .querySelector(".btn")
                        .classList.remove("show");
                }
            }
        });
    }

    document.querySelector("select").addEventListener("change", function() {
        this.closest(".container")
            .querySelector(".btn")
            .classList.add("show");
    });
}

const enterCity = () => {
    const playerSpaceId = localStorage.getItem("my-space-id");

    console.log("playerSpaceId", playerSpaceId);
    if (playerSpaceId === null) {
        const enterForm = document.querySelector(".js-enter-city");
        // const playerId = document.querySelector(".js-enter-player-id");
        // playerId.textContent = win77.game.player.id;
        enterForm.classList.add("--visible");
        initForm3D();
    }
}

win77.clearHouse = () => {
    localStorage.removeItem("my-space-id");
    enterCity();
}

export { enterCity };
