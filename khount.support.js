"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "khount",
              			"path": "khount/khount.js",
              			"file": "khount.js",
              			"module": "khount",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/khount.git",
              			"test": "khount-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Count all object's keys.
              
              		This will count all object's owned properties and symbol-keys.
              	@end-module-documentation
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var khount = function khount(entity) {
	/*;
                                      	@meta-configuration:
                                      		{
                                      			"entity:required": "object"
                                      		}
                                      	@end-meta-configuration
                                      */

	try {
		return (0, _getOwnPropertyNames2.default)(entity).length + (0, _getOwnPropertySymbols2.default)(entity).length;

	} catch (error) {
		return 0;
	}
};

module.exports = khount;

//# sourceMappingURL=khount.support.js.map