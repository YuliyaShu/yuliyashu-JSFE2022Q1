import createMyElement from '../../utils/HTML_Elements/createMyElement';
import { authorDateVar, githubLinkVar, rsschoolLinkVar } from '../../utils/string-variables';
import './footer.css';

function Footer(): HTMLElement {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  const container = createMyElement(footer, { type: 'div', className: ['footer__container', 'container'] });
  const footerWrapper = createMyElement(container.element, { type: 'div', className: ['footer__wrapper'] });

  createMyElement(footerWrapper.element, {
    type: 'a',
    className: ['footer__links'],
    innerText: authorDateVar,
    attributes: [['href', githubLinkVar]],
  });

  const schoolLink = createMyElement(footerWrapper.element, {
    type: 'a',
    className: ['footer__links'],
    attributes: [['href', rsschoolLinkVar]],
  });

  createMyElement(schoolLink.element, {
    type: 'img',
    attributes: [['src', '../../assets/images/rs_school_js.svg'], ['alt', 'rsschool-logo']],
  });

  return footer;
}

export default Footer;
