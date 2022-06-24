class Mediaquery {
    constructor(element, breakpoint) {
        this._domElement = element;
        this._breakpoint = breakpoint || 0;
        this._largeScreen = false;
        this._initLayout();
        this._addEventListener();
    }

    _getViewportSize() {
        return window.innerWidth;
    }

    _initLayout() {
        this._largeScreen = this._largeScreen = window.matchMedia(`(min-width: ${this._breakpoint}px)`).matches;

        if(this._largeScreen) {
            this._largeViewport();
        }
        else {
            this._smallViewport();
        }
    }

    _addEventListener() {
        window.addEventListener('resize', this._initLayout.bind(this));
    }

    _smallViewport() {
        // code that should be applied on small viewports only
    }

    _largeViewport() {
        // code that should be applied on large viewports only
    }

    printInfo(type) {
        const info = {
            viewportsize: `The viewport size is <strong>${window.innerWidth} Pixel</strong>`,
            functions: this._largeScreen ? 'The method applied is <strong>_largeViewport</strong>' : 'The method applied is <strong>_smallViewport</strong>',
            breakpoint: this._largeScreen ? 'The viewport width is <strong>larger than the breakpoint</strong>' : 'The viewport width is <strong>smaller than the breakpoint</strong>'
        }

        return info[type];
    }
}

const page = new Mediaquery(document.body, 991);
const printInfo = function() {
    document.getElementById('viewportsize').innerHTML = page.printInfo('viewportsize');
    document.getElementById('breakpoint').innerHTML = page.printInfo('breakpoint');
    document.getElementById('functions').innerHTML = page.printInfo('functions');
}
printInfo();
window.addEventListener('resize', printInfo);