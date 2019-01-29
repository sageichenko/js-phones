export default function debounce(func, ms) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            func(...[].slice.call(arguments));
        }, ms)
    }
}