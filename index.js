var React = require('react');

module.exports = React.createClass({
	getDefaultProps: function() {
		return {
			tag: 'div',
			tabIndex: 0,
		};
	},
	handleKeyDown: function(e) {
		// Trigger a click event on 'enter'
		if (e.key === 'Enter') {
			e.preventDefault();

			var clickEvent = document.createEvent('MouseEvents');
			clickEvent.initEvent('click', true, true);
			this.refs.button.dispatchEvent(clickEvent);
		}

		if (this.props.onKeyDown && typeof this.props.onKeyDown === 'function') {
			this.props.onKeyDown(e);
		}
	},
	handleKeyUp: function(e) {
		// Trigger a click event on 'space'
		if (e.key === ' ') {
			e.preventDefault();

			var clickEvent = document.createEvent('MouseEvents');
			clickEvent.initEvent('click', true, true);
			this.refs.button.dispatchEvent(clickEvent);
		}

		if (this.props.onKeyUp && typeof this.props.onKeyUp === 'function') {
			this.props.onKeyUp(e);
		}
	},
	render: function() {
		var props = {};

		Object.keys(this.props).forEach(function(key){
			props[key] = this.props[key];
		}.bind(this));

		props.ref = 'button';
		props.role = 'button';
		props.onKeyUp = this.handleKeyUp;
		props.onKeyDown = this.handleKeyDown;

		return React.createElement(this.props.tag, props);
	},
});