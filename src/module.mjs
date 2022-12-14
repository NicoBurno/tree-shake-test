const SOURCE = [1, 2, 3];

export const SIMPLE = SOURCE;

export const SELF_INVOKED = (() => {
    return SOURCE.map(i => `self-invoked ${i}`);
})();

export const SELF_INVOKED_COMMENT =
/*#__PURE__*/
(() => {
    return SOURCE.map(i => `self-invoked-comment ${i}`);
})();
