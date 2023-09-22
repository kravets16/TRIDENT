/* ==========accordion========== */
+function () {

    document.querySelector('.faq__accordion');

    document.querySelectorAll('.faq__accordion').forEach(function(section) {
        section.addEventListener('click', function(e) {
            /* text open */
            document.querySelectorAll('.faq__accordion').forEach(function(section) {
                section.querySelector('.faq__accordion-text').style.maxHeight = '0px'
            })

            let accordionSection = e.target.closest('.faq__accordion');

            let isideElHeight = accordionSection.querySelector('.faq__accordion-text > *').clientHeight

            accordionSection.querySelector('.faq__accordion-text').style.maxHeight = isideElHeight + 'px'

            /* rotate */
            document.querySelectorAll('.faq__accordion').forEach(function(section) {
                section.classList.remove('active-title')
            })

            e.target.closest('.faq__accordion').classList.add('active-title');

        })
    })
}()