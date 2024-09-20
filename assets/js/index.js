// Toggle Menu Functionaliy Start
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-icon").addEventListener("click", function () {
    document.body.classList.add("menuToggle");
  });

  document.querySelector(".close-icon").addEventListener("click", function () {
    document.body.classList.remove("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// Header Scroll JS Start
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  });
});
// Header Scroll JS End

// AOS JS Start
AOS.init();
// AOS JS Start

// Accordion JS Start

document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const accordionItem = button.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content');
    const icon = button.querySelector('.icon'); // Get the icon within the button

    // Toggle active class on the clicked item
    const isActive = accordionItem.classList.toggle('active');

    if (isActive) {
      // Open the clicked accordion item
      accordionContent.style.height = accordionContent.scrollHeight + 'px'; // Set height dynamically
      accordionContent.style.opacity = '1'; // Make content visible
      icon.textContent = '−'; // Change icon to minus when open

      // Once the transition ends, set the height to auto for better responsiveness
      accordionContent.addEventListener('transitionend', function setHeightAuto() {
        accordionContent.style.height = 'auto';
        accordionContent.removeEventListener('transitionend', setHeightAuto);
      });
    } else {
      // Close the current accordion item
      accordionContent.style.height = accordionContent.scrollHeight + 'px'; // Set current height before collapsing
      accordionContent.offsetHeight; // Trigger a reflow to ensure proper animation
      accordionContent.style.height = '0'; // Collapse content
      accordionContent.style.opacity = '0'; // Make content invisible
      icon.textContent = '+'; // Change icon to plus when closed
    }

    // Optionally close other accordion items (if you want only one item to be open at a time)
    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem && item.classList.contains('active')) {
        const content = item.querySelector('.accordion-content');
        const otherIcon = item.querySelector('.icon');

        item.classList.remove('active');
        content.style.height = '0'; // Collapse other items
        content.style.opacity = '0';
        otherIcon.textContent = '+'; // Reset icon for closed items
      }
    });
  });
});
// Accordion JS End

//Cookies JS Start
const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};
window.addEventListener('load', executeCodes);
// //Cookies JS End







