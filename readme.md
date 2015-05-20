## Summary

This React component serves as an unstyled alternative to using `<button type='button'>`. This frees up the `<button>` element to be used exclusively for forms, which means it can be given a default style without having to reset those styles when a control element is needed in a different context.  Also, this avoids the problematic styling limitations associated with using `<button>` elements (e.g., `display:block` doesn't expand to fill width, `display:flex` behavior is unspecced).

The control element will have a tabIndex of 0 by default, and will create a click event when `enter` or `space` is pressed while focused.

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)