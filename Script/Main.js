let dialog = new DIALOG_SYSTEM();
let session = null;
let self = null;

window.addEventListener("load", async (E) => {
	session = ReadCOOKIE().SESSION;

	if (session == null) {
		open_login_page();
		return;
	}

	self = await LOGIN(session);
	if (self === false) {
		open_login_page();
		return;
	}

	main();
});

function open_login_page() {
	window.location.href = "https://account.rumiserver.com/Login?rd=bank";
}