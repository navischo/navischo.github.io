import { win77 } from "../dne-cli.js";

const YOUR_DAYS_LABEL_OBJ = {
    sunday: "SU",
    monday: "M",
    tuesday: "TU",
    wednesday: "W",
    thursday: "TH",
    friday: "F"
};
const YOUR_DAYS_NAMES = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];

const generateDayObj = (name, weekIndex = 0) => {
    return {
        done: false,
        id: `${YOUR_DAYS_LABEL_OBJ[name].toLowerCase()}${weekIndex}`,
        label: YOUR_DAYS_LABEL_OBJ[name],
        name: name,
        first: {
            banked: 2800,
            cards: []
        },
        second: {
            cards: []
        }
    }
}

const generateWeekObj = (weekIndex) => {
    const weekObj = {
        index: weekIndex,
        event: {},
        days: [

        ]
    }

    YOUR_DAYS_NAMES.forEach((name) => {
        weekObj.days.push(generateDayObj(name, weekIndex));
    })

    return weekObj;
}

const initCalendar = () => {
    const calendar = {
        currentDay: {
            name: "sunday",
            id: "sa0"
        },
        currentEvent: {
            name: "Event",
            dayString: "Sat",
            dayId: "sa0",
            carNeed: true,
            buyIn: 20000,
            reward: "cash"
        },
        weekArr: [

        ],
    };

    [0, 1, 2, 3].forEach((weekIndex) => {
        calendar.weekArr.push(generateWeekObj(weekIndex));
    });

    return calendar;
}

const currentEventMarkup = (currentEventObj) =>
    `<section class="your-event">
        <h3 class="your-event__title">${currentEventObj.name}</h3>
        <b class="your-event__day" data-day-id="${currentEventObj.dayId}">${currentEventObj.dayString}</b>
        <div class="your-event__require-list">
            <p class="your-event__require-item">
                <span class="your-event__require-label">CAR-TIER:</span>
                <span class="your-event__require-val">${currentEventObj.carNeed ? "CAR NEEDED" : "NOT NEEDED"}</span>
            </p>
            
            <p class="your-event__require-item">
                <span class="your-event__require-label">BUY-IN:</span>
                <span class="your-event__require-val">${currentEventObj.buyIn}</span>
            </p>
            
            <p class="your-event__require-item">
                <span class="your-event__require-label">REWARD</span>
                <span class="your-event__require-val">${currentEventObj.reward}</span>
            </p>
        </div>
    </section>`;

const drawCurrentEvent = () => {
    const parent = document.querySelector(".js-current-event");
    parent.innerHTML = currentEventMarkup(win77.game.calendar.currentEvent);
}

const trackYourDays = () => {
    const allDayNodes = document.querySelectorAll(".your-day");
    const allDays = [];
    win77.game.calendar.weekArr.forEach((week, weekIndex) => {
        week.days.forEach((day, dayIndex) => {
            allDays.push(day);
            win77.game.calendar.weekArr[weekIndex].days[dayIndex].node = allDayNodes[weekIndex * 6 + dayIndex];
        });
    });
    allDayNodes.forEach((dayNode, i) => {
        dayNode.dataset.dayId = allDays[i].id;
    })

    win77.currentDayNode = document.querySelector(".js-day-name");

    // console.log(allDayNodes);
}

const updCalendarNode = () => {
    const allDayNodes = document.querySelectorAll(".your-day");
    const allDays = [];
    win77.game.calendar.weekArr.forEach((week) => {
        week.days.forEach((day) => {
            allDays.push(day);
        });
    });
    allDayNodes.forEach((dayNode, i) => {
        if (allDays[i].done) {
            const firstHalf = dayNode.querySelector(".your-day__first");
            const secondHalf = dayNode.querySelector(".your-day__second");

            firstHalf.classList.add("--cross");
            secondHalf.classList.add("--round");
        }
    })

    // console.log(allDayNodes);
}

const finishDay = (income = null) => {
    let dayChecked = false;

    win77.game.calendar.weekArr.forEach((week) => {
        week.days.forEach((day) => {
            if (!day.done && !dayChecked) {
                day.done = true;
                dayChecked = true;

                const firstHalf = day.node.querySelector(".your-day__first");
                const secondHalf = day.node.querySelector(".your-day__second");

                firstHalf.classList.add("--cross");
                secondHalf.classList.remove("--round");

                if (income) {
                    const shorted = `${`${income}`.slice(0, -3)}K`;
                    firstHalf.textContent = shorted;
                }
            }
        });
    });
}

win77.finishDay = finishDay;

const setCurrentDay = () => {
    let dayChecked = false;

    win77.game.calendar.weekArr.forEach((week) => {
        week.days.forEach((day) => {
            if (!day.done && !dayChecked) {
                win77.game.calendar.currentDay = day;
                win77.currentDayNode.textContent = day.name;
                day.name.length > 6 ? win77.currentDayNode.classList.add("--large") : win77.currentDayNode.classList.add("--remove");
                dayChecked = true;

                const secondHalf = day.node.querySelector(".your-day__second");

                secondHalf.classList.add("--round");
            }
        });
    });
}

win77.setCurrentDay = setCurrentDay;

export { initCalendar, drawCurrentEvent, trackYourDays, updCalendarNode };
