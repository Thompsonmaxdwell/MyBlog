export const getelement = (selector) => {
    let element = document.querySelector(selector);
    element = element ? element : ( function () {
        throw new Error(selector + "not in dom")
    })() 
}
export const getelementall = (selector) => {
    let element = document.querySelectorAll(selector);
    element = element ? element : ( function () {
        throw new Error(selector + "not in dom")
    })() 
}