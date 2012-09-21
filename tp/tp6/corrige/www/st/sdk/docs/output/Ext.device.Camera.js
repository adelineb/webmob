Ext.data.JsonP.Ext_device_Camera({"meta":{"aside":[{"type":"guide","name":"native_apis"}]},"mixedInto":[],"aliases":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.device.Camera</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Ext.device.camera.Abstract' rel='Ext.device.camera.Abstract' class='docClass'>Ext.device.camera.Abstract</a></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.device.Communicator' rel='Ext.device.Communicator' class='docClass'>Ext.device.Communicator</a></div><div class='dependency'><a href='#!/api/Ext.device.camera.PhoneGap' rel='Ext.device.camera.PhoneGap' class='docClass'>Ext.device.camera.PhoneGap</a></div><div class='dependency'><a href='#!/api/Ext.device.camera.Sencha' rel='Ext.device.camera.Sencha' class='docClass'>Ext.device.camera.Sencha</a></div><div class='dependency'><a href='#!/api/Ext.device.camera.Simulator' rel='Ext.device.camera.Simulator' class='docClass'>Ext.device.camera.Simulator</a></div><h4>Files</h4><div class='dependency'><a href='source/Camera.html#Ext-device-Camera' target='_blank'>Camera.js</a></div></pre><div class='doc-contents'>            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/native_apis'><img src='guides/native_apis/icon.png' alt=''> Using Native APIs</a></p>\n            </div>\n<p>This class allows you to use native APIs to take photos using the device camera.</p>\n\n<p>When this singleton is instantiated, it will automatically select the correct implementation depending on the\ncurrent device:</p>\n\n<ul>\n<li>Sencha Packager</li>\n<li>PhoneGap</li>\n<li>Simulator</li>\n</ul>\n\n\n<p>Both the Sencha Packager and PhoneGap implementations will use the native camera functionality to take or select\na photo. The Simulator implementation will simply return fake images.</p>\n\n<h2>Example</h2>\n\n<p>You can use the <a href=\"#!/api/Ext.device.Camera-method-capture\" rel=\"Ext.device.Camera-method-capture\" class=\"docClass\">capture</a> function to take a photo:</p>\n\n<pre><code><a href=\"#!/api/Ext.device.Camera-method-capture\" rel=\"Ext.device.Camera-method-capture\" class=\"docClass\">Ext.device.Camera.capture</a>({\n    success: function(image) {\n        imageView.setSrc(image);\n    },\n    quality: 75,\n    width: 200,\n    height: 200,\n    destination: 'data'\n});\n</code></pre>\n\n<p>See the documentation for <a href=\"#!/api/Ext.device.Camera-method-capture\" rel=\"Ext.device.Camera-method-capture\" class=\"docClass\">capture</a> all available configurations.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments args</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-capture' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.camera.Abstract' rel='Ext.device.camera.Abstract' class='defined-in docClass'>Ext.device.camera.Abstract</a><br/><a href='source/Abstract6.html#Ext-device-camera-Abstract-method-capture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Abstract-method-capture' class='name expandable'>capture</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> options, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> destination, <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> encoding, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> width, <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> height</span> )</div><div class='description'><div class='short'>Allows you to capture a photo. ...</div><div class='long'><p>Allows you to capture a photo.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The options to use when taking a photo.</p>\n<ul><li><span class='pre'>success</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The success callback which is called when the photo has been taken.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>image</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The image which was just taken, either a base64 encoded string or a URI depending on which\noption you chose (destination).</p>\n</div></li></ul></div></li><li><span class='pre'>failure</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function which is called when something goes wrong.</p>\n</div></li><li><span class='pre'>quality</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The quality of the image which is returned in the callback. This should be a percentage.</p>\n</div></li><li><span class='pre'>source</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The source of where the image should be taken. Available options are:</p>\n\n<ul>\n<li><strong>album</strong> - prompts the user to choose an image from an album</li>\n<li><strong>camera</strong> - prompts the user to take a new photo</li>\n<li><strong>library</strong> - prompts the user to choose an image from the library</li>\n</ul>\n\n</div></li></ul></div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The scope in which to call the <code>success</code> and <code>failure</code> functions, if specified.</p>\n</div></li><li><span class='pre'>destination</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The destination of the image which is returned. Available options are:</p>\n\n<ul>\n<li><strong>data</strong> - returns a base64 encoded string</li>\n<li><strong>file</strong> - returns the file's URI</li>\n</ul>\n\n</div></li><li><span class='pre'>encoding</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoding of the returned image. Available options are:</p>\n\n<ul>\n<li><strong>jpg</strong></li>\n<li><strong>png</strong></li>\n</ul>\n\n</div></li><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The width of the image to return</p>\n</div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The height of the image to return</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.Component-method-destroy' rel='Ext.Component-method-destroy' class='docClass'>Ext.Component.destroy</a></p></div></div></div><div id='method-getConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getConfig' class='name expandable'>getConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCurrentConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getCurrentConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getCurrentConfig' class='name expandable'>getCurrentConfig</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'>[<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> name]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/Mixed</div><div class='description'><div class='short'>Returns the initial configuration passed to constructor. ...</div><div class='long'><p>Returns the initial configuration passed to constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>When supplied, value for particular configuration\noption is returned, otherwise the full config object is returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>/Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-hasConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-hasConfig' class='name expandable'>hasConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> name</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> instanceConfig</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-onConfigUpdate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-onConfigUpdate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-onConfigUpdate' class='name expandable'>onConfigUpdate</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> names, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> callback, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> scope</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>names</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-setConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-setConfig' class='name expandable'>setConfig</a>( <span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> config, <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> applyIfNotSet</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>applyIfNotSet</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"superclasses":["Ext.Base"],"tagname":"class","extends":"Ext.Base","alternateClassNames":[],"requires":["Ext.device.Communicator","Ext.device.camera.PhoneGap","Ext.device.camera.Sencha","Ext.device.camera.Simulator"],"inheritdoc":null,"members":{"event":[],"property":[{"meta":{"protected":true},"owner":"Ext.Base","tagname":"property","name":"self","id":"property-self"}],"css_var":[],"css_mixin":[],"method":[{"meta":{"protected":true},"owner":"Ext.Base","tagname":"method","name":"callOverridden","id":"method-callOverridden"},{"meta":{"protected":true},"owner":"Ext.Base","tagname":"method","name":"callParent","id":"method-callParent"},{"meta":{},"owner":"Ext.device.camera.Abstract","tagname":"method","name":"capture","id":"method-capture"},{"meta":{"private":true},"owner":"Ext.Base","tagname":"method","name":"destroy","id":"method-destroy"},{"meta":{"private":true},"owner":"Ext.Base","tagname":"method","name":"getConfig","id":"method-getConfig"},{"meta":{"private":true},"owner":"Ext.Base","tagname":"method","name":"getCurrentConfig","id":"method-getCurrentConfig"},{"meta":{},"owner":"Ext.Base","tagname":"method","name":"getInitialConfig","id":"method-getInitialConfig"},{"meta":{"private":true},"owner":"Ext.Base","tagname":"method","name":"hasConfig","id":"method-hasConfig"},{"meta":{"protected":true},"owner":"Ext.Base","tagname":"method","name":"initConfig","id":"method-initConfig"},{"meta":{"private":true},"owner":"Ext.Base","tagname":"method","name":"onConfigUpdate","id":"method-onConfigUpdate"},{"meta":{"private":true},"owner":"Ext.Base","tagname":"method","name":"setConfig","id":"method-setConfig"},{"meta":{"protected":true},"owner":"Ext.Base","tagname":"method","name":"statics","id":"method-statics"}],"cfg":[]},"files":[{"href":"Camera.html#Ext-device-Camera","filename":"Camera.js"}],"singleton":true,"statics":{"property":[],"event":[],"css_var":[],"css_mixin":[],"cfg":[],"method":[]},"subclasses":[],"name":"Ext.device.Camera","html_meta":{"aside":["            <div class='aside guide'>\n              <h4>Guide</h4>\n              <p><a href='#!/guide/native_apis'><img src='guides/native_apis/icon.png' alt=''> Using Native APIs</a></p>\n            </div>\n"]},"mixins":["Ext.device.camera.Abstract"],"code_type":"ext_define","inheritable":false,"id":"class-Ext.device.Camera","component":false,"uses":[]});