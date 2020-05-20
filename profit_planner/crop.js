function crop(cid, iBuy, iSell, sName, iRegrow, iHarvest) {
	
	var oTemp     = new Object();
	
	oTemp.type    = "crop"
	oTemp.id      = cid;
	oTemp.name    = sName;
	oTemp.buy     = iBuy;
	oTemp.sell    = iSell;
	oTemp.squares = 9;
	oTemp.bags		= 1;
	oTemp.regrow  = parseInt(iRegrow,10);
	oTemp.harvest = parseInt(iHarvest,10);
	
	oTemp.setSquares = crop_setSquares;
	oTemp.setBags    = crop_setBags;
	oTemp.getProfit  = crop_getProfit;
	oTemp.getGross   = crop_getGross;
	oTemp.setFlags   = crop_setFlags;
	return oTemp;
}

function crop_setSquares(iNum) {
	if (iNum < 0) {
		iNum = 0;
	}
	
	if (iNum > 9) {
		iNum = 9;
	}
	
	this.squares = iNum;
}

function crop_setBags(iNum) {
	if (iNum < 1) {
			iNum = 1;
	}
	
	this.bags = iNum;
}

function crop_setFlags(sFlags) {
	var iTot=0;
	var i;
	var iFl;
	
	for (i=0; i<sFlags.length; i++) {
		iFl = parseInt(sFlags.charAt(i),10);
		
		if (!isNaN(iFl)) {
			iTot += iFl;
		}
	}
	
	if (iTot >= 0 && iTot <=9) {
		this.squares = iTot;
	}
	
}

function crop_getProfit() {
	var iSellPrice = this.getGross()
	var iProfit 	 = iSellPrice - this.buy;
	
	return iProfit;
}

function crop_getGross() {
	var iSellPrice = this.bags * (this.squares * this.sell);
	
	return iSellPrice;
}

var arrCrops = new Array();

arrCrops[0]  = new crop(0, 120, 60, 'Turnip',0,5);
arrCrops[3]  = new crop(3, 150, 80, 'Potato',0,8);
arrCrops[6]  = new crop(6, 200, 60, 'Cucumber',5,10);
arrCrops[9]  = new crop(9, 500, 250, 'Cabbage',0,15);
arrCrops[12] = new crop(9, 150, 30, 'Strawberry',2,9);

arrCrops[1]  = new crop(1, 200, 60, 'Tomato',3,10);
arrCrops[4]  = new crop(4, 300, 100, 'Corn',3,15);
arrCrops[7]  = new crop(7, 150, 80, 'Onion',0,8);
arrCrops[10] = new crop(10, 1000,500, 'Pineapple',5,21);
arrCrops[13] = new crop(13, 500, 250, 'Pumpkin ',0,15);

arrCrops[2]  = new crop(2, 120, 80, 'Eggplant',3,10);
arrCrops[5]  = new crop(5, 300, 120, 'Carrot',0,8);
arrCrops[8]  = new crop(8, 300, 120, 'Sweet Potato',2,6);
arrCrops[11] = new crop(11, 150, 40, 'Green Pepper',2,8);
arrCrops[14] = new crop(14, 200, 80, 'Spinach',0,6);

var arrSeasonNames = new Array();
var arrSeasonCrops = new Array();
var arrVegImages   = new Array();
var arrSeedImages  = new Array();
var arrVegNames    = new Array();
var arrVendorNames = new Array();

arrSeasonCrops[0] = "cmbSpring";
arrSeasonCrops[1] = "cmbSummer";
arrSeasonCrops[2] = "cmbFall";

arrSeasonNames[0] = "Spring";
arrSeasonNames[1] = "Summer";
arrSeasonNames[2] = "Fall";

arrVegImages[0] = 'veg_turnip.png';
arrVegImages[3] = 'veg_potato.png';
arrVegImages[6] = 'veg_cucumber.png';
arrVegImages[9] = 'veg_cabbage.png';
arrVegImages[12] = 'veg_strawberry.png';

arrVegImages[1] = 'veg_tomato.png';
arrVegImages[4] = 'veg_corn.png';
arrVegImages[7] = 'veg_onion.png';
arrVegImages[10] = 'veg_pineapple.png';
arrVegImages[13] = 'veg_pumpkin.png';

arrVegImages[2] = 'veg_eggplant.png';
arrVegImages[5] = 'veg_carrot.png';
arrVegImages[8] = 'veg_spotato.png';
arrVegImages[11] = 'veg_gpepper.png';
arrVegImages[14] = 'veg_spinich.png';

arrSeedImages[0] = 'seed_turnip.png';
arrSeedImages[3] = 'seed_potato.png';
arrSeedImages[6] = 'seed_cucumber.png';
arrSeedImages[9] = 'seed_cabbage.gif';
arrSeedImages[12] = 'seed_strawberry.png';

arrSeedImages[1] = 'seed_tomato.png';
arrSeedImages[4] = 'seed_corn.png';
arrSeedImages[7] = 'seed_onion.png';
arrSeedImages[10] = 'seed_pineapple.gif';
arrSeedImages[13] = 'seed_pumpkin.png';

arrSeedImages[2] = 'seed_eggplant.png';
arrSeedImages[5] = 'seed_carrot.png';
arrSeedImages[8] = 'seed_swpotato.png';
arrSeedImages[11] = 'seed_bellpepper.gif';
arrSeedImages[14] = 'seed_spinich.png';

arrVegNames[0]  = 'Turnip';
arrVegNames[3]  = 'Potato';
arrVegNames[6]  = 'Cucumber';
arrVegNames[9]  = 'Cabbage';
arrVegNames[12] = 'Strawberry';

arrVegNames[1]  = 'Tomato';
arrVegNames[4]  = 'Corn';
arrVegNames[7]  = 'Onion';
arrVegNames[10] = 'Pineapple';
arrVegNames[13] = 'Pumpkin';

arrVegNames[2]  = 'Eggplant';
arrVegNames[5]  = 'Carrot';
arrVegNames[8]  = 'Sweet Potato';
arrVegNames[11] = 'Green Pepper';
arrVegNames[14] = 'Spinach';

arrVendorNames[0]  = 'Jeff';
arrVendorNames[3]  = 'Jeff';
arrVendorNames[6]  = 'Jeff';
arrVendorNames[9]  = 'Won';
arrVendorNames[12] = 'Jeff';

arrVendorNames[1]  	= 'Jeff';
arrVendorNames[4]  	= 'Jeff';
arrVendorNames[7]  	= 'Jeff';
arrVendorNames[10]  = 'Won';
arrVendorNames[13]  = 'Jeff';

arrVendorNames[2]  	= 'Jeff';
arrVendorNames[5]  	= 'Jeff';
arrVendorNames[8]  	= 'Jeff';
arrVendorNames[11]  = 'Won';
arrVendorNames[14]  = 'Jeff';