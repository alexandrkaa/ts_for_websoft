var Locales = {
  ru: "ru",
  en: "en",
};
function method(argument) {
  if (argument === void 0) {
    argument = "default string";
  }
  alert(argument);
}
method();
method(Locales.en);
var stringState = "interpolated";
alert("I insisted that substring be " + stringState);
var a = 1112;
var b = a + 1;
alert(b);
var str = "qqq";
alert(str);
var o = {
  a: 1,
  b: 2,
};
var fn = function (prop) {
  alert(prop);
};
fn(o.a);
var cl = function (data) {
  if (typeof data !== "number") {
    alert(data.TopElem.birth_date);
  }
};
cl(111);
