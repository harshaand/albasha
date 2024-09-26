window.addEventListener("load", function () {
    const recoms_slider = document.querySelector("#slider-recoms");
    const recoms_left_btn = document.querySelector("#recoms-left-btn");
    const recoms_right_btn = document.querySelector("#recoms-right-btn");


    updateSliderBtnVisibility(recoms_slider, recoms_left_btn, recoms_right_btn);


    function updateSliderBtnVisibility(slider, left_btn, right_btn) {
        function updateButtonVisibility() {
            //Recommendation & review section isn't the general container size as it spans 100% of the viewport width
            //So using the hero section as a general section for reference of how wide the containers are
            // Using this to make the main display for the cards, the same width as the containers.
            const container_hero = document.querySelector(".container-hero");
            const container_width = parseFloat(window.getComputedStyle(container_hero).width);
            //container_width is a good enough rough estimate. CSS will snap scroll.
            left_btn.onclick = () => { slider.scrollLeft -= container_width };
            right_btn.onclick = () => { slider.scrollLeft += container_width };

            if (slider.scrollLeft === 0) {
                left_btn.style.visibility = 'hidden';

            } else {
                left_btn.style.visibility = 'visible';
            }

            if (slider.clientWidth > slider.scrollWidth) {
                right_btn.style.visibility = 'hidden';
            }
            if (slider.scrollLeft > 0 && slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                right_btn.style.visibility = 'hidden';

            }
            else {
                right_btn.style.visibility = 'visible';
            }


        }
        slider.addEventListener('scroll', updateButtonVisibility);
        updateButtonVisibility();

        // Create a ResizeObserver
        const resizeObserver = new ResizeObserver(entries => { updateButtonVisibility(); });

        // Start observing the resizableDiv for size changes
        resizeObserver.observe(slider);

    }

});