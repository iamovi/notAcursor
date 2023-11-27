particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ff0000',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.8,
            random: true,
        },
        size: {
            value: 5,
            random: true,
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'bottom',
            random: true,
            straight: false,
            out_mode: 'out',
        },
    },
});