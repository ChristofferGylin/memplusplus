export function timerRing(value) {

    const circle = document.getElementById('timerLightRing');
    let radius = circle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;

    let offset = circumference - value * circumference;
    circle.style.strokeDashoffset = offset;

}