let mel = {
	info: {
		user: {
			icon: document.getElementById("INFO_USER_ICON"),
			name: document.getElementById("INFO_USER_NAME")
		},
		amount: {
			wallet: document.getElementById("INFO_AMOUNT_WALLET"),
			bank: document.getElementById("INFO_AMOUNT_BANK")
		}
	}
};

async function main() {
	const amount = await get_amount();

	//セット
	mel.info.user.icon.src = `https://account.rumiserver.com/api/Icon?UID=${self.UID}`;
	mel.info.user.icon.classList.add(`ICON_${self.ICON}`);
	mel.info.user.name.innerText = self.NAME;

	mel.info.amount.wallet.innerText = amount.wallet;
	mel.info.amount.bank.innerText = amount.bank;
}