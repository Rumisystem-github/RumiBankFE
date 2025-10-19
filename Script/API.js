async function get_amount() {
	let ajax = await fetch("/api/Amount", {
		method: "GET",
		headers: {
			TOKEN: session
		}
	});
	const result = await ajax.json();
	if (result.STATUS) {
		return {
			wallet: result.WALLET,
			bank: result.BANK
		};
	} else {
		throw new Error("APIエラー");
	}
}
async function get_transaction() {
	let ajax = await fetch("/api/Transaction", {
		method: "GET",
		headers: {
			TOKEN: session
		}
	});
	const result = await ajax.json();
	if (result.STATUS) {
		return result.LIST;
	} else {
		throw new Error("APIエラー");
	}
}