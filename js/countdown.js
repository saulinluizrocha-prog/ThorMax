function countdown() {
  seconds = 1;
  var e = Math.floor((date_for_sale - new Date().getTime()) / 1e3);
  e < 0 && (e = 0),
    (e =
      (e -= 3600 * (h = (h = Math.floor(e / 3600)) < 10 ? "0" + h : h)) -
      60 * (m = (m = Math.floor(e / 60)) < 10 ? "0" + m : m)),
    (s = Math.floor(e / seconds)) < 10 && (s = "0" + s),
    (document.getElementById("hours").innerHTML = h),
    (document.getElementById("min").innerHTML = m),
    (document.getElementById("sec").innerHTML = s),
    (0 < h || 0 < m || 0 < s || 0 < d) && setTimeout(countdown, 1e3);
}
document.addEventListener("DOMContentLoaded", function () {
  (date_for_sale = new Date().getTime()), (date_for_sale += 96e4), countdown();
});
 