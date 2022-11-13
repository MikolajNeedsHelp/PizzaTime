(function () {
	if (window.matchMedia("(max-width: 992px)").matches) {
		return;
	}
	var headerPage = document.querySelector("#header-page");

	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 0) {
			headerPage.classList.remove("is-active");
		}
	});
})();

console.log(2);
