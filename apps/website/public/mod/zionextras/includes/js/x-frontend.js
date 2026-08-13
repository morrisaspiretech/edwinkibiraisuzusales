window.xFrontEnd = {
	scripts: {},
	registerScript: function (scriptId, scriptCallback) {
		this.scripts[scriptId] = scriptCallback;
	},
	getScript(scriptId) {
		return this.scripts[scriptId]
	},
	unregisterScript: function(scriptId) {
		delete this.scripts[scriptId];
	},
	run: function() {
		var that = this;
		Object.keys(this.scripts).forEach(function(scriptId) {
			var scriptObject = that.scripts[scriptId];
			scriptObject.run( document );
		})
	}
};