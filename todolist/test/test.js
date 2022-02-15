const puppeteer = require('puppeteer');
const localURL = 'http://localhost:3000';

const pngPath = (name) => {
	return {
		path: `test/screenShot/${name}.png`,
	};
};
const assert = (left, right, msg) => {
	msg = msg || 'error';
	const result = left === right;
	try {
		if (!result) {
			throw Error(msg);
		}
	} catch (e) {
		console.error(e);
		process.exit(1);
	}
};

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(localURL);
	await page.screenshot(pngPath('start'));
	// 試著輸入 a
	await (await page.$('#root > input')).press('KeyA');
	await (await page.$('#root > button')).click();
	await page.screenshot(pngPath('first'));
	// 輸入 一段文字
	await (await page.$('#root > input')).type('i am a tester');
	await (await page.$('#root > button')).click();
	await page.screenshot(pngPath('second'));
	// 輸入 一段文字
	await (await page.$('#root > input')).type('i am a tester2');
	await (await page.$('#root > button')).click();
	await page.screenshot(pngPath('final'));
	// 刪除第二排
	await (await page.$('#root > ul > li:nth-child(2)')).click();
	// 查看剩下資料是否正確
	let data = await page.$eval(
		'#root > ul > li:nth-child(2)',
		(element) => element.innerHTML
	);
	assert(data, 'i am a tester2');
	data = await page.$eval(
		'#root > ul > li:nth-child(1)',
		(element) => element.innerHTML
	);
	assert(data, 'a', '刪除錯誤 row');
	// 刪除剩餘兩項
	await (await page.$('#root > ul > li:nth-child(2)')).click();
	await (await page.$('#root > ul > li:nth-child(1)')).click();
	await browser.close();
	console.log('全部正確');
})();
