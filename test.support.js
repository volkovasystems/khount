"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "khount",
              			"path": "khount/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/khount.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"khount": "khount"
              		}
              	@end-include
              */

var assert = require("assert");



//: @client:
var khount = require("./khount.support.js");
//: @end-client





//: @client: 
describe("khount", function () {

	describe('"khount( { "name": "simple" } )"', function () {
		it("should have value 1", function () {

			assert.equal(khount({ "name": "simple" }), 1);

		});
	});

	describe("\"khount( [ 1, 2, 3 ] )\"", function () {
		it("should have value 4", function () {

			assert.equal(khount([1, 2, 3]), 4);

		});
	});

	describe("`khount( { } )`", function () {
		it("should have value 0", function () {

			assert.equal(khount({}), 0);

		});
	});

	describe("`khount( )`", function () {
		it("should have value 0", function () {

			assert.equal(khount(), 0);

		});
	});
});
//: @end-client









// const assert = require( "assert" );
// const khount = require( "./khount.js" );

// assert.equal( khount( { "name": "simple" } ), 1, "should have value 1" );

// assert.equal( khount( [ 1, 2, 3 ] ), 4, "should have value 4" );

// assert.equal( khount( { } ), 0, "should have value 0" );

// assert.equal( khount( ), 0, "should have value 0" );

// console.log( "ok" );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwia2hvdW50IiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7OztBQU1BO0FBQ0FFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSxrQ0FBVixFQUE4QyxZQUFPO0FBQ3BEQyxLQUFJLHFCQUFKLEVBQTJCLFlBQU87O0FBRWpDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsRUFBRSxRQUFRLFFBQVYsRUFBUixDQUFkLEVBQThDLENBQTlDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyx1Q0FBcUMsWUFBTztBQUM1Q0MsS0FBSSxxQkFBSixFQUEyQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxPQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQVIsQ0FBZCxFQUFxQyxDQUFyQzs7QUFFQSxHQUpGO0FBS0MsRUFORDs7QUFRQUMsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ3BDQyxLQUFJLHFCQUFKLEVBQTJCLFlBQU87O0FBRWhDSixVQUFPSyxLQUFQLENBQWNILE9BQVEsRUFBUixDQUFkLEVBQTZCLENBQTdCOztBQUVBLEdBSkY7QUFLQyxFQU5EOztBQVFBQyxVQUFVLGFBQVYsRUFBeUIsWUFBTztBQUNoQ0MsS0FBSSxxQkFBSixFQUEyQixZQUFPOztBQUVoQ0osVUFBT0ssS0FBUCxDQUFjSCxRQUFkLEVBQXlCLENBQXpCOztBQUVBLEdBSkY7QUFLQyxFQU5EO0FBT0EsQ0FqQ0Q7QUFrQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwiZmlsZSI6InRlc3Quc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJraG91bnRcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwia2hvdW50L3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9raG91bnQuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJraG91bnRcIjogXCJraG91bnRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJhc3NlcnRcIiApO1xyXG5cclxuXHJcblxyXG4vLzogQGNsaWVudDpcclxuY29uc3Qga2hvdW50ID0gcmVxdWlyZSggXCIuL2tob3VudC5zdXBwb3J0LmpzXCIgKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6IFxyXG5kZXNjcmliZSggXCJraG91bnRcIiwgKCApID0+IHtcclxuXHRcclxuXHRkZXNjcmliZSggJ1wia2hvdW50KCB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gKVwiJywgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlIDFcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCgga2hvdW50KCB7IFwibmFtZVwiOiBcInNpbXBsZVwiIH0gKSwgMSk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcImtob3VudCggWyAxLCAyLCAzIF0gKVwiYCwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSA0XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtob3VudCggWyAxLCAyLCAzIF0gKSwgNCApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblx0XHJcblx0ZGVzY3JpYmUoIFwiYGtob3VudCggeyB9IClgXCIsICggKSA9PiB7XHJcblx0aXQoIFwic2hvdWxkIGhhdmUgdmFsdWUgMFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBraG91bnQoIHsgfSApLCAwICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYGtob3VudCggKWBcIiwgKCApID0+IHtcclxuXHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSAwXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGtob3VudCggKSwgMCApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcbn0gKTtcclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwiYXNzZXJ0XCIgKTtcclxuLy8gY29uc3Qga2hvdW50ID0gcmVxdWlyZSggXCIuL2tob3VudC5qc1wiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGtob3VudCggeyBcIm5hbWVcIjogXCJzaW1wbGVcIiB9ICksIDEsIFwic2hvdWxkIGhhdmUgdmFsdWUgMVwiICk7XHJcblxyXG4vLyBhc3NlcnQuZXF1YWwoIGtob3VudCggWyAxLCAyLCAzIF0gKSwgNCwgXCJzaG91bGQgaGF2ZSB2YWx1ZSA0XCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCgga2hvdW50KCB7IH0gKSwgMCwgXCJzaG91bGQgaGF2ZSB2YWx1ZSAwXCIgKTtcclxuXHJcbi8vIGFzc2VydC5lcXVhbCgga2hvdW50KCApLCAwLCBcInNob3VsZCBoYXZlIHZhbHVlIDBcIiApO1xyXG5cclxuLy8gY29uc29sZS5sb2coIFwib2tcIiApO1xyXG4iXX0=
//# sourceMappingURL=test.support.js.map
