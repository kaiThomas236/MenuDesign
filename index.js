const home = document.getElementById('home');

Array.from(document.getElementsByClassName('menu-item')).forEach((item, index) => {
        item.onmouseover = () => {
            home.dataset.activeIndex = index;
        }
    });

