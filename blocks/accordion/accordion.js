import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
    [...block.children].forEach((row) => {
        const label = row.children[0];
        const summary = document.createElement('summary');
        summary.className = 'accordion-item-label';

        const accordionIcon = document.createElement('img');
        accordionIcon.className = 'accordion-item-icon';
        accordionIcon.src = './icons/faq-icon.svg';
        summary.append(icon);

        moveInstrumentation(label, summary);
        summary.append(...label.childNodes);

        const body = row.children[1];
        body.className = 'accordion-item-body';

        const details = document.createElement('details');
        details.className = 'accordion-item';
        moveInstrumentation(row, details);
        details.append(summary, body);

        row.replaceWith(details);
    });
}
