let mel = {
	list: document.getElementById("TRANSACTION_LIST")
};

async function main() {
	const transaction_list = await get_transaction();

	for (let i = 0; i < transaction_list.length; i++) {
		const t = transaction_list[i];

		let el = document.createElement("TR");
		mel.list.appendChild(el);

		/*let id_el = document.createElement("TD");
		id_el.innerText = t.ID;
		el.appendChild(id_el);*/

		let date_el = document.createElement("TD");
		date_el.innerText = t.DATE;
		el.appendChild(date_el);

		let desc_el = document.createElement("TD");
		desc_el.innerText = t.DESCRIPTION;
		el.appendChild(desc_el);

		let wallet_el = document.createElement("TD");
		el.appendChild(wallet_el);

		let bank_el = document.createElement("TD");
		el.appendChild(bank_el);

		if (t.DEPOSIT) {
			wallet_el.innerText = "+" + t.WALLET;
			bank_el.innerText = "+" + t.BANK;

			wallet_el.style.color = "#00FF00";
			bank_el.style.color = "#00FF00";
		} else {
			wallet_el.innerText = "-" + t.WALLET;
			bank_el.innerText = "-" + t.BANK;

			wallet_el.style.color = "#FF0000";
			bank_el.style.color = "#FF0000";
		}
	}
}