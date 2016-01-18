var rank, lvl, vip;
var misc = document.querySelector(".misc");
var maxlvl = document.querySelector(".maxlvl");

var rank_3 = [2000, 3000, 4000, 5000, 6000, 
				7000, 8000, 9000, 10000];
var rank_4 = [10000, 14000, 18000, 22000, 26000, 
				30000, 34000, 38000, 42000, 46000, 
				50000, 54000, 58000, 62000]
var rank_5 = [20000, 27000, 34000, 41000, 48000, 
				55000, 62000, 69000, 76000, 83000, 
				90000, 97000, 104000, 111000, 118000,
				125000, 132000, 139000, 146000]
var rank_g = [25000, 37000, 49000, 61000, 73000,
				85000, 97000, 109000, 121000, 133000,
				145000, 157000, 169000, 181000, 193000,
				205000, 217000, 229000, 241000]
var rank_p = [30000, 48000, 66000, 84000, 102000,
				120000, 138000, 156000, 174000, 192000,
				210000, 228000, 246000, 264000, 282000,
				300000, 318000, 336000, 354000]
var rank_d = []

$("#ddrank").change(function() {
	rank = $(this).children(":selected").attr("value");
});


$(".button span").on("click", function() {
	lvl = $("#clvl").val();
	vip = $("#vlvl").val();

	if (between(lvl, 1, 20) && between(vip, 1, 9)) {
		switch (rank) {

			case "DIAMOND":
				misc.innerHTML = "Sorry!";
				maxlvl.innerHTML = "No DIAMOND data.";
				break;

			case "PLATINUM":
				misc.innerHTML = "Gold needed"
				maxlvl.innerHTML = calcRankPlatinum(lvl, vip);
				break;

			case "GOLD":
				misc.innerHTML = "Gold needed"
				maxlvl.innerHTML = calcRankGold(lvl, vip);
				break;

			case "5★":
				misc.innerHTML = "Gold needed"
				maxlvl.innerHTML = calcRank5(lvl, vip);
				break;

			case "4★":
				misc.innerHTML = "Gold needed"
				maxlvl.innerHTML = calcRank4(lvl, vip);
				break;

			case "3★":
				misc.innerHTML = "Gold needed"
				maxlvl.innerHTML = calcRank3(lvl, vip);
				break;

		    default:
		        misc.innerHTML = "Your rank?";
		}
	}
	else
	{
		misc.innerHTML = "Out of range.";
	}
});

function between(n, min, max) {
	return n >= min && n <= max;
}

/*function calcRankDiamond(l, v) {
	for (i = )
	return 
};*/

function calcRankPlatinum(l, v) {
	var sum = 0;
	var discount = 1 - ((v-3)*0.05);

	for (i = l; i <= rank_p.length; i++)
	{
		sum += rank_p[i-1]*discount;
	}

	return sum;
};

function calcRankGold(l, v) {
	var sum = 0;
	var discount = 1 - ((v-3)*0.05);

	for (i = l; i <= rank_g.length; i++)
	{
		sum += rank_g[i-1]*discount;
	}

	return sum;
};

function calcRank5(l, v) {
	var sum = 0;
	var discount = 1 - ((v-3)*0.05);

	for (i = l; i <= rank_5.length; i++)
	{
		sum += rank_5[i-1]*discount;
	}

	return sum;
};

function calcRank4(l, v) {
	var sum = 0;
	var discount = 1 - ((v-3)*0.05);

	for (i = l; i <= rank_4.length; i++)
	{
		sum += rank_4[i-1]*discount;
	}

	return sum;
};

function calcRank3(l, v) {
	var sum = 0;
	var discount = 1 - ((v-3)*0.05);

	for (i = l; i <= rank_3.length; i++)
	{
		sum += rank_3[i-1]*discount;
	}

	return sum;
};