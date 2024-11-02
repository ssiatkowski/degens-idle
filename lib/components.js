
/**
 * A tabs container.
 *
 *
 * The updateCallback should do the rendering of the contents, taking the name of the current tab.
 */
class TabbedDisplay {

    /**
     * new TabbedDisplay(element, onTabChange)
     *
     * @param {HTMLElement} element - The container for the tab buttons
     * @param {(tab: string) => {}} onTabChange - function to run when the tab is changed, for example to render something
     */
    constructor(element, onTabChange) {
        this.container = element;
        this.btnSelector = '.tab-button';
        this.defaultTab = element.getAttribute('data-default-tab');
        this.currentTab = null;
        this.onTabChange = onTabChange;
    }

    /** Show the specified tab (or the default). */
    show(tab = this.defaultTab) {
        const selectedTab = this.container.querySelector(`${this.btnSelector}[data-tab="${tab}"]`);
        if (selectedTab) {
            this.currentTab = tab;
            this.container.querySelectorAll(`${this.btnSelector}.active`).forEach(button => {
                button.classList.remove('active');
            });
            selectedTab.classList.add('active');
            this.onTabChange(tab);
        }
    }

    /** Reset the tabs back to the default. */
    reset() {
        this.show(this.defaultTab);
    }

    /** Initialize events / attach event listener to container. */
    addTabsListeners() {
        Events.addListener(this.container, 'click', this.listener ||= (event) => {
            const tabButton = event.target.closest(this.btnSelector);
            if (tabButton) {
                this.show(tabButton.getAttribute('data-tab'));
            }
        });
    }
}

