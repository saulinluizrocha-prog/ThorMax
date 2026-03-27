document.getElementById("muteButton")?.addEventListener("click", function () {
  var t = document.querySelector("video");
  t.muted
    ? ((t.muted = !1),
      (this.innerHTML = "BISU"),
      this.classList.remove("muted"),
      this.classList.add("unmuted"))
    : ((t.muted = !0),
      (this.innerHTML = "TIDAK BISU"),
      this.classList.remove("unmuted"),
      this.classList.add("muted"));
});
 