
const Events = {

    /**
     * cleans up all event listeners for all descendants.
     * call before emptying an element to prevent memory leaks.
     *
     * @param {HTMLElement} element
     */
    wipe(element) {
        element.querySelectorAll('._hasEvents').forEach((el) => Events.cleanupElement(el));
    },

    /**
     * adds event listeners to an element, tracking them to help prevent memory leaks
     *
     * The idea with the namespace is, you can call `addListeners` on an element
     * as many times as you need to, and it'll free up any set with the same namespace,
     * so they don't stack up and can be GC'ed.
     *
     * @param {HTMLElement} element
     * @param {Record<string, Function>} events
     */
    addListeners(element, namespace, events) {
        Events.cleanupElement(element, namespace);
        for (const [eventName, handler] of Object.entries(events)) {
            element.addEventListener(eventName, handler);
        }
        element.classList.add('_hasEvents');
        Events.namespaces.get(namespace).set(element, events)
    },

    /**
     * adds a one-off event listener to an element, tracking them to help prevent memory leaks.
     * if you need more than one one-off of a type for an element, use the other call.
     *
     * @param {HTMLElement} element
     * @param {string} eventName
     * @param {Function} handler
     */
    addListener(element, eventName, handler) {
        Events.addListeners(element, 'one-off-' + eventName, {[eventName]: handler});
    },

    /**
     * cleans up known event listeners for a given element to prevent memory leaks
     *
     * @param {HTMLElement} element
     * @param {?string} namespace
     */
    cleanupElement(element, namespace) {
        if (namespace) {
            const events = Events.get(namespace, element);
            if (events) {
                for (const [eventName, handler] of Object.entries(events)) {
                    element.removeEventListener(eventName, handler);
                }
                Events.get(namespace).delete(element);
            }
        } else {
            // if namespace not given, clear all
            for (const namespaceKey of Events.namespaces.keys()) {
                Events.cleanupElement(element, namespaceKey);
            }
        }
    },

    /**
     * Get the weakmap of events for this namespace,
     * or the events for a given element in the namespace.
     *
     * @param {string} namespace
     * @param {?HTMLElement} element
     */
    get(namespace, element) {
        const ns = Events.getNamespace(namespace);
        return element ? ns.get(element) : ns;
    },

    /**
     * Get the weakmap of events for this namespace
     *
     * @param {string} namespace
     * @returns {WeakMap<HTMLElement, Record<string, Function>>}
     */
    getNamespace(namespace) {
        if (!Events.namespaces.has(namespace)) {
            Events.namespaces.set(namespace, new WeakMap);
        }
        return Events.namespaces.get(namespace);
    },

    namespaces: new Map(),
}
