
export const accordionTrigger = (e) => {

    e.target.classList.toggle('accordion-trigger--active');
    e.target.nextSibling.classList.toggle('accordion-content--active');

}