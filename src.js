var used_names = ["e"]

document.getElementById("gen-button").addEventListener("click", function(){
    
	ft = document.getElementById('ft');
	ft.textContent = gen_name();

}, false);

function gen_name() {
	n = 4+Math.floor(Math.random()*6.0)
	nm = 'e'
	while (used_names.includes(nm)) {
		
		nm = gen_start();

		while (nm.length < n) {
			nm += gen_next(nm);
		}
	}
	used_names.push(nm);
	return nm;
}

function gen_start() {
    r = Math.random();

    if (r < 0.05602754240234044) {
        return "Un";
    } else if (r < 0.08651773820813091) {
        return "Co";
    } else if (r < 0.11515861075499666) {
        return "Re";
    } else if (r < 0.1408516898365087) {
        return "Pr";
    } else if (r < 0.16507365312257538) {
        return "No";
    } else if (r < 0.1875714353251333) {
        return "In";
    } else if (r < 0.20667091223084005) {
        return "Su";
    } else if (r < 0.22466079518119197) {
        return "De";
    } else if (r < 0.24260618313584045) {
        return "Ca";
    } else if (r < 0.2598146227241505) {
        return "Di";
    } else if (r < 0.2758578496124764) {
        return "Pa";
    } else if (r < 0.2900906863631181) {
        return "An";
    } else if (r < 0.3041288575075572) {
        return "Ma";
    } else if (r < 0.31793621086178464) {
        return "Ch";
    } else if (r < 0.3315238701747263) {
        return "St";
    } else if (r < 0.34474444577311447) {
        return "Tr";
    } else if (r < 0.357489481104922) {
        return "Se";
    } else if (r < 0.3696143674341127) {
        return "Pe";
    } else if (r < 0.38167529220697965) {
        return "Mi";
    } else if (r < 0.3932745813994233) {
        return "Po";
    } else if (r < 0.4044873203166932) {
        return "Ov";
    } else if (r < 0.4154386511342053) {
        return "Me";
    } else if (r < 0.42627596352522734) {
        return "Ba";
    } else if (r < 0.436615488151817) {
        return "Be";
    } else if (r < 0.4465350912564553) {
        return "Mo";
    } else if (r < 0.4563990756164643) {
        return "He";
    } else if (r < 0.4659599378182436) {
        return "Sp";
    } else if (r < 0.47512868787038615) {
        return "Sa";
    } else if (r < 0.48375793609962436) {
        return "Sc";
    } else if (r < 0.49212021435464187) {
        return "Te";
    } else if (r < 0.5004018454299469) {
        return "Ph";
    } else if (r < 0.5085666771415304) {
        return "En";
    } else if (r < 0.516595242928772) {
        return "La";
    } else if (r < 0.5245209140384494) {
        return "Ha";
    } else if (r < 0.5323937473407289) {
        return "Hy";
    } else if (r < 0.5399384300496954) {
        return "Th";
    } else if (r < 0.5472856662152279) {
        return "Ta";
    } else if (r < 0.5544382367745578) {
        return "Ho";
    } else if (r < 0.5615824645221933) {
        return "Br";
    } else if (r < 0.568662730713505) {
        return "Ar";
    } else if (r < 0.5756039500432435) {
        return "Al";
    } else if (r < 0.5825423884357506) {
        return "Ex";
    } else if (r < 0.58944745558148) {
        return "Fo";
    } else if (r < 0.5962663136730341) {
        return "Sh";
    } else if (r < 0.6029461249030148) {
        return "Bo";
    } else if (r < 0.6093172521003029) {
        return "Li";
    } else if (r < 0.6155882655572581) {
        return "Ga";
    } else if (r < 0.6216840799686311) {
        return "Pl";
    } else if (r < 0.6277604278193837) {
        return "Ac";
    } else if (r < 0.633822870983979) {
        return "So";
    } else if (r < 0.6398825332113429) {
        return "Gr";
    } else if (r < 0.6457920248282076) {
        return "Bi";
    } else if (r < 0.651693173633378) {
        return "To";
    } else if (r < 0.6575665130662336) {
        return "Pi";
    } else if (r < 0.6633647671938396) {
        return "Si";
    } else if (r < 0.6688626801004475) {
        return "Fl";
    } else if (r < 0.6743327836347406) {
        return "Ou";
    } else if (r < 0.6797055543659324) {
        return "Ne";
    } else if (r < 0.6850393919758837) {
        return "Bu";
    } else if (r < 0.6903064870922798) {
        return "Do";
    } else if (r < 0.6955624584597501) {
        return "Mu";
    } else if (r < 0.7007767157687483) {
        return "Le";
    } else if (r < 0.7057740599736922) {
        return "Wa";
    } else if (r < 0.7107519376180159) {
        return "Cl";
    } else if (r < 0.7156046730869237) {
        return "Im";
    } else if (r < 0.720443503869674) {
        return "Qu";
    } else if (r < 0.7252656490290357) {
        return "Am";
    } else if (r < 0.7300099279459162) {
        return "Fi";
    } else if (r < 0.734737521239408) {
        return "Fa";
    } else if (r < 0.7393232867340951) {
        return "Lo";
    } else if (r < 0.743831185986301) {
        return "Ve";
    } else if (r < 0.7483363043012755) {
        return "Vi";
    } else if (r < 0.7527885848088521) {
        return "Ro";
    } else if (r < 0.7571741228228737) {
        return "Fr";
    } else if (r < 0.7614567661593309) {
        return "Ap";
    } else if (r < 0.7657255048096309) {
        return "As";
    } else if (r < 0.7699302819036071) {
        return "Ce";
    } else if (r < 0.7741072496252687) {
        return "Bl";
    } else if (r < 0.7782703126607728) {
        return "Cu";
    } else if (r < 0.7823082335208611) {
        return "Da";
    } else if (r < 0.786332249694792) {
        return "Ge";
    } else if (r < 0.7901032005806595) {
        return "Ad";
    } else if (r < 0.793843561156981) {
        return "Au";
    } else if (r < 0.7975783598588395) {
        return "Ps";
    } else if (r < 0.8012992538745407) {
        return "Fe";
    } else if (r < 0.8049784338317699) {
        return "Or";
    } else if (r < 0.8086353662911474) {
        return "Tu";
    } else if (r < 0.812275613127136) {
        return "Wi";
    } else if (r < 0.8158769268418842) {
        return "Ti";
    } else if (r < 0.8194420883726232) {
        return "Go";
    } else if (r < 0.8230044689661309) {
        return "Gl";
    } else if (r < 0.8265529448734812) {
        return "Va";
    } else if (r < 0.8300902970319056) {
        return "Sy";
    } else if (r < 0.8335191926383029) {
        return "El";
    } else if (r < 0.8368590982532932) {
        return "Dr";
    } else if (r < 0.8401350423119598) {
        return "Ab";
    } else if (r < 0.843408205433395) {
        return "Na";
    } else if (r < 0.8466396544963583) {
        return "Ep";
    } else if (r < 0.8497987991913033) {
        return "Ci";
    } else if (r < 0.852949601074554) {
        return "Sl";
    } else if (r < 0.8560169748408607) {
        return "Em";
    } else if (r < 0.8590704439210101) {
        return "Wh";
    } else if (r < 0.8620126755119009) {
        return "Gu";
    } else if (r < 0.8649354405421713) {
        return "Hi";
    } else if (r < 0.867847081823516) {
        return "Cy";
    } else if (r < 0.8707531612303977) {
        return "Fu";
    } else if (r < 0.8736203075160389) {
        return "Ri";
    } else if (r < 0.8763650925634956) {
        return "Wo";
    } else if (r < 0.8790709444897118) {
        return "Du";
    } else if (r < 0.8815710070607995) {
        return "Is";
    } else if (r < 0.8840682886946557) {
        return "My";
    } else if (r < 0.886560008454049) {
        return "Ja";
    } else if (r < 0.889037823527285) {
        return "Ru";
    } else if (r < 0.8915100767260581) {
        return "Ni";
    } else if (r < 0.893957301489748) {
        return "We";
    } else if (r < 0.8963433456343456) {
        return "Ki";
    } else if (r < 0.8987238279044802) {
        return "Lu";
    } else if (r < 0.9010625961161429) {
        return "At";
    } else if (r < 0.9033568693321021) {
        return "Ka";
    } else if (r < 0.9056177713012837) {
        return "Sw";
    } else if (r < 0.9078536448353822) {
        return "Ag";
    } else if (r < 0.9100478043110087) {
        return "Up";
    } else if (r < 0.9122197162887835) {
        return "Sn";
    } else if (r < 0.9142915145262255) {
        return "Op";
    } else if (r < 0.9163215987051955) {
        return "Ke";
    } else if (r < 0.9183294353863137) {
        return "Py";
    } else if (r < 0.9203344911302005) {
        return "Sk";
    } else if (r < 0.9223312040623929) {
        return "Gi";
    } else if (r < 0.9242917648105763) {
        return "Es";
    } else if (r < 0.9262217352492135) {
        return "Ur";
    } else if (r < 0.9281405819389248) {
        return "Rh";
    } else if (r < 0.930034400193553) {
        return "Ob";
    } else if (r < 0.9319143137620238) {
        return "Eu";
    } else if (r < 0.93376641795818) {
        return "Ju";
    } else if (r < 0.935599055593716) {
        return "Ir";
    } else if (r < 0.9373566079240024) {
        return "Vo";
    } else if (r < 0.9390863508819741) {
        return "Er";
    } else if (r < 0.9407660369697795) {
        return "Nu";
    } else if (r < 0.9423706377523352) {
        return "Os";
    } else if (r < 0.9439502100998077) {
        return "Ec";
    } else if (r < 0.9454880683888083) {
        return "Oc";
    } else if (r < 0.9470231457405773) {
        return "Af";
    } else if (r < 0.9484942615360227) {
        return "Sq";
    } else if (r < 0.9499431298336163) {
        return "Sm";
    } else if (r < 0.9513725315705897) {
        return "Ae";
    } else if (r < 0.9526573245715269) {
        return "Et";
    } else if (r < 0.9539393366352326) {
        return "Zo";
    } else if (r < 0.9551685108915404) {
        return "Je";
    } else if (r < 0.9563531901521448) {
        return "Ev";
    } else if (r < 0.9574933744170457) {
        return "Id";
    } else if (r < 0.9586307777447153) {
        return "Ul";
    } else if (r < 0.959757057323459) {
        return "Ty";
    } else if (r < 0.9608555275298879) {
        return "Ya";
    } else if (r < 0.9619456549246225) {
        return "Gy";
    } else if (r < 0.9630274395076627) {
        return "Ox";
    } else if (r < 0.9640869765928511) {
        return "Kn";
    } else if (r < 0.9651326089918822) {
        return "Ly";
    } else if (r < 0.9661754604536819) {
        return "Tw";
    } else if (r < 0.9671905025431669) {
        return "Ol";
    } else if (r < 0.9681860780720316) {
        return "Il";
    } else if (r < 0.9691788726636649) {
        return "Av";
    } else if (r < 0.9701549816319094) {
        return "Ai";
    } else if (r < 0.9711088431023022) {
        return "Dy";
    } else if (r < 0.9720126477025285) {
        return "On";
    } else if (r < 0.9729108904282919) {
        return "Ic";
    } else if (r < 0.9737980094051295) {
        return "Ea";
    } else if (r < 0.9746656618213468) {
        return "Eq";
    } else if (r < 0.975466571744009) {
        return "Om";
    } else if (r < 0.9762563579177452) {
        return "Ye";
    } else if (r < 0.9769710587862319) {
        return "Ji";
    } else if (r < 0.9776746359057927) {
        return "Yo";
    } else if (r < 0.9783587464647333) {
        return "Zi";
    } else if (r < 0.9790345142119795) {
        return "Ed";
    } else if (r < 0.9796769107124481) {
        return "Od";
    } else if (r < 0.9803165262756852) {
        return "Pt";
    } else if (r < 0.980942237152765) {
        return "Ze";
    } else if (r < 0.9815651670926133) {
        return "Ot";
    } else if (r < 0.9821769732835358) {
        return "Za";
    } else if (r < 0.9827526272904492) {
        return "Ef";
    } else if (r < 0.9833060337995109) {
        return "Az";
    } else if (r < 0.9838288499990264) {
        return "Oo";
    } else if (r < 0.9843321996379217) {
        return "Of";
    } else if (r < 0.9848327683395856) {
        return "Um";
    } else if (r < 0.985324994229555) {
        return "Ku";
    } else if (r < 0.9858116582450615) {
        return "Pn";
    } else if (r < 0.986292760386105) {
        return "It";
    } else if (r < 0.9867710815899171) {
        return "Eg";
    } else if (r < 0.9872160315469516) {
        return "Io";
    } else if (r < 0.9876582005667547) {
        return "Ut";
    } else if (r < 0.9880975886493263) {
        return "Kr";
    } else if (r < 0.9885314148574349) {
        return "Aw";
    } else if (r < 0.9889624601283121) {
        return "Gn";
    } else if (r < 0.989374038838569) {
        return "Ey";
    } else if (r < 0.9897828366115945) {
        return "By";
    } else if (r < 0.9901888534473885) {
        return "Ax";
    } else if (r < 0.9905865274714881) {
        return "Kh";
    } else if (r < 0.9909758586838934) {
        return "Gh";
    } else if (r < 0.9913540661473728) {
        return "Vu";
    } else if (r < 0.9917294926736206) {
        return "Aq";
    } else if (r < 0.9920659860786281) {
        return "Xy";
    } else if (r < 0.992399698546404) {
        return "Oe";
    } else if (r < 0.9927306300769484) {
        return "Xa";
    } else if (r < 0.9930476569213355) {
        return "Ny";
    } else if (r < 0.9933619028284911) {
        return "Ig";
    } else if (r < 0.9936705868611838) {
        return "Ak";
    } else if (r < 0.9939681471449506) {
        return "Ei";
    } else if (r < 0.994262926491486) {
        return "Kl";
    } else if (r < 0.9945271155284752) {
        return "Oa";
    } else if (r < 0.9947801808165385) {
        return "Yu";
    } else if (r < 0.995022122355676) {
        return "Ky";
    } else if (r < 0.9952501592086562) {
        return "Eb";
    } else if (r < 0.9954670723127106) {
        return "Dh";
    } else if (r < 0.995678423542302) {
        return "Ts";
    } else if (r < 0.9958675272740416) {
        return "Ow";
    } else if (r < 0.9960538500685499) {
        return "Bh";
    } else if (r < 0.9962373919258266) {
        return "Wu";
    } else if (r < 0.9964181528458719) {
        return "Ah";
    } else if (r < 0.9965961328286856) {
        return "Eo";
    } else if (r < 0.9967602081253422) {
        return "Ia";
    } else if (r < 0.9969159406103042) {
        return "Yi";
    } else if (r < 0.9970688921580348) {
        return "Og";
    } else if (r < 0.9972107199568396) {
        return "Oz";
    } else if (r < 0.9973497668184129) {
        return "Ao";
    } else if (r < 0.9974860327427547) {
        return "Ok";
    } else if (r < 0.9976195177298651) {
        return "Ay";
    } else if (r < 0.997744659905281) {
        return "Dw";
    } else if (r < 0.9978670211434656) {
        return "Ct";
    } else if (r < 0.9979866014444186) {
        return "Uv";
    } else if (r < 0.9981034008081402) {
        return "Ej";
    } else if (r < 0.9982146382973989) {
        return "Ib";
    } else if (r < 0.9983203139121946) {
        return "Oy";
    } else if (r < 0.9984232085897587) {
        return "Tz";
    } else if (r < 0.9985233223300916) {
        return "Cz";
    } else if (r < 0.9986206551331929) {
        return "Ry";
    } else if (r < 0.9987124260618312) {
        return "Mn";
    } else if (r < 0.9988014160532381) {
        return "Ip";
    } else if (r < 0.9988876251074136) {
        return "Ek";
    } else if (r < 0.9989710532243575) {
        return "Cn";
    } else if (r < 0.99905170040407) {
        return "Sv";
    } else if (r < 0.9991295666465511) {
        return "Aa";
    } else if (r < 0.9992046519518006) {
        return "Dj";
    } else if (r < 0.9992769563198187) {
        return "Tc";
    } else if (r < 0.9993464797506053) {
        return "Aj";
    } else if (r < 0.999410441306929) {
        return "Bd";
    } else if (r < 0.9994688409887899) {
        return "Vr";
    } else if (r < 0.9995244597334192) {
        return "Kw";
    } else if (r < 0.9995745166035855) {
        return "Iz";
    } else if (r < 0.9996217925365205) {
        return "Ix";
    } else if (r < 0.999666287532224) {
        return "Ew";
    } else if (r < 0.999708001590696) {
        return "Gw";
    } else if (r < 0.9997469347119364) {
        return "Fy";
    } else if (r < 0.9997830868959455) {
        return "Cs";
    } else if (r < 0.9998164581427231) {
        return "Pp";
    } else if (r < 0.9998470484522692) {
        return "Cp";
    } else if (r < 0.9998748578245839) {
        return "Bk";
    } else if (r < 0.9998998862596671) {
        return "Ds";
    } else if (r < 0.9999221337575188) {
        return "Dc";
    } else if (r < 0.9999416003181391) {
        return "Dz";
    } else if (r < 0.9999582859415278) {
        return "Cf";
    } else if (r < 0.9999721906276852) {
        return "Bt";
    } else if (r < 0.999983314376611) {
        return "Bb";
    } else if (r < 0.9999916571883054) {
        return "Cg";
    } else if (r < 0.9999972190627683) {
        return "Bn";
    } else {
        return "Un";
    }
}

function gen_next(str) {

	str = str.toLowerCase();

	if (str[str.length-2] == "a" && str[str.length-1] == "a") {
		r = Math.random();

		if (r < 0.22821576763485477) {
			return "l";
		} else if (r < 0.3900414937759336) {
			return "r";
		} else if (r < 0.5020746887966805) {
			return "n";
		} else if (r < 0.6099585062240664) {
			return "m";
		} else if (r < 0.6970954356846474) {
			return "s";
		} else if (r < 0.7551867219917013) {
			return "t";
		} else if (r < 0.8049792531120333) {
			return "d";
		} else if (r < 0.8381742738589213) {
			return "g";
		} else if (r < 0.8672199170124483) {
			return "p";
		} else if (r < 0.8921161825726143) {
			return "h";
		} else if (r < 0.9170124481327803) {
			return "b";
		} else if (r < 0.9377593360995853) {
			return "i";
		} else if (r < 0.9543568464730293) {
			return "k";
		} else if (r < 0.9709543568464734) {
			return "f";
		} else if (r < 0.9792531120331953) {
			return "c";
		} else if (r < 0.9834024896265563) {
			return "a";
		} else if (r < 0.9875518672199173) {
			return "e";
		} else if (r < 0.9917012448132783) {
			return "z";
		} else if (r < 0.9958506224066392) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "b") {
		if (r < 0.5341212352268395) {
			return "l";
		} else if (r < 0.6911170415554708) {
			return "i";
		} else if (r < 0.7511246664125047) {
			return "o";
		} else if (r < 0.7997712542889821) {
			return "a";
		} else if (r < 0.8437666793747618) {
			return "b";
		} else if (r < 0.8828821959588259) {
			return "e";
		} else if (r < 0.9126191383911553) {
			return "s";
		} else if (r < 0.9393061380099125) {
			return "r";
		} else if (r < 0.9655356462066338) {
			return "u";
		} else if (r < 0.9766679374761725) {
			return "d";
		} else if (r < 0.984750285932139) {
			return "y";
		} else if (r < 0.9893252001524974) {
			return "n";
		} else if (r < 0.9924513915364089) {
			return "j";
		} else if (r < 0.9948150972169274) {
			return "h";
		} else if (r < 0.9958063286313383) {
			return "t";
		} else if (r < 0.99672131147541) {
			return "m";
		} else if (r < 0.9974837971788031) {
			return "w";
		} else if (r < 0.9981700343118568) {
			return "c";
		} else if (r < 0.9988562714449105) {
			return "k";
		} else if (r < 0.9993900114372857) {
			return "f";
		} else if (r < 0.9996187571483036) {
			return "v";
		} else if (r < 0.9997712542889823) {
			return "p";
		} else if (r < 0.999923751429661) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "c") {
		if (r < 0.18444620791293503) {
			return "e";
		} else if (r < 0.3383403242262782) {
			return "t";
		} else if (r < 0.4784038090919397) {
			return "h";
		} else if (r < 0.5952839814080036) {
			return "k";
		} else if (r < 0.6852397687337037) {
			return "i";
		} else if (r < 0.7548463892982655) {
			return "c";
		} else if (r < 0.8170275478970639) {
			return "o";
		} else if (r < 0.8728602199297133) {
			return "r";
		} else if (r < 0.920927332501984) {
			return "a";
		} else if (r < 0.953633374900805) {
			return "u";
		} else if (r < 0.971488493368099) {
			return "y";
		} else if (r < 0.9829951252692439) {
			return "l";
		} else if (r < 0.9922911234553906) {
			return "q";
		} else if (r < 0.9967123908853872) {
			return "s";
		} else if (r < 0.9981294637796169) {
			return "m";
		} else if (r < 0.9992631220950006) {
			return "n";
		} else if (r < 0.9995465366738465) {
			return "b";
		} else if (r < 0.999659902505385) {
			return "p";
		} else if (r < 0.9997732683369234) {
			return "w";
		} else if (r < 0.9998866341684618) {
			return "f";
		} else if (r < 0.999943317084231) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "d") {
		if (r < 0.2015459160129211) {
			return "e";
		} else if (r < 0.40263036455929857) {
			return "i";
		} else if (r < 0.4898477157360406) {
			return "o";
		} else if (r < 0.5708352561144439) {
			return "a";
		} else if (r < 0.6412090447623442) {
			return "d";
		} else if (r < 0.7059298569450854) {
			return "r";
		} else if (r < 0.7514997692662667) {
			return "s";
		} else if (r < 0.7926857406552837) {
			return "v";
		} else if (r < 0.8298338717120443) {
			return "m";
		} else if (r < 0.8585602215043839) {
			return "u";
		} else if (r < 0.8869404706968159) {
			return "j";
		} else if (r < 0.9093216428241809) {
			return "y";
		} else if (r < 0.93158744808491) {
			return "l";
		} else if (r < 0.9471619750807568) {
			return "h";
		} else if (r < 0.9561605906783572) {
			return "w";
		} else if (r < 0.9636594370096909) {
			return "n";
		} else if (r < 0.9708121827411168) {
			return "f";
		} else if (r < 0.9778495616059069) {
			return "g";
		} else if (r < 0.9839640055376097) {
			return "b";
		} else if (r < 0.9892708814028611) {
			return "c";
		} else if (r < 0.9936548223350254) {
			return "p";
		} else if (r < 0.9973465620673743) {
			return "t";
		} else if (r < 0.9986155976003692) {
			return "z";
		} else if (r < 0.9994231656668205) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "e") {
		if (r < 0.15905848787446505) {
			return "r";
		} else if (r < 0.2913694721825963) {
			return "m";
		} else if (r < 0.41761768901569185) {
			return "o";
		} else if (r < 0.5064194008559201) {
			return "n";
		} else if (r < 0.5952211126961483) {
			return "s";
		} else if (r < 0.6815263908701854) {
			return "a";
		} else if (r < 0.7510699001426533) {
			return "d";
		} else if (r < 0.8202567760342367) {
			return "t";
		} else if (r < 0.8637660485021398) {
			return "c";
		} else if (r < 0.8997860199714693) {
			return "l";
		} else if (r < 0.9204707560627675) {
			return "i";
		} else if (r < 0.9393723252496434) {
			return "g";
		} else if (r < 0.953994293865906) {
			return "v";
		} else if (r < 0.9682596291012839) {
			return "u";
		} else if (r < 0.9761055634807418) {
			return "f";
		} else if (r < 0.9839514978601998) {
			return "p";
		} else if (r < 0.9882310984308131) {
			return "e";
		} else if (r < 0.9921540656205421) {
			return "q";
		} else if (r < 0.9946504992867332) {
			return "b";
		} else if (r < 0.9964336661911555) {
			return "w";
		} else if (r < 0.9975035663338089) {
			return "h";
		} else if (r < 0.9985734664764623) {
			return "x";
		} else if (r < 0.9992867332382311) {
			return "y";
		} else if (r < 0.9996433666191156) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "f") {
		if (r < 0.4147420147420147) {
			return "f";
		} else if (r < 0.7046683046683047) {
			return "t";
		} else if (r < 0.7852579852579853) {
			return "e";
		} else if (r < 0.8348894348894349) {
			return "i";
		} else if (r < 0.8707616707616708) {
			return "r";
		} else if (r < 0.9007371007371008) {
			return "a";
		} else if (r < 0.9302211302211303) {
			return "o";
		} else if (r < 0.9577395577395578) {
			return "l";
		} else if (r < 0.9685503685503686) {
			return "u";
		} else if (r < 0.975921375921376) {
			return "s";
		} else if (r < 0.9808353808353809) {
			return "n";
		} else if (r < 0.9852579852579854) {
			return "g";
		} else if (r < 0.9886977886977888) {
			return "d";
		} else if (r < 0.9916461916461917) {
			return "w";
		} else if (r < 0.9941031941031941) {
			return "y";
		} else if (r < 0.9955773955773957) {
			return "b";
		} else if (r < 0.9970515970515972) {
			return "h";
		} else if (r < 0.9980343980343982) {
			return "m";
		} else if (r < 0.9990171990171992) {
			return "k";
		} else if (r < 0.9995085995085997) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "g") {
		if (r < 0.2967479674796748) {
			return "e";
		} else if (r < 0.4336441893830703) {
			return "i";
		} else if (r < 0.5375418460066954) {
			return "o";
		} else if (r < 0.6322333811573411) {
			return "g";
		} else if (r < 0.7175992348158776) {
			return "a";
		} else if (r < 0.7881396461023434) {
			return "r";
		} else if (r < 0.8543758967001436) {
			return "n";
		} else if (r < 0.8992109038737447) {
			return "u";
		} else if (r < 0.923840267814443) {
			return "l";
		} else if (r < 0.9466762314681971) {
			return "m";
		} else if (r < 0.9599473935915831) {
			return "s";
		} else if (r < 0.9728598756575803) {
			return "y";
		} else if (r < 0.9831420373027261) {
			return "h";
		} else if (r < 0.9875657580105214) {
			return "b";
		} else if (r < 0.9913916786226686) {
			return "w";
		} else if (r < 0.9939024390243903) {
			return "d";
		} else if (r < 0.9961740793878529) {
			return "p";
		} else if (r < 0.9982065997130561) {
			return "t";
		} else if (r < 0.9994021999043522) {
			return "f";
		} else if (r < 0.9996413199426114) {
			return "k";
		} else if (r < 0.9998804399808706) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "h") {
		if (r < 0.19136408243375858) {
			return "e";
		} else if (r < 0.3748773307163886) {
			return "a";
		} else if (r < 0.49754661432777236) {
			return "s";
		} else if (r < 0.6015701668302258) {
			return "o";
		} else if (r < 0.6957801766437685) {
			return "i";
		} else if (r < 0.7713444553483808) {
			return "u";
		} else if (r < 0.8243375858684986) {
			return "m";
		} else if (r < 0.8734052993130521) {
			return "y";
		} else if (r < 0.9077526987242396) {
			return "l";
		} else if (r < 0.9244357212953878) {
			return "r";
		} else if (r < 0.9381746810598627) {
			return "d";
		} else if (r < 0.9499509322865555) {
			return "n";
		} else if (r < 0.9587831207065751) {
			return "t";
		} else if (r < 0.9656526005888126) {
			return "w";
		} else if (r < 0.9725220804710502) {
			return "g";
		} else if (r < 0.9784102060843965) {
			return "v";
		} else if (r < 0.984298331697743) {
			return "z";
		} else if (r < 0.9882237487733072) {
			return "j";
		} else if (r < 0.9911678115799805) {
			return "c";
		} else if (r < 0.9931305201177626) {
			return "k";
		} else if (r < 0.9950932286555447) {
			return "b";
		} else if (r < 0.9970559371933269) {
			return "h";
		} else if (r < 0.999018645731109) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "i") {
		if (r < 0.3208547808454219) {
			return "n";
		} else if (r < 0.5099048510372797) {
			return "l";
		} else if (r < 0.6460770550616128) {
			return "r";
		} else if (r < 0.7243799719232569) {
			return "s";
		} else if (r < 0.7905163001091873) {
			return "t";
		} else if (r < 0.8398065824364374) {
			return "d";
		} else if (r < 0.8731867103416003) {
			return "m";
		} else if (r < 0.9057869287162689) {
			return "c";
		} else if (r < 0.931679925128685) {
			return "g";
		} else if (r < 0.9441584776165964) {
			return "k";
		} else if (r < 0.9541413196069256) {
			return "a";
		} else if (r < 0.962252378724068) {
			return "v";
		} else if (r < 0.9698954921229137) {
			return "o";
		} else if (r < 0.9769146778973639) {
			return "z";
		} else if (r < 0.9809702074559351) {
			return "e";
		} else if (r < 0.9848697551084075) {
			return "p";
		} else if (r < 0.9883013570425832) {
			return "b";
		} else if (r < 0.9907970675401654) {
			return "i";
		} else if (r < 0.9929808142255498) {
			return "f";
		} else if (r < 0.9948525970987365) {
			return "w";
		} else if (r < 0.9962564342536265) {
			return "y";
		} else if (r < 0.9971923256902199) {
			return "h";
		} else if (r < 0.9981282171268132) {
			return "q";
		} else if (r < 0.9989081266573077) {
			return "u";
		} else if (r < 0.9996880361878021) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "j") {
		if (r < 0.29180327868852457) {
			return "o";
		} else if (r < 0.5344262295081967) {
			return "a";
		} else if (r < 0.7114754098360656) {
			return "e";
		} else if (r < 0.8327868852459017) {
			return "i";
		} else if (r < 0.9311475409836066) {
			return "u";
		} else if (r < 0.9508196721311476) {
			return "r";
		} else if (r < 0.9639344262295082) {
			return "j";
		} else if (r < 0.9770491803278688) {
			return "n";
		} else if (r < 0.9836065573770492) {
			return "p";
		} else if (r < 0.9868852459016393) {
			return "h";
		} else if (r < 0.9901639344262294) {
			return "m";
		} else if (r < 0.9934426229508195) {
			return "l";
		} else if (r < 0.9967213114754097) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "k") {
		if (r < 0.46223021582733814) {
			return "e";
		} else if (r < 0.7143884892086332) {
			return "i";
		} else if (r < 0.8039568345323742) {
			return "a";
		} else if (r < 0.8366906474820145) {
			return "o";
		} else if (r < 0.869064748201439) {
			return "s";
		} else if (r < 0.889928057553957) {
			return "u";
		} else if (r < 0.9089928057553959) {
			return "h";
		} else if (r < 0.9237410071942448) {
			return "y";
		} else if (r < 0.9370503597122304) {
			return "l";
		} else if (r < 0.9496402877697844) {
			return "t";
		} else if (r < 0.9615107913669066) {
			return "r";
		} else if (r < 0.9708633093525182) {
			return "k";
		} else if (r < 0.9776978417266189) {
			return "f";
		} else if (r < 0.9830935251798563) {
			return "w";
		} else if (r < 0.9874100719424462) {
			return "m";
		} else if (r < 0.9902877697841729) {
			return "n";
		} else if (r < 0.9931654676258995) {
			return "b";
		} else if (r < 0.9953237410071945) {
			return "p";
		} else if (r < 0.9971223021582736) {
			return "d";
		} else if (r < 0.9982014388489211) {
			return "c";
		} else if (r < 0.9989208633093527) {
			return "z";
		} else if (r < 0.9996402877697843) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "l") {
		if (r < 0.27909213995581844) {
			return "l";
		} else if (r < 0.5185277560037056) {
			return "i";
		} else if (r < 0.5985534098197107) {
			return "e";
		} else if (r < 0.6771538516354308) {
			return "a";
		} else if (r < 0.7327371196465475) {
			return "o";
		} else if (r < 0.763129765552626) {
			return "t";
		} else if (r < 0.7910639207582129) {
			return "s";
		} else if (r < 0.8169315185633864) {
			return "c";
		} else if (r < 0.8405544074681109) {
			return "m";
		} else if (r < 0.8616831753723367) {
			return "n";
		} else if (r < 0.8823487493764699) {
			return "y";
		} else if (r < 0.9026223900805246) {
			return "u";
		} else if (r < 0.9192617401838524) {
			return "k";
		} else if (r < 0.9349034418869808) {
			return "g";
		} else if (r < 0.9501175799900237) {
			return "d";
		} else if (r < 0.9637283545927459) {
			return "p";
		} else if (r < 0.976769044395354) {
			return "v";
		} else if (r < 0.9876362858975274) {
			return "b";
		} else if (r < 0.9933015035986604) {
			return "f";
		} else if (r < 0.9955105821991023) {
			return "w";
		} else if (r < 0.9975058789995013) {
			return "r";
		} else if (r < 0.9985035273997008) {
			return "h";
		} else if (r < 0.9991448727998291) {
			return "z";
		} else if (r < 0.9995011757999004) {
			return "j";
		} else if (r < 0.9998574787999717) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "m") {
		if (r < 0.1919539161943696) {
			return "i";
		} else if (r < 0.3601226423859519) {
			return "e";
		} else if (r < 0.48843259314317566) {
			return "p";
		} else if (r < 0.6068939886648703) {
			return "a";
		} else if (r < 0.7077952243798197) {
			return "b";
		} else if (r < 0.7963393106011334) {
			return "m";
		} else if (r < 0.8826535352596858) {
			return "o";
		} else if (r < 0.9112700919817893) {
			return "y";
		} else if (r < 0.9373780544457864) {
			return "s";
		} else if (r < 0.9573538976121898) {
			return "u";
		} else if (r < 0.9737062157391061) {
			return "n";
		} else if (r < 0.9822540183963578) {
			return "l";
		} else if (r < 0.9857846325373966) {
			return "f";
		} else if (r < 0.9885719594908482) {
			return "r";
		} else if (r < 0.9911734646474031) {
			return "w";
		} else if (r < 0.993310415311716) {
			return "t";
		} else if (r < 0.9947969896868902) {
			return "h";
		} else if (r < 0.9961906531636161) {
			return "d";
		} else if (r < 0.9973055839449968) {
			return "c";
		} else if (r < 0.9980488711325839) {
			return "z";
		} else if (r < 0.9986992474217226) {
			return "g";
		} else if (r < 0.9992567128124129) {
			return "k";
		} else if (r < 0.9997212673046548) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "n") {
		if (r < 0.24145861703737329) {
			return "t";
		} else if (r < 0.3632016946587986) {
			return "i";
		} else if (r < 0.47613859888031473) {
			return "d";
		} else if (r < 0.5687698592827962) {
			return "c";
		} else if (r < 0.6498108639733697) {
			return "g";
		} else if (r < 0.7196852776516872) {
			return "s";
		} else if (r < 0.7841730972915723) {
			return "a";
		} else if (r < 0.841125737630504) {
			return "e";
		} else if (r < 0.888969586926918) {
			return "o";
		} else if (r < 0.9265546981389017) {
			return "n";
		} else if (r < 0.9500075654410653) {
			return "k";
		} else if (r < 0.9635345740656681) {
			return "u";
		} else if (r < 0.9707973974882737) {
			return "l";
		} else if (r < 0.9768800121047058) {
			return "y";
		} else if (r < 0.982296867907399) {
			return "h";
		} else if (r < 0.9851112119836587) {
			return "z";
		} else if (r < 0.9877742472386141) {
			return "q";
		} else if (r < 0.9899530942653957) {
			return "f";
		} else if (r < 0.9916780148282645) {
			return "j";
		} else if (r < 0.9930700559842639) {
			return "b";
		} else if (r < 0.9944015736117415) {
			return "r";
		} else if (r < 0.9957330912392192) {
			return "w";
		} else if (r < 0.9969435618096534) {
			return "v";
		} else if (r < 0.9980935088515659) {
			return "m";
		} else if (r < 0.999122408836435) {
			return "p";
		} else if (r < 0.9999394764714781) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "o") {
		if (r < 0.27483443708609273) {
			return "r";
		} else if (r < 0.4105960264900662) {
			return "l";
		} else if (r < 0.4966887417218543) {
			return "s";
		} else if (r < 0.5761589403973509) {
			return "n";
		} else if (r < 0.6556291390728476) {
			return "u";
		} else if (r < 0.7251655629139072) {
			return "t";
		} else if (r < 0.781456953642384) {
			return "i";
		} else if (r < 0.8211920529801323) {
			return "c";
		} else if (r < 0.8476821192052979) {
			return "b";
		} else if (r < 0.8741721854304635) {
			return "d";
		} else if (r < 0.8940397350993377) {
			return "p";
		} else if (r < 0.9105960264900661) {
			return "e";
		} else if (r < 0.9271523178807946) {
			return "m";
		} else if (r < 0.943708609271523) {
			return "w";
		} else if (r < 0.9569536423841057) {
			return "h";
		} else if (r < 0.9668874172185429) {
			return "f";
		} else if (r < 0.97682119205298) {
			return "v";
		} else if (r < 0.9834437086092714) {
			return "g";
		} else if (r < 0.9867549668874172) {
			return "z";
		} else if (r < 0.9900662251655629) {
			return "x";
		} else if (r < 0.9933774834437086) {
			return "o";
		} else if (r < 0.9966887417218543) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "p") {
		if (r < 0.3062177678310791) {
			return "h";
		} else if (r < 0.4605429600077844) {
			return "p";
		} else if (r < 0.5639778145373163) {
			return "o";
		} else if (r < 0.6523304466283935) {
			return "e";
		} else if (r < 0.7264765982290551) {
			return "i";
		} else if (r < 0.7849566994259024) {
			return "a";
		} else if (r < 0.8404203561350587) {
			return "t";
		} else if (r < 0.8878077259900747) {
			return "s";
		} else if (r < 0.9169991242580517) {
			return "l";
		} else if (r < 0.9430767733774446) {
			return "r";
		} else if (r < 0.9627323148778825) {
			return "u";
		} else if (r < 0.9809282864649215) {
			return "y";
		} else if (r < 0.9864746521358371) {
			return "n";
		} else if (r < 0.9893937919626348) {
			return "b";
		} else if (r < 0.992118322467646) {
			return "m";
		} else if (r < 0.9947455483117639) {
			return "w";
		} else if (r < 0.9963997275469493) {
			return "f";
		} else if (r < 0.9980539067821347) {
			return "d";
		} else if (r < 0.9987350394083875) {
			return "j";
		} else if (r < 0.9994161720346403) {
			return "k";
		} else if (r < 0.9999026953391066) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "q") {
		if (r < 0.9643916913946587) {
			return "u";
		} else if (r < 0.9821958456973293) {
			return "i";
		} else if (r < 0.9881305637982195) {
			return "a";
		} else if (r < 0.9910979228486646) {
			return "o";
		} else if (r < 0.9940652818991097) {
			return "l";
		} else if (r < 0.9970326409495548) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "r") {
		if (r < 0.17599727241732016) {
			return "i";
		} else if (r < 0.2745311967269008) {
			return "d";
		} else if (r < 0.3698261166041596) {
			return "t";
		} else if (r < 0.463654960790999) {
			return "a";
		} else if (r < 0.5341288782816229) {
			return "c";
		} else if (r < 0.5973406068871463) {
			return "y";
		} else if (r < 0.6577906580293216) {
			return "e";
		} else if (r < 0.7053528810092057) {
			return "r";
		} else if (r < 0.7440504602795773) {
			return "o";
		} else if (r < 0.7804636890555746) {
			return "s";
		} else if (r < 0.8145925673371975) {
			return "b";
		} else if (r < 0.8465734742584385) {
			return "m";
		} else if (r < 0.8756222297988409) {
			return "g";
		} else if (r < 0.9001363791339926) {
			return "l";
		} else if (r < 0.9243777702011593) {
			return "k";
		} else if (r < 0.9481759290828504) {
			return "p";
		} else if (r < 0.9700306853051484) {
			return "n";
		} else if (r < 0.9774633481077396) {
			return "v";
		} else if (r < 0.9837367882713945) {
			return "f";
		} else if (r < 0.9893965223320833) {
			return "u";
		} else if (r < 0.9935560859188546) {
			return "w";
		} else if (r < 0.9963518581657008) {
			return "h";
		} else if (r < 0.9986362086600752) {
			return "q";
		} else if (r < 0.9994544834640302) {
			return "z";
		} else if (r < 0.9997272417320152) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "s") {
		if (r < 0.3168200373624853) {
			return "t";
		} else if (r < 0.48211443990866953) {
			return "s";
		} else if (r < 0.5852764132014115) {
			return "i";
		} else if (r < 0.6734933923752855) {
			return "e";
		} else if (r < 0.7470421365806408) {
			return "h";
		} else if (r < 0.8011485504739502) {
			return "c";
		} else if (r < 0.8389261744966444) {
			return "p";
		} else if (r < 0.8748356742544802) {
			return "m";
		} else if (r < 0.9040337646163428) {
			return "o";
		} else if (r < 0.9327475264650938) {
			return "a";
		} else if (r < 0.951843907839203) {
			return "u";
		} else if (r < 0.9697640628243273) {
			return "k";
		} else if (r < 0.9845014875804332) {
			return "y";
		} else if (r < 0.988791254410849) {
			return "q";
		} else if (r < 0.9917664152771052) {
			return "l";
		} else if (r < 0.9942572476302498) {
			return "b";
		} else if (r < 0.9957794229571716) {
			return "w";
		} else if (r < 0.9968864595585692) {
			return "n";
		} else if (r < 0.9977859267972048) {
			return "g";
		} else if (r < 0.9984086348854909) {
			return "d";
		} else if (r < 0.9989621531861897) {
			return "f";
		} else if (r < 0.9993772919117139) {
			return "r";
		} else if (r < 0.9996540510620633) {
			return "z";
		} else if (r < 0.9998616204248253) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "t") {
		if (r < 0.36986701028421387) {
			return "i";
		} else if (r < 0.6508229802338868) {
			return "e";
		} else if (r < 0.7578955046072305) {
			return "o";
		} else if (r < 0.8200384138484355) {
			return "h";
		} else if (r < 0.862196396878267) {
			return "a";
		} else if (r < 0.8990785538887943) {
			return "t";
		} else if (r < 0.9314871994359485) {
			return "r";
		} else if (r < 0.9557754491745885) {
			return "u";
		} else if (r < 0.9700226106829398) {
			return "c";
		} else if (r < 0.9795288225426078) {
			return "s";
		} else if (r < 0.9847073983127081) {
			return "y";
		} else if (r < 0.98888915902847) {
			return "l";
		} else if (r < 0.9920741046898932) {
			return "m";
		} else if (r < 0.9938732343001628) {
			return "f";
		} else if (r < 0.9953563006005203) {
			return "w";
		} else if (r < 0.9967907417762758) {
			return "b";
		} else if (r < 0.997909119642119) {
			return "n";
		} else if (r < 0.9985655588242445) {
			return "z";
		} else if (r < 0.9989545598210595) {
			return "p";
		} else if (r < 0.9992463105686709) {
			return "d";
		} else if (r < 0.9995137487539812) {
			return "k";
		} else if (r < 0.9997082492523888) {
			return "g";
		} else if (r < 0.9998784371884953) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "u") {
		if (r < 0.23877781969068276) {
			return "t";
		} else if (r < 0.37910222557525464) {
			return "r";
		} else if (r < 0.487174651075066) {
			return "s";
		} else if (r < 0.5797812146359864) {
			return "l";
		} else if (r < 0.6663523198792909) {
			return "n";
		} else if (r < 0.7431158053564693) {
			return "d";
		} else if (r < 0.8110147114296492) {
			return "g";
		} else if (r < 0.8655224443606186) {
			return "c";
		} else if (r < 0.8932478310071671) {
			return "m";
		} else if (r < 0.9205960015088646) {
			return "x";
		} else if (r < 0.938513768389287) {
			return "b";
		} else if (r < 0.955865711052433) {
			return "p";
		} else if (r < 0.966427763108261) {
			return "f";
		} else if (r < 0.9756695586571105) {
			return "k";
		} else if (r < 0.9809505846850245) {
			return "v";
		} else if (r < 0.9854771784232365) {
			return "e";
		} else if (r < 0.9884949075820445) {
			return "i";
		} else if (r < 0.9911354205960015) {
			return "a";
		} else if (r < 0.9935873255375329) {
			return "z";
		} else if (r < 0.9952847981893624) {
			return "w";
		} else if (r < 0.996605054696341) {
			return "q";
		} else if (r < 0.997736703130894) {
			return "j";
		} else if (r < 0.9988683515654471) {
			return "h";
		} else if (r < 0.9994341757827235) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "v") {
		if (r < 0.39965397923875434) {
			return "e";
		} else if (r < 0.6678200692041523) {
			return "i";
		} else if (r < 0.844002306805075) {
			return "a";
		} else if (r < 0.9648212226066898) {
			return "o";
		} else if (r < 0.9760668973471742) {
			return "y";
		} else if (r < 0.9867358708189159) {
			return "u";
		} else if (r < 0.9901960784313727) {
			return "s";
		} else if (r < 0.9922145328719725) {
			return "r";
		} else if (r < 0.9942329873125723) {
			return "v";
		} else if (r < 0.9959630911188007) {
			return "d";
		} else if (r < 0.9974048442906577) {
			return "g";
		} else if (r < 0.9985582468281433) {
			return "l";
		} else if (r < 0.9994232987312575) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "w") {
		if (r < 0.18663594470046083) {
			return "a";
		} else if (r < 0.3162442396313364) {
			return "n";
		} else if (r < 0.4228110599078341) {
			return "l";
		} else if (r < 0.5092165898617511) {
			return "e";
		} else if (r < 0.5950460829493087) {
			return "s";
		} else if (r < 0.6802995391705069) {
			return "k";
		} else if (r < 0.7523041474654377) {
			return "i";
		} else if (r < 0.792626728110599) {
			return "b";
		} else if (r < 0.8243087557603686) {
			return "f";
		} else if (r < 0.8531105990783409) {
			return "d";
		} else if (r < 0.879032258064516) {
			return "o";
		} else if (r < 0.8997695852534561) {
			return "m";
		} else if (r < 0.9187788018433178) {
			return "t";
		} else if (r < 0.9372119815668202) {
			return "y";
		} else if (r < 0.9516129032258064) {
			return "h";
		} else if (r < 0.9648617511520736) {
			return "r";
		} else if (r < 0.976958525345622) {
			return "p";
		} else if (r < 0.9855990783410137) {
			return "c";
		} else if (r < 0.9913594470046081) {
			return "g";
		} else if (r < 0.9971198156682025) {
			return "w";
		} else if (r < 0.9988479262672808) {
			return "u";
		} else if (r < 0.9994239631336402) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "x") {
		if (r < 0.504950495049505) {
			return "i";
		} else if (r < 0.63996399639964) {
			return "e";
		} else if (r < 0.7704770477047704) {
			return "o";
		} else if (r < 0.8505850585058505) {
			return "a";
		} else if (r < 0.8919891989198919) {
			return "y";
		} else if (r < 0.9135913591359135) {
			return "w";
		} else if (r < 0.9306930693069306) {
			return "l";
		} else if (r < 0.9432943294329432) {
			return "t";
		} else if (r < 0.9549954995499549) {
			return "m";
		} else if (r < 0.9648964896489648) {
			return "b";
		} else if (r < 0.972097209720972) {
			return "p";
		} else if (r < 0.9783978397839783) {
			return "h";
		} else if (r < 0.9828982898289829) {
			return "s";
		} else if (r < 0.9873987398739874) {
			return "u";
		} else if (r < 0.991899189918992) {
			return "c";
		} else if (r < 0.9945994599459946) {
			return "n";
		} else if (r < 0.9963996399639964) {
			return "f";
		} else if (r < 0.9981998199819981) {
			return "g";
		} else if (r < 0.9990999099909991) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "y") {
		if (r < 0.20939947780678853) {
			return "s";
		} else if (r < 0.38172323759791127) {
			return "e";
		} else if (r < 0.522715404699739) {
			return "a";
		} else if (r < 0.6156657963446476) {
			return "i";
		} else if (r < 0.6689295039164491) {
			return "m";
		} else if (r < 0.7174934725848564) {
			return "l";
		} else if (r < 0.7655352480417754) {
			return "o";
		} else if (r < 0.8026109660574412) {
			return "b";
		} else if (r < 0.8360313315926893) {
			return "w";
		} else if (r < 0.8668407310704961) {
			return "f";
		} else if (r < 0.8898172323759791) {
			return "n";
		} else if (r < 0.9054830287206266) {
			return "d";
		} else if (r < 0.9211488250652741) {
			return "t";
		} else if (r < 0.9368146214099216) {
			return "u";
		} else if (r < 0.9493472584856396) {
			return "r";
		} else if (r < 0.9618798955613577) {
			return "g";
		} else if (r < 0.9728459530026109) {
			return "c";
		} else if (r < 0.983289817232376) {
			return "p";
		} else if (r < 0.9921671018276762) {
			return "h";
		} else if (r < 0.9947780678851175) {
			return "y";
		} else if (r < 0.9973890339425587) {
			return "v";
		} else if (r < 0.9989556135770234) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "a" && str[str.length-1] == "z") {
		if (r < 0.259106529209622) {
			return "o";
		} else if (r < 0.5065292096219931) {
			return "i";
		} else if (r < 0.718213058419244) {
			return "e";
		} else if (r < 0.8261168384879725) {
			return "a";
		} else if (r < 0.9065292096219931) {
			return "z";
		} else if (r < 0.9395189003436426) {
			return "y";
		} else if (r < 0.970446735395189) {
			return "u";
		} else if (r < 0.9786941580756013) {
			return "l";
		} else if (r < 0.986254295532646) {
			return "d";
		} else if (r < 0.9903780068728522) {
			return "t";
		} else if (r < 0.9924398625429552) {
			return "g";
		} else if (r < 0.9945017182130583) {
			return "n";
		} else if (r < 0.9958762886597937) {
			return "h";
		} else if (r < 0.9972508591065291) {
			return "p";
		} else if (r < 0.9979381443298968) {
			return "r";
		} else if (r < 0.9986254295532645) {
			return "m";
		} else if (r < 0.9993127147766322) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "a") {
		if (r < 0.18042885913991233) {
			return "r";
		} else if (r < 0.3242506811989101) {
			return "l";
		} else if (r < 0.45717332069659994) {
			return "c";
		} else if (r < 0.5787229001303164) {
			return "n";
		} else if (r < 0.697310745172373) {
			return "t";
		} else if (r < 0.7975358369861392) {
			return "s";
		} else if (r < 0.8321288946807252) {
			return "b";
		} else if (r < 0.8610354223433244) {
			return "g";
		} else if (r < 0.8831891955929394) {
			return "i";
		} else if (r < 0.9020258263238955) {
			return "d";
		} else if (r < 0.9148205188958657) {
			return "k";
		} else if (r < 0.9265489870868383) {
			return "p";
		} else if (r < 0.9374481696481463) {
			return "u";
		} else if (r < 0.9481104134581214) {
			return "y";
		} else if (r < 0.9575879635114326) {
			return "m";
		} else if (r < 0.9663546973107455) {
			return "h";
		} else if (r < 0.9751214311100584) {
			return "e";
		} else if (r < 0.9811633692690443) {
			return "w";
		} else if (r < 0.9860206136713664) {
			return "z";
		} else if (r < 0.9896931643170245) {
			return "f";
		} else if (r < 0.9926548987086843) {
			return "a";
		} else if (r < 0.9949058168463457) {
			return "j";
		} else if (r < 0.9969197962326743) {
			return "v";
		} else if (r < 0.9984598981163374) {
			return "x";
		} else if (r < 0.9992891837460022) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "b") {
		if (r < 0.26929876252209783) {
			return "e";
		} else if (r < 0.502651738361815) {
			return "l";
		} else if (r < 0.7289334119033589) {
			return "i";
		} else if (r < 0.8285209192692988) {
			return "a";
		} else if (r < 0.8927519151443725) {
			return "y";
		} else if (r < 0.9475545079552151) {
			return "o";
		} else if (r < 0.9805539186800236) {
			return "r";
		} else if (r < 0.9946965232763701) {
			return "u";
		} else if (r < 0.9994107248084857) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "c") {
		if (r < 0.4005167958656331) {
			return "o";
		} else if (r < 0.5478036175710594) {
			return "a";
		} else if (r < 0.6563307493540051) {
			return "l";
		} else if (r < 0.7545219638242894) {
			return "h";
		} else if (r < 0.8242894056847545) {
			return "u";
		} else if (r < 0.8914728682170543) {
			return "r";
		} else if (r < 0.9328165374677003) {
			return "i";
		} else if (r < 0.9689922480620156) {
			return "e";
		} else if (r < 0.9870801033591732) {
			return "y";
		} else if (r < 0.9974160206718347) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "d") {
		if (r < 0.29977628635346754) {
			return "o";
		} else if (r < 0.5190156599552572) {
			return "e";
		} else if (r < 0.7337807606263982) {
			return "i";
		} else if (r < 0.9082774049217002) {
			return "u";
		} else if (r < 0.9686800894854586) {
			return "a";
		} else if (r < 0.9843400447427293) {
			return "r";
		} else if (r < 0.9910514541387024) {
			return "l";
		} else if (r < 0.9932885906040269) {
			return "f";
		} else if (r < 0.9955257270693513) {
			return "s";
		} else if (r < 0.9977628635346757) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "e") {
		if (r < 0.2607376283846872) {
			return "r";
		} else if (r < 0.3838702147525677) {
			return "l";
		} else if (r < 0.48132586367880487) {
			return "n";
		} else if (r < 0.56734360410831) {
			return "d";
		} else if (r < 0.6469421101774042) {
			return "s";
		} else if (r < 0.7253734827264238) {
			return "a";
		} else if (r < 0.7769607843137254) {
			return "t";
		} else if (r < 0.8139589169000933) {
			return "c";
		} else if (r < 0.8454715219421101) {
			return "g";
		} else if (r < 0.8744164332399625) {
			return "e";
		} else if (r < 0.8948412698412698) {
			return "f";
		} else if (r < 0.9110644257703081) {
			return "m";
		} else if (r < 0.9264705882352942) {
			return "h";
		} else if (r < 0.9416433239962652) {
			return "w";
		} else if (r < 0.9509803921568627) {
			return "i";
		} else if (r < 0.9599673202614378) {
			return "p";
		} else if (r < 0.9661531279178337) {
			return "y";
		} else if (r < 0.9721055088702146) {
			return "b";
		} else if (r < 0.9779411764705881) {
			return "z";
		} else if (r < 0.9836601307189541) {
			return "v";
		} else if (r < 0.9879785247432304) {
			return "k";
		} else if (r < 0.9919467787114844) {
			return "j";
		} else if (r < 0.9950980392156861) {
			return "q";
		} else if (r < 0.997082166199813) {
			return "x";
		} else if (r < 0.9987161531279176) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "f") {
		if (r < 0.2112676056338028) {
			return "u";
		} else if (r < 0.4014084507042254) {
			return "o";
		} else if (r < 0.5774647887323944) {
			return "i";
		} else if (r < 0.6971830985915493) {
			return "a";
		} else if (r < 0.8098591549295774) {
			return "l";
		} else if (r < 0.9154929577464788) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "g") {
		if (r < 0.2976190476190476) {
			return "e";
		} else if (r < 0.5238095238095238) {
			return "l";
		} else if (r < 0.6904761904761905) {
			return "r";
		} else if (r < 0.7976190476190476) {
			return "o";
		} else if (r < 0.8928571428571428) {
			return "a";
		} else if (r < 0.9404761904761905) {
			return "y";
		} else if (r < 0.9642857142857143) {
			return "i";
		} else if (r < 0.9880952380952381) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "h") {
		if (r < 0.31891891891891894) {
			return "a";
		} else if (r < 0.572972972972973) {
			return "o";
		} else if (r < 0.7189189189189189) {
			return "e";
		} else if (r < 0.8378378378378378) {
			return "u";
		} else if (r < 0.9243243243243243) {
			return "i";
		} else if (r < 0.9783783783783784) {
			return "y";
		} else if (r < 0.9837837837837837) {
			return "r";
		} else if (r < 0.9891891891891891) {
			return "d";
		} else if (r < 0.9945945945945944) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "i") {
		if (r < 0.2771289261821068) {
			return "l";
		} else if (r < 0.3901802925501758) {
			return "t";
		} else if (r < 0.49722190724571946) {
			return "n";
		} else if (r < 0.5839664361038667) {
			return "o";
		} else if (r < 0.6624333824696678) {
			return "a";
		} else if (r < 0.719696110670144) {
			return "c";
		} else if (r < 0.7717428279850324) {
			return "r";
		} else if (r < 0.8236761537589297) {
			return "s";
		} else if (r < 0.854065086744529) {
			return "d";
		} else if (r < 0.8835468874021999) {
			return "e";
		} else if (r < 0.9052046717314889) {
			return "b";
		} else if (r < 0.9251615829459123) {
			return "g";
		} else if (r < 0.943304229504479) {
			return "f";
		} else if (r < 0.9545299920625921) {
			return "p";
		} else if (r < 0.9647352307517859) {
			return "m";
		} else if (r < 0.9726726386211588) {
			return "u";
		} else if (r < 0.9790225649166572) {
			return "v";
		} else if (r < 0.9843519673432362) {
			return "z";
		} else if (r < 0.9882072797369316) {
			return "q";
		} else if (r < 0.9914956344256718) {
			return "i";
		} else if (r < 0.994783989114412) {
			return "k";
		} else if (r < 0.9964848622292777) {
			return "j";
		} else if (r < 0.9977321691801792) {
			return "h";
		} else if (r < 0.9988660845900895) {
			return "y";
		} else if (r < 0.9995464338360358) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "j") {
		if (r < 0.65748031496063) {
			return "e";
		} else if (r < 0.9291338582677167) {
			return "u";
		} else if (r < 0.9685039370078742) {
			return "o";
		} else if (r < 0.9842519685039371) {
			return "a";
		} else if (r < 0.9921259842519686) {
			return "i";
		} else if (r < 0.9960629921259844) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "k") {
		if (r < 0.34375) {
			return "i";
		} else if (r < 0.5) {
			return "a";
		} else if (r < 0.59375) {
			return "h";
		} else if (r < 0.6875) {
			return "e";
		} else if (r < 0.75) {
			return "g";
		} else if (r < 0.8125) {
			return "p";
		} else if (r < 0.84375) {
			return "b";
		} else if (r < 0.875) {
			return "c";
		} else if (r < 0.90625) {
			return "l";
		} else if (r < 0.9375) {
			return "s";
		} else if (r < 0.96875) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "l") {
		if (r < 0.6533591418662795) {
			return "e";
		} else if (r < 0.763932575207678) {
			return "y";
		} else if (r < 0.8464392289700782) {
			return "a";
		} else if (r < 0.9274135010887974) {
			return "i";
		} else if (r < 0.9734656020646826) {
			return "o";
		} else if (r < 0.999193483345431) {
			return "u";
		} else if (r < 0.9994354383418017) {
			return "d";
		} else if (r < 0.9995967416727155) {
			return "s";
		} else if (r < 0.9997580450036293) {
			return "k";
		} else if (r < 0.9998386966690862) {
			return "v";
		} else if (r < 0.9999193483345431) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "m") {
		if (r < 0.3034188034188034) {
			return "e";
		} else if (r < 0.5726495726495726) {
			return "i";
		} else if (r < 0.8247863247863247) {
			return "a";
		} else if (r < 0.9188034188034188) {
			return "o";
		} else if (r < 0.9829059829059829) {
			return "u";
		} else if (r < 0.9914529914529914) {
			return "h";
		} else if (r < 0.9957264957264956) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "n") {
		if (r < 0.37423312883435583) {
			return "e";
		} else if (r < 0.6932515337423313) {
			return "o";
		} else if (r < 0.8220858895705522) {
			return "a";
		} else if (r < 0.9325153374233129) {
			return "u";
		} else if (r < 0.9877300613496933) {
			return "i";
		} else if (r < 0.9938650306748467) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "o") {
		if (r < 0.12731245447924253) {
			return "r";
		} else if (r < 0.2423889293517844) {
			return "l";
		} else if (r < 0.34420975965040057) {
			return "n";
		} else if (r < 0.4356882738528769) {
			return "u";
		} else if (r < 0.5175528040786599) {
			return "o";
		} else if (r < 0.5966496722505463) {
			return "a";
		} else if (r < 0.656081573197378) {
			return "t";
		} else if (r < 0.70517115804807) {
			return "s";
		} else if (r < 0.7461034231609615) {
			return "w";
		} else if (r < 0.7819373634377277) {
			return "d";
		} else if (r < 0.8117989803350328) {
			return "x";
		} else if (r < 0.8415149308084487) {
			return "y";
		} else if (r < 0.8691915513474145) {
			return "i";
		} else if (r < 0.8933721777130372) {
			return "m";
		} else if (r < 0.9142024763292063) {
			return "g";
		} else if (r < 0.9331391114348144) {
			return "b";
		} else if (r < 0.951784413692644) {
			return "c";
		} else if (r < 0.9631463947560089) {
			return "p";
		} else if (r < 0.9718863801893666) {
			return "e";
		} else if (r < 0.9797523670793884) {
			return "v";
		} else if (r < 0.9870356882738531) {
			return "k";
		} else if (r < 0.993445010924982) {
			return "h";
		} else if (r < 0.9965040058266572) {
			return "f";
		} else if (r < 0.9989803350327752) {
			return "z";
		} else if (r < 0.9997086671522216) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "p") {
		if (r < 0.27450980392156865) {
			return "r";
		} else if (r < 0.4558823529411765) {
			return "e";
		} else if (r < 0.6225490196078431) {
			return "a";
		} else if (r < 0.7401960784313726) {
			return "o";
		} else if (r < 0.8088235294117647) {
			return "l";
		} else if (r < 0.8725490196078431) {
			return "h";
		} else if (r < 0.9166666666666666) {
			return "u";
		} else if (r < 0.9509803921568627) {
			return "i";
		} else if (r < 0.9803921568627451) {
			return "y";
		} else if (r < 0.9950980392156862) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "b" && str[str.length-1] == "r") {
		if (r < 0.3443349753694581) {
			return "a";
		} else if (r < 0.5638752052545156) {
			return "o";
		} else if (r < 0.7668308702791462) {
			return "i";
		} else if (r < 0.9136288998357964) {
			return "e";
		} else if (r < 0.9740558292282431) {
			return "u";
		} else if (r < 0.9983579638752053) {
			return "y";
		} else if (r < 0.9990147783251232) {
			return "h";
		} else if (r < 0.9993431855500822) {
			return "r";
		} else if (r < 0.9996715927750411) {
			return "d";
		} else if (r < 0.9998357963875206) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "s") {
		if (r < 0.365815931941222) {
			return "t";
		} else if (r < 0.5390564578499614) {
			return "e";
		} else if (r < 0.6604795050270689) {
			return "o";
		} else if (r < 0.7780355761794278) {
			return "c";
		} else if (r < 0.8700696055684456) {
			return "i";
		} else if (r < 0.9102861562258315) {
			return "u";
		} else if (r < 0.9327146171693736) {
			return "p";
		} else if (r < 0.9505027068832175) {
			return "a";
		} else if (r < 0.9644238205723126) {
			return "h";
		} else if (r < 0.9737045630317094) {
			return "y";
		} else if (r < 0.9829853054911062) {
			return "l";
		} else if (r < 0.9876256767208046) {
			return "m";
		} else if (r < 0.9914926527455532) {
			return "k";
		} else if (r < 0.9938128383604024) {
			return "q";
		} else if (r < 0.9953596287703018) {
			return "f";
		} else if (r < 0.9969064191802013) {
			return "s";
		} else if (r < 0.997679814385151) {
			return "v";
		} else if (r < 0.9984532095901006) {
			return "b";
		} else if (r < 0.9992266047950503) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "t") {
		if (r < 0.24476987447698745) {
			return "e";
		} else if (r < 0.4581589958158996) {
			return "r";
		} else if (r < 0.5815899581589958) {
			return "i";
		} else if (r < 0.7029288702928871) {
			return "a";
		} else if (r < 0.797071129707113) {
			return "u";
		} else if (r < 0.8723849372384938) {
			return "l";
		} else if (r < 0.9267782426778243) {
			return "o";
		} else if (r < 0.9518828451882845) {
			return "h";
		} else if (r < 0.9728033472803347) {
			return "f";
		} else if (r < 0.9832635983263598) {
			return "s";
		} else if (r < 0.9937238493723849) {
			return "y";
		} else if (r < 0.9979079497907949) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "u") {
		if (r < 0.21479713603818615) {
			return "l";
		} else if (r < 0.4020394879583423) {
			return "r";
		} else if (r < 0.5432848774137556) {
			return "s";
		} else if (r < 0.666305055326535) {
			return "t";
		} else if (r < 0.7277066608808851) {
			return "n";
		} else if (r < 0.7867216315903666) {
			return "c";
		} else if (r < 0.8387936645693208) {
			return "m";
		} else if (r < 0.8689520503362984) {
			return "g";
		} else if (r < 0.8975916684747233) {
			return "d";
		} else if (r < 0.9195053156866998) {
			return "i";
		} else if (r < 0.9368626600130179) {
			return "f";
		} else if (r < 0.953786070731178) {
			return "b";
		} else if (r < 0.9642004773269689) {
			return "k";
		} else if (r < 0.971577348665654) {
			return "z";
		} else if (r < 0.9783033195921023) {
			return "o";
		} else if (r < 0.9845953569103926) {
			return "y";
		} else if (r < 0.9882837925797352) {
			return "x";
		} else if (r < 0.9913213278368409) {
			return "e";
		} else if (r < 0.9943588630939466) {
			return "p";
		} else if (r < 0.9967454979388154) {
			return "h";
		} else if (r < 0.9984812323714471) {
			return "a";
		} else if (r < 0.9991321327836841) {
			return "q";
		} else if (r < 0.999566066391842) {
			return "j";
		} else if (r < 0.999783033195921) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "v") {
		if (r < 0.5362318840579711) {
			return "e";
		} else if (r < 0.855072463768116) {
			return "i";
		} else if (r < 0.9347826086956522) {
			return "o";
		} else if (r < 0.9927536231884059) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "w") {
		if (r < 0.44155844155844154) {
			return "o";
		} else if (r < 0.6623376623376623) {
			return "a";
		} else if (r < 0.8701298701298701) {
			return "e";
		} else if (r < 0.948051948051948) {
			return "i";
		} else if (r < 0.987012987012987) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "x") {
		if (r < 0.5) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "y") {
		if (r < 0.1625) {
			return "r";
		} else if (r < 0.3125) {
			return "s";
		} else if (r < 0.4525) {
			return "t";
		} else if (r < 0.5725) {
			return "l";
		} else if (r < 0.66) {
			return "e";
		} else if (r < 0.7225) {
			return "i";
		} else if (r < 0.7625000000000001) {
			return "c";
		} else if (r < 0.7975000000000001) {
			return "p";
		} else if (r < 0.8300000000000001) {
			return "o";
		} else if (r < 0.8600000000000001) {
			return "w";
		} else if (r < 0.8875000000000001) {
			return "h";
		} else if (r < 0.91) {
			return "a";
		} else if (r < 0.93) {
			return "g";
		} else if (r < 0.9500000000000001) {
			return "z";
		} else if (r < 0.9650000000000001) {
			return "n";
		} else if (r < 0.9750000000000001) {
			return "m";
		} else if (r < 0.9825) {
			return "b";
		} else if (r < 0.9875) {
			return "x";
		} else if (r < 0.9925) {
			return "u";
		} else if (r < 0.995) {
			return "d";
		} else if (r < 0.9974999999999999) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "b" && str[str.length-1] == "z") {
		if (r < 0.4444444444444444) {
			return "o";
		} else if (r < 0.5555555555555556) {
			return "h";
		} else if (r < 0.6666666666666667) {
			return "u";
		} else if (r < 0.7777777777777779) {
			return "i";
		} else if (r < 0.8888888888888891) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "a") {
		if (r < 0.3649158190108734) {
			return "l";
		} else if (r < 0.5277534198526833) {
			return "t";
		} else if (r < 0.6654682567520169) {
			return "r";
		} else if (r < 0.7526745001753772) {
			return "n";
		} else if (r < 0.8011224131883551) {
			return "p";
		} else if (r < 0.843125219221326) {
			return "s";
		} else if (r < 0.8716678358470713) {
			return "m";
		} else if (r < 0.8968782883198878) {
			return "b";
		} else if (r < 0.915512101017187) {
			return "u";
		} else if (r < 0.9338390038582954) {
			return "d";
		} else if (r < 0.9520782181690636) {
			return "c";
		} else if (r < 0.9634338828481236) {
			return "v";
		} else if (r < 0.9705804980708524) {
			return "e";
		} else if (r < 0.9764117853384778) {
			return "i";
		} else if (r < 0.9813223430375309) {
			return "g";
		} else if (r < 0.9852683269028413) {
			return "k";
		} else if (r < 0.9887758681164506) {
			return "f";
		} else if (r < 0.9917572781480184) {
			return "h";
		} else if (r < 0.9944756225885656) {
			return "y";
		} else if (r < 0.9961855489302001) {
			return "j";
		} else if (r < 0.9973693440897932) {
			return "w";
		} else if (r < 0.9982023851280254) {
			return "o";
		} else if (r < 0.9987723605752369) {
			return "q";
		} else if (r < 0.9992984917572783) {
			return "z";
		} else if (r < 0.9997369344089794) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "b") {
		if (r < 0.3157894736842105) {
			return "a";
		} else if (r < 0.5263157894736842) {
			return "o";
		} else if (r < 0.631578947368421) {
			return "l";
		} else if (r < 0.7368421052631579) {
			return "u";
		} else if (r < 0.7894736842105263) {
			return "n";
		} else if (r < 0.8421052631578947) {
			return "m";
		} else if (r < 0.894736842105263) {
			return "e";
		} else if (r < 0.9473684210526314) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "c") {
		if (r < 0.18319327731092436) {
			return "o";
		} else if (r < 0.35840336134453776) {
			return "i";
		} else if (r < 0.5331932773109243) {
			return "u";
		} else if (r < 0.6773109243697477) {
			return "e";
		} else if (r < 0.8033613445378149) {
			return "a";
		} else if (r < 0.8936974789915965) {
			return "h";
		} else if (r < 0.9508403361344536) {
			return "l";
		} else if (r < 0.9798319327731091) {
			return "r";
		} else if (r < 0.9966386554621848) {
			return "y";
		} else if (r < 0.9978991596638654) {
			return "t";
		} else if (r < 0.9987394957983192) {
			return "w";
		} else if (r < 0.9991596638655461) {
			return "k";
		} else if (r < 0.999579831932773) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "d") {
		if (r < 0.5116279069767442) {
			return "o";
		} else if (r < 0.7209302325581396) {
			return "y";
		} else if (r < 0.8139534883720931) {
			return "e";
		} else if (r < 0.8604651162790699) {
			return "a";
		} else if (r < 0.9069767441860466) {
			return "i";
		} else if (r < 0.930232558139535) {
			return "f";
		} else if (r < 0.9534883720930234) {
			return "g";
		} else if (r < 0.9767441860465118) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "e") {
		if (r < 0.1814314928425358) {
			return "n";
		} else if (r < 0.33456032719836404) {
			return "r";
		} else if (r < 0.44139059304703476) {
			return "s";
		} else if (r < 0.5433946830265849) {
			return "p";
		} else if (r < 0.6378732106339469) {
			return "l";
		} else if (r < 0.7308793456032721) {
			return "a";
		} else if (r < 0.7950102249488753) {
			return "d";
		} else if (r < 0.8577505112474438) {
			return "o";
		} else if (r < 0.9108384458077711) {
			return "t";
		} else if (r < 0.93799591002045) {
			return "m";
		} else if (r < 0.9585276073619633) {
			return "i";
		} else if (r < 0.9658077709611453) {
			return "f";
		} else if (r < 0.972515337423313) {
			return "c";
		} else if (r < 0.9779959100204499) {
			return "b";
		} else if (r < 0.9834764826175869) {
			return "e";
		} else if (r < 0.9883026584867076) {
			return "w";
		} else if (r < 0.9916564417177914) {
			return "u";
		} else if (r < 0.9935378323108385) {
			return "g";
		} else if (r < 0.9954192229038855) {
			return "y";
		} else if (r < 0.9969734151329244) {
			return "h";
		} else if (r < 0.9984458077709611) {
			return "v";
		} else if (r < 0.9992638036809816) {
			return "k";
		} else if (r < 0.9996728016359918) {
			return "q";
		} else if (r < 0.9998364008179959) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "f") {
		if (r < 0.15384615384615385) {
			return "h";
		} else if (r < 0.3076923076923077) {
			return "m";
		} else if (r < 0.46153846153846156) {
			return "l";
		} else if (r < 0.6153846153846154) {
			return "u";
		} else if (r < 0.6923076923076923) {
			return "o";
		} else if (r < 0.7692307692307692) {
			return "d";
		} else if (r < 0.846153846153846) {
			return "i";
		} else if (r < 0.9230769230769229) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "g") {
		if (r < 0.4166666666666667) {
			return "r";
		} else if (r < 0.5833333333333334) {
			return "o";
		} else if (r < 0.6666666666666667) {
			return "m";
		} else if (r < 0.7500000000000001) {
			return "s";
		} else if (r < 0.8333333333333335) {
			return "i";
		} else if (r < 0.9166666666666669) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "h") {
		if (r < 0.21520757152075715) {
			return "i";
		} else if (r < 0.4115938911593891) {
			return "e";
		} else if (r < 0.5892665089266509) {
			return "a";
		} else if (r < 0.7292428479242847) {
			return "o";
		} else if (r < 0.8012475801247579) {
			return "r";
		} else if (r < 0.8409873090987309) {
			return "l";
		} else if (r < 0.8798128629812862) {
			return "y";
		} else if (r < 0.9094428909442891) {
			return "u";
		} else if (r < 0.9297160679716068) {
			return "n";
		} else if (r < 0.946493869649387) {
			return "t";
		} else if (r < 0.9606904710690471) {
			return "m";
		} else if (r < 0.9687567218756722) {
			return "s";
		} else if (r < 0.9760701226070123) {
			return "w";
		} else if (r < 0.9813400731340074) {
			return "b";
		} else if (r < 0.9858033985803399) {
			return "p";
		} else if (r < 0.9892987739298775) {
			return "f";
		} else if (r < 0.9924177242417725) {
			return "d";
		} else if (r < 0.99483759948376) {
			return "c";
		} else if (r < 0.996450849645085) {
			return "h";
		} else if (r < 0.9979027747902776) {
			return "k";
		} else if (r < 0.9991395999139601) {
			return "g";
		} else if (r < 0.9996235749623575) {
			return "v";
		} else if (r < 0.9999462249946225) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "i") {
		if (r < 0.149894254494184) {
			return "n";
		} else if (r < 0.28172365174480085) {
			return "a";
		} else if (r < 0.3859710962284103) {
			return "t";
		} else if (r < 0.473651744800846) {
			return "d";
		} else if (r < 0.5580719069439549) {
			return "s";
		} else if (r < 0.6292738808600635) {
			return "o";
		} else if (r < 0.6952767007402186) {
			return "e";
		} else if (r < 0.7487663024321467) {
			return "l";
		} else if (r < 0.7997885089883681) {
			return "r";
		} else if (r < 0.8484314416637293) {
			return "p";
		} else if (r < 0.8856186112090236) {
			return "f";
		} else if (r < 0.9119668664081777) {
			return "z";
		} else if (r < 0.9373457878040183) {
			return "c";
		} else if (r < 0.9554987663024321) {
			return "v";
		} else if (r < 0.9734755022911527) {
			return "b";
		} else if (r < 0.9862530842439197) {
			return "m";
		} else if (r < 0.9944483609446599) {
			return "u";
		} else if (r < 0.9979732111385267) {
			return "g";
		} else if (r < 0.9992069087063801) {
			return "i";
		} else if (r < 0.9995593937257667) {
			return "q";
		} else if (r < 0.9998237574903067) {
			return "x";
		} else if (r < 0.9999118787451534) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "k") {
		if (r < 0.27130089374379346) {
			return "e";
		} else if (r < 0.43972194637537243) {
			return "s";
		} else if (r < 0.5571002979145978) {
			return "l";
		} else if (r < 0.6738828202581927) {
			return "i";
		} else if (r < 0.722343594836147) {
			return "a";
		} else if (r < 0.7563058589870904) {
			return "b";
		} else if (r < 0.7860973187686197) {
			return "w";
		} else if (r < 0.8125124131082423) {
			return "n";
		} else if (r < 0.8381330685203575) {
			return "y";
		} else if (r < 0.8603773584905661) {
			return "m";
		} else if (r < 0.8824230387288977) {
			return "o";
		} else if (r < 0.9026812313803376) {
			return "h";
		} else if (r < 0.9215491559086395) {
			return "f";
		} else if (r < 0.9400198609731877) {
			return "t";
		} else if (r < 0.9571002979145978) {
			return "p";
		} else if (r < 0.9706057596822244) {
			return "r";
		} else if (r < 0.9777557100297914) {
			return "c";
		} else if (r < 0.9839126117179742) {
			return "u";
		} else if (r < 0.9894736842105263) {
			return "d";
		} else if (r < 0.992850049652433) {
			return "k";
		} else if (r < 0.9960278053624627) {
			return "g";
		} else if (r < 0.9992055610724925) {
			return "j";
		} else if (r < 0.9996027805362462) {
			return "v";
		} else if (r < 0.9998013902681231) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "l") {
		if (r < 0.26991324921135645) {
			return "e";
		} else if (r < 0.5327287066246056) {
			return "a";
		} else if (r < 0.7143138801261829) {
			return "i";
		} else if (r < 0.8937302839116719) {
			return "o";
		} else if (r < 0.9771293375394321) {
			return "u";
		} else if (r < 0.9994085173501577) {
			return "y";
		} else if (r < 0.9996056782334385) {
			return "n";
		} else if (r < 0.9998028391167193) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "m") {
		if (r < 0.375) {
			return "a";
		} else if (r < 0.5833333333333334) {
			return "e";
		} else if (r < 0.7083333333333334) {
			return "o";
		} else if (r < 0.8125) {
			return "i";
		} else if (r < 0.9166666666666666) {
			return "d";
		} else if (r < 0.9375) {
			return "l";
		} else if (r < 0.9583333333333334) {
			return "n";
		} else if (r < 0.9791666666666667) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "n") {
		if (r < 0.5619469026548672) {
			return "e";
		} else if (r < 0.7787610619469026) {
			return "i";
		} else if (r < 0.9778761061946902) {
			return "o";
		} else if (r < 0.9911504424778761) {
			return "a";
		} else if (r < 0.995575221238938) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "o") {
		if (r < 0.26244078313000463) {
			return "n";
		} else if (r < 0.39609273466649897) {
			return "m";
		} else if (r < 0.49285205215276906) {
			return "r";
		} else if (r < 0.5839097807403681) {
			return "l";
		} else if (r < 0.6548023309436969) {
			return "p";
		} else if (r < 0.7240179432356517) {
			return "u";
		} else if (r < 0.7658575441244289) {
			return "s";
		} else if (r < 0.8019955561145349) {
			return "c";
		} else if (r < 0.8320127447281265) {
			return "t";
		} else if (r < 0.8582568230411269) {
			return "a";
		} else if (r < 0.8808535613968893) {
			return "e";
		} else if (r < 0.8998868066909823) {
			return "i";
		} else if (r < 0.9177042719993292) {
			return "g";
		} else if (r < 0.9329224835450468) {
			return "d";
		} else if (r < 0.9474699199262148) {
			return "o";
		} else if (r < 0.9579507818723012) {
			return "v";
		} else if (r < 0.9673416341759946) {
			return "b";
		} else if (r < 0.9763132520018446) {
			return "h";
		} else if (r < 0.9844464008720076) {
			return "w";
		} else if (r < 0.9896868318450509) {
			return "f";
		} else if (r < 0.9925795497421708) {
			return "x";
		} else if (r < 0.9950530331614472) {
			return "y";
		} else if (r < 0.996729971072821) {
			return "z";
		} else if (r < 0.9982392151930575) {
			return "q";
		} else if (r < 0.9995807655221566) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "p") {
		if (r < 0.4) {
			return "h";
		} else if (r < 0.5) {
			return "t";
		} else if (r < 0.6) {
			return "o";
		} else if (r < 0.6749999999999999) {
			return "u";
		} else if (r < 0.7499999999999999) {
			return "a";
		} else if (r < 0.7999999999999999) {
			return "i";
		} else if (r < 0.85) {
			return "r";
		} else if (r < 0.875) {
			return "d";
		} else if (r < 0.9) {
			return "l";
		} else if (r < 0.925) {
			return "m";
		} else if (r < 0.9500000000000001) {
			return "s";
		} else if (r < 0.9750000000000001) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "c" && str[str.length-1] == "r") {
		if (r < 0.2863145258103241) {
			return "o";
		} else if (r < 0.49795918367346936) {
			return "a";
		} else if (r < 0.6813925570228091) {
			return "e";
		} else if (r < 0.8577430972388955) {
			return "i";
		} else if (r < 0.9332533013205282) {
			return "u";
		} else if (r < 0.9980792316926771) {
			return "y";
		} else if (r < 0.9984393757503002) {
			return "c";
		} else if (r < 0.9987995198079233) {
			return "w";
		} else if (r < 0.9990396158463386) {
			return "n";
		} else if (r < 0.999279711884754) {
			return "f";
		} else if (r < 0.9995198079231693) {
			return "l";
		} else if (r < 0.999639855942377) {
			return "p";
		} else if (r < 0.9997599039615848) {
			return "s";
		} else if (r < 0.9998799519807925) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "s") {
		if (r < 0.29508196721311475) {
			return "i";
		} else if (r < 0.5737704918032787) {
			return "t";
		} else if (r < 0.6885245901639344) {
			return "o";
		} else if (r < 0.7377049180327868) {
			return "p";
		} else if (r < 0.7868852459016393) {
			return "a";
		} else if (r < 0.819672131147541) {
			return "h";
		} else if (r < 0.8524590163934427) {
			return "m";
		} else if (r < 0.8852459016393444) {
			return "c";
		} else if (r < 0.918032786885246) {
			return "e";
		} else if (r < 0.9344262295081969) {
			return "k";
		} else if (r < 0.9508196721311477) {
			return "n";
		} else if (r < 0.9672131147540985) {
			return "w";
		} else if (r < 0.9836065573770494) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "t") {
		if (r < 0.3880473982483256) {
			return "i";
		} else if (r < 0.5671303451828954) {
			return "o";
		} else if (r < 0.6636785162287481) {
			return "e";
		} else if (r < 0.7582689335394127) {
			return "a";
		} else if (r < 0.8481195260175167) {
			return "r";
		} else if (r < 0.9258114374034003) {
			return "u";
		} else if (r < 0.9544564657393096) {
			return "y";
		} else if (r < 0.9767130345182895) {
			return "s";
		} else if (r < 0.98516228748068) {
			return "l";
		} else if (r < 0.9901081916537867) {
			return "n";
		} else if (r < 0.9940236991241628) {
			return "f";
		} else if (r < 0.9960844925296238) {
			return "m";
		} else if (r < 0.9974240082431736) {
			return "h";
		} else if (r < 0.998145285935085) {
			return "t";
		} else if (r < 0.9985574446161772) {
			return "w";
		} else if (r < 0.9989696032972695) {
			return "d";
		} else if (r < 0.9992787223080887) {
			return "g";
		} else if (r < 0.9995878413189079) {
			return "z";
		} else if (r < 0.9997939206594539) {
			return "p";
		} else if (r < 0.999896960329727) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "u") {
		if (r < 0.38757974222106495) {
			return "l";
		} else if (r < 0.5503189688842598) {
			return "r";
		} else if (r < 0.6490040359328212) {
			return "m";
		} else if (r < 0.7474287202187214) {
			return "s";
		} else if (r < 0.8315323525582605) {
			return "t";
		} else if (r < 0.8717614893894023) {
			return "p";
		} else if (r < 0.9027470381460747) {
			return "n";
		} else if (r < 0.9317797161827887) {
			return "b";
		} else if (r < 0.9461007681291498) {
			return "i";
		} else if (r < 0.9570368441609165) {
			return "d";
		} else if (r < 0.9675823460486915) {
			return "a";
		} else if (r < 0.9761749772165083) {
			return "o";
		} else if (r < 0.9841166514776721) {
			return "e";
		} else if (r < 0.9901054550188777) {
			return "f";
		} else if (r < 0.9950527275094389) {
			return "c";
		} else if (r < 0.9963546413227444) {
			return "u";
		} else if (r < 0.9973961723733888) {
			return "v";
		} else if (r < 0.9980471292800416) {
			return "y";
		} else if (r < 0.9986980861866943) {
			return "j";
		} else if (r < 0.999349043093347) {
			return "g";
		} else if (r < 0.9997396172373387) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "v") {
		return "r";
	} else if (str[str.length-2] == "c" && str[str.length-1] == "w") {
		if (r < 0.2631578947368421) {
			return "o";
		} else if (r < 0.47368421052631576) {
			return "a";
		} else if (r < 0.5789473684210527) {
			return "i";
		} else if (r < 0.6842105263157895) {
			return "e";
		} else if (r < 0.7894736842105263) {
			return "m";
		} else if (r < 0.8947368421052632) {
			return "r";
		} else if (r < 0.9473684210526316) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "x") {
		return "o";
	} else if (str[str.length-2] == "c" && str[str.length-1] == "y") {
		if (r < 0.227292294446836) {
			return "t";
		} else if (r < 0.4128282393456737) {
			return "c";
		} else if (r < 0.5708136030994404) {
			return "s";
		} else if (r < 0.6909169177787344) {
			return "a";
		} else if (r < 0.766250538097288) {
			return "l";
		} else if (r < 0.8200602668962549) {
			return "p";
		} else if (r < 0.8712871287128713) {
			return "n";
		} else if (r < 0.9134739560912613) {
			return "m";
		} else if (r < 0.9332759362892811) {
			return "r";
		} else if (r < 0.9492036160137752) {
			return "o";
		} else if (r < 0.9651312957382694) {
			return "g";
		} else if (r < 0.9767541971588463) {
			return "e";
		} else if (r < 0.9866551872578562) {
			return "b";
		} else if (r < 0.9939733103745156) {
			return "d";
		} else if (r < 0.9956952216960826) {
			return "x";
		} else if (r < 0.9965561773568661) {
			return "w";
		} else if (r < 0.9974171330176496) {
			return "z";
		} else if (r < 0.998278088678433) {
			return "i";
		} else if (r < 0.9991390443392165) {
			return "h";
		} else if (r < 0.9995695221696083) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "c" && str[str.length-1] == "z") {
		if (r < 0.6) {
			return "a";
		} else if (r < 0.9777777777777777) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "a") {
		if (r < 0.1964794843188298) {
			return "e";
		} else if (r < 0.3231684641130532) {
			return "l";
		} else if (r < 0.4341142927978183) {
			return "t";
		} else if (r < 0.5379942977562912) {
			return "n";
		} else if (r < 0.6181975951406967) {
			return "r";
		} else if (r < 0.6810462377587704) {
			return "c";
		} else if (r < 0.7411677203421347) {
			return "b";
		} else if (r < 0.7955869592165614) {
			return "m";
		} else if (r < 0.8269492996157185) {
			return "s";
		} else if (r < 0.8553365563406472) {
			return "i";
		} else if (r < 0.8809966530308666) {
			return "g";
		} else if (r < 0.9060369406222885) {
			return "y";
		} else if (r < 0.9268625263418868) {
			return "p";
		} else if (r < 0.9427296392711046) {
			return "u";
		} else if (r < 0.9535143175901823) {
			return "d";
		} else if (r < 0.9628114540721459) {
			return "w";
		} else if (r < 0.9712408578157928) {
			return "h";
		} else if (r < 0.9786785670013637) {
			return "v";
		} else if (r < 0.9861162761869345) {
			return "z";
		} else if (r < 0.9911987107970747) {
			return "k";
		} else if (r < 0.9960332217676957) {
			return "f";
		} else if (r < 0.9978926490640884) {
			return "x";
		} else if (r < 0.998760381802405) {
			return "o";
		} else if (r < 0.9993801909012026) {
			return "a";
		} else if (r < 0.9998760381802406) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "b") {
		if (r < 0.23249299719887956) {
			return "o";
		} else if (r < 0.45098039215686275) {
			return "a";
		} else if (r < 0.5826330532212886) {
			return "e";
		} else if (r < 0.6946778711484595) {
			return "u";
		} else if (r < 0.8067226890756304) {
			return "r";
		} else if (r < 0.9047619047619049) {
			return "i";
		} else if (r < 0.9719887955182074) {
			return "l";
		} else if (r < 0.9915966386554623) {
			return "y";
		} else if (r < 0.9943977591036416) {
			return "m";
		} else if (r < 0.9971988795518208) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "c") {
		if (r < 0.36363636363636365) {
			return "a";
		} else if (r < 0.5202020202020202) {
			return "o";
		} else if (r < 0.6616161616161617) {
			return "h";
		} else if (r < 0.787878787878788) {
			return "r";
		} else if (r < 0.893939393939394) {
			return "u";
		} else if (r < 0.9797979797979799) {
			return "l";
		} else if (r < 0.98989898989899) {
			return "b";
		} else if (r < 0.994949494949495) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "d") {
		if (r < 0.2870680044593088) {
			return "l";
		} else if (r < 0.5484949832775919) {
			return "e";
		} else if (r < 0.7714604236343366) {
			return "i";
		} else if (r < 0.8333333333333333) {
			return "y";
		} else if (r < 0.8835005574136008) {
			return "a";
		} else if (r < 0.9163879598662206) {
			return "o";
		} else if (r < 0.9420289855072462) {
			return "u";
		} else if (r < 0.96711259754738) {
			return "r";
		} else if (r < 0.9816053511705684) {
			return "h";
		} else if (r < 0.9894091415830544) {
			return "s";
		} else if (r < 0.9927536231884055) {
			return "f";
		} else if (r < 0.9955406911928648) {
			return "n";
		} else if (r < 0.9977703455964323) {
			return "m";
		} else if (r < 0.998885172798216) {
			return "b";
		} else if (r < 0.9994425863991079) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "e") {
		if (r < 0.24732573759888551) {
			return "r";
		} else if (r < 0.36962037912333945) {
			return "n";
		} else if (r < 0.4729588536743121) {
			return "s";
		} else if (r < 0.5497288422309567) {
			return "c";
		} else if (r < 0.6220707497885467) {
			return "d";
		} else if (r < 0.678491467237176) {
			return "m";
		} else if (r < 0.7328722822030947) {
			return "l";
		} else if (r < 0.7767550624409175) {
			return "a";
		} else if (r < 0.8144186277924276) {
			return "f";
		} else if (r < 0.851435394795761) {
			return "p";
		} else if (r < 0.877307328722822) {
			return "t";
		} else if (r < 0.8997462560326385) {
			return "v";
		} else if (r < 0.9156674461415991) {
			return "b";
		} else if (r < 0.9291507040151251) {
			return "e";
		} else if (r < 0.9409920891586646) {
			return "o";
		} else if (r < 0.9523856908303896) {
			return "i";
		} else if (r < 0.962037912333947) {
			return "g";
		} else if (r < 0.9714413652420518) {
			return "h";
		} else if (r < 0.9785063933529031) {
			return "x";
		} else if (r < 0.9854719140255734) {
			return "w";
		} else if (r < 0.9921886661027912) {
			return "u";
		} else if (r < 0.9943778297427733) {
			return "k";
		} else if (r < 0.9960694561918504) {
			return "q";
		} else if (r < 0.997711328921837) {
			return "j";
		} else if (r < 0.998905418180009) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "f") {
		if (r < 0.25146198830409355) {
			return "i";
		} else if (r < 0.48830409356725146) {
			return "u";
		} else if (r < 0.6900584795321637) {
			return "a";
		} else if (r < 0.8128654970760234) {
			return "o";
		} else if (r < 0.9152046783625731) {
			return "l";
		} else if (r < 0.9532163742690059) {
			return "e";
		} else if (r < 0.9883040935672515) {
			return "r";
		} else if (r < 0.9941520467836258) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "g") {
		if (r < 0.6956947162426614) {
			return "e";
		} else if (r < 0.8483365949119374) {
			return "i";
		} else if (r < 0.8816046966731899) {
			return "a";
		} else if (r < 0.913894324853229) {
			return "m";
		} else if (r < 0.9412915851272016) {
			return "r";
		} else if (r < 0.9667318982387476) {
			return "y";
		} else if (r < 0.9794520547945206) {
			return "u";
		} else if (r < 0.9882583170254403) {
			return "l";
		} else if (r < 0.9951076320939335) {
			return "o";
		} else if (r < 0.9970645792563602) {
			return "k";
		} else if (r < 0.9980430528375734) {
			return "h";
		} else if (r < 0.9990215264187867) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "h") {
		if (r < 0.32397408207343414) {
			return "e";
		} else if (r < 0.5809935205183585) {
			return "o";
		} else if (r < 0.8120950323974082) {
			return "a";
		} else if (r < 0.9006479481641468) {
			return "i";
		} else if (r < 0.958963282937365) {
			return "u";
		} else if (r < 0.9762419006479481) {
			return "y";
		} else if (r < 0.9848812095032398) {
			return "s";
		} else if (r < 0.9913606911447085) {
			return "r";
		} else if (r < 0.9956803455723543) {
			return "p";
		} else if (r < 0.9978401727861772) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "i") {
		if (r < 0.2390432018343843) {
			return "s";
		} else if (r < 0.37099379853040804) {
			return "n";
		} else if (r < 0.4984105477096253) {
			return "a";
		} else if (r < 0.600031267913909) {
			return "c";
		} else if (r < 0.6605867945176924) {
			return "t";
		} else if (r < 0.7181197561102715) {
			return "o";
		} else if (r < 0.7591328365209233) {
			return "e";
		} else if (r < 0.7873781854187294) {
			return "v";
		} else if (r < 0.8150502892282036) {
			return "p";
		} else if (r < 0.8420970347594975) {
			return "f";
		} else if (r < 0.8653916306217102) {
			return "g";
		} else if (r < 0.8868622648392307) {
			return "l";
		} else if (r < 0.907707540778571) {
			return "u";
		} else if (r < 0.9271978737818541) {
			return "d";
		} else if (r < 0.9462713012663505) {
			return "z";
		} else if (r < 0.9643545781437282) {
			return "m";
		} else if (r < 0.9763406118088488) {
			return "r";
		} else if (r < 0.9882745322841211) {
			return "b";
		} else if (r < 0.9919224555735057) {
			return "k";
		} else if (r < 0.9949971337745583) {
			return "i";
		} else if (r < 0.9973943405075825) {
			return "h";
		} else if (r < 0.9989056230131846) {
			return "x";
		} else if (r < 0.9992183021522747) {
			return "j";
		} else if (r < 0.9995309812913648) {
			return "w";
		} else if (r < 0.9997915472406065) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "j") {
		if (r < 0.5292096219931272) {
			return "u";
		} else if (r < 0.6769759450171822) {
			return "a";
		} else if (r < 0.8006872852233677) {
			return "e";
		} else if (r < 0.9209621993127148) {
			return "o";
		} else if (r < 0.993127147766323) {
			return "i";
		} else if (r < 0.9965635738831615) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "k") {
		if (r < 0.3111111111111111) {
			return "i";
		} else if (r < 0.6) {
			return "e";
		} else if (r < 0.7333333333333333) {
			return "n";
		} else if (r < 0.8444444444444443) {
			return "a";
		} else if (r < 0.8888888888888887) {
			return "o";
		} else if (r < 0.911111111111111) {
			return "g";
		} else if (r < 0.9333333333333332) {
			return "l";
		} else if (r < 0.9555555555555555) {
			return "m";
		} else if (r < 0.9777777777777777) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "l") {
		if (r < 0.4039867109634552) {
			return "y";
		} else if (r < 0.7887043189368771) {
			return "e";
		} else if (r < 0.9418604651162791) {
			return "i";
		} else if (r < 0.9674418604651163) {
			return "a";
		} else if (r < 0.9916943521594684) {
			return "o";
		} else if (r < 0.9973421926910299) {
			return "u";
		} else if (r < 0.9983388704318936) {
			return "s";
		} else if (r < 0.9990033222591361) {
			return "c";
		} else if (r < 0.9993355481727574) {
			return "r";
		} else if (r < 0.9996677740863786) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "m") {
		if (r < 0.36363636363636365) {
			return "i";
		} else if (r < 0.6347402597402598) {
			return "a";
		} else if (r < 0.8149350649350651) {
			return "o";
		} else if (r < 0.991883116883117) {
			return "e";
		} else if (r < 0.996753246753247) {
			return "u";
		} else if (r < 0.9983766233766236) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "n") {
		if (r < 0.9161931818181818) {
			return "e";
		} else if (r < 0.9495738636363635) {
			return "a";
		} else if (r < 0.9737215909090908) {
			return "o";
		} else if (r < 0.9872159090909091) {
			return "i";
		} else if (r < 0.9928977272727273) {
			return "t";
		} else if (r < 0.9978693181818182) {
			return "u";
		} else if (r < 0.9985795454545455) {
			return "l";
		} else if (r < 0.9992897727272728) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "o") {
		if (r < 0.14318124527350642) {
			return "n";
		} else if (r < 0.27627930426014624) {
			return "m";
		} else if (r < 0.36652382152760277) {
			return "r";
		} else if (r < 0.43912276279304263) {
			return "c";
		} else if (r < 0.5110915049155533) {
			return "l";
		} else if (r < 0.577010335265944) {
			return "s";
		} else if (r < 0.6416687673304764) {
			return "w";
		} else if (r < 0.6986387698512729) {
			return "u";
		} else if (r < 0.7481724224855053) {
			return "p";
		} else if (r < 0.7973279556339802) {
			return "g";
		} else if (r < 0.8342576254096293) {
			return "t";
		} else if (r < 0.8622384673556843) {
			return "o";
		} else if (r < 0.8825308797580035) {
			return "d";
		} else if (r < 0.9004285354171918) {
			return "x";
		} else if (r < 0.9179480715906226) {
			return "e";
		} else if (r < 0.9352155281068818) {
			return "i";
		} else if (r < 0.9519788253087976) {
			return "a";
		} else if (r < 0.9658432064532393) {
			return "b";
		} else if (r < 0.9758003529115201) {
			return "v";
		} else if (r < 0.9826065036551551) {
			return "f";
		} else if (r < 0.9890345349130326) {
			return "z";
		} else if (r < 0.9938240483992943) {
			return "h";
		} else if (r < 0.9969750441139401) {
			return "k";
		} else if (r < 0.9989916813713134) {
			return "y";
		} else if (r < 0.9996218805142426) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "p") {
		if (r < 0.28888888888888886) {
			return "a";
		} else if (r < 0.4666666666666667) {
			return "i";
		} else if (r < 0.6277777777777778) {
			return "r";
		} else if (r < 0.7888888888888889) {
			return "o";
		} else if (r < 0.9166666666666666) {
			return "l";
		} else if (r < 0.9722222222222222) {
			return "e";
		} else if (r < 0.9833333333333333) {
			return "h";
		} else if (r < 0.9944444444444444) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "q") {
		if (r < 0.9090909090909091) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "r") {
		if (r < 0.36979477983662085) {
			return "o";
		} else if (r < 0.6114763897190676) {
			return "a";
		} else if (r < 0.8013548515640566) {
			return "i";
		} else if (r < 0.9115361625821877) {
			return "e";
		} else if (r < 0.965530982267384) {
			return "u";
		} else if (r < 0.9996015142458657) {
			return "y";
		} else if (r < 0.9998007571229329) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "s") {
		if (r < 0.21173469387755103) {
			return "t";
		} else if (r < 0.3698979591836735) {
			return "h";
		} else if (r < 0.48724489795918374) {
			return "m";
		} else if (r < 0.590561224489796) {
			return "o";
		} else if (r < 0.6709183673469389) {
			return "e";
		} else if (r < 0.7423469387755103) {
			return "i";
		} else if (r < 0.8073979591836735) {
			return "p";
		} else if (r < 0.8482142857142858) {
			return "c";
		} else if (r < 0.8775510204081634) {
			return "a";
		} else if (r < 0.9056122448979592) {
			return "w";
		} else if (r < 0.9336734693877551) {
			return "l";
		} else if (r < 0.9540816326530612) {
			return "k";
		} else if (r < 0.9719387755102041) {
			return "u";
		} else if (r < 0.9808673469387755) {
			return "b";
		} else if (r < 0.9872448979591837) {
			return "y";
		} else if (r < 0.9936224489795918) {
			return "n";
		} else if (r < 0.9961734693877551) {
			return "r";
		} else if (r < 0.9987244897959183) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "t") {
		if (r < 0.3880597014925373) {
			return "h";
		} else if (r < 0.5746268656716418) {
			return "i";
		} else if (r < 0.6940298507462687) {
			return "a";
		} else if (r < 0.7835820895522388) {
			return "o";
		} else if (r < 0.8432835820895522) {
			return "e";
		} else if (r < 0.9029850746268656) {
			return "r";
		} else if (r < 0.9477611940298507) {
			return "s";
		} else if (r < 0.9701492537313432) {
			return "u";
		} else if (r < 0.9850746268656716) {
			return "y";
		} else if (r < 0.9925373134328358) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "u") {
		if (r < 0.2768959435626102) {
			return "c";
		} else if (r < 0.44650205761316875) {
			return "l";
		} else if (r < 0.5402704291593181) {
			return "r";
		} else if (r < 0.6302175191064081) {
			return "s";
		} else if (r < 0.6922398589065257) {
			return "n";
		} else if (r < 0.7516166960611407) {
			return "m";
		} else if (r < 0.8086419753086421) {
			return "a";
		} else if (r < 0.8462669018224576) {
			return "o";
		} else if (r < 0.8835978835978838) {
			return "p";
		} else if (r < 0.9100529100529102) {
			return "e";
		} else if (r < 0.9329805996472664) {
			return "b";
		} else if (r < 0.9447383891828337) {
			return "i";
		} else if (r < 0.9547325102880659) {
			return "d";
		} else if (r < 0.9647266313932982) {
			return "t";
		} else if (r < 0.9729570840681953) {
			return "k";
		} else if (r < 0.9803057025279248) {
			return "f";
		} else if (r < 0.987066431510876) {
			return "g";
		} else if (r < 0.9917695473251029) {
			return "v";
		} else if (r < 0.9955908289241623) {
			return "u";
		} else if (r < 0.9970605526161082) {
			return "x";
		} else if (r < 0.9982363315696648) {
			return "y";
		} else if (r < 0.9991181657848324) {
			return "h";
		} else if (r < 0.9994121105232215) {
			return "q";
		} else if (r < 0.9997060552616107) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "v") {
		if (r < 0.514745308310992) {
			return "e";
		} else if (r < 0.7158176943699732) {
			return "i";
		} else if (r < 0.8927613941018767) {
			return "a";
		} else if (r < 0.9973190348525469) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "w") {
		if (r < 0.3360323886639676) {
			return "a";
		} else if (r < 0.5769230769230769) {
			return "o";
		} else if (r < 0.8036437246963563) {
			return "i";
		} else if (r < 0.9534412955465587) {
			return "e";
		} else if (r < 0.9817813765182186) {
			return "r";
		} else if (r < 0.9898785425101214) {
			return "h";
		} else if (r < 0.9939271255060729) {
			return "y";
		} else if (r < 0.9959514170040485) {
			return "t";
		} else if (r < 0.9979757085020242) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "x") {
		return "t";
	} else if (str[str.length-2] == "d" && str[str.length-1] == "y") {
		if (r < 0.26687354538401864) {
			return "n";
		} else if (r < 0.47013188518231186) {
			return "s";
		} else if (r < 0.634600465477114) {
			return "l";
		} else if (r < 0.7059736229635376) {
			return "i";
		} else if (r < 0.7703646237393328) {
			return "m";
		} else if (r < 0.804499612102405) {
			return "e";
		} else if (r < 0.8339798293250582) {
			return "a";
		} else if (r < 0.8626842513576416) {
			return "t";
		} else if (r < 0.8851823118696664) {
			return "p";
		} else if (r < 0.9053529868114818) {
			return "b";
		} else if (r < 0.921644685802948) {
			return "k";
		} else if (r < 0.9332816136539953) {
			return "o";
		} else if (r < 0.9449185415050426) {
			return "w";
		} else if (r < 0.9557796741660202) {
			return "c";
		} else if (r < 0.9658650116369278) {
			return "g";
		} else if (r < 0.9759503491078355) {
			return "f";
		} else if (r < 0.9852598913886734) {
			return "h";
		} else if (r < 0.9937936384794415) {
			return "d";
		} else if (r < 0.9968968192397207) {
			return "r";
		} else if (r < 0.9984484096198604) {
			return "v";
		} else if (r < 0.9992242048099302) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "d" && str[str.length-1] == "z") {
		if (r < 0.4117647058823529) {
			return "o";
		} else if (r < 0.5882352941176471) {
			return "e";
		} else if (r < 0.7352941176470589) {
			return "a";
		} else if (r < 0.8823529411764707) {
			return "i";
		} else if (r < 0.9705882352941178) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "a") {
		if (r < 0.1386250087960031) {
			return "r";
		} else if (r < 0.26563929350503135) {
			return "t";
		} else if (r < 0.3887833368517346) {
			return "d";
		} else if (r < 0.48575047498416724) {
			return "l";
		} else if (r < 0.5748363943424109) {
			return "n";
		} else if (r < 0.662444585180494) {
			return "s";
		} else if (r < 0.7200056294419815) {
			return "e";
		} else if (r < 0.7758074730842305) {
			return "c";
		} else if (r < 0.8266835549926113) {
			return "b";
		} else if (r < 0.8620786714516923) {
			return "m";
		} else if (r < 0.8974737879107733) {
			return "k";
		} else if (r < 0.9197100837379494) {
			return "v";
		} else if (r < 0.938779818450496) {
			return "u";
		} else if (r < 0.9574977130391948) {
			return "p";
		} else if (r < 0.9733305186123424) {
			return "f";
		} else if (r < 0.9881781718387164) {
			return "g";
		} else if (r < 0.9929631975230454) {
			return "w";
		} else if (r < 0.9955668144395186) {
			return "z";
		} else if (r < 0.9973260150587572) {
			return "h";
		} else if (r < 0.9983815354303004) {
			return "i";
		} else if (r < 0.9991555837027654) {
			return "x";
		} else if (r < 0.9994370558018435) {
			return "o";
		} else if (r < 0.9996481598761522) {
			return "q";
		} else if (r < 0.9998592639504609) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "b") {
		if (r < 0.21581054036024017) {
			return "r";
		} else if (r < 0.3855903935957305) {
			return "o";
		} else if (r < 0.5460306871247498) {
			return "e";
		} else if (r < 0.6967978652434956) {
			return "a";
		} else if (r < 0.8102068045363575) {
			return "u";
		} else if (r < 0.8969312875250166) {
			return "i";
		} else if (r < 0.9452968645763842) {
			return "l";
		} else if (r < 0.9679786524349565) {
			return "b";
		} else if (r < 0.9783188792528351) {
			return "t";
		} else if (r < 0.9846564376250833) {
			return "s";
		} else if (r < 0.9886591060707137) {
			return "y";
		} else if (r < 0.9923282188125416) {
			return "d";
		} else if (r < 0.9943295530353569) {
			return "c";
		} else if (r < 0.9963308872581721) {
			return "f";
		} else if (r < 0.9979986657771848) {
			return "w";
		} else if (r < 0.9986657771847899) {
			return "k";
		} else if (r < 0.999332888592395) {
			return "m";
		} else if (r < 0.9996664442961976) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "c") {
		if (r < 0.33229007633587787) {
			return "t";
		} else if (r < 0.4748854961832061) {
			return "o";
		} else if (r < 0.5602290076335877) {
			return "i";
		} else if (r < 0.6443511450381679) {
			return "a";
		} else if (r < 0.7227480916030534) {
			return "h";
		} else if (r < 0.783969465648855) {
			return "e";
		} else if (r < 0.8437404580152672) {
			return "u";
		} else if (r < 0.8903053435114504) {
			return "r";
		} else if (r < 0.9358015267175572) {
			return "k";
		} else if (r < 0.969236641221374) {
			return "l";
		} else if (r < 0.9823664122137404) {
			return "c";
		} else if (r < 0.9906870229007634) {
			return "y";
		} else if (r < 0.993587786259542) {
			return "s";
		} else if (r < 0.9963358778625955) {
			return "d";
		} else if (r < 0.9977862595419847) {
			return "p";
		} else if (r < 0.9984732824427481) {
			return "b";
		} else if (r < 0.9990076335877863) {
			return "n";
		} else if (r < 0.9994656488549619) {
			return "z";
		} else if (r < 0.9996946564885497) {
			return "q";
		} else if (r < 0.9998473282442749) {
			return "g";
		} else if (r < 0.9999236641221375) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "d") {
		if (r < 0.2393863717445594) {
			return "i";
		} else if (r < 0.376144606968724) {
			return "e";
		} else if (r < 0.49994053989772863) {
			return "l";
		} else if (r < 0.6198121060768225) {
			return "n";
		} else if (r < 0.686169580211678) {
			return "a";
		} else if (r < 0.7505054108693067) {
			return "o";
		} else if (r < 0.8129385182542513) {
			return "u";
		} else if (r < 0.8666904507075751) {
			return "r";
		} else if (r < 0.9022475918658579) {
			return "g";
		} else if (r < 0.9305506005470329) {
			return "s";
		} else if (r < 0.957307646569152) {
			return "d";
		} else if (r < 0.9650374598644309) {
			return "y";
		} else if (r < 0.9727672731597098) {
			return "b";
		} else if (r < 0.9787132833868474) {
			return "f";
		} else if (r < 0.9845403734094422) {
			return "w";
		} else if (r < 0.9885836603638958) {
			return "m";
		} else if (r < 0.99179450588655) {
			return "h";
		} else if (r < 0.9945296705910334) {
			return "c";
		} else if (r < 0.9966702342728029) {
			return "t";
		} else if (r < 0.9986918777500297) {
			return "p";
		} else if (r < 0.9992864787727435) {
			return "j";
		} else if (r < 0.9997621595909144) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "e") {
		if (r < 0.1702195354756602) {
			return "d";
		} else if (r < 0.30671333121221767) {
			return "n";
		} else if (r < 0.4132993954820236) {
			return "r";
		} else if (r < 0.5028635062042635) {
			return "p";
		} else if (r < 0.5874960229080497) {
			return "l";
		} else if (r < 0.6692650334075725) {
			return "s";
		} else if (r < 0.7481705377028318) {
			return "t";
		} else if (r < 0.7955774737511933) {
			return "m";
		} else if (r < 0.82978046452434) {
			return "k";
		} else if (r < 0.8579382755329304) {
			return "c";
		} else if (r < 0.8830734966592428) {
			return "x";
		} else if (r < 0.9042316258351893) {
			return "z";
		} else if (r < 0.9245943366210627) {
			return "v";
		} else if (r < 0.9417753738466433) {
			return "i";
		} else if (r < 0.955933821189946) {
			return "f";
		} else if (r < 0.9686605154311169) {
			return "b";
		} else if (r < 0.9774101177219219) {
			return "w";
		} else if (r < 0.9844097995545659) {
			return "a";
		} else if (r < 0.9898186446070635) {
			return "h";
		} else if (r < 0.994432071269488) {
			return "g";
		} else if (r < 0.9963410754056636) {
			return "q";
		} else if (r < 0.9976137448297807) {
			return "y";
		} else if (r < 0.9987273305758831) {
			return "j";
		} else if (r < 0.9993636652879417) {
			return "u";
		} else if (r < 0.999681832643971) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "f") {
		if (r < 0.17536704730831973) {
			return "i";
		} else if (r < 0.3433931484502447) {
			return "u";
		} else if (r < 0.47634584013050574) {
			return "e";
		} else if (r < 0.5864600326264274) {
			return "o";
		} else if (r < 0.6848830886351278) {
			return "l";
		} else if (r < 0.7824904839586733) {
			return "f";
		} else if (r < 0.8719412724306689) {
			return "a";
		} else if (r < 0.9420880913539967) {
			return "r";
		} else if (r < 0.9711799891245242) {
			return "t";
		} else if (r < 0.9823273518216422) {
			return "y";
		} else if (r < 0.9918433931484503) {
			return "s";
		} else if (r < 0.9940184883088635) {
			return "d";
		} else if (r < 0.9953779227841218) {
			return "c";
		} else if (r < 0.9964654703643285) {
			return "n";
		} else if (r < 0.9972811310494835) {
			return "w";
		} else if (r < 0.9978249048395867) {
			return "b";
		} else if (r < 0.99836867862969) {
			return "h";
		} else if (r < 0.9989124524197933) {
			return "p";
		} else if (r < 0.9994562262098966) {
			return "m";
		} else if (r < 0.9997281131049482) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "g") {
		if (r < 0.250546780072904) {
			return "a";
		} else if (r < 0.3861482381530984) {
			return "i";
		} else if (r < 0.5215066828675576) {
			return "r";
		} else if (r < 0.6417982989064398) {
			return "e";
		} else if (r < 0.7397326852976913) {
			return "o";
		} else if (r < 0.8160388821385176) {
			return "u";
		} else if (r < 0.8636695018226003) {
			return "l";
		} else if (r < 0.9059538274605103) {
			return "g";
		} else if (r < 0.943134872417983) {
			return "m";
		} else if (r < 0.966221142162819) {
			return "n";
		} else if (r < 0.9781287970838396) {
			return "y";
		} else if (r < 0.9883353584447144) {
			return "s";
		} else if (r < 0.9936816524908869) {
			return "h";
		} else if (r < 0.9963547995139732) {
			return "b";
		} else if (r < 0.9973268529769137) {
			return "p";
		} else if (r < 0.998055893074119) {
			return "t";
		} else if (r < 0.9987849331713243) {
			return "w";
		} else if (r < 0.9992709599027946) {
			return "f";
		} else if (r < 0.9995139732685296) {
			return "k";
		} else if (r < 0.9997569866342647) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "h") {
		if (r < 0.35086455331412103) {
			return "e";
		} else if (r < 0.5929394812680115) {
			return "o";
		} else if (r < 0.7593659942363112) {
			return "a";
		} else if (r < 0.8551873198847262) {
			return "y";
		} else if (r < 0.9077809798270893) {
			return "i";
		} else if (r < 0.9510086455331411) {
			return "u";
		} else if (r < 0.9646974063400575) {
			return "r";
		} else if (r < 0.9747838616714696) {
			return "s";
		} else if (r < 0.98342939481268) {
			return "m";
		} else if (r < 0.9906340057636887) {
			return "n";
		} else if (r < 0.9949567723342938) {
			return "l";
		} else if (r < 0.9971181556195964) {
			return "t";
		} else if (r < 0.9978386167146972) {
			return "g";
		} else if (r < 0.998559077809798) {
			return "k";
		} else if (r < 0.9992795389048988) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "i") {
		if (r < 0.29077177248052866) {
			return "n";
		} else if (r < 0.4380457871135237) {
			return "s";
		} else if (r < 0.5407127684682558) {
			return "g";
		} else if (r < 0.6190700967665801) {
			return "t";
		} else if (r < 0.6731177720084965) {
			return "d";
		} else if (r < 0.7191409015813075) {
			return "r";
		} else if (r < 0.7602076941232003) {
			return "l";
		} else if (r < 0.7989143261741798) {
			return "c";
		} else if (r < 0.837384942176068) {
			return "m";
		} else if (r < 0.8727873495397687) {
			return "v";
		} else if (r < 0.9006372433325466) {
			return "a";
		} else if (r < 0.9261269766344111) {
			return "o";
		} else if (r < 0.9487845173471796) {
			return "f";
		} else if (r < 0.9667217370781214) {
			return "z";
		} else if (r < 0.9752183148454096) {
			return "k";
		} else if (r < 0.9834788765636064) {
			return "p";
		} else if (r < 0.9905593580363465) {
			return "e";
		} else if (r < 0.9936275666745339) {
			return "b";
		} else if (r < 0.9959877271654473) {
			return "i";
		} else if (r < 0.9971678074109039) {
			return "u";
		} else if (r < 0.9983478876563606) {
			return "x";
		} else if (r < 0.999291951852726) {
			return "j";
		} else if (r < 0.9997639839509087) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "j") {
		if (r < 0.36455696202531646) {
			return "u";
		} else if (r < 0.6303797468354431) {
			return "e";
		} else if (r < 0.810126582278481) {
			return "o";
		} else if (r < 0.9645569620253165) {
			return "a";
		} else if (r < 0.9949367088607596) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "k") {
		if (r < 0.23205342237061768) {
			return "e";
		} else if (r < 0.4557595993322203) {
			return "i";
		} else if (r < 0.5642737896494157) {
			return "n";
		} else if (r < 0.667779632721202) {
			return "a";
		} else if (r < 0.7245409015025042) {
			return "s";
		} else if (r < 0.7779632721202003) {
			return "t";
		} else if (r < 0.8247078464106845) {
			return "k";
		} else if (r < 0.8647746243739566) {
			return "l";
		} else if (r < 0.8931552587646077) {
			return "h";
		} else if (r < 0.9198664440734557) {
			return "o";
		} else if (r < 0.9465776293823038) {
			return "y";
		} else if (r < 0.9599332220367278) {
			return "p";
		} else if (r < 0.9699499165275458) {
			return "b";
		} else if (r < 0.9782971619365608) {
			return "u";
		} else if (r < 0.9849749582637728) {
			return "f";
		} else if (r < 0.9899833055091818) {
			return "d";
		} else if (r < 0.9933222036727878) {
			return "m";
		} else if (r < 0.9966611018363938) {
			return "r";
		} else if (r < 0.9983305509181968) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "l") {
		if (r < 0.20619512461144135) {
			return "l";
		} else if (r < 0.39919288869498826) {
			return "e";
		} else if (r < 0.5740851829634073) {
			return "i";
		} else if (r < 0.6929704968097289) {
			return "y";
		} else if (r < 0.7777717183835959) {
			return "a";
		} else if (r < 0.8415226045699951) {
			return "o";
		} else if (r < 0.8704804493646725) {
			return "s";
		} else if (r < 0.8938757703004854) {
			return "d";
		} else if (r < 0.9162894693788515) {
			return "t";
		} else if (r < 0.9329770409554452) {
			return "u";
		} else if (r < 0.9452473141735288) {
			return "m";
		} else if (r < 0.9566450346294376) {
			return "p";
		} else if (r < 0.9665157877515405) {
			return "f";
		} else if (r < 0.9748595735398373) {
			return "v";
		} else if (r < 0.9808583737797893) {
			return "c";
		} else if (r < 0.9852756721382995) {
			return "b";
		} else if (r < 0.988656814091727) {
			return "w";
		} else if (r < 0.9914380760211593) {
			return "h";
		} else if (r < 0.9942193379505916) {
			return "k";
		} else if (r < 0.9962371162131209) {
			return "r";
		} else if (r < 0.9978186180945628) {
			return "g";
		} else if (r < 0.9989638435949173) {
			return "n";
		} else if (r < 0.9996727927141844) {
			return "z";
		} else if (r < 0.9999454654523641) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "m") {
		if (r < 0.300400641025641) {
			return "i";
		} else if (r < 0.46546474358974355) {
			return "a";
		} else if (r < 0.6304487179487179) {
			return "e";
		} else if (r < 0.7646634615384615) {
			return "o";
		} else if (r < 0.8516826923076923) {
			return "p";
		} else if (r < 0.9247596153846154) {
			return "b";
		} else if (r < 0.9485576923076923) {
			return "u";
		} else if (r < 0.9648237179487179) {
			return "m";
		} else if (r < 0.9766025641025641) {
			return "n";
		} else if (r < 0.9853365384615385) {
			return "s";
		} else if (r < 0.9904647435897436) {
			return "y";
		} else if (r < 0.9938301282051282) {
			return "l";
		} else if (r < 0.9951121794871794) {
			return "f";
		} else if (r < 0.9963942307692307) {
			return "v";
		} else if (r < 0.9975160256410256) {
			return "d";
		} else if (r < 0.9983173076923076) {
			return "c";
		} else if (r < 0.9990384615384615) {
			return "w";
		} else if (r < 0.9993589743589744) {
			return "r";
		} else if (r < 0.9995192307692308) {
			return "z";
		} else if (r < 0.9996794871794872) {
			return "h";
		} else if (r < 0.9998397435897436) {
			return "t";
		} else if (r < 0.9999198717948719) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "n") {
		if (r < 0.31793173141702225) {
			return "t";
		} else if (r < 0.4799573321356389) {
			return "e";
		} else if (r < 0.5625982483718841) {
			return "c";
		} else if (r < 0.6407758814282506) {
			return "d";
		} else if (r < 0.7184201661801033) {
			return "i";
		} else if (r < 0.78601504603638) {
			return "s";
		} else if (r < 0.8472939591286772) {
			return "o";
		} else if (r < 0.8913934426229507) {
			return "a";
		} else if (r < 0.9128677296204805) {
			return "n";
		} else if (r < 0.9297103076577587) {
			return "g";
		} else if (r < 0.9439703570626543) {
			return "u";
		} else if (r < 0.9534864136537166) {
			return "z";
		} else if (r < 0.9612059285874691) {
			return "y";
		} else if (r < 0.9688412306310352) {
			return "l";
		} else if (r < 0.9750168425780372) {
			return "f";
		} else if (r < 0.9795643386481023) {
			return "h";
		} else if (r < 0.9838591960476083) {
			return "r";
		} else if (r < 0.9875645632158095) {
			return "v";
		} else if (r < 0.9906523691893105) {
			return "w";
		} else if (r < 0.9930103301145295) {
			return "b";
		} else if (r < 0.9953121491129576) {
			return "m";
		} else if (r < 0.9971086907702673) {
			return "j";
		} else if (r < 0.9983718841230632) {
			return "k";
		} else if (r < 0.9995508645856727) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "o") {
		if (r < 0.24815770081061164) {
			return "u";
		} else if (r < 0.3610906411201179) {
			return "l";
		} else if (r < 0.4622328666175387) {
			return "p";
		} else if (r < 0.5348194546794399) {
			return "n";
		} else if (r < 0.5943257184966838) {
			return "r";
		} else if (r < 0.6534635224760501) {
			return "s";
		} else if (r < 0.7083640383198231) {
			return "c";
		} else if (r < 0.7627118644067796) {
			return "m";
		} else if (r < 0.8157700810611643) {
			return "t";
		} else if (r < 0.8677229182019159) {
			return "g";
		} else if (r < 0.8975681650700074) {
			return "d";
		} else if (r < 0.9202284450994842) {
			return "b";
		} else if (r < 0.9364406779661018) {
			return "f";
		} else if (r < 0.9515475313190863) {
			return "i";
		} else if (r < 0.9603905674281504) {
			return "e";
		} else if (r < 0.9690493736182757) {
			return "a";
		} else if (r < 0.9767870302137068) {
			return "x";
		} else if (r < 0.9826823876197496) {
			return "v";
		} else if (r < 0.9876565954310982) {
			return "z";
		} else if (r < 0.9922623434045691) {
			return "h";
		} else if (r < 0.9964996315401623) {
			return "w";
		} else if (r < 0.9983419307295507) {
			return "k";
		} else if (r < 0.9992630803242448) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "p") {
		if (r < 0.178698224852071) {
			return "i";
		} else if (r < 0.35325443786982247) {
			return "h";
		} else if (r < 0.5089940828402366) {
			return "t";
		} else if (r < 0.6081656804733727) {
			return "r";
		} else if (r < 0.7042603550295857) {
			return "a";
		} else if (r < 0.7826035502958579) {
			return "e";
		} else if (r < 0.8531360946745562) {
			return "o";
		} else if (r < 0.8958579881656805) {
			return "l";
		} else if (r < 0.9353846153846155) {
			return "u";
		} else if (r < 0.9666272189349113) {
			return "s";
		} else if (r < 0.9803550295857989) {
			return "p";
		} else if (r < 0.9841420118343196) {
			return "y";
		} else if (r < 0.9868639053254439) {
			return "f";
		} else if (r < 0.9895857988165682) {
			return "w";
		} else if (r < 0.9920710059171599) {
			return "m";
		} else if (r < 0.9939644970414203) {
			return "d";
		} else if (r < 0.9957396449704145) {
			return "b";
		} else if (r < 0.9972781065088759) {
			return "n";
		} else if (r < 0.9983431952662724) {
			return "g";
		} else if (r < 0.9994082840236688) {
			return "c";
		} else if (r < 0.9998816568047338) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "q") {
		if (r < 0.9902597402597403) {
			return "u";
		} else if (r < 0.9924242424242424) {
			return "w";
		} else if (r < 0.9945887445887446) {
			return "e";
		} else if (r < 0.9956709956709957) {
			return "p";
		} else if (r < 0.9967532467532468) {
			return "d";
		} else if (r < 0.997835497835498) {
			return "f";
		} else if (r < 0.9989177489177491) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "r") {
		if (r < 0.15968637572344752) {
			return "s";
		} else if (r < 0.30130611606444546) {
			return "i";
		} else if (r < 0.3981307680275301) {
			return "a";
		} else if (r < 0.4827350226810574) {
			return "o";
		} else if (r < 0.5639175660879087) {
			return "e";
		} else if (r < 0.624393868293446) {
			return "m";
		} else if (r < 0.6681917722508994) {
			return "c";
		} else if (r < 0.7089981229469733) {
			return "t";
		} else if (r < 0.7450922884404818) {
			return "r";
		} else if (r < 0.7782926638510872) {
			return "n";
		} else if (r < 0.8057445643672768) {
			return "y";
		} else if (r < 0.8313585171281089) {
			return "p";
		} else if (r < 0.8569333646175505) {
			return "l";
		} else if (r < 0.8806702643516346) {
			return "v";
		} else if (r < 0.9023345847020179) {
			return "g";
		} else if (r < 0.92392069450962) {
			return "b";
		} else if (r < 0.9440794619114657) {
			return "f";
		} else if (r < 0.9628499921789458) {
			return "d";
		} else if (r < 0.9744642577819491) {
			return "w";
		} else if (r < 0.9829109964023152) {
			return "u";
		} else if (r < 0.9910448928515565) {
			return "h";
		} else if (r < 0.9951118410761772) {
			return "k";
		} else if (r < 0.9981033943375569) {
			return "j";
		} else if (r < 0.9991005787580168) {
			return "q";
		} else if (r < 0.9999804473643049) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "s") {
		if (r < 0.513263501564413) {
			return "s";
		} else if (r < 0.7064004897292886) {
			return "t";
		} else if (r < 0.7772071826962319) {
			return "i";
		} else if (r < 0.8207386750102028) {
			return "c";
		} else if (r < 0.855495850904639) {
			return "e";
		} else if (r < 0.8863760032648621) {
			return "o";
		} else if (r < 0.9137532308529454) {
			return "p";
		} else if (r < 0.9351108692694873) {
			return "h";
		} else if (r < 0.9505169364712286) {
			return "u";
		} else if (r < 0.9624540878792003) {
			return "a";
		} else if (r < 0.9743572303088017) {
			return "m";
		} else if (r < 0.9827914569446335) {
			return "q";
		} else if (r < 0.9862603727384031) {
			return "y";
		} else if (r < 0.9890150999863965) {
			return "k";
		} else if (r < 0.9915997823425385) {
			return "b";
		} else if (r < 0.9940824377635696) {
			return "w";
		} else if (r < 0.9964970752278602) {
			return "l";
		} else if (r < 0.9980954972112639) {
			return "n";
		} else if (r < 0.9989457216705211) {
			return "d";
		} else if (r < 0.9993198204325943) {
			return "f";
		} else if (r < 0.9995918922595566) {
			return "r";
		} else if (r < 0.9998299551081486) {
			return "g";
		} else if (r < 0.9999659910216299) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "t") {
		if (r < 0.17985700197238658) {
			return "e";
		} else if (r < 0.35342702169625245) {
			return "i";
		} else if (r < 0.5072731755424063) {
			return "r";
		} else if (r < 0.6306706114398422) {
			return "a";
		} else if (r < 0.7230029585798816) {
			return "t";
		} else if (r < 0.8119452662721893) {
			return "h";
		} else if (r < 0.8754930966469427) {
			return "o";
		} else if (r < 0.915680473372781) {
			return "s";
		} else if (r < 0.9365754437869822) {
			return "y";
		} else if (r < 0.9535872781065088) {
			return "u";
		} else if (r < 0.9652366863905325) {
			return "c";
		} else if (r < 0.9749753451676528) {
			return "l";
		} else if (r < 0.9816937869822485) {
			return "w";
		} else if (r < 0.9858234714003945) {
			return "m";
		} else if (r < 0.9894600591715976) {
			return "f";
		} else if (r < 0.9921720907297831) {
			return "b";
		} else if (r < 0.9948841222879685) {
			return "n";
		} else if (r < 0.9971646942800789) {
			return "z";
		} else if (r < 0.9982125246548323) {
			return "p";
		} else if (r < 0.9989521696252466) {
			return "k";
		} else if (r < 0.9995685404339251) {
			return "d";
		} else if (r < 0.9997534516765286) {
			return "v";
		} else if (r < 0.9998767258382644) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "u") {
		if (r < 0.25696316262353996) {
			return "r";
		} else if (r < 0.4773135669362084) {
			return "d";
		} else if (r < 0.5831087151841868) {
			return "t";
		} else if (r < 0.6855345911949685) {
			return "m";
		} else if (r < 0.7632524707996405) {
			return "s";
		} else if (r < 0.8393980233602875) {
			return "c";
		} else if (r < 0.8843216531895777) {
			return "p";
		} else if (r < 0.9065588499550763) {
			return "n";
		} else if (r < 0.9245283018867924) {
			return "g";
		} else if (r < 0.9413746630727762) {
			return "k";
		} else if (r < 0.9564240790655884) {
			return "l";
		} else if (r < 0.9654088050314464) {
			return "v";
		} else if (r < 0.9734950584007187) {
			return "x";
		} else if (r < 0.9788858939802335) {
			return "e";
		} else if (r < 0.983602875112309) {
			return "i";
		} else if (r < 0.9878706199460916) {
			return "o";
		} else if (r < 0.9916891284815813) {
			return "h";
		} else if (r < 0.995058400718778) {
			return "b";
		} else if (r < 0.997529200359389) {
			return "a";
		} else if (r < 0.9993261455525606) {
			return "z";
		} else if (r < 0.9997753818508535) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "v") {
		if (r < 0.39316493313521544) {
			return "e";
		} else if (r < 0.6392273402674591) {
			return "i";
		} else if (r < 0.8210995542347697) {
			return "a";
		} else if (r < 0.9667161961367013) {
			return "o";
		} else if (r < 0.9803863298662704) {
			return "u";
		} else if (r < 0.988112927191679) {
			return "r";
		} else if (r < 0.9925705794947993) {
			return "y";
		} else if (r < 0.9943536404160475) {
			return "v";
		} else if (r < 0.9961367013372956) {
			return "n";
		} else if (r < 0.9976225854383357) {
			return "s";
		} else if (r < 0.9985141158989598) {
			return "z";
		} else if (r < 0.9988112927191678) {
			return "c";
		} else if (r < 0.9991084695393758) {
			return "w";
		} else if (r < 0.9994056463595838) {
			return "g";
		} else if (r < 0.9997028231797919) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "w") {
		if (r < 0.22006472491909385) {
			return "a";
		} else if (r < 0.39805825242718446) {
			return "o";
		} else if (r < 0.5677300046232086) {
			return "i";
		} else if (r < 0.7313915857605179) {
			return "e";
		} else if (r < 0.8072122052704578) {
			return "s";
		} else if (r < 0.8418862690707352) {
			return "h";
		} else if (r < 0.8737864077669903) {
			return "r";
		} else if (r < 0.8945908460471568) {
			return "l";
		} else if (r < 0.9103097549699491) {
			return "d";
		} else if (r < 0.9246417013407304) {
			return "t";
		} else if (r < 0.93666204345816) {
			return "n";
		} else if (r < 0.948220064724919) {
			return "b";
		} else if (r < 0.958391123439667) {
			return "f";
		} else if (r < 0.9680998613037447) {
			return "m";
		} else if (r < 0.9754969949144705) {
			return "y";
		} else if (r < 0.982431807674526) {
			return "p";
		} else if (r < 0.9884419787332407) {
			return "g";
		} else if (r < 0.9939898289412851) {
			return "c";
		} else if (r < 0.9981507165973184) {
			return "w";
		} else if (r < 0.9995376791493294) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "x") {
		if (r < 0.2100502512562814) {
			return "t";
		} else if (r < 0.4022110552763819) {
			return "p";
		} else if (r < 0.5195979899497487) {
			return "c";
		} else if (r < 0.6293467336683417) {
			return "a";
		} else if (r < 0.7362814070351759) {
			return "i";
		} else if (r < 0.8122613065326633) {
			return "e";
		} else if (r < 0.8808040201005025) {
			return "o";
		} else if (r < 0.9244221105527638) {
			return "u";
		} else if (r < 0.9557788944723618) {
			return "h";
		} else if (r < 0.971859296482412) {
			return "s";
		} else if (r < 0.9841206030150753) {
			return "y";
		} else if (r < 0.9881407035175879) {
			return "f";
		} else if (r < 0.9913567839195979) {
			return "l";
		} else if (r < 0.9939698492462311) {
			return "q";
		} else if (r < 0.9959798994974874) {
			return "d";
		} else if (r < 0.9971859296482413) {
			return "m";
		} else if (r < 0.9983919597989951) {
			return "r";
		} else if (r < 0.9991959798994976) {
			return "n";
		} else if (r < 0.9995979899497489) {
			return "g";
		} else if (r < 0.9997989949748746) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "y") {
		if (r < 0.28828058169375537) {
			return "e";
		} else if (r < 0.49443969204448246) {
			return "s";
		} else if (r < 0.5782720273738238) {
			return "a";
		} else if (r < 0.6552609067579127) {
			return "i";
		} else if (r < 0.6988879384088964) {
			return "l";
		} else if (r < 0.7382378100940974) {
			return "n";
		} else if (r < 0.7775876817792984) {
			return "m";
		} else if (r < 0.8092386655260905) {
			return "b";
		} else if (r < 0.840034217279726) {
			return "o";
		} else if (r < 0.868263473053892) {
			return "f";
		} else if (r < 0.8956372968349013) {
			return "w";
		} else if (r < 0.918733960650128) {
			return "d";
		} else if (r < 0.9401197604790417) {
			return "r";
		} else if (r < 0.9572284003421725) {
			return "p";
		} else if (r < 0.9692044482463641) {
			return "h";
		} else if (r < 0.9803250641573992) {
			return "c";
		} else if (r < 0.986313088109495) {
			return "g";
		} else if (r < 0.9923011120615909) {
			return "t";
		} else if (r < 0.9940119760479039) {
			return "k";
		} else if (r < 0.995722840034217) {
			return "u";
		} else if (r < 0.99743370402053) {
			return "v";
		} else if (r < 0.9982891360136865) {
			return "x";
		} else if (r < 0.999144568006843) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "e" && str[str.length-1] == "z") {
		if (r < 0.2773722627737226) {
			return "e";
		} else if (r < 0.49635036496350365) {
			return "i";
		} else if (r < 0.6277372262773723) {
			return "z";
		} else if (r < 0.7493917274939172) {
			return "o";
		} else if (r < 0.8588807785888077) {
			return "a";
		} else if (r < 0.8953771289537712) {
			return "y";
		} else if (r < 0.9197080291970802) {
			return "u";
		} else if (r < 0.9343065693430656) {
			return "c";
		} else if (r < 0.9440389294403891) {
			return "r";
		} else if (r < 0.9537712895377127) {
			return "l";
		} else if (r < 0.9635036496350363) {
			return "q";
		} else if (r < 0.9732360097323599) {
			return "v";
		} else if (r < 0.9781021897810217) {
			return "b";
		} else if (r < 0.9829683698296835) {
			return "d";
		} else if (r < 0.9878345498783453) {
			return "k";
		} else if (r < 0.9902676399026762) {
			return "p";
		} else if (r < 0.9927007299270071) {
			return "h";
		} else if (r < 0.995133819951338) {
			return "m";
		} else if (r < 0.9975669099756689) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "a") {
		if (r < 0.1930173147885325) {
			return "c";
		} else if (r < 0.31478853250070965) {
			return "r";
		} else if (r < 0.42038035764973036) {
			return "l";
		} else if (r < 0.5197275049673574) {
			return "n";
		} else if (r < 0.610275333522566) {
			return "s";
		} else if (r < 0.6991200681237582) {
			return "t";
		} else if (r < 0.7567414135679819) {
			return "i";
		} else if (r < 0.8069826852114675) {
			return "m";
		} else if (r < 0.8498438830542152) {
			return "u";
		} else if (r < 0.8873119500425775) {
			return "b";
		} else if (r < 0.9196707351688903) {
			return "v";
		} else if (r < 0.9392563156400796) {
			return "g";
		} else if (r < 0.9585580471189329) {
			return "d";
		} else if (r < 0.9665058189043431) {
			return "k";
		} else if (r < 0.9738858927050811) {
			return "w";
		} else if (r < 0.9795628725518026) {
			return "e";
		} else if (r < 0.9838206074368437) {
			return "h";
		} else if (r < 0.9880783423218849) {
			return "y";
		} else if (r < 0.9909168322452456) {
			return "q";
		} else if (r < 0.9937553221686064) {
			return "z";
		} else if (r < 0.9957422651149589) {
			return "x";
		} else if (r < 0.9971615100766392) {
			return "f";
		} else if (r < 0.9980130570536474) {
			return "a";
		} else if (r < 0.9988646040306556) {
			return "p";
		} else if (r < 0.9994323020153277) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "b") {
		if (r < 0.2826086956521739) {
			return "o";
		} else if (r < 0.5434782608695652) {
			return "a";
		} else if (r < 0.7608695652173912) {
			return "e";
		} else if (r < 0.8913043478260869) {
			return "i";
		} else if (r < 0.9347826086956521) {
			return "u";
		} else if (r < 0.9782608695652173) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "c") {
		if (r < 0.35135135135135137) {
			return "o";
		} else if (r < 0.6216216216216217) {
			return "a";
		} else if (r < 0.7297297297297298) {
			return "h";
		} else if (r < 0.810810810810811) {
			return "u";
		} else if (r < 0.864864864864865) {
			return "y";
		} else if (r < 0.9189189189189191) {
			return "i";
		} else if (r < 0.945945945945946) {
			return "p";
		} else if (r < 0.972972972972973) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "d") {
		if (r < 0.6551724137931034) {
			return "o";
		} else if (r < 0.7586206896551724) {
			return "a";
		} else if (r < 0.8275862068965517) {
			return "n";
		} else if (r < 0.896551724137931) {
			return "u";
		} else if (r < 0.9310344827586207) {
			return "e";
		} else if (r < 0.9655172413793103) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "e") {
		if (r < 0.3912350597609562) {
			return "r";
		} else if (r < 0.4846613545816733) {
			return "c";
		} else if (r < 0.55398406374502) {
			return "l";
		} else if (r < 0.6209163346613547) {
			return "s";
		} else if (r < 0.6876494023904383) {
			return "n";
		} else if (r < 0.7438247011952192) {
			return "a";
		} else if (r < 0.7968127490039841) {
			return "d";
		} else if (r < 0.8396414342629482) {
			return "t";
		} else if (r < 0.8802788844621514) {
			return "e";
		} else if (r < 0.9093625498007968) {
			return "m";
		} else if (r < 0.9312749003984063) {
			return "u";
		} else if (r < 0.9529880478087649) {
			return "i";
		} else if (r < 0.9613545816733067) {
			return "b";
		} else if (r < 0.9695219123505975) {
			return "v";
		} else if (r < 0.9774900398406373) {
			return "o";
		} else if (r < 0.9840637450199202) {
			return "w";
		} else if (r < 0.9878486055776892) {
			return "g";
		} else if (r < 0.9910358565737051) {
			return "f";
		} else if (r < 0.993227091633466) {
			return "x";
		} else if (r < 0.9954183266932269) {
			return "z";
		} else if (r < 0.997011952191235) {
			return "h";
		} else if (r < 0.998605577689243) {
			return "y";
		} else if (r < 0.9996015936254979) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "f") {
		if (r < 0.2910662824207493) {
			return "e";
		} else if (r < 0.5612391930835735) {
			return "i";
		} else if (r < 0.6902017291066282) {
			return "l";
		} else if (r < 0.7489193083573487) {
			return "r";
		} else if (r < 0.8054755043227665) {
			return "s";
		} else if (r < 0.8591498559077809) {
			return "u";
		} else if (r < 0.9048991354466858) {
			return "o";
		} else if (r < 0.9477665706051872) {
			return "a";
		} else if (r < 0.9668587896253601) {
			return "y";
		} else if (r < 0.9722622478386166) {
			return "m";
		} else if (r < 0.9765850144092217) {
			return "b";
		} else if (r < 0.9809077809798269) {
			return "c";
		} else if (r < 0.9848703170028816) {
			return "n";
		} else if (r < 0.988472622478386) {
			return "w";
		} else if (r < 0.9920749279538903) {
			return "h";
		} else if (r < 0.9945965417867433) {
			return "p";
		} else if (r < 0.9967579250720459) {
			return "t";
		} else if (r < 0.9981988472622476) {
			return "k";
		} else if (r < 0.9996397694524494) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "g") {
		if (r < 0.2857142857142857) {
			return "h";
		} else if (r < 0.47619047619047616) {
			return "o";
		} else if (r < 0.6666666666666666) {
			return "a";
		} else if (r < 0.7619047619047619) {
			return "r";
		} else if (r < 0.8571428571428571) {
			return "i";
		} else if (r < 0.9523809523809523) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "h") {
		if (r < 0.358974358974359) {
			return "o";
		} else if (r < 0.6153846153846154) {
			return "e";
		} else if (r < 0.8205128205128205) {
			return "a";
		} else if (r < 0.9743589743589743) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "i") {
		if (r < 0.2112997574547011) {
			return "c";
		} else if (r < 0.35896704237409044) {
			return "e";
		} else if (r < 0.4929376515908118) {
			return "n";
		} else if (r < 0.6246254815237552) {
			return "s";
		} else if (r < 0.7100870309601941) {
			return "l";
		} else if (r < 0.7708660293907833) {
			return "r";
		} else if (r < 0.8103866457411899) {
			return "d";
		} else if (r < 0.8484805250392353) {
			return "b";
		} else if (r < 0.8847196461692111) {
			return "a";
		} else if (r < 0.92010272506777) {
			return "t";
		} else if (r < 0.955485803966329) {
			return "g";
		} else if (r < 0.9781709230988729) {
			return "x";
		} else if (r < 0.9823084605507205) {
			return "m";
		} else if (r < 0.9855899557711514) {
			return "o";
		} else if (r < 0.9888714509915822) {
			return "z";
		} else if (r < 0.9921529462120131) {
			return "f";
		} else if (r < 0.9948637466114995) {
			return "v";
		} else if (r < 0.9964331573690969) {
			return "k";
		} else if (r < 0.9972891996005137) {
			return "y";
		} else if (r < 0.9980025681266943) {
			return "p";
		} else if (r < 0.9985732629476388) {
			return "q";
		} else if (r < 0.9991439577685833) {
			return "u";
		} else if (r < 0.9997146525895279) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "j") {
		if (r < 0.5) {
			return "o";
		} else if (r < 0.875) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "k") {
		if (r < 0.5833333333333334) {
			return "i";
		} else if (r < 0.75) {
			return "a";
		} else if (r < 0.8333333333333334) {
			return "l";
		} else if (r < 0.9166666666666667) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "l") {
		if (r < 0.2515247621371066) {
			return "a";
		} else if (r < 0.46694315686752863) {
			return "o";
		} else if (r < 0.6594291290558673) {
			return "e";
		} else if (r < 0.8448402049280312) {
			return "u";
		} else if (r < 0.9565747743352038) {
			return "i";
		} else if (r < 0.9973164186386925) {
			return "y";
		} else if (r < 0.9980483044645037) {
			return "n";
		} else if (r < 0.9985362283483777) {
			return "c";
		} else if (r < 0.9990241522322518) {
			return "d";
		} else if (r < 0.9992681141741889) {
			return "b";
		} else if (r < 0.999512076116126) {
			return "l";
		} else if (r < 0.9997560380580631) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "m") {
		if (r < 0.5365853658536586) {
			return "a";
		} else if (r < 0.878048780487805) {
			return "e";
		} else if (r < 0.951219512195122) {
			return "o";
		} else if (r < 0.9756097560975611) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "n") {
		if (r < 0.813953488372093) {
			return "e";
		} else if (r < 0.9302325581395349) {
			return "i";
		} else if (r < 0.9534883720930233) {
			return "u";
		} else if (r < 0.9767441860465117) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "o") {
		if (r < 0.625067922477812) {
			return "r";
		} else if (r < 0.7179858721246151) {
			return "l";
		} else if (r < 0.7904365151240716) {
			return "o";
		} else if (r < 0.8424198514761818) {
			return "u";
		} else if (r < 0.8681398297409889) {
			return "n";
		} else if (r < 0.8878826299583409) {
			return "s";
		} else if (r < 0.9059952907082051) {
			return "c";
		} else if (r < 0.9219344321680856) {
			return "i";
		} else if (r < 0.9371490671979714) {
			return "g";
		} else if (r < 0.9483789168628872) {
			return "x";
		} else if (r < 0.9583408802753125) {
			return "w";
		} else if (r < 0.9659481977902554) {
			return "a";
		} else if (r < 0.9731932620902011) {
			return "e";
		} else if (r < 0.9784459337076616) {
			return "d";
		} else if (r < 0.9831552255026264) {
			return "v";
		} else if (r < 0.9867777576525992) {
			return "p";
		} else if (r < 0.9904002898025721) {
			return "t";
		} else if (r < 0.9932983155225503) {
			return "m";
		} else if (r < 0.9951095815975367) {
			return "y";
		} else if (r < 0.9967397210650245) {
			return "b";
		} else if (r < 0.9978264807100163) {
			return "h";
		} else if (r < 0.9987321137475096) {
			return "f";
		} else if (r < 0.9996377467850028) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "p") {
		if (r < 0.32142857142857145) {
			return "r";
		} else if (r < 0.5357142857142857) {
			return "e";
		} else if (r < 0.6428571428571428) {
			return "s";
		} else if (r < 0.7499999999999999) {
			return "a";
		} else if (r < 0.857142857142857) {
			return "i";
		} else if (r < 0.8928571428571427) {
			return "h";
		} else if (r < 0.9285714285714284) {
			return "l";
		} else if (r < 0.9642857142857141) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "r") {
		if (r < 0.32401839405730454) {
			return "a";
		} else if (r < 0.5256455606650159) {
			return "e";
		} else if (r < 0.7170145030067209) {
			return "i";
		} else if (r < 0.9037849310222851) {
			return "o";
		} else if (r < 0.9915104350902015) {
			return "u";
		} else if (r < 0.9978776087725503) {
			return "y";
		} else if (r < 0.998938804386275) {
			return "s";
		} else if (r < 0.9992925362575166) {
			return "d";
		} else if (r < 0.9996462681287581) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "s") {
		if (r < 0.19444444444444445) {
			return "h";
		} else if (r < 0.3472222222222222) {
			return "e";
		} else if (r < 0.4722222222222222) {
			return "k";
		} else if (r < 0.5833333333333333) {
			return "t";
		} else if (r < 0.6944444444444444) {
			return "c";
		} else if (r < 0.7777777777777778) {
			return "i";
		} else if (r < 0.8611111111111112) {
			return "a";
		} else if (r < 0.9027777777777778) {
			return "b";
		} else if (r < 0.9305555555555556) {
			return "m";
		} else if (r < 0.9583333333333334) {
			return "p";
		} else if (r < 0.9861111111111112) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "t") {
		if (r < 0.40573318632855565) {
			return "e";
		} else if (r < 0.5545755237045203) {
			return "i";
		} else if (r < 0.6747519294377067) {
			return "s";
		} else if (r < 0.7353914002205071) {
			return "a";
		} else if (r < 0.7828004410143329) {
			return "l";
		} else if (r < 0.8246968026460859) {
			return "y";
		} else if (r < 0.8555678059536934) {
			return "w";
		} else if (r < 0.8831312017640572) {
			return "m";
		} else if (r < 0.9062844542447629) {
			return "h";
		} else if (r < 0.928335170893054) {
			return "o";
		} else if (r < 0.9492833517089305) {
			return "n";
		} else if (r < 0.9647188533627342) {
			return "b";
		} else if (r < 0.9724366041896361) {
			return "f";
		} else if (r < 0.9790518191841234) {
			return "p";
		} else if (r < 0.9845644983461962) {
			return "r";
		} else if (r < 0.990077177508269) {
			return "u";
		} else if (r < 0.9933847850055126) {
			return "g";
		} else if (r < 0.9966923925027563) {
			return "t";
		} else if (r < 0.9988974641675854) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "u") {
		if (r < 0.5331108829568788) {
			return "l";
		} else if (r < 0.6511806981519507) {
			return "s";
		} else if (r < 0.7651437371663243) {
			return "r";
		} else if (r < 0.8516427104722791) {
			return "n";
		} else if (r < 0.892453798767967) {
			return "g";
		} else if (r < 0.9286447638603695) {
			return "m";
		} else if (r < 0.9568788501026694) {
			return "t";
		} else if (r < 0.9694558521560575) {
			return "c";
		} else if (r < 0.9774127310061601) {
			return "d";
		} else if (r < 0.9853696098562628) {
			return "e";
		} else if (r < 0.9922997946611909) {
			return "z";
		} else if (r < 0.9946098562628336) {
			return "b";
		} else if (r < 0.9966632443531827) {
			return "f";
		} else if (r < 0.9979466119096508) {
			return "i";
		} else if (r < 0.9987166324435317) {
			return "h";
		} else if (r < 0.999229979466119) {
			return "j";
		} else if (r < 0.9994866529774127) {
			return "v";
		} else if (r < 0.9997433264887063) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "v") {
		return "e";
	} else if (str[str.length-2] == "f" && str[str.length-1] == "w") {
		if (r < 0.3170731707317073) {
			return "i";
		} else if (r < 0.5853658536585367) {
			return "o";
		} else if (r < 0.853658536585366) {
			return "a";
		} else if (r < 0.9756097560975611) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "y") {
		if (r < 0.9219653179190751) {
			return "i";
		} else if (r < 0.9393063583815029) {
			return "l";
		} else if (r < 0.9508670520231214) {
			return "m";
		} else if (r < 0.9595375722543352) {
			return "t";
		} else if (r < 0.9653179190751445) {
			return "d";
		} else if (r < 0.9710982658959538) {
			return "c";
		} else if (r < 0.9768786127167631) {
			return "k";
		} else if (r < 0.9826589595375724) {
			return "r";
		} else if (r < 0.9884393063583817) {
			return "s";
		} else if (r < 0.9913294797687864) {
			return "o";
		} else if (r < 0.994219653179191) {
			return "f";
		} else if (r < 0.9971098265895957) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "f" && str[str.length-1] == "z") {
		if (r < 0.6666666666666666) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "a") {
		if (r < 0.16614969656102496) {
			return "t";
		} else if (r < 0.3304113283884019) {
			return "l";
		} else if (r < 0.4759271746459879) {
			return "n";
		} else if (r < 0.6013486176668914) {
			return "r";
		} else if (r < 0.6993931220498988) {
			return "s";
		} else if (r < 0.7885367498314227) {
			return "m";
		} else if (r < 0.8260283209710046) {
			return "b";
		} else if (r < 0.8503034389750505) {
			return "u";
		} else if (r < 0.8739042481456506) {
			return "d";
		} else if (r < 0.8973701955495615) {
			return "i";
		} else if (r < 0.9166554281861091) {
			return "g";
		} else if (r < 0.9301416048550235) {
			return "p";
		} else if (r < 0.9433580579905596) {
			return "e";
		} else if (r < 0.9564396493594065) {
			return "z";
		} else if (r < 0.9665542818610923) {
			return "c";
		} else if (r < 0.9743762643290625) {
			return "v";
		} else if (r < 0.9808496291301414) {
			return "w";
		} else if (r < 0.9873229939312202) {
			return "y";
		} else if (r < 0.9920431557653403) {
			return "h";
		} else if (r < 0.9950101146325014) {
			return "o";
		} else if (r < 0.9973027646662169) {
			return "f";
		} else if (r < 0.9990559676331758) {
			return "k";
		} else if (r < 0.9997302764666216) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "b") {
		if (r < 0.36363636363636365) {
			return "o";
		} else if (r < 0.5808080808080809) {
			return "a";
		} else if (r < 0.7575757575757577) {
			return "e";
		} else if (r < 0.8686868686868687) {
			return "i";
		} else if (r < 0.9595959595959597) {
			return "u";
		} else if (r < 0.9797979797979799) {
			return "y";
		} else if (r < 0.98989898989899) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "c") {
		if (r < 0.35294117647058826) {
			return "o";
		} else if (r < 0.5294117647058824) {
			return "a";
		} else if (r < 0.7058823529411765) {
			return "u";
		} else if (r < 0.823529411764706) {
			return "r";
		} else if (r < 0.911764705882353) {
			return "h";
		} else if (r < 0.9411764705882354) {
			return "y";
		} else if (r < 0.9705882352941178) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "d") {
		if (r < 0.4358974358974359) {
			return "o";
		} else if (r < 0.7521367521367521) {
			return "a";
		} else if (r < 0.8632478632478633) {
			return "i";
		} else if (r < 0.905982905982906) {
			return "u";
		} else if (r < 0.9487179487179487) {
			return "e";
		} else if (r < 0.9743589743589743) {
			return "r";
		} else if (r < 0.9914529914529915) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "e") {
		if (r < 0.316747452764863) {
			return "n";
		} else if (r < 0.5205262637253932) {
			return "r";
		} else if (r < 0.6210307646651498) {
			return "s";
		} else if (r < 0.7038282718369769) {
			return "d";
		} else if (r < 0.7664457414185379) {
			return "l";
		} else if (r < 0.8268869324364427) {
			return "o";
		} else if (r < 0.8666534770996142) {
			return "a";
		} else if (r < 0.9037491344346621) {
			return "t";
		} else if (r < 0.9345137995845285) {
			return "m";
		} else if (r < 0.9503412800474823) {
			return "e";
		} else if (r < 0.95884855079632) {
			return "i";
		} else if (r < 0.9649816994757147) {
			return "b";
		} else if (r < 0.9709170046493223) {
			return "f";
		} else if (r < 0.9764566228113561) {
			return "w";
		} else if (r < 0.9818973192204965) {
			return "y";
		} else if (r < 0.9867444851122761) {
			return "u";
		} else if (r < 0.9908991987338015) {
			return "c";
		} else if (r < 0.9944603818379661) {
			return "h";
		} else if (r < 0.9976258779305569) {
			return "p";
		} else if (r < 0.998714017212385) {
			return "k";
		} else if (r < 0.9994064694826392) {
			return "v";
		} else if (r < 0.9998021564942131) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "f") {
		if (r < 0.39166666666666666) {
			return "i";
		} else if (r < 0.7166666666666667) {
			return "u";
		} else if (r < 0.7916666666666666) {
			return "a";
		} else if (r < 0.8583333333333333) {
			return "e";
		} else if (r < 0.9083333333333333) {
			return "o";
		} else if (r < 0.9583333333333334) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "g") {
		if (r < 0.3395504543280727) {
			return "e";
		} else if (r < 0.5681492109038737) {
			return "i";
		} else if (r < 0.7470109995217599) {
			return "l";
		} else if (r < 0.8393113342898134) {
			return "a";
		} else if (r < 0.90961262553802) {
			return "r";
		} else if (r < 0.9526542324246772) {
			return "y";
		} else if (r < 0.9741750358680057) {
			return "o";
		} else if (r < 0.9813486370157819) {
			return "s";
		} else if (r < 0.9866092778574844) {
			return "u";
		} else if (r < 0.9899569583931133) {
			return "h";
		} else if (r < 0.991869918699187) {
			return "b";
		} else if (r < 0.9937828790052606) {
			return "c";
		} else if (r < 0.9956958393113343) {
			return "m";
		} else if (r < 0.9971305595408896) {
			return "n";
		} else if (r < 0.9980870396939264) {
			return "f";
		} else if (r < 0.9990435198469633) {
			return "p";
		} else if (r < 0.9995217599234817) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "h") {
		if (r < 0.6089406461307287) {
			return "t";
		} else if (r < 0.6934635612321562) {
			return "e";
		} else if (r < 0.7513148009015778) {
			return "a";
		} else if (r < 0.8012772351615327) {
			return "o";
		} else if (r < 0.8448534936138242) {
			return "i";
		} else if (r < 0.8730277986476334) {
			return "b";
		} else if (r < 0.9012021036814425) {
			return "s";
		} else if (r < 0.9199849737039819) {
			return "l";
		} else if (r < 0.9316303531179564) {
			return "h";
		} else if (r < 0.9425244177310292) {
			return "f";
		} else if (r < 0.951915852742299) {
			return "m";
		} else if (r < 0.9598046581517655) {
			return "w";
		} else if (r < 0.9676934635612321) {
			return "n";
		} else if (r < 0.9737039819684448) {
			return "u";
		} else if (r < 0.9793388429752066) {
			return "y";
		} else if (r < 0.983846731780616) {
			return "d";
		} else if (r < 0.9879789631855747) {
			return "r";
		} else if (r < 0.9917355371900826) {
			return "g";
		} else if (r < 0.9943651389932381) {
			return "p";
		} else if (r < 0.9966190833959429) {
			return "c";
		} else if (r < 0.9988730277986476) {
			return "j";
		} else if (r < 0.9992486851990984) {
			return "v";
		} else if (r < 0.9996243425995491) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "i") {
		if (r < 0.18712894799335075) {
			return "n";
		} else if (r < 0.37318926620755166) {
			return "c";
		} else if (r < 0.5185229161719307) {
			return "s";
		} else if (r < 0.605200664925196) {
			return "a";
		} else if (r < 0.6705058180954643) {
			return "t";
		} else if (r < 0.7293991925908335) {
			return "e";
		} else if (r < 0.7863927808121586) {
			return "o";
		} else if (r < 0.8327000712419852) {
			return "l";
		} else if (r < 0.8598907622892423) {
			return "r";
		} else if (r < 0.8869627166943718) {
			return "b";
		} else if (r < 0.9095226786986463) {
			return "z";
		} else if (r < 0.9316076941344098) {
			return "d";
		} else if (r < 0.9469247209688909) {
			return "g";
		} else if (r < 0.9611731180242222) {
			return "v";
		} else if (r < 0.9739966753740203) {
			return "u";
		} else if (r < 0.9843267632391355) {
			return "m";
		} else if (r < 0.9919259083353121) {
			return "f";
		} else if (r < 0.9970315839468058) {
			return "p";
		} else if (r < 0.9991688435051055) {
			return "i";
		} else if (r < 0.9996437900736165) {
			return "h";
		} else if (r < 0.999881263357872) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "j") {
		if (r < 0.6666666666666666) {
			return "a";
		} else if (r < 0.9166666666666666) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "k") {
		if (r < 0.35294117647058826) {
			return "a";
		} else if (r < 0.6470588235294118) {
			return "o";
		} else if (r < 0.8529411764705883) {
			return "i";
		} else if (r < 0.8823529411764707) {
			return "h";
		} else if (r < 0.911764705882353) {
			return "l";
		} else if (r < 0.9411764705882354) {
			return "r";
		} else if (r < 0.9705882352941178) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "l") {
		if (r < 0.38295615275813294) {
			return "y";
		} else if (r < 0.5638260254596887) {
			return "e";
		} else if (r < 0.7271923620933521) {
			return "o";
		} else if (r < 0.83504243281471) {
			return "i";
		} else if (r < 0.9405940594059405) {
			return "a";
		} else if (r < 0.9992927864214992) {
			return "u";
		} else if (r < 0.9994695898161244) {
			return "m";
		} else if (r < 0.9996463932107497) {
			return "b";
		} else if (r < 0.9998231966053749) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "m") {
		if (r < 0.5358444714459295) {
			return "a";
		} else if (r < 0.7922235722964763) {
			return "e";
		} else if (r < 0.9015795868772782) {
			return "o";
		} else if (r < 0.9708383961117861) {
			return "i";
		} else if (r < 0.982989064398542) {
			return "y";
		} else if (r < 0.991494532199271) {
			return "u";
		} else if (r < 0.9963547995139733) {
			return "s";
		} else if (r < 0.9975698663426489) {
			return "t";
		} else if (r < 0.9987849331713244) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "n") {
		if (r < 0.3400297619047619) {
			return "e";
		} else if (r < 0.5844494047619048) {
			return "a";
		} else if (r < 0.7659970238095238) {
			return "i";
		} else if (r < 0.9427083333333334) {
			return "o";
		} else if (r < 0.9561011904761905) {
			return "s";
		} else if (r < 0.9683779761904762) {
			return "u";
		} else if (r < 0.980282738095238) {
			return "m";
		} else if (r < 0.9866071428571428) {
			return "l";
		} else if (r < 0.9892113095238094) {
			return "t";
		} else if (r < 0.9914434523809523) {
			return "n";
		} else if (r < 0.9933035714285714) {
			return "y";
		} else if (r < 0.9947916666666666) {
			return "f";
		} else if (r < 0.9962797619047619) {
			return "p";
		} else if (r < 0.9970238095238095) {
			return "c";
		} else if (r < 0.9977678571428572) {
			return "h";
		} else if (r < 0.9985119047619049) {
			return "b";
		} else if (r < 0.9992559523809526) {
			return "w";
		} else if (r < 0.9996279761904764) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "o") {
		if (r < 0.23501303214596003) {
			return "n";
		} else if (r < 0.34079061685490875) {
			return "r";
		} else if (r < 0.4168114682884448) {
			return "t";
		} else if (r < 0.48957428323197216) {
			return "s";
		} else if (r < 0.5595134665508253) {
			return "u";
		} else if (r < 0.6253258036490008) {
			return "l";
		} else if (r < 0.6722415291051259) {
			return "o";
		} else if (r < 0.719157254561251) {
			return "g";
		} else if (r < 0.7656385751520416) {
			return "m";
		} else if (r < 0.8019113814074716) {
			return "d";
		} else if (r < 0.8373153779322328) {
			return "i";
		} else if (r < 0.8681581233709816) {
			return "p";
		} else if (r < 0.8918331885317115) {
			return "b";
		} else if (r < 0.9150738488271067) {
			return "e";
		} else if (r < 0.9361424847958296) {
			return "a";
		} else if (r < 0.9552562988705473) {
			return "v";
		} else if (r < 0.9739357080799305) {
			return "c";
		} else if (r < 0.985881841876629) {
			return "w";
		} else if (r < 0.9906602953953084) {
			return "y";
		} else if (r < 0.9941355343179844) {
			return "f";
		} else if (r < 0.9965247610773241) {
			return "h";
		} else if (r < 0.9978279756733276) {
			return "z";
		} else if (r < 0.9991311902693311) {
			return "x";
		} else if (r < 0.9997827975673328) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "p") {
		if (r < 0.25) {
			return "i";
		} else if (r < 0.38235294117647056) {
			return "o";
		} else if (r < 0.5) {
			return "l";
		} else if (r < 0.6029411764705882) {
			return "a";
		} else if (r < 0.7058823529411764) {
			return "r";
		} else if (r < 0.8088235294117646) {
			return "e";
		} else if (r < 0.8970588235294117) {
			return "u";
		} else if (r < 0.926470588235294) {
			return "h";
		} else if (r < 0.9558823529411764) {
			return "s";
		} else if (r < 0.9705882352941175) {
			return "c";
		} else if (r < 0.9852941176470587) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "q") {
		return "t";
	} else if (str[str.length-2] == "g" && str[str.length-1] == "r") {
		if (r < 0.623519691545029) {
			return "a";
		} else if (r < 0.7617736160837235) {
			return "e";
		} else if (r < 0.8664279812723767) {
			return "o";
		} else if (r < 0.956623519691545) {
			return "i";
		} else if (r < 0.9936656568438447) {
			return "u";
		} else if (r < 0.9990360782153677) {
			return "y";
		} else if (r < 0.999173781327458) {
			return "f";
		} else if (r < 0.9993114844395484) {
			return "r";
		} else if (r < 0.9994491875516388) {
			return "s";
		} else if (r < 0.9995868906637292) {
			return "x";
		} else if (r < 0.9997245937758196) {
			return "d";
		} else if (r < 0.99986229688791) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "s") {
		if (r < 0.40460526315789475) {
			return "t";
		} else if (r < 0.5592105263157895) {
			return "h";
		} else if (r < 0.6348684210526316) {
			return "m";
		} else if (r < 0.6940789473684211) {
			return "o";
		} else if (r < 0.7467105263157896) {
			return "a";
		} else if (r < 0.7894736842105264) {
			return "i";
		} else if (r < 0.8322368421052633) {
			return "p";
		} else if (r < 0.861842105263158) {
			return "e";
		} else if (r < 0.8881578947368421) {
			return "k";
		} else if (r < 0.9111842105263158) {
			return "l";
		} else if (r < 0.924342105263158) {
			return "c";
		} else if (r < 0.9375000000000001) {
			return "u";
		} else if (r < 0.9506578947368423) {
			return "w";
		} else if (r < 0.9638157894736844) {
			return "b";
		} else if (r < 0.9769736842105265) {
			return "n";
		} else if (r < 0.9835526315789476) {
			return "f";
		} else if (r < 0.9901315789473686) {
			return "d";
		} else if (r < 0.9967105263157896) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "t") {
		if (r < 0.3869346733668342) {
			return "h";
		} else if (r < 0.5577889447236181) {
			return "o";
		} else if (r < 0.7085427135678392) {
			return "a";
		} else if (r < 0.8442211055276382) {
			return "i";
		} else if (r < 0.9195979899497487) {
			return "r";
		} else if (r < 0.9547738693467337) {
			return "e";
		} else if (r < 0.9698492462311558) {
			return "u";
		} else if (r < 0.9748743718592965) {
			return "b";
		} else if (r < 0.9798994974874372) {
			return "c";
		} else if (r < 0.9849246231155779) {
			return "d";
		} else if (r < 0.9899497487437187) {
			return "t";
		} else if (r < 0.9949748743718594) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "u") {
		if (r < 0.1752767527675277) {
			return "i";
		} else if (r < 0.34185556141275697) {
			return "e";
		} else if (r < 0.5071164997364259) {
			return "l";
		} else if (r < 0.647337901950448) {
			return "a";
		} else if (r < 0.735108065366368) {
			return "r";
		} else if (r < 0.8012651555086979) {
			return "s";
		} else if (r < 0.856879283078545) {
			return "n";
		} else if (r < 0.9088033737480231) {
			return "m";
		} else if (r < 0.9472851871375856) {
			return "t";
		} else if (r < 0.9575645756457564) {
			return "o";
		} else if (r < 0.9659989457037427) {
			return "b";
		} else if (r < 0.9731154454401686) {
			return "d";
		} else if (r < 0.9799683711122824) {
			return "y";
		} else if (r < 0.9844491302055877) {
			return "f";
		} else if (r < 0.9884027411702687) {
			return "g";
		} else if (r < 0.9923563521349498) {
			return "z";
		} else if (r < 0.9944649446494463) {
			return "p";
		} else if (r < 0.9963099630996308) {
			return "h";
		} else if (r < 0.9976278334211912) {
			return "j";
		} else if (r < 0.9986821296784395) {
			return "c";
		} else if (r < 0.9997364259356878) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "v") {
		if (r < 0.75) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "w") {
		if (r < 0.3412322274881517) {
			return "o";
		} else if (r < 0.5781990521327014) {
			return "a";
		} else if (r < 0.7393364928909952) {
			return "e";
		} else if (r < 0.8957345971563981) {
			return "i";
		} else if (r < 0.933649289099526) {
			return "u";
		} else if (r < 0.957345971563981) {
			return "h";
		} else if (r < 0.981042654028436) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "y") {
		if (r < 0.34469200524246396) {
			return "n";
		} else if (r < 0.6107470511140236) {
			return "r";
		} else if (r < 0.7680209698558322) {
			return "m";
		} else if (r < 0.854521625163827) {
			return "p";
		} else if (r < 0.8977719528178244) {
			return "l";
		} else if (r < 0.9239842726081259) {
			return "a";
		} else if (r < 0.943643512450852) {
			return "i";
		} else if (r < 0.9554390563564876) {
			return "b";
		} else if (r < 0.9646133682830931) {
			return "v";
		} else if (r < 0.9698558322411533) {
			return "d";
		} else if (r < 0.9750982961992136) {
			return "s";
		} else if (r < 0.9803407601572739) {
			return "e";
		} else if (r < 0.9855832241153342) {
			return "g";
		} else if (r < 0.9908256880733944) {
			return "t";
		} else if (r < 0.9947575360419396) {
			return "w";
		} else if (r < 0.9973787680209698) {
			return "o";
		} else if (r < 0.9986893840104849) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "g" && str[str.length-1] == "z") {
		if (r < 0.9166666666666666) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "a") {
		if (r < 0.1777469316189363) {
			return "l";
		} else if (r < 0.34307422559906486) {
			return "r";
		} else if (r < 0.49532437171244886) {
			return "n";
		} else if (r < 0.5506282875511397) {
			return "m";
		} else if (r < 0.6057130333138515) {
			return "g";
		} else if (r < 0.6561221507890123) {
			return "b";
		} else if (r < 0.700759789596727) {
			return "s";
		} else if (r < 0.7434979544126241) {
			return "t";
		} else if (r < 0.7836791350087667) {
			return "e";
		} else if (r < 0.8188924605493862) {
			return "p";
		} else if (r < 0.8488457042665107) {
			return "i";
		} else if (r < 0.8763150204558737) {
			return "u";
		} else if (r < 0.9031268264172998) {
			return "c";
		} else if (r < 0.9220485096434833) {
			return "d";
		} else if (r < 0.9384862653419053) {
			return "w";
		} else if (r < 0.9513442431326709) {
			return "k";
		} else if (r < 0.9638369374634715) {
			return "v";
		} else if (r < 0.9745032144944475) {
			return "f";
		} else if (r < 0.982977790765634) {
			return "y";
		} else if (r < 0.9907948568088836) {
			return "z";
		} else if (r < 0.994082407948568) {
			return "h";
		} else if (r < 0.9964202220923435) {
			return "o";
		} else if (r < 0.9978082992402102) {
			return "a";
		} else if (r < 0.9991233196960839) {
			return "j";
		} else if (r < 0.9997808299240208) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "b") {
		if (r < 0.3980263157894737) {
			return "o";
		} else if (r < 0.5789473684210527) {
			return "a";
		} else if (r < 0.6973684210526316) {
			return "e";
		} else if (r < 0.8125) {
			return "r";
		} else if (r < 0.9013157894736842) {
			return "u";
		} else if (r < 0.9638157894736842) {
			return "i";
		} else if (r < 0.9934210526315789) {
			return "l";
		} else if (r < 0.9967105263157894) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "c") {
		if (r < 0.29310344827586204) {
			return "o";
		} else if (r < 0.47413793103448276) {
			return "h";
		} else if (r < 0.6206896551724138) {
			return "a";
		} else if (r < 0.7586206896551724) {
			return "r";
		} else if (r < 0.8620689655172413) {
			return "u";
		} else if (r < 0.9655172413793103) {
			return "l";
		} else if (r < 0.9827586206896551) {
			return "i";
		} else if (r < 0.9913793103448275) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "d") {
		if (r < 0.2748091603053435) {
			return "r";
		} else if (r < 0.4885496183206107) {
			return "o";
		} else if (r < 0.6412213740458016) {
			return "a";
		} else if (r < 0.7709923664122138) {
			return "e";
		} else if (r < 0.8931297709923665) {
			return "i";
		} else if (r < 0.9618320610687023) {
			return "u";
		} else if (r < 0.9694656488549619) {
			return "b";
		} else if (r < 0.9770992366412214) {
			return "k";
		} else if (r < 0.984732824427481) {
			return "l";
		} else if (r < 0.9923664122137406) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "e") {
		if (r < 0.24579087887538822) {
			return "r";
		} else if (r < 0.359668719010516) {
			return "a";
		} else if (r < 0.44793766686645237) {
			return "s";
		} else if (r < 0.5352258486351006) {
			return "m";
		} else if (r < 0.616520459870321) {
			return "n";
		} else if (r < 0.6874625401841662) {
			return "d";
		} else if (r < 0.7554078352312974) {
			return "l";
		} else if (r < 0.8149621315316298) {
			return "t";
		} else if (r < 0.8513594507709912) {
			return "e";
		} else if (r < 0.8784394921811148) {
			return "o";
		} else if (r < 0.904811202528197) {
			return "c";
		} else if (r < 0.9268784394921811) {
			return "i";
		} else if (r < 0.9451860731215604) {
			return "x";
		} else if (r < 0.9617501225957609) {
			return "p";
		} else if (r < 0.9683430501825314) {
			return "b";
		} else if (r < 0.9748814907644526) {
			return "w";
		} else if (r < 0.9809295483027297) {
			return "v";
		} else if (r < 0.9865961968070615) {
			return "u";
		} else if (r < 0.9910096441998583) {
			return "g";
		} else if (r < 0.9936795074374761) {
			return "y";
		} else if (r < 0.9959679616411485) {
			return "f";
		} else if (r < 0.9977115457963275) {
			return "k";
		} else if (r < 0.9990192339127117) {
			return "q";
		} else if (r < 0.9995096169563559) {
			return "z";
		} else if (r < 0.9997820519806025) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "f") {
		if (r < 0.6459143968871596) {
			return "u";
		} else if (r < 0.7626459143968872) {
			return "i";
		} else if (r < 0.8443579766536966) {
			return "a";
		} else if (r < 0.9105058365758756) {
			return "o";
		} else if (r < 0.9688715953307394) {
			return "l";
		} else if (r < 0.9844357976653697) {
			return "e";
		} else if (r < 0.9961089494163424) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "g") {
		if (r < 0.28378378378378377) {
			return "o";
		} else if (r < 0.5405405405405406) {
			return "a";
		} else if (r < 0.6891891891891893) {
			return "r";
		} else if (r < 0.7972972972972974) {
			return "i";
		} else if (r < 0.8648648648648649) {
			return "e";
		} else if (r < 0.9324324324324325) {
			return "u";
		} else if (r < 0.9594594594594594) {
			return "l";
		} else if (r < 0.9729729729729729) {
			return "m";
		} else if (r < 0.9864864864864864) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "h") {
		if (r < 0.44954128440366975) {
			return "o";
		} else if (r < 0.7798165137614679) {
			return "e";
		} else if (r < 0.8807339449541285) {
			return "a";
		} else if (r < 0.9449541284403671) {
			return "i";
		} else if (r < 0.9724770642201837) {
			return "y";
		} else if (r < 0.9908256880733947) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "i") {
		if (r < 0.1587181774514513) {
			return "n";
		} else if (r < 0.28683181225554105) {
			return "c";
		} else if (r < 0.4063679407122761) {
			return "p";
		} else if (r < 0.5152679612982913) {
			return "l";
		} else if (r < 0.6068757290880396) {
			return "s";
		} else if (r < 0.6680161943319838) {
			return "a";
		} else if (r < 0.720716393330131) {
			return "e";
		} else if (r < 0.7708776504494613) {
			return "t";
		} else if (r < 0.8121183009675427) {
			return "o";
		} else if (r < 0.8503396692513552) {
			return "r";
		} else if (r < 0.8832772936251972) {
			return "d";
		} else if (r < 0.9089411926164825) {
			return "z";
		} else if (r < 0.9280175667329994) {
			return "m";
		} else if (r < 0.9458587799354972) {
			return "b";
		} else if (r < 0.9620531119193029) {
			return "g";
		} else if (r < 0.9736499005009264) {
			return "f";
		} else if (r < 0.9827077472037329) {
			return "v";
		} else if (r < 0.9895697522816166) {
			return "u";
		} else if (r < 0.9946476360392505) {
			return "k";
		} else if (r < 0.9972551979688464) {
			return "i";
		} else if (r < 0.9979413984766348) {
			return "j";
		} else if (r < 0.9985589789336443) {
			return "h";
		} else if (r < 0.9990393192890962) {
			return "q";
		} else if (r < 0.999519659644548) {
			return "x";
		} else if (r < 0.9997941398476634) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "j") {
		if (r < 0.4) {
			return "o";
		} else if (r < 0.7333333333333334) {
			return "a";
		} else if (r < 0.8666666666666667) {
			return "i";
		} else if (r < 0.9333333333333333) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "k") {
		if (r < 0.3114754098360656) {
			return "a";
		} else if (r < 0.6229508196721312) {
			return "e";
		} else if (r < 0.8360655737704918) {
			return "i";
		} else if (r < 0.8852459016393444) {
			return "o";
		} else if (r < 0.918032786885246) {
			return "n";
		} else if (r < 0.9508196721311477) {
			return "f";
		} else if (r < 0.9672131147540985) {
			return "y";
		} else if (r < 0.9836065573770494) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "l") {
		if (r < 0.3312676056338028) {
			return "o";
		} else if (r < 0.5735211267605633) {
			return "e";
		} else if (r < 0.7932394366197183) {
			return "y";
		} else if (r < 0.9233802816901409) {
			return "i";
		} else if (r < 0.9814084507042253) {
			return "a";
		} else if (r < 0.9892957746478873) {
			return "u";
		} else if (r < 0.9915492957746479) {
			return "s";
		} else if (r < 0.9932394366197184) {
			return "b";
		} else if (r < 0.9949295774647888) {
			return "h";
		} else if (r < 0.9960563380281691) {
			return "w";
		} else if (r < 0.9971830985915493) {
			return "l";
		} else if (r < 0.9983098591549295) {
			return "r";
		} else if (r < 0.9988732394366197) {
			return "d";
		} else if (r < 0.9994366197183098) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "m") {
		if (r < 0.35157159487776485) {
			return "e";
		} else if (r < 0.640279394644936) {
			return "a";
		} else if (r < 0.8079161816065192) {
			return "i";
		} else if (r < 0.9452852153667055) {
			return "o";
		} else if (r < 0.9639115250291036) {
			return "s";
		} else if (r < 0.9790454016298021) {
			return "u";
		} else if (r < 0.9860302677532015) {
			return "y";
		} else if (r < 0.9918509895227009) {
			return "m";
		} else if (r < 0.9965075669383004) {
			return "n";
		} else if (r < 0.9976717112922003) {
			return "l";
		} else if (r < 0.9988358556461002) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "n") {
		if (r < 0.44933469805527126) {
			return "e";
		} else if (r < 0.669396110542477) {
			return "o";
		} else if (r < 0.8853633572159674) {
			return "i";
		} else if (r < 0.9416581371545549) {
			return "a";
		} else if (r < 0.9580348004094168) {
			return "s";
		} else if (r < 0.9744114636642787) {
			return "u";
		} else if (r < 0.9877175025588539) {
			return "y";
		} else if (r < 0.9928352098259983) {
			return "n";
		} else if (r < 0.994882292732856) {
			return "b";
		} else if (r < 0.9959058341862849) {
			return "f";
		} else if (r < 0.9969293756397137) {
			return "l";
		} else if (r < 0.9979529170931426) {
			return "m";
		} else if (r < 0.9989764585465715) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "o") {
		if (r < 0.16795707688128225) {
			return "r";
		} else if (r < 0.2844335778321108) {
			return "l";
		} else if (r < 0.3914697093181201) {
			return "n";
		} else if (r < 0.46889432219505567) {
			return "t";
		} else if (r < 0.537014398261342) {
			return "u";
		} else if (r < 0.6047269763651182) {
			return "m";
		} else if (r < 0.6702662320021733) {
			return "o";
		} else if (r < 0.7317984243412116) {
			return "s";
		} else if (r < 0.7860635696821515) {
			return "p";
		} else if (r < 0.826337951643575) {
			return "b";
		} else if (r < 0.8561532192339038) {
			return "g";
		} else if (r < 0.8850855745721271) {
			return "d";
		} else if (r < 0.9115729421352893) {
			return "c";
		} else if (r < 0.9297066014669926) {
			return "e";
		} else if (r < 0.9470931812007606) {
			return "i";
		} else if (r < 0.9627818527574028) {
			return "w";
		} else if (r < 0.9751426242868785) {
			return "a";
		} else if (r < 0.9822738386308068) {
			return "v";
		} else if (r < 0.9883183917413745) {
			return "k";
		} else if (r < 0.991646291768541) {
			return "x";
		} else if (r < 0.993955446889432) {
			return "f";
		} else if (r < 0.995992936701983) {
			return "y";
		} else if (r < 0.9979625101874489) {
			return "z";
		} else if (r < 0.9992529204020645) {
			return "h";
		} else if (r < 0.9997283346916597) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "p") {
		if (r < 0.23163841807909605) {
			return "o";
		} else if (r < 0.4350282485875706) {
			return "r";
		} else if (r < 0.6045197740112994) {
			return "a";
		} else if (r < 0.751412429378531) {
			return "i";
		} else if (r < 0.847457627118644) {
			return "l";
		} else if (r < 0.8983050847457626) {
			return "u";
		} else if (r < 0.9491525423728813) {
			return "e";
		} else if (r < 0.9887005649717513) {
			return "h";
		} else if (r < 0.9943502824858755) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "h" && str[str.length-1] == "r") {
		if (r < 0.5079990155057839) {
			return "o";
		} else if (r < 0.6647797194191484) {
			return "i";
		} else if (r < 0.7944868323898597) {
			return "a";
		} else if (r < 0.9121338912133892) {
			return "e";
		} else if (r < 0.9603741078021167) {
			return "y";
		} else if (r < 0.9943391582574453) {
			return "u";
		} else if (r < 0.9963081466896383) {
			return "s";
		} else if (r < 0.9975387644597589) {
			return "m";
		} else if (r < 0.9982771351218312) {
			return "z";
		} else if (r < 0.9987693822298795) {
			return "w";
		} else if (r < 0.9992616293379278) {
			return "d";
		} else if (r < 0.9995077528919519) {
			return "b";
		} else if (r < 0.999753876445976) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "s") {
		if (r < 0.19831223628691982) {
			return "t";
		} else if (r < 0.36708860759493667) {
			return "h";
		} else if (r < 0.5021097046413502) {
			return "o";
		} else if (r < 0.6244725738396624) {
			return "i";
		} else if (r < 0.7383966244725737) {
			return "a";
		} else if (r < 0.8143459915611813) {
			return "e";
		} else if (r < 0.8649789029535864) {
			return "m";
		} else if (r < 0.8987341772151898) {
			return "p";
		} else if (r < 0.9240506329113923) {
			return "c";
		} else if (r < 0.9493670886075949) {
			return "l";
		} else if (r < 0.970464135021097) {
			return "k";
		} else if (r < 0.9789029535864978) {
			return "u";
		} else if (r < 0.9831223628691982) {
			return "y";
		} else if (r < 0.9873417721518986) {
			return "n";
		} else if (r < 0.9915611814345989) {
			return "w";
		} else if (r < 0.9957805907172993) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "t") {
		if (r < 0.3227815256875973) {
			return "h";
		} else if (r < 0.5490399584846912) {
			return "e";
		} else if (r < 0.6471198754540737) {
			return "s";
		} else if (r < 0.737934613388687) {
			return "i";
		} else if (r < 0.7898287493513233) {
			return "l";
		} else if (r < 0.8308251167618059) {
			return "f";
		} else if (r < 0.8609237156201349) {
			return "a";
		} else if (r < 0.8832381940840685) {
			return "n";
		} else if (r < 0.905552672548002) {
			return "y";
		} else if (r < 0.9231966787752983) {
			return "m";
		} else if (r < 0.9408406850025947) {
			return "w";
		} else if (r < 0.9538142189932537) {
			return "r";
		} else if (r < 0.9667877529839127) {
			return "o";
		} else if (r < 0.9745718733783082) {
			return "u";
		} else if (r < 0.9807991696938245) {
			return "c";
		} else if (r < 0.9859885832900881) {
			return "b";
		} else if (r < 0.9891022314478463) {
			return "g";
		} else if (r < 0.991696938245978) {
			return "p";
		} else if (r < 0.9942916450441098) {
			return "t";
		} else if (r < 0.9963674104826152) {
			return "j";
		} else if (r < 0.9979242345614944) {
			return "k";
		} else if (r < 0.9989621172807471) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "u") {
		if (r < 0.22976878612716764) {
			return "m";
		} else if (r < 0.4060693641618497) {
			return "r";
		} else if (r < 0.5592485549132948) {
			return "s";
		} else if (r < 0.6788294797687862) {
			return "n";
		} else if (r < 0.7344653179190752) {
			return "t";
		} else if (r < 0.7785404624277458) {
			return "l";
		} else if (r < 0.8103323699421966) {
			return "c";
		} else if (r < 0.8403179190751445) {
			return "g";
		} else if (r < 0.8692196531791908) {
			return "a";
		} else if (r < 0.8898121387283238) {
			return "b";
		} else if (r < 0.909320809248555) {
			return "d";
		} else if (r < 0.9284682080924856) {
			return "f";
		} else if (r < 0.9458092485549134) {
			return "i";
		} else if (r < 0.9591763005780348) {
			return "e";
		} else if (r < 0.9714595375722545) {
			return "p";
		} else if (r < 0.9797687861271678) {
			return "k";
		} else if (r < 0.9866329479768787) {
			return "z";
		} else if (r < 0.9898843930635839) {
			return "y";
		} else if (r < 0.993135838150289) {
			return "j";
		} else if (r < 0.9956647398843931) {
			return "v";
		} else if (r < 0.997471098265896) {
			return "h";
		} else if (r < 0.9985549132947977) {
			return "u";
		} else if (r < 0.9992774566473989) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "v") {
		if (r < 0.3548387096774194) {
			return "a";
		} else if (r < 0.6774193548387097) {
			return "i";
		} else if (r < 0.903225806451613) {
			return "e";
		} else if (r < 0.935483870967742) {
			return "y";
		} else if (r < 0.967741935483871) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "w") {
		if (r < 0.4338235294117647) {
			return "a";
		} else if (r < 0.7156862745098039) {
			return "o";
		} else if (r < 0.8455882352941176) {
			return "e";
		} else if (r < 0.946078431372549) {
			return "i";
		} else if (r < 0.9803921568627451) {
			return "h";
		} else if (r < 0.9877450980392156) {
			return "r";
		} else if (r < 0.9950980392156862) {
			return "y";
		} else if (r < 0.997549019607843) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "y") {
		if (r < 0.2612678104100029) {
			return "p";
		} else if (r < 0.4286129688863042) {
			return "d";
		} else if (r < 0.5684792090724048) {
			return "l";
		} else if (r < 0.6754870601919163) {
			return "s";
		} else if (r < 0.762867112532713) {
			return "t";
		} else if (r < 0.8201512067461472) {
			return "m";
		} else if (r < 0.8687118348357081) {
			return "r";
		} else if (r < 0.8980808374527479) {
			return "o";
		} else if (r < 0.919889502762431) {
			return "g";
		} else if (r < 0.940098865949404) {
			return "a";
		} else if (r < 0.9571096248909567) {
			return "c";
		} else if (r < 0.973974992730445) {
			return "n";
		} else if (r < 0.9819715033439954) {
			return "b";
		} else if (r < 0.9883687118348358) {
			return "e";
		} else if (r < 0.9936027915091596) {
			return "i";
		} else if (r < 0.9959290491421925) {
			return "x";
		} else if (r < 0.9975283512649026) {
			return "u";
		} else if (r < 0.9985460889793545) {
			return "h";
		} else if (r < 0.9989822622855481) {
			return "z";
		} else if (r < 0.9992730444896772) {
			return "f";
		} else if (r < 0.9995638266938064) {
			return "w";
		} else if (r < 0.999709217795871) {
			return "k";
		} else if (r < 0.9998546088979355) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "h" && str[str.length-1] == "z") {
		if (r < 0.35294117647058826) {
			return "e";
		} else if (r < 0.7058823529411765) {
			return "o";
		} else if (r < 0.9411764705882353) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "a") {
		if (r < 0.3009057363300906) {
			return "n";
		} else if (r < 0.5549815498154982) {
			return "l";
		} else if (r < 0.6990271720899027) {
			return "t";
		} else if (r < 0.7634350888963435) {
			return "c";
		} else if (r < 0.8220731298222073) {
			return "s";
		} else if (r < 0.8646762831264676) {
			return "r";
		} else if (r < 0.9051325058705132) {
			return "b";
		} else if (r < 0.9226434082522643) {
			return "m";
		} else if (r < 0.9398859443139885) {
			return "g";
		} else if (r < 0.9539080845353908) {
			return "p";
		} else if (r < 0.9665213015766521) {
			return "d";
		} else if (r < 0.9756457564575645) {
			return "e";
		} else if (r < 0.9843676618584366) {
			return "z";
		} else if (r < 0.9874538745387452) {
			return "u";
		} else if (r < 0.9904729956390471) {
			return "h";
		} else if (r < 0.9926870177792685) {
			return "k";
		} else if (r < 0.9946997651794698) {
			return "x";
		} else if (r < 0.9961757799396174) {
			return "o";
		} else if (r < 0.9973163367997314) {
			return "i";
		} else if (r < 0.9984568936598455) {
			return "v";
		} else if (r < 0.9991949010399193) {
			return "f";
		} else if (r < 0.9995303589399528) {
			return "q";
		} else if (r < 0.9997316336799729) {
			return "a";
		} else if (r < 0.9998658168399863) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "b") {
		if (r < 0.3058336961253809) {
			return "l";
		} else if (r < 0.48498040922942964) {
			return "i";
		} else if (r < 0.6136264693077927) {
			return "e";
		} else if (r < 0.7298650413582934) {
			return "r";
		} else if (r < 0.8073574227252939) {
			return "u";
		} else if (r < 0.8750544188071397) {
			return "b";
		} else if (r < 0.9388332607749238) {
			return "a";
		} else if (r < 0.9760557248585111) {
			return "o";
		} else if (r < 0.9851980844579887) {
			return "s";
		} else if (r < 0.9897692642577275) {
			return "y";
		} else if (r < 0.9928167174575534) {
			return "n";
		} else if (r < 0.9947757945145843) {
			return "w";
		} else if (r < 0.9960818458859383) {
			return "h";
		} else if (r < 0.9973878972572923) {
			return "c";
		} else if (r < 0.9984762734000873) {
			return "g";
		} else if (r < 0.9991292990857642) {
			return "m";
		} else if (r < 0.9995646495428822) {
			return "k";
		} else if (r < 0.9997823247714411) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "c") {
		if (r < 0.4081383164512749) {
			return "a";
		} else if (r < 0.5265019210618233) {
			return "i";
		} else if (r < 0.5997205728257073) {
			return "o";
		} else if (r < 0.6682675515193853) {
			return "k";
		} else if (r < 0.7309640237513099) {
			return "e";
		} else if (r < 0.7884648969612296) {
			return "h";
		} else if (r < 0.8429095354523228) {
			return "u";
		} else if (r < 0.8891460006985681) {
			return "r";
		} else if (r < 0.9300558854348587) {
			return "t";
		} else if (r < 0.9668616835487253) {
			return "s";
		} else if (r < 0.9803527768075446) {
			return "l";
		} else if (r < 0.9892595179881244) {
			return "y";
		} else if (r < 0.9940185120502969) {
			return "c";
		} else if (r < 0.9984718826405868) {
			return "n";
		} else if (r < 0.9988211666084527) {
			return "w";
		} else if (r < 0.9991704505763185) {
			return "q";
		} else if (r < 0.9994324135522179) {
			return "m";
		} else if (r < 0.9996507160321341) {
			return "p";
		} else if (r < 0.9997816975200837) {
			return "f";
		} else if (r < 0.9998690185120502) {
			return "b";
		} else if (r < 0.9999126790080335) {
			return "g";
		} else if (r < 0.9999563395040167) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "d") {
		if (r < 0.30893724150332674) {
			return "e";
		} else if (r < 0.5596115806509621) {
			return "a";
		} else if (r < 0.7517532817838518) {
			return "i";
		} else if (r < 0.8163999280704909) {
			return "o";
		} else if (r < 0.851375651861176) {
			return "d";
		} else if (r < 0.8861715518791584) {
			return "s";
		} else if (r < 0.9105376730803812) {
			return "u";
		} else if (r < 0.930588023736738) {
			return "l";
		} else if (r < 0.9492896960978241) {
			return "g";
		} else if (r < 0.9630462147095846) {
			return "y";
		} else if (r < 0.9762632620032369) {
			return "n";
		} else if (r < 0.9869627764790506) {
			return "r";
		} else if (r < 0.9901996043877002) {
			return "w";
		} else if (r < 0.9922675777737818) {
			return "h";
		} else if (r < 0.9941557273871607) {
			return "m";
		} else if (r < 0.9955943175687827) {
			return "t";
		} else if (r < 0.9965833483186478) {
			return "p";
		} else if (r < 0.9975723790685129) {
			return "f";
		} else if (r < 0.998291674159324) {
			return "c";
		} else if (r < 0.9989210573637836) {
			return "b";
		} else if (r < 0.9992807049091891) {
			return "j";
		} else if (r < 0.9996403524545946) {
			return "v";
		} else if (r < 0.9999100881136487) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "e") {
		if (r < 0.4603624009060023) {
			return "s";
		} else if (r < 0.6547484225853422) {
			return "r";
		} else if (r < 0.7519818799546999) {
			return "n";
		} else if (r < 0.8371622714771073) {
			return "d";
		} else if (r < 0.8745348649085909) {
			return "t";
		} else if (r < 0.9043035107587769) {
			return "l";
		} else if (r < 0.927196246562045) {
			return "v";
		} else if (r < 0.9431321792590196) {
			return "c";
		} else if (r < 0.955670603462223) {
			return "f";
		} else if (r < 0.9634363371622715) {
			return "w";
		} else if (r < 0.9711211778029445) {
			return "g";
		} else if (r < 0.9762983336029768) {
			return "u";
		} else if (r < 0.9813945963436337) {
			return "m";
		} else if (r < 0.9846303187186539) {
			return "b";
		} else if (r < 0.9873806827374211) {
			return "p";
		} else if (r < 0.9900501536968127) {
			return "x";
		} else if (r < 0.9922342662999514) {
			return "k";
		} else if (r < 0.994094806665588) {
			return "z";
		} else if (r < 0.9959553470312247) {
			return "i";
		} else if (r < 0.9974114220999838) {
			return "h";
		} else if (r < 0.9987866041093674) {
			return "a";
		} else if (r < 0.9991910694062449) {
			return "y";
		} else if (r < 0.9995146416437469) {
			return "q";
		} else if (r < 0.9997573208218734) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "f") {
		if (r < 0.31639423854992715) {
			return "i";
		} else if (r < 0.48227868587150025) {
			return "o";
		} else if (r < 0.6361870852888817) {
			return "e";
		} else if (r < 0.7606408804013595) {
			return "y";
		} else if (r < 0.8533743324162486) {
			return "f";
		} else if (r < 0.9040297782812753) {
			return "t";
		} else if (r < 0.9397960835086584) {
			return "l";
		} else if (r < 0.9679559799320279) {
			return "u";
		} else if (r < 0.9893186599773427) {
			return "a";
		} else if (r < 0.995630360899822) {
			return "r";
		} else if (r < 0.9993526460592329) {
			return "s";
		} else if (r < 0.9996763230296165) {
			return "d";
		} else if (r < 0.9998381615148083) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "g") {
		if (r < 0.23014610154780848) {
			return "h";
		} else if (r < 0.37537971936930425) {
			return "n";
		} else if (r < 0.48763199768552007) {
			return "a";
		} else if (r < 0.5938087660928686) {
			return "e";
		} else if (r < 0.675972804860408) {
			return "i";
		} else if (r < 0.742080138868798) {
			return "o";
		} else if (r < 0.8078981628815276) {
			return "r";
		} else if (r < 0.8637349920439752) {
			return "g";
		} else if (r < 0.9137856212932157) {
			return "u";
		} else if (r < 0.9472009257919861) {
			return "m";
		} else if (r < 0.9739621003905685) {
			return "l";
		} else if (r < 0.9837986402430204) {
			return "s";
		} else if (r < 0.9878489801822653) {
			return "y";
		} else if (r < 0.99175466512368) {
			return "w";
		} else if (r < 0.9934905250976421) {
			return "b";
		} else if (r < 0.9952263850716042) {
			return "f";
		} else if (r < 0.9968175900477362) {
			return "t";
		} else if (r < 0.9984087950238681) {
			return "z";
		} else if (r < 0.9994213800086794) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "h") {
		if (r < 0.23645320197044334) {
			return "e";
		} else if (r < 0.4408866995073891) {
			return "i";
		} else if (r < 0.6403940886699507) {
			return "y";
		} else if (r < 0.770935960591133) {
			return "o";
		} else if (r < 0.8793103448275862) {
			return "a";
		} else if (r < 0.9630541871921182) {
			return "u";
		} else if (r < 0.9704433497536946) {
			return "l";
		} else if (r < 0.977832512315271) {
			return "r";
		} else if (r < 0.9827586206896552) {
			return "d";
		} else if (r < 0.9876847290640395) {
			return "s";
		} else if (r < 0.9926108374384237) {
			return "t";
		} else if (r < 0.9950738916256159) {
			return "f";
		} else if (r < 0.997536945812808) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "i") {
		if (r < 0.5438202247191011) {
			return "d";
		} else if (r < 0.7123595505617977) {
			return "n";
		} else if (r < 0.7842696629213483) {
			return "f";
		} else if (r < 0.8382022471910112) {
			return "t";
		} else if (r < 0.8876404494382022) {
			return "s";
		} else if (r < 0.9258426966292135) {
			return "a";
		} else if (r < 0.9438202247191011) {
			return "o";
		} else if (r < 0.9595505617977528) {
			return "u";
		} else if (r < 0.9707865168539326) {
			return "i";
		} else if (r < 0.9775280898876404) {
			return "p";
		} else if (r < 0.9842696629213482) {
			return "m";
		} else if (r < 0.9887640449438201) {
			return "k";
		} else if (r < 0.991011235955056) {
			return "z";
		} else if (r < 0.993258426966292) {
			return "c";
		} else if (r < 0.9955056179775279) {
			return "e";
		} else if (r < 0.9977528089887638) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "j") {
		if (r < 0.24031007751937986) {
			return "a";
		} else if (r < 0.4651162790697675) {
			return "u";
		} else if (r < 0.682170542635659) {
			return "o";
		} else if (r < 0.7829457364341086) {
			return "e";
		} else if (r < 0.868217054263566) {
			return "i";
		} else if (r < 0.8914728682170544) {
			return "n";
		} else if (r < 0.9147286821705428) {
			return "k";
		} else if (r < 0.9302325581395351) {
			return "j";
		} else if (r < 0.9457364341085274) {
			return "m";
		} else if (r < 0.9534883720930235) {
			return "w";
		} else if (r < 0.9612403100775196) {
			return "v";
		} else if (r < 0.9689922480620158) {
			return "r";
		} else if (r < 0.9767441860465119) {
			return "b";
		} else if (r < 0.9844961240310081) {
			return "d";
		} else if (r < 0.9922480620155042) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "k") {
		if (r < 0.7588566827697263) {
			return "e";
		} else if (r < 0.8490338164251208) {
			return "i";
		} else if (r < 0.9070048309178744) {
			return "a";
		} else if (r < 0.9315619967793881) {
			return "o";
		} else if (r < 0.9520933977455717) {
			return "s";
		} else if (r < 0.961755233494364) {
			return "u";
		} else if (r < 0.9702093397745573) {
			return "h";
		} else if (r < 0.9782608695652175) {
			return "k";
		} else if (r < 0.9847020933977457) {
			return "r";
		} else if (r < 0.9887278582930759) {
			return "l";
		} else if (r < 0.9911433172302739) {
			return "y";
		} else if (r < 0.993558776167472) {
			return "v";
		} else if (r < 0.9955716586151371) {
			return "n";
		} else if (r < 0.9975845410628021) {
			return "t";
		} else if (r < 0.9991948470209342) {
			return "d";
		} else if (r < 0.9995974235104672) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "l") {
		if (r < 0.2969504531322352) {
			return "i";
		} else if (r < 0.5360852020903618) {
			return "l";
		} else if (r < 0.6538334325593702) {
			return "e";
		} else if (r < 0.7284514123172587) {
			return "a";
		} else if (r < 0.7946682542832573) {
			return "y";
		} else if (r < 0.860355890719058) {
			return "o";
		} else if (r < 0.8834424819739367) {
			return "d";
		} else if (r < 0.9059337170073428) {
			return "s";
		} else if (r < 0.9279618972018259) {
			return "t";
		} else if (r < 0.9417873916782431) {
			return "u";
		} else if (r < 0.9513130912218033) {
			return "m";
		} else if (r < 0.959515776939869) {
			return "k";
		} else if (r < 0.9675200105841106) {
			return "v";
		} else if (r < 0.9737381755639347) {
			return "b";
		} else if (r < 0.9779718198055171) {
			return "f";
		} else if (r < 0.9820070119732752) {
			return "g";
		} else if (r < 0.9857114506846597) {
			return "c";
		} else if (r < 0.9892174373222201) {
			return "p";
		} else if (r < 0.9922603691208575) {
			return "h";
		} else if (r < 0.9951709995369453) {
			return "w";
		} else if (r < 0.9974201230402859) {
			return "r";
		} else if (r < 0.9992061917047035) {
			return "n";
		} else if (r < 0.999801547926176) {
			return "z";
		} else if (r < 0.9999338493087255) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "m") {
		if (r < 0.21615585060181164) {
			return "p";
		} else if (r < 0.40017371882367536) {
			return "e";
		} else if (r < 0.5472142945774909) {
			return "a";
		} else if (r < 0.6917731728502294) {
			return "i";
		} else if (r < 0.7742896140960416) {
			return "m";
		} else if (r < 0.8492368780245687) {
			return "o";
		} else if (r < 0.914753691525003) {
			return "b";
		} else if (r < 0.9468916739049509) {
			return "u";
		} else if (r < 0.9637672167762749) {
			return "s";
		} else if (r < 0.9771683831740909) {
			return "n";
		} else if (r < 0.9844893907432682) {
			return "y";
		} else if (r < 0.9897009554535301) {
			return "l";
		} else if (r < 0.9919344831864995) {
			return "f";
		} else if (r < 0.9941680109194688) {
			return "r";
		} else if (r < 0.9959051991562228) {
			return "w";
		} else if (r < 0.9972701327708151) {
			return "c";
		} else if (r < 0.9977664722670305) {
			return "d";
		} else if (r < 0.9982628117632459) {
			return "h";
		} else if (r < 0.9986350663854074) {
			return "g";
		} else if (r < 0.999007321007569) {
			return "j";
		} else if (r < 0.9993795756297305) {
			return "k";
		} else if (r < 0.9996277453778382) {
			return "v";
		} else if (r < 0.9998759151259459) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "n") {
		if (r < 0.41277313286025435) {
			return "g";
		} else if (r < 0.5482681093234034) {
			return "e";
		} else if (r < 0.6319644488161316) {
			return "t";
		} else if (r < 0.7064919553151128) {
			return "a";
		} else if (r < 0.7558666479308649) {
			return "i";
		} else if (r < 0.7952820909154781) {
			return "o";
		} else if (r < 0.8344340616876273) {
			return "d";
		} else if (r < 0.8735333380172838) {
			return "s";
		} else if (r < 0.9095060774257009) {
			return "c";
		} else if (r < 0.9279842619265088) {
			return "f";
		} else if (r < 0.941719946602965) {
			return "k";
		} else if (r < 0.9544720016862223) {
			return "n";
		} else if (r < 0.9649055012997964) {
			return "u";
		} else if (r < 0.9744431953909929) {
			return "v";
		} else if (r < 0.9791856952153447) {
			return "h";
		} else if (r < 0.9829445654464977) {
			return "q";
		} else if (r < 0.9861764912527227) {
			return "l";
		} else if (r < 0.9886004356073914) {
			return "y";
		} else if (r < 0.9909014262629103) {
			return "b";
		} else if (r < 0.9930794632192793) {
			return "w";
		} else if (r < 0.9948183798215416) {
			return "m";
		} else if (r < 0.9964870371671469) {
			return "j";
		} else if (r < 0.9978219630436311) {
			return "p";
		} else if (r < 0.9987704630085015) {
			return "r";
		} else if (r < 0.9997013981592076) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "o") {
		if (r < 0.6500849754260255) {
			return "n";
		} else if (r < 0.7459923751779891) {
			return "u";
		} else if (r < 0.7935786137522393) {
			return "l";
		} else if (r < 0.8242156997841166) {
			return "s";
		} else if (r < 0.8540719305498141) {
			return "t";
		} else if (r < 0.8794726930320153) {
			return "p";
		} else if (r < 0.899315603325525) {
			return "m";
		} else if (r < 0.9184695236782878) {
			return "r";
		} else if (r < 0.9361995314868405) {
			return "c";
		} else if (r < 0.9535161453309451) {
			return "g";
		} else if (r < 0.9693169813054066) {
			return "d";
		} else if (r < 0.9777226585825183) {
			return "i";
		} else if (r < 0.9825915208304628) {
			return "b";
		} else if (r < 0.986633595149511) {
			return "e";
		} else if (r < 0.9898948142023795) {
			return "a";
		} else if (r < 0.9922373800009188) {
			return "x";
		} else if (r < 0.9945799457994581) {
			return "v";
		} else if (r < 0.9964631849708329) {
			return "f";
		} else if (r < 0.9978411648523265) {
			return "h";
		} else if (r < 0.9985760874557899) {
			return "z";
		} else if (r < 0.9991732120711038) {
			return "k";
		} else if (r < 0.9995406733728355) {
			return "w";
		} else if (r < 0.9996784713609849) {
			return "j";
		} else if (r < 0.9998162693491343) {
			return "o";
		} else if (r < 0.9999540673372836) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "p") {
		if (r < 0.13239387613082812) {
			return "p";
		} else if (r < 0.2548712595685456) {
			return "e";
		} else if (r < 0.3644745998608212) {
			return "h";
		} else if (r < 0.470946416144746) {
			return "a";
		} else if (r < 0.5661099512874044) {
			return "l";
		} else if (r < 0.6510090466249131) {
			return "o";
		} else if (r < 0.7317327766179542) {
			return "t";
		} else if (r < 0.8060194850382744) {
			return "i";
		} else if (r < 0.8782185107863607) {
			return "s";
		} else if (r < 0.9173625608907449) {
			return "r";
		} else if (r < 0.9505915100904665) {
			return "u";
		} else if (r < 0.9612038970076551) {
			return "y";
		} else if (r < 0.9700765483646488) {
			return "m";
		} else if (r < 0.9766875434933893) {
			return "n";
		} else if (r < 0.9829505915100907) {
			return "w";
		} else if (r < 0.9876478775226167) {
			return "b";
		} else if (r < 0.9923451635351428) {
			return "c";
		} else if (r < 0.9958246346555325) {
			return "f";
		} else if (r < 0.9973903966597079) {
			return "k";
		} else if (r < 0.9984342379958248) {
			return "j";
		} else if (r < 0.9991301322199027) {
			return "d";
		} else if (r < 0.9998260264439806) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "q") {
		if (r < 0.9878787878787879) {
			return "u";
		} else if (r < 0.993939393939394) {
			return "a";
		} else if (r < 0.995959595959596) {
			return "h";
		} else if (r < 0.9979797979797981) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "r") {
		if (r < 0.17917917917917917) {
			return "e";
		} else if (r < 0.309023309023309) {
			return "i";
		} else if (r < 0.4115544115544115) {
			return "a";
		} else if (r < 0.5075075075075075) {
			return "r";
		} else if (r < 0.5924495924495925) {
			return "o";
		} else if (r < 0.6753896753896754) {
			return "c";
		} else if (r < 0.7384527384527385) {
			return "d";
		} else if (r < 0.7852137852137853) {
			return "t";
		} else if (r < 0.821964821964822) {
			return "s";
		} else if (r < 0.8587158587158588) {
			return "m";
		} else if (r < 0.8934648934648936) {
			return "l";
		} else if (r < 0.9123409123409124) {
			return "u";
		} else if (r < 0.9305019305019305) {
			return "k";
		} else if (r < 0.9446589446589447) {
			return "g";
		} else if (r < 0.9560989560989561) {
			return "p";
		} else if (r < 0.9656799656799657) {
			return "n";
		} else if (r < 0.9738309738309738) {
			return "y";
		} else if (r < 0.9814099814099814) {
			return "b";
		} else if (r < 0.9878449878449878) {
			return "w";
		} else if (r < 0.9917059917059916) {
			return "h";
		} else if (r < 0.9955669955669955) {
			return "v";
		} else if (r < 0.9985699985699985) {
			return "f";
		} else if (r < 0.9995709995709995) {
			return "q";
		} else if (r < 0.9998569998569997) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "s") {
		if (r < 0.2840952021156026) {
			return "t";
		} else if (r < 0.43338370482307015) {
			return "m";
		} else if (r < 0.5520085631532553) {
			return "h";
		} else if (r < 0.662825840574235) {
			return "e";
		} else if (r < 0.716314066238509) {
			return "c";
		} else if (r < 0.769550434454099) {
			return "i";
		} else if (r < 0.817497796247324) {
			return "s";
		} else if (r < 0.8610061705074927) {
			return "o";
		} else if (r < 0.9039478655081223) {
			return "a";
		} else if (r < 0.9339189019015237) {
			return "p";
		} else if (r < 0.9431746631406623) {
			return "l";
		} else if (r < 0.9509822440498678) {
			return "u";
		} else if (r < 0.958223145699534) {
			return "k";
		} else if (r < 0.9645195819166351) {
			return "r";
		} else if (r < 0.9707845359526507) {
			return "f";
		} else if (r < 0.9770180078075807) {
			return "b";
		} else if (r < 0.9823070142299457) {
			return "g";
		} else if (r < 0.9874700919279686) {
			return "d";
		} else if (r < 0.9909016496662888) {
			return "y";
		} else if (r < 0.9932942954287872) {
			return "q";
		} else if (r < 0.9954036015615161) {
			return "n";
		} else if (r < 0.9972295680644754) {
			return "j";
		} else if (r < 0.9989925702052637) {
			return "w";
		} else if (r < 0.9997796247324013) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "t") {
		if (r < 0.2157738716546282) {
			return "e";
		} else if (r < 0.42582773161872156) {
			return "i";
		} else if (r < 0.5985971358189637) {
			return "y";
		} else if (r < 0.7031856707444365) {
			return "a";
		} else if (r < 0.7738716546281992) {
			return "h";
		} else if (r < 0.8246419773704646) {
			return "o";
		} else if (r < 0.8693165212308462) {
			return "t";
		} else if (r < 0.9106509122792367) {
			return "u";
		} else if (r < 0.9455555091645442) {
			return "r";
		} else if (r < 0.9623815289549497) {
			return "c";
		} else if (r < 0.9762849150348628) {
			return "s";
		} else if (r < 0.9840090184125924) {
			return "l";
		} else if (r < 0.9881424575174315) {
			return "z";
		} else if (r < 0.991315602688823) {
			return "m";
		} else if (r < 0.9936537096572168) {
			return "n";
		} else if (r < 0.9955742975241116) {
			return "f";
		} else if (r < 0.9970356143793577) {
			return "w";
		} else if (r < 0.9982046678635547) {
			return "b";
		} else if (r < 0.9989562022462527) {
			return "p";
		} else if (r < 0.9994154732579015) {
			return "k";
		} else if (r < 0.9996242328086509) {
			return "j";
		} else if (r < 0.9998329923594003) {
			return "g";
		} else if (r < 0.9999164961797) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "u") {
		if (r < 0.7929179740026894) {
			return "m";
		} else if (r < 0.8978036754818467) {
			return "s";
		} else if (r < 0.9556252801434334) {
			return "r";
		} else if (r < 0.9708650829224562) {
			return "n";
		} else if (r < 0.9811743612729716) {
			return "t";
		} else if (r < 0.9847601972209771) {
			return "l";
		} else if (r < 0.9883460331689825) {
			return "p";
		} else if (r < 0.9901389511429852) {
			return "c";
		} else if (r < 0.9919318691169879) {
			return "e";
		} else if (r < 0.9937247870909907) {
			return "j";
		} else if (r < 0.9950694755714927) {
			return "d";
		} else if (r < 0.995965934558494) {
			return "a";
		} else if (r < 0.9968623935454953) {
			return "b";
		} else if (r < 0.9977588525324966) {
			return "u";
		} else if (r < 0.9986553115194979) {
			return "v";
		} else if (r < 0.9991035410129986) {
			return "g";
		} else if (r < 0.9995517705064992) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "v") {
		if (r < 0.7017754318618042) {
			return "e";
		} else if (r < 0.8421305182341651) {
			return "i";
		} else if (r < 0.9449376199616123) {
			return "a";
		} else if (r < 0.9864443378119002) {
			return "o";
		} else if (r < 0.9923224568138196) {
			return "u";
		} else if (r < 0.9950815738963532) {
			return "v";
		} else if (r < 0.9977207293666027) {
			return "y";
		} else if (r < 0.9988003838771593) {
			return "r";
		} else if (r < 0.9991602687140115) {
			return "s";
		} else if (r < 0.9994001919385797) {
			return "l";
		} else if (r < 0.9995201535508638) {
			return "w";
		} else if (r < 0.9996401151631479) {
			return "n";
		} else if (r < 0.999760076775432) {
			return "t";
		} else if (r < 0.9998800383877161) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "w") {
		if (r < 0.3493150684931507) {
			return "a";
		} else if (r < 0.6575342465753424) {
			return "i";
		} else if (r < 0.8013698630136986) {
			return "e";
		} else if (r < 0.910958904109589) {
			return "o";
		} else if (r < 0.9383561643835616) {
			return "h";
		} else if (r < 0.958904109589041) {
			return "u";
		} else if (r < 0.9726027397260273) {
			return "b";
		} else if (r < 0.9863013698630136) {
			return "w";
		} else if (r < 0.9931506849315068) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "x") {
		if (r < 0.28174603174603174) {
			return "e";
		} else if (r < 0.5257936507936508) {
			return "i";
		} else if (r < 0.6865079365079365) {
			return "t";
		} else if (r < 0.8174603174603174) {
			return "a";
		} else if (r < 0.8988095238095238) {
			return "o";
		} else if (r < 0.9186507936507937) {
			return "y";
		} else if (r < 0.9365079365079366) {
			return "l";
		} else if (r < 0.9484126984126985) {
			return "u";
		} else if (r < 0.9563492063492064) {
			return "m";
		} else if (r < 0.9642857142857143) {
			return "p";
		} else if (r < 0.9702380952380952) {
			return "s";
		} else if (r < 0.9761904761904762) {
			return "h";
		} else if (r < 0.9821428571428571) {
			return "n";
		} else if (r < 0.988095238095238) {
			return "f";
		} else if (r < 0.992063492063492) {
			return "b";
		} else if (r < 0.9960317460317459) {
			return "g";
		} else if (r < 0.9980158730158729) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "y") {
		if (r < 0.6067415730337079) {
			return "a";
		} else if (r < 0.8202247191011236) {
			return "e";
		} else if (r < 0.9101123595505618) {
			return "o";
		} else if (r < 0.9438202247191011) {
			return "i";
		} else if (r < 0.9775280898876404) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "i" && str[str.length-1] == "z") {
		if (r < 0.5979184112932169) {
			return "e";
		} else if (r < 0.7907644455078359) {
			return "a";
		} else if (r < 0.9345615504246919) {
			return "i";
		} else if (r < 0.9676994855844) {
			return "o";
		} else if (r < 0.9930613709773896) {
			return "z";
		} else if (r < 0.9948558440004784) {
			return "y";
		} else if (r < 0.9956932647445866) {
			return "u";
		} else if (r < 0.9964110539538222) {
			return "c";
		} else if (r < 0.9970092116281852) {
			return "m";
		} else if (r < 0.997368106232803) {
			return "n";
		} else if (r < 0.9977270008374208) {
			return "d";
		} else if (r < 0.9980858954420386) {
			return "g";
		} else if (r < 0.9984447900466564) {
			return "b";
		} else if (r < 0.9988036846512742) {
			return "r";
		} else if (r < 0.9990429477210194) {
			return "l";
		} else if (r < 0.9992822107907646) {
			return "t";
		} else if (r < 0.9995214738605098) {
			return "s";
		} else if (r < 0.9996411053953824) {
			return "k";
		} else if (r < 0.999760736930255) {
			return "v";
		} else if (r < 0.9998803684651276) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "a") {
		if (r < 0.2610350076103501) {
			return "c";
		} else if (r < 0.3592085235920852) {
			return "r";
		} else if (r < 0.4452054794520548) {
			return "m";
		} else if (r < 0.530441400304414) {
			return "n";
		} else if (r < 0.5852359208523592) {
			return "p";
		} else if (r < 0.6362252663622526) {
			return "s";
		} else if (r < 0.6864535768645357) {
			return "g";
		} else if (r < 0.7290715372907153) {
			return "w";
		} else if (r < 0.7617960426179603) {
			return "i";
		} else if (r < 0.7914764079147639) {
			return "u";
		} else if (r < 0.8211567732115675) {
			return "b";
		} else if (r < 0.8462709284627091) {
			return "l";
		} else if (r < 0.8706240487062403) {
			return "y";
		} else if (r < 0.8934550989345509) {
			return "d";
		} else if (r < 0.9147640791476407) {
			return "v";
		} else if (r < 0.9353120243531201) {
			return "z";
		} else if (r < 0.9528158295281581) {
			return "k";
		} else if (r < 0.9695585996955858) {
			return "t";
		} else if (r < 0.9863013698630134) {
			return "h";
		} else if (r < 0.9901065449010652) {
			return "e";
		} else if (r < 0.9931506849315066) {
			return "a";
		} else if (r < 0.996194824961948) {
			return "q";
		} else if (r < 0.998477929984779) {
			return "o";
		} else if (r < 0.9992389649923894) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "b") {
		if (r < 0.5) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "c") {
		if (r < 0.6666666666666666) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "d") {
		if (r < 0.7142857142857143) {
			return "a";
		} else if (r < 0.8571428571428572) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "e") {
		if (r < 0.3710144927536232) {
			return "c";
		} else if (r < 0.4811594202898551) {
			return "r";
		} else if (r < 0.561352657004831) {
			return "s";
		} else if (r < 0.6367149758454107) {
			return "t";
		} else if (r < 0.6956521739130436) {
			return "l";
		} else if (r < 0.7516908212560387) {
			return "w";
		} else if (r < 0.7942028985507247) {
			return "e";
		} else if (r < 0.8270531400966183) {
			return "a";
		} else if (r < 0.855072463768116) {
			return "o";
		} else if (r < 0.881159420289855) {
			return "n";
		} else if (r < 0.9062801932367149) {
			return "j";
		} else if (r < 0.9227053140096618) {
			return "m";
		} else if (r < 0.936231884057971) {
			return "f";
		} else if (r < 0.9487922705314009) {
			return "h";
		} else if (r < 0.9594202898550724) {
			return "b";
		} else if (r < 0.9690821256038648) {
			return "z";
		} else if (r < 0.9768115942028985) {
			return "u";
		} else if (r < 0.9835748792270531) {
			return "p";
		} else if (r < 0.9893719806763285) {
			return "d";
		} else if (r < 0.9922705314009661) {
			return "q";
		} else if (r < 0.9942028985507245) {
			return "g";
		} else if (r < 0.9961352657004829) {
			return "v";
		} else if (r < 0.9980676328502414) {
			return "i";
		} else if (r < 0.9990338164251206) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "g") {
		return "e";
	} else if (str[str.length-2] == "j" && str[str.length-1] == "h") {
		if (r < 0.375) {
			return "o";
		} else if (r < 0.625) {
			return "a";
		} else if (r < 0.75) {
			return "e";
		} else if (r < 0.875) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "i") {
		if (r < 0.24804177545691905) {
			return "n";
		} else if (r < 0.38903394255874674) {
			return "g";
		} else if (r < 0.48825065274151436) {
			return "b";
		} else if (r < 0.5718015665796344) {
			return "m";
		} else if (r < 0.6527415143603132) {
			return "t";
		} else if (r < 0.7206266318537858) {
			return "l";
		} else if (r < 0.7597911227154046) {
			return "s";
		} else if (r < 0.7963446475195821) {
			return "v";
		} else if (r < 0.8302872062663185) {
			return "k";
		} else if (r < 0.8642297650130548) {
			return "d";
		} else if (r < 0.8981723237597912) {
			return "c";
		} else if (r < 0.9295039164490863) {
			return "r";
		} else if (r < 0.9451697127937337) {
			return "a";
		} else if (r < 0.95822454308094) {
			return "f";
		} else if (r < 0.968668407310705) {
			return "u";
		} else if (r < 0.9765013054830288) {
			return "p";
		} else if (r < 0.9843342036553526) {
			return "z";
		} else if (r < 0.9895561357702352) {
			return "e";
		} else if (r < 0.9947780678851177) {
			return "h";
		} else if (r < 0.997389033942559) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "j") {
		if (r < 0.4) {
			return "a";
		} else if (r < 0.8) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "k") {
		if (r < 0.6666666666666666) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "l") {
		if (r < 0.5) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "m") {
		if (r < 0.75) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "n") {
		if (r < 0.5625) {
			return "a";
		} else if (r < 0.75) {
			return "h";
		} else if (r < 0.8125) {
			return "g";
		} else if (r < 0.875) {
			return "o";
		} else if (r < 0.9375) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "o") {
		if (r < 0.16650049850448653) {
			return "i";
		} else if (r < 0.3190428713858425) {
			return "u";
		} else if (r < 0.4137587238285145) {
			return "y";
		} else if (r < 0.49052841475573283) {
			return "r";
		} else if (r < 0.5653040877367896) {
			return "l";
		} else if (r < 0.6400797607178464) {
			return "c";
		} else if (r < 0.707876370887338) {
			return "n";
		} else if (r < 0.7577268195413759) {
			return "s";
		} else if (r < 0.8045862412761715) {
			return "b";
		} else if (r < 0.8414755732801595) {
			return "h";
		} else if (r < 0.8713858424725822) {
			return "v";
		} else if (r < 0.8973080757726819) {
			return "k";
		} else if (r < 0.9212362911266201) {
			return "g";
		} else if (r < 0.9451645064805583) {
			return "w";
		} else if (r < 0.9611166500498504) {
			return "t";
		} else if (r < 0.971086739780658) {
			return "e";
		} else if (r < 0.9800598205383848) {
			return "a";
		} else if (r < 0.9870388833499502) {
			return "o";
		} else if (r < 0.9920239282153539) {
			return "d";
		} else if (r < 0.9950149551345961) {
			return "m";
		} else if (r < 0.9970089730807576) {
			return "p";
		} else if (r < 0.9990029910269191) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "p") {
		if (r < 0.6666666666666666) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "r") {
		if (r < 0.8) {
			return "a";
		} else if (r < 0.9) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "s") {
		return "c";
	} else if (str[str.length-2] == "j" && str[str.length-1] == "t") {
		return "a";
	} else if (str[str.length-2] == "j" && str[str.length-1] == "u") {
		if (r < 0.18464730290456433) {
			return "d";
		} else if (r < 0.34232365145228216) {
			return "n";
		} else if (r < 0.4979253112033195) {
			return "r";
		} else if (r < 0.6334716459197787) {
			return "s";
		} else if (r < 0.739280774550484) {
			return "g";
		} else if (r < 0.7966804979253111) {
			return "m";
		} else if (r < 0.8360995850622406) {
			return "v";
		} else if (r < 0.8734439834024895) {
			return "t";
		} else if (r < 0.9059474412171507) {
			return "b";
		} else if (r < 0.9363762102351313) {
			return "l";
		} else if (r < 0.954356846473029) {
			return "i";
		} else if (r < 0.9654218533886583) {
			return "x";
		} else if (r < 0.9730290456431534) {
			return "p";
		} else if (r < 0.9799446749654217) {
			return "k";
		} else if (r < 0.9854771784232363) {
			return "c";
		} else if (r < 0.991009681881051) {
			return "a";
		} else if (r < 0.9937759336099583) {
			return "e";
		} else if (r < 0.9958506224066388) {
			return "f";
		} else if (r < 0.9972337482710925) {
			return "j";
		} else if (r < 0.9979253112033193) {
			return "h";
		} else if (r < 0.9986168741355461) {
			return "y";
		} else if (r < 0.999308437067773) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "v") {
		return "e";
	} else if (str[str.length-2] == "j" && str[str.length-1] == "w") {
		if (r < 0.5) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "j" && str[str.length-1] == "y") {
		if (r < 0.6) {
			return "n";
		} else if (r < 0.8) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "a") {
		if (r < 0.1433365292425695) {
			return "r";
		} else if (r < 0.26558005752636626) {
			return "l";
		} else if (r < 0.38015340364333655) {
			return "b";
		} else if (r < 0.4928092042186002) {
			return "n";
		} else if (r < 0.5992329817833173) {
			return "t";
		} else if (r < 0.6577181208053691) {
			return "s";
		} else if (r < 0.711888782358581) {
			return "m";
		} else if (r < 0.7583892617449665) {
			return "g";
		} else if (r < 0.7986577181208054) {
			return "i";
		} else if (r < 0.8379674017257911) {
			return "d";
		} else if (r < 0.8638542665388304) {
			return "h";
		} else if (r < 0.8887823585810164) {
			return "p";
		} else if (r < 0.9055608820709493) {
			return "y";
		} else if (r < 0.9204218600191756) {
			return "w";
		} else if (r < 0.9319271332694152) {
			return "f";
		} else if (r < 0.9429530201342282) {
			return "o";
		} else if (r < 0.9525407478427613) {
			return "k";
		} else if (r < 0.9616490891658678) {
			return "z";
		} else if (r < 0.9683604985618409) {
			return "c";
		} else if (r < 0.9750719079578141) {
			return "u";
		} else if (r < 0.9817833173537872) {
			return "v";
		} else if (r < 0.9870565675934804) {
			return "a";
		} else if (r < 0.9923298178331735) {
			return "e";
		} else if (r < 0.9966442953020134) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "b") {
		if (r < 0.28793774319066145) {
			return "o";
		} else if (r < 0.4630350194552529) {
			return "i";
		} else if (r < 0.6264591439688716) {
			return "a";
		} else if (r < 0.7782101167315175) {
			return "e";
		} else if (r < 0.8793774319066148) {
			return "u";
		} else if (r < 0.9727626459143969) {
			return "r";
		} else if (r < 0.9922178988326849) {
			return "l";
		} else if (r < 0.9961089494163424) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "c") {
		if (r < 0.2631578947368421) {
			return "a";
		} else if (r < 0.47368421052631576) {
			return "h";
		} else if (r < 0.6491228070175439) {
			return "r";
		} else if (r < 0.8070175438596492) {
			return "o";
		} else if (r < 0.8947368421052633) {
			return "l";
		} else if (r < 0.9473684210526316) {
			return "u";
		} else if (r < 0.9824561403508772) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "d") {
		if (r < 0.46774193548387094) {
			return "o";
		} else if (r < 0.7419354838709677) {
			return "a";
		} else if (r < 0.8870967741935484) {
			return "r";
		} else if (r < 0.9516129032258065) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "e") {
		if (r < 0.34970800412229475) {
			return "r";
		} else if (r < 0.49433184472689795) {
			return "d";
		} else if (r < 0.5958433527997251) {
			return "n";
		} else if (r < 0.6939196152524905) {
			return "t";
		} else if (r < 0.7506011679835107) {
			return "e";
		} else if (r < 0.8069391961525249) {
			return "l";
		} else if (r < 0.85778083132944) {
			return "s";
		} else if (r < 0.902610786671247) {
			return "y";
		} else if (r < 0.9154929577464789) {
			return "w";
		} else if (r < 0.9280316042597045) {
			return "p";
		} else if (r < 0.9400549639299209) {
			return "m";
		} else if (r < 0.9508759876331158) {
			return "a";
		} else if (r < 0.9615252490553075) {
			return "b";
		} else if (r < 0.9692545517004466) {
			return "f";
		} else if (r < 0.975609756097561) {
			return "h";
		} else if (r < 0.9819649604946753) {
			return "i";
		} else if (r < 0.9859154929577464) {
			return "o";
		} else if (r < 0.9895225008588113) {
			return "g";
		} else if (r < 0.992614221916867) {
			return "c";
		} else if (r < 0.9953624184129165) {
			return "v";
		} else if (r < 0.998110614908966) {
			return "u";
		} else if (r < 0.9991411885949846) {
			return "k";
		} else if (r < 0.9996564754379939) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "f") {
		if (r < 0.3386243386243386) {
			return "u";
		} else if (r < 0.6507936507936507) {
			return "i";
		} else if (r < 0.7671957671957671) {
			return "a";
		} else if (r < 0.8518518518518517) {
			return "o";
		} else if (r < 0.9153439153439152) {
			return "l";
		} else if (r < 0.9629629629629628) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "g") {
		if (r < 0.28125) {
			return "u";
		} else if (r < 0.53125) {
			return "r";
		} else if (r < 0.71875) {
			return "o";
		} else if (r < 0.8125) {
			return "a";
		} else if (r < 0.875) {
			return "e";
		} else if (r < 0.90625) {
			return "d";
		} else if (r < 0.9375) {
			return "f";
		} else if (r < 0.96875) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "h") {
		if (r < 0.34966592427616927) {
			return "a";
		} else if (r < 0.6169265033407573) {
			return "o";
		} else if (r < 0.799554565701559) {
			return "e";
		} else if (r < 0.8685968819599109) {
			return "i";
		} else if (r < 0.9042316258351893) {
			return "u";
		} else if (r < 0.9220489977728286) {
			return "s";
		} else if (r < 0.9398663697104678) {
			return "t";
		} else if (r < 0.9510022271714923) {
			return "l";
		} else if (r < 0.9621380846325168) {
			return "m";
		} else if (r < 0.9710467706013364) {
			return "w";
		} else if (r < 0.9777282850779511) {
			return "y";
		} else if (r < 0.9844097995545658) {
			return "r";
		} else if (r < 0.9910913140311804) {
			return "z";
		} else if (r < 0.9933184855233853) {
			return "n";
		} else if (r < 0.9955456570155902) {
			return "v";
		} else if (r < 0.997772828507795) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "i") {
		if (r < 0.5152203543843707) {
			return "n";
		} else if (r < 0.6169922762380736) {
			return "e";
		} else if (r < 0.6935483870967742) {
			return "s";
		} else if (r < 0.7664697864606997) {
			return "l";
		} else if (r < 0.8268968650613359) {
			return "t";
		} else if (r < 0.8550658791458429) {
			return "r";
		} else if (r < 0.8818718764198092) {
			return "a";
		} else if (r < 0.9041344843253067) {
			return "d";
		} else if (r < 0.9227623807360291) {
			return "m";
		} else if (r < 0.9384370740572467) {
			return "p";
		} else if (r < 0.9529759200363471) {
			return "c";
		} else if (r < 0.9622898682417084) {
			return "b";
		} else if (r < 0.9706951385733757) {
			return "o";
		} else if (r < 0.9781917310313494) {
			return "f";
		} else if (r < 0.9827351203998183) {
			return "v";
		} else if (r < 0.9861426624261699) {
			return "w";
		} else if (r < 0.9895502044525215) {
			return "k";
		} else if (r < 0.991821899136756) {
			return "u";
		} else if (r < 0.993866424352567) {
			return "y";
		} else if (r < 0.9956837800999545) {
			return "z";
		} else if (r < 0.997501135847342) {
			return "h";
		} else if (r < 0.9988641526578826) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "j") {
		if (r < 0.52) {
			return "a";
		} else if (r < 0.72) {
			return "e";
		} else if (r < 0.88) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "k") {
		if (r < 0.32061068702290074) {
			return "e";
		} else if (r < 0.5801526717557252) {
			return "a";
		} else if (r < 0.7022900763358778) {
			return "o";
		} else if (r < 0.8091603053435114) {
			return "n";
		} else if (r < 0.9007633587786259) {
			return "i";
		} else if (r < 0.9770992366412213) {
			return "u";
		} else if (r < 0.9847328244274809) {
			return "y";
		} else if (r < 0.9923664122137404) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "l") {
		if (r < 0.5335570469798657) {
			return "e";
		} else if (r < 0.773489932885906) {
			return "i";
		} else if (r < 0.8557046979865771) {
			return "y";
		} else if (r < 0.9278523489932885) {
			return "a";
		} else if (r < 0.9748322147651006) {
			return "o";
		} else if (r < 0.99748322147651) {
			return "u";
		} else if (r < 0.9983221476510067) {
			return "r";
		} else if (r < 0.9991610738255033) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "m") {
		if (r < 0.6416666666666667) {
			return "a";
		} else if (r < 0.8291666666666667) {
			return "e";
		} else if (r < 0.9333333333333333) {
			return "o";
		} else if (r < 0.975) {
			return "i";
		} else if (r < 0.9958333333333333) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "n") {
		if (r < 0.37109375) {
			return "o";
		} else if (r < 0.6197916666666666) {
			return "e";
		} else if (r < 0.7981770833333333) {
			return "i";
		} else if (r < 0.9283854166666666) {
			return "a";
		} else if (r < 0.9947916666666666) {
			return "u";
		} else if (r < 0.9986979166666666) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "o") {
		if (r < 0.14375) {
			return "n";
		} else if (r < 0.24062499999999998) {
			return "l";
		} else if (r < 0.3364583333333333) {
			return "r";
		} else if (r < 0.41562499999999997) {
			return "u";
		} else if (r < 0.484375) {
			return "s";
		} else if (r < 0.546875) {
			return "p";
		} else if (r < 0.6041666666666666) {
			return "o";
		} else if (r < 0.6604166666666667) {
			return "t";
		} else if (r < 0.7125) {
			return "m";
		} else if (r < 0.7552083333333334) {
			return "i";
		} else if (r < 0.7937500000000001) {
			return "k";
		} else if (r < 0.8208333333333334) {
			return "e";
		} else if (r < 0.8458333333333334) {
			return "d";
		} else if (r < 0.8677083333333334) {
			return "c";
		} else if (r < 0.8864583333333335) {
			return "b";
		} else if (r < 0.9041666666666668) {
			return "f";
		} else if (r < 0.9218750000000001) {
			return "w";
		} else if (r < 0.9385416666666668) {
			return "a";
		} else if (r < 0.9541666666666668) {
			return "h";
		} else if (r < 0.9687500000000001) {
			return "v";
		} else if (r < 0.9791666666666667) {
			return "g";
		} else if (r < 0.9864583333333334) {
			return "z";
		} else if (r < 0.9927083333333334) {
			return "x";
		} else if (r < 0.9968750000000001) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "p") {
		if (r < 0.2642857142857143) {
			return "o";
		} else if (r < 0.44285714285714284) {
			return "i";
		} else if (r < 0.5785714285714285) {
			return "r";
		} else if (r < 0.7) {
			return "a";
		} else if (r < 0.8142857142857143) {
			return "l";
		} else if (r < 0.9142857142857143) {
			return "e";
		} else if (r < 0.9571428571428571) {
			return "h";
		} else if (r < 0.9857142857142857) {
			return "u";
		} else if (r < 0.9928571428571428) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "k" && str[str.length-1] == "r") {
		if (r < 0.2963917525773196) {
			return "a";
		} else if (r < 0.5438144329896908) {
			return "o";
		} else if (r < 0.7010309278350516) {
			return "i";
		} else if (r < 0.8402061855670104) {
			return "e";
		} else if (r < 0.9407216494845362) {
			return "u";
		} else if (r < 0.9871134020618557) {
			return "y";
		} else if (r < 0.9922680412371134) {
			return "s";
		} else if (r < 0.9948453608247423) {
			return "t";
		} else if (r < 0.9974226804123711) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "s") {
		if (r < 0.226890756302521) {
			return "t";
		} else if (r < 0.41008403361344536) {
			return "h";
		} else if (r < 0.49243697478991594) {
			return "i";
		} else if (r < 0.5663865546218487) {
			return "m";
		} else if (r < 0.6352941176470588) {
			return "o";
		} else if (r < 0.692436974789916) {
			return "e";
		} else if (r < 0.7495798319327731) {
			return "p";
		} else if (r < 0.7949579831932773) {
			return "a";
		} else if (r < 0.8369747899159663) {
			return "c";
		} else if (r < 0.8773109243697478) {
			return "l";
		} else if (r < 0.9042016806722688) {
			return "w";
		} else if (r < 0.9294117647058823) {
			return "u";
		} else if (r < 0.9495798319327731) {
			return "k";
		} else if (r < 0.9630252100840335) {
			return "n";
		} else if (r < 0.9731092436974789) {
			return "y";
		} else if (r < 0.9815126050420167) {
			return "b";
		} else if (r < 0.9865546218487393) {
			return "f";
		} else if (r < 0.991596638655462) {
			return "d";
		} else if (r < 0.9966386554621847) {
			return "g";
		} else if (r < 0.9983193277310922) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "t") {
		if (r < 0.3625) {
			return "o";
		} else if (r < 0.5583333333333333) {
			return "a";
		} else if (r < 0.6958333333333333) {
			return "i";
		} else if (r < 0.7833333333333333) {
			return "h";
		} else if (r < 0.8625) {
			return "e";
		} else if (r < 0.925) {
			return "r";
		} else if (r < 0.9500000000000001) {
			return "u";
		} else if (r < 0.9666666666666668) {
			return "y";
		} else if (r < 0.9833333333333335) {
			return "s";
		} else if (r < 0.9875000000000002) {
			return "t";
		} else if (r < 0.9916666666666668) {
			return "z";
		} else if (r < 0.9958333333333335) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "u") {
		if (r < 0.1927437641723356) {
			return "l";
		} else if (r < 0.3424036281179138) {
			return "r";
		} else if (r < 0.48526077097505665) {
			return "m";
		} else if (r < 0.5941043083900226) {
			return "p";
		} else if (r < 0.6961451247165532) {
			return "n";
		} else if (r < 0.7732426303854875) {
			return "s";
		} else if (r < 0.8276643990929704) {
			return "t";
		} else if (r < 0.8616780045351473) {
			return "a";
		} else if (r < 0.8866213151927437) {
			return "d";
		} else if (r < 0.9047619047619047) {
			return "b";
		} else if (r < 0.9206349206349205) {
			return "c";
		} else if (r < 0.9365079365079363) {
			return "k";
		} else if (r < 0.9523809523809521) {
			return "e";
		} else if (r < 0.9637188208616777) {
			return "h";
		} else if (r < 0.9705215419501131) {
			return "f";
		} else if (r < 0.9773242630385485) {
			return "g";
		} else if (r < 0.9841269841269839) {
			return "i";
		} else if (r < 0.9909297052154192) {
			return "v";
		} else if (r < 0.9931972789115644) {
			return "y";
		} else if (r < 0.9954648526077096) {
			return "j";
		} else if (r < 0.9977324263038547) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "v") {
		if (r < 0.4827586206896552) {
			return "a";
		} else if (r < 0.7586206896551724) {
			return "e";
		} else if (r < 0.896551724137931) {
			return "i";
		} else if (r < 0.9655172413793104) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "w") {
		if (r < 0.3344594594594595) {
			return "a";
		} else if (r < 0.6418918918918919) {
			return "o";
		} else if (r < 0.7939189189189189) {
			return "i";
		} else if (r < 0.9358108108108107) {
			return "e";
		} else if (r < 0.9594594594594594) {
			return "r";
		} else if (r < 0.9831081081081081) {
			return "h";
		} else if (r < 0.9966216216216216) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "x") {
		return "i";
	} else if (str[str.length-2] == "k" && str[str.length-1] == "y") {
		if (r < 0.278125) {
			return "l";
		} else if (r < 0.44062500000000004) {
			return "a";
		} else if (r < 0.5281250000000001) {
			return "r";
		} else if (r < 0.5750000000000001) {
			return "m";
		} else if (r < 0.61875) {
			return "p";
		} else if (r < 0.6625) {
			return "s";
		} else if (r < 0.703125) {
			return "t";
		} else if (r < 0.740625) {
			return "w";
		} else if (r < 0.775) {
			return "d";
		} else if (r < 0.8093750000000001) {
			return "i";
		} else if (r < 0.8406250000000001) {
			return "o";
		} else if (r < 0.86875) {
			return "u";
		} else if (r < 0.89375) {
			return "e";
		} else if (r < 0.915625) {
			return "n";
		} else if (r < 0.9343750000000001) {
			return "b";
		} else if (r < 0.9531250000000001) {
			return "j";
		} else if (r < 0.9656250000000001) {
			return "h";
		} else if (r < 0.978125) {
			return "c";
		} else if (r < 0.990625) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "k" && str[str.length-1] == "z") {
		return "a";
	} else if (str[str.length-2] == "l" && str[str.length-1] == "a") {
		if (r < 0.21955446590861055) {
			return "t";
		} else if (r < 0.3588789787377943) {
			return "r";
		} else if (r < 0.48945343872849467) {
			return "n";
		} else if (r < 0.5876907469248002) {
			return "s";
		} else if (r < 0.6616223527919853) {
			return "c";
		} else if (r < 0.7132772540896984) {
			return "m";
		} else if (r < 0.7627763452677853) {
			return "b";
		} else if (r < 0.7957898296487296) {
			return "g";
		} else if (r < 0.8222936128841356) {
			return "d";
		} else if (r < 0.8477406264530581) {
			return "i";
		} else if (r < 0.871116371475673) {
			return "e";
		} else if (r < 0.8928012850319142) {
			return "p";
		} else if (r < 0.9142325738681994) {
			return "u";
		} else if (r < 0.9349875301179352) {
			return "y";
		} else if (r < 0.9548970706344843) {
			return "v";
		} else if (r < 0.964196643699539) {
			return "w";
		} else if (r < 0.9713404066449673) {
			return "z";
		} else if (r < 0.9777232954305276) {
			return "l";
		} else if (r < 0.9841061842160879) {
			return "x";
		} else if (r < 0.9904468022149888) {
			return "k";
		} else if (r < 0.9953924842541315) {
			return "h";
		} else if (r < 0.9969565033605271) {
			return "f";
		} else if (r < 0.9980132730270106) {
			return "q";
		} else if (r < 0.9989855011201754) {
			return "o";
		} else if (r < 0.9997463752800435) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "b") {
		if (r < 0.21203830369357046) {
			return "u";
		} else if (r < 0.41997264021887826) {
			return "o";
		} else if (r < 0.6019151846785226) {
			return "e";
		} else if (r < 0.7647058823529411) {
			return "a";
		} else if (r < 0.9179206566347469) {
			return "i";
		} else if (r < 0.9548563611491108) {
			return "r";
		} else if (r < 0.9849521203830369) {
			return "l";
		} else if (r < 0.9917920656634747) {
			return "y";
		} else if (r < 0.9972640218878248) {
			return "s";
		} else if (r < 0.9986320109439124) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "c") {
		if (r < 0.23101018010963195) {
			return "a";
		} else if (r < 0.4353954581049334) {
			return "o";
		} else if (r < 0.6092404072043852) {
			return "i";
		} else if (r < 0.7627251370399373) {
			return "h";
		} else if (r < 0.8543461237274862) {
			return "u";
		} else if (r < 0.9263899765074393) {
			return "e";
		} else if (r < 0.9506656225528582) {
			return "y";
		} else if (r < 0.9686765857478465) {
			return "r";
		} else if (r < 0.9812059514487079) {
			return "t";
		} else if (r < 0.9890368050117463) {
			return "l";
		} else if (r < 0.9929522317932655) {
			return "s";
		} else if (r < 0.9960845732184809) {
			return "k";
		} else if (r < 0.9976507439310885) {
			return "m";
		} else if (r < 0.9984338292873924) {
			return "g";
		} else if (r < 0.9992169146436963) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "d") {
		if (r < 0.3487372380440623) {
			return "e";
		} else if (r < 0.5099408919935519) {
			return "i";
		} else if (r < 0.6012896292315959) {
			return "s";
		} else if (r < 0.6845781837721655) {
			return "o";
		} else if (r < 0.7555077915099409) {
			return "a";
		} else if (r < 0.7941966684578183) {
			return "r";
		} else if (r < 0.830198817839871) {
			return "l";
		} else if (r < 0.8554540569586244) {
			return "f";
		} else if (r < 0.8790972595378829) {
			return "n";
		} else if (r < 0.8995163890381516) {
			return "b";
		} else if (r < 0.9177861364857604) {
			return "u";
		} else if (r < 0.9344438473938743) {
			return "w";
		} else if (r < 0.9489521762493284) {
			return "m";
		} else if (r < 0.9629231595916175) {
			return "h";
		} else if (r < 0.9747447608812467) {
			return "y";
		} else if (r < 0.9822675980655562) {
			return "t";
		} else if (r < 0.9892530897367008) {
			return "c";
		} else if (r < 0.9946265448683504) {
			return "p";
		} else if (r < 0.9978506179473402) {
			return "g";
		} else if (r < 0.9983879634605052) {
			return "k";
		} else if (r < 0.9989253089736702) {
			return "x";
		} else if (r < 0.9994626544868351) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "e") {
		if (r < 0.19128011148715907) {
			return "s";
		} else if (r < 0.3182162054549074) {
			return "n";
		} else if (r < 0.42162054549074257) {
			return "d";
		} else if (r < 0.524945251841529) {
			return "r";
		} else if (r < 0.5968942862830977) {
			return "t";
		} else if (r < 0.6639060322516424) {
			return "c";
		} else if (r < 0.7212422854867608) {
			return "a";
		} else if (r < 0.7583515827194903) {
			return "m";
		} else if (r < 0.793231136770854) {
			return "g";
		} else if (r < 0.822496516026279) {
			return "p";
		} else if (r < 0.8475014931315946) {
			return "u";
		} else if (r < 0.8694803902050567) {
			return "o";
		} else if (r < 0.8882739398765678) {
			return "e";
		} else if (r < 0.9055146326896277) {
			return "i";
		} else if (r < 0.922277523392395) {
			return "x";
		} else if (r < 0.9385626119848696) {
			return "b";
		} else if (r < 0.9529364921361736) {
			return "v";
		} else if (r < 0.9638463069878559) {
			return "y";
		} else if (r < 0.9742385028867211) {
			return "l";
		} else if (r < 0.9843519808879156) {
			return "w";
		} else if (r < 0.9918773641250249) {
			return "f";
		} else if (r < 0.9975711726060124) {
			return "h";
		} else if (r < 0.9986860441966953) {
			return "k";
		} else if (r < 0.9992832968345611) {
			return "j";
		} else if (r < 0.9997212821023294) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "f") {
		if (r < 0.20861678004535147) {
			return "i";
		} else if (r < 0.3888888888888889) {
			return "u";
		} else if (r < 0.5351473922902494) {
			return "a";
		} else if (r < 0.6666666666666666) {
			return "o";
		} else if (r < 0.7448979591836734) {
			return "e";
		} else if (r < 0.8015873015873015) {
			return "l";
		} else if (r < 0.8446712018140589) {
			return "r";
		} else if (r < 0.8718820861678004) {
			return "s";
		} else if (r < 0.8945578231292516) {
			return "h";
		} else if (r < 0.91156462585034) {
			return "w";
		} else if (r < 0.9251700680272108) {
			return "t";
		} else if (r < 0.937641723356009) {
			return "f";
		} else if (r < 0.9489795918367346) {
			return "b";
		} else if (r < 0.9591836734693877) {
			return "p";
		} else if (r < 0.9682539682539683) {
			return "m";
		} else if (r < 0.9761904761904762) {
			return "c";
		} else if (r < 0.9829931972789115) {
			return "d";
		} else if (r < 0.9886621315192744) {
			return "n";
		} else if (r < 0.9931972789115646) {
			return "y";
		} else if (r < 0.9965986394557823) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "g") {
		if (r < 0.3010625737898465) {
			return "i";
		} else if (r < 0.5537190082644627) {
			return "e";
		} else if (r < 0.7615112160566706) {
			return "a";
		} else if (r < 0.8547815820543093) {
			return "o";
		} else if (r < 0.9079102715466352) {
			return "u";
		} else if (r < 0.9527744982290437) {
			return "r";
		} else if (r < 0.9693034238488785) {
			return "y";
		} else if (r < 0.9846517119244392) {
			return "l";
		} else if (r < 0.9964580873671783) {
			return "h";
		} else if (r < 0.9988193624557261) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "h") {
		if (r < 0.33073929961089493) {
			return "o";
		} else if (r < 0.6381322957198443) {
			return "e";
		} else if (r < 0.8910505836575875) {
			return "a";
		} else if (r < 0.9455252918287937) {
			return "y";
		} else if (r < 0.9766536964980544) {
			return "i";
		} else if (r < 0.9922178988326849) {
			return "u";
		} else if (r < 0.9961089494163424) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "i") {
		if (r < 0.18511891908566494) {
			return "n";
		} else if (r < 0.34364685196039113) {
			return "t";
		} else if (r < 0.4592960483696825) {
			return "s";
		} else if (r < 0.5493105469352499) {
			return "c";
		} else if (r < 0.617207021007496) {
			return "z";
		} else if (r < 0.6768053798932658) {
			return "a";
		} else if (r < 0.7303575284572908) {
			return "k";
		} else if (r < 0.7709535120461486) {
			return "e";
		} else if (r < 0.8065212697041675) {
			return "g";
		} else if (r < 0.8401764506277569) {
			return "o";
		} else if (r < 0.8692969738100378) {
			return "m";
		} else if (r < 0.8974303606132583) {
			return "d";
		} else if (r < 0.9232192985162104) {
			return "f";
		} else if (r < 0.9456149551161426) {
			return "p";
		} else if (r < 0.9619644013943299) {
			return "b";
		} else if (r < 0.9738717339667456) {
			return "v";
		} else if (r < 0.9804732085017118) {
			return "q";
		} else if (r < 0.9855322824443962) {
			return "u";
		} else if (r < 0.9904371163278524) {
			return "l";
		} else if (r < 0.9940463337137918) {
			return "r";
		} else if (r < 0.9960206064719126) {
			return "x";
		} else if (r < 0.9976555510997314) {
			return "i";
		} else if (r < 0.998704383502483) {
			return "h";
		} else if (r < 0.9994138877749327) {
			return "w";
		} else if (r < 0.9997223678933891) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "j") {
		if (r < 0.4) {
			return "o";
		} else if (r < 0.75) {
			return "a";
		} else if (r < 0.85) {
			return "e";
		} else if (r < 0.95) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "k") {
		if (r < 0.2300531914893617) {
			return "a";
		} else if (r < 0.4188829787234043) {
			return "i";
		} else if (r < 0.598404255319149) {
			return "e";
		} else if (r < 0.723404255319149) {
			return "s";
		} else if (r < 0.8031914893617021) {
			return "y";
		} else if (r < 0.8404255319148937) {
			return "o";
		} else if (r < 0.8723404255319149) {
			return "l";
		} else if (r < 0.9029255319148937) {
			return "w";
		} else if (r < 0.9268617021276596) {
			return "h";
		} else if (r < 0.9481382978723405) {
			return "m";
		} else if (r < 0.9561170212765958) {
			return "u";
		} else if (r < 0.9640957446808511) {
			return "f";
		} else if (r < 0.9707446808510639) {
			return "n";
		} else if (r < 0.9760638297872342) {
			return "b";
		} else if (r < 0.9813829787234044) {
			return "t";
		} else if (r < 0.9853723404255321) {
			return "r";
		} else if (r < 0.9893617021276598) {
			return "v";
		} else if (r < 0.9920212765957449) {
			return "c";
		} else if (r < 0.99468085106383) {
			return "g";
		} else if (r < 0.9960106382978725) {
			return "p";
		} else if (r < 0.997340425531915) {
			return "d";
		} else if (r < 0.9986702127659576) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "l") {
		if (r < 0.29012764034790467) {
			return "y";
		} else if (r < 0.4724951993674461) {
			return "i";
		} else if (r < 0.6257765729131368) {
			return "e";
		} else if (r < 0.776968259347114) {
			return "a";
		} else if (r < 0.891562182311081) {
			return "o";
		} else if (r < 0.9360668699875748) {
			return "u";
		} else if (r < 0.9589969501863775) {
			return "s";
		} else if (r < 0.9654919236417034) {
			return "b";
		} else if (r < 0.9718739410369367) {
			return "m";
		} else if (r < 0.976448661470688) {
			return "f";
		} else if (r < 0.980797469784254) {
			return "w";
		} else if (r < 0.9845814977973569) {
			return "h";
		} else if (r < 0.9875748333898114) {
			return "d";
		} else if (r < 0.9902293008019881) {
			return "n";
		} else if (r < 0.9927708121540721) {
			return "p";
		} else if (r < 0.9948040212357394) {
			return "t";
		} else if (r < 0.9964418841070825) {
			return "c";
		} else if (r < 0.9977973568281939) {
			return "r";
		} else if (r < 0.9989269174291202) {
			return "g";
		} else if (r < 0.9993222636394444) {
			return "k";
		} else if (r < 0.999604653789676) {
			return "l";
		} else if (r < 0.9997740878798149) {
			return "j";
		} else if (r < 0.9999435219699538) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "m") {
		if (r < 0.2330316742081448) {
			return "a";
		} else if (r < 0.45324283559577677) {
			return "i";
		} else if (r < 0.6659125188536953) {
			return "e";
		} else if (r < 0.8778280542986425) {
			return "o";
		} else if (r < 0.918552036199095) {
			return "s";
		} else if (r < 0.9547511312217194) {
			return "u";
		} else if (r < 0.9690799396681749) {
			return "y";
		} else if (r < 0.9773755656108596) {
			return "l";
		} else if (r < 0.9819004524886876) {
			return "m";
		} else if (r < 0.9856711915535443) {
			return "n";
		} else if (r < 0.9886877828054297) {
			return "w";
		} else if (r < 0.991704374057315) {
			return "c";
		} else if (r < 0.9947209653092004) {
			return "g";
		} else if (r < 0.9962292609351431) {
			return "d";
		} else if (r < 0.9977375565610858) {
			return "b";
		} else if (r < 0.9984917043740571) {
			return "h";
		} else if (r < 0.9992458521870284) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "n") {
		if (r < 0.9232927970065482) {
			return "e";
		} else if (r < 0.9429373246024322) {
			return "a";
		} else if (r < 0.961646398503274) {
			return "i";
		} else if (r < 0.9747427502338634) {
			return "u";
		} else if (r < 0.9859681945743685) {
			return "o";
		} else if (r < 0.9897100093545368) {
			return "s";
		} else if (r < 0.991580916744621) {
			return "d";
		} else if (r < 0.9934518241347052) {
			return "m";
		} else if (r < 0.9953227315247895) {
			return "r";
		} else if (r < 0.9962581852198316) {
			return "b";
		} else if (r < 0.9971936389148737) {
			return "g";
		} else if (r < 0.9981290926099158) {
			return "h";
		} else if (r < 0.9990645463049579) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "o") {
		if (r < 0.2223835645907282) {
			return "g";
		} else if (r < 0.3022480370011832) {
			return "s";
		} else if (r < 0.38200494783263417) {
			return "r";
		} else if (r < 0.4605786812950414) {
			return "u";
		} else if (r < 0.5275895450145208) {
			return "c";
		} else if (r < 0.5871786597827257) {
			return "w";
		} else if (r < 0.6463375282349145) {
			return "t";
		} else if (r < 0.7050661503710874) {
			return "n";
		} else if (r < 0.7624502527697107) {
			return "p";
		} else if (r < 0.7968161772614822) {
			return "o";
		} else if (r < 0.8308056362267399) {
			return "m";
		} else if (r < 0.8629665483489298) {
			return "i";
		} else if (r < 0.8915241475744865) {
			return "b";
		} else if (r < 0.9161557491663979) {
			return "d";
		} else if (r < 0.936162202861138) {
			return "a";
		} else if (r < 0.9485855652360977) {
			return "v";
		} else if (r < 0.9584812305044639) {
			return "q";
		} else if (r < 0.9673550607722922) {
			return "y";
		} else if (r < 0.9754759599870927) {
			return "e";
		} else if (r < 0.9833817360438852) {
			return "l";
		} else if (r < 0.9875228568355384) {
			return "x";
		} else if (r < 0.9913950736796817) {
			return "f";
		} else if (r < 0.994783263418307) {
			return "h";
		} else if (r < 0.9974185221039046) {
			return "k";
		} else if (r < 0.9997310960524901) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "p") {
		if (r < 0.46448863636363635) {
			return "h";
		} else if (r < 0.625) {
			return "i";
		} else if (r < 0.7336647727272727) {
			return "a";
		} else if (r < 0.8061079545454546) {
			return "e";
		} else if (r < 0.8636363636363636) {
			return "o";
		} else if (r < 0.8948863636363636) {
			return "r";
		} else if (r < 0.9211647727272727) {
			return "t";
		} else if (r < 0.9424715909090909) {
			return "l";
		} else if (r < 0.9616477272727273) {
			return "u";
		} else if (r < 0.9758522727272727) {
			return "s";
		} else if (r < 0.984375) {
			return "f";
		} else if (r < 0.9900568181818182) {
			return "y";
		} else if (r < 0.9936079545454546) {
			return "m";
		} else if (r < 0.9971590909090909) {
			return "w";
		} else if (r < 0.9992897727272727) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "q") {
		if (r < 0.8947368421052632) {
			return "u";
		} else if (r < 0.9473684210526316) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "r") {
		if (r < 0.36363636363636365) {
			return "o";
		} else if (r < 0.5625) {
			return "y";
		} else if (r < 0.7159090909090909) {
			return "a";
		} else if (r < 0.8636363636363636) {
			return "i";
		} else if (r < 0.9375) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "s") {
		if (r < 0.237551867219917) {
			return "i";
		} else if (r < 0.38485477178423233) {
			return "e";
		} else if (r < 0.5228215767634854) {
			return "t";
		} else if (r < 0.6431535269709543) {
			return "h";
		} else if (r < 0.754149377593361) {
			return "a";
		} else if (r < 0.8526970954356846) {
			return "o";
		} else if (r < 0.8796680497925311) {
			return "m";
		} else if (r < 0.9056016597510373) {
			return "u";
		} else if (r < 0.9304979253112033) {
			return "p";
		} else if (r < 0.9502074688796681) {
			return "k";
		} else if (r < 0.9626556016597511) {
			return "y";
		} else if (r < 0.970954356846473) {
			return "w";
		} else if (r < 0.9782157676348547) {
			return "c";
		} else if (r < 0.9823651452282157) {
			return "f";
		} else if (r < 0.9865145228215767) {
			return "n";
		} else if (r < 0.9906639004149377) {
			return "s";
		} else if (r < 0.9937759336099584) {
			return "b";
		} else if (r < 0.9968879668049792) {
			return "g";
		} else if (r < 0.9979253112033194) {
			return "d";
		} else if (r < 0.9989626556016596) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "t") {
		if (r < 0.30877302528879175) {
			return "i";
		} else if (r < 0.47986262878551356) {
			return "e";
		} else if (r < 0.6031845145176397) {
			return "r";
		} else if (r < 0.6896659381829534) {
			return "u";
		} else if (r < 0.7739619107087106) {
			return "a";
		} else if (r < 0.8248517015298158) {
			return "h";
		} else if (r < 0.8726194192944114) {
			return "o";
		} else if (r < 0.9088354667499219) {
			return "s";
		} else if (r < 0.9438026849828285) {
			return "y";
		} else if (r < 0.9566031845145175) {
			return "l";
		} else if (r < 0.966281610989697) {
			return "z";
		} else if (r < 0.9740867936309708) {
			return "m";
		} else if (r < 0.979706525132688) {
			return "w";
		} else if (r < 0.9850140493287541) {
			return "f";
		} else if (r < 0.9887605369965655) {
			return "c";
		} else if (r < 0.992194817358726) {
			return "p";
		} else if (r < 0.9950046831095846) {
			return "b";
		} else if (r < 0.9971901342491413) {
			return "n";
		} else if (r < 0.9981267561660941) {
			return "d";
		} else if (r < 0.999063378083047) {
			return "t";
		} else if (r < 0.999375585388698) {
			return "j";
		} else if (r < 0.9996877926943489) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "u") {
		if (r < 0.17970971120754153) {
			return "m";
		} else if (r < 0.34804728415382313) {
			return "s";
		} else if (r < 0.47463713900942694) {
			return "t";
		} else if (r < 0.544964836151429) {
			return "c";
		} else if (r < 0.6069130629956606) {
			return "n";
		} else if (r < 0.6664671554691007) {
			return "r";
		} else if (r < 0.7227293131827024) {
			return "e";
		} else if (r < 0.7646266646715547) {
			return "d";
		} else if (r < 0.8044291485859644) {
			return "b";
		} else if (r < 0.8389944635642675) {
			return "o";
		} else if (r < 0.8678737094119408) {
			return "l";
		} else if (r < 0.8915157863235074) {
			return "i";
		} else if (r < 0.9117162950770612) {
			return "v";
		} else if (r < 0.9317671704324405) {
			return "x";
		} else if (r < 0.9516684123896454) {
			return "g";
		} else if (r < 0.9672302857997905) {
			return "p";
		} else if (r < 0.9805476582373186) {
			return "a";
		} else if (r < 0.9886278617387401) {
			return "f";
		} else if (r < 0.9962591650456382) {
			return "k";
		} else if (r < 0.9973065988328594) {
			return "j";
		} else if (r < 0.9983540326200807) {
			return "y";
		} else if (r < 0.999401466407302) {
			return "h";
		} else if (r < 0.9997007332036509) {
			return "w";
		} else if (r < 0.9998503666018254) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "v") {
		if (r < 0.48066298342541436) {
			return "e";
		} else if (r < 0.7458563535911602) {
			return "a";
		} else if (r < 0.927255985267035) {
			return "i";
		} else if (r < 0.9631675874769797) {
			return "u";
		} else if (r < 0.9935543278084714) {
			return "o";
		} else if (r < 0.9972375690607734) {
			return "y";
		} else if (r < 0.998158379373849) {
			return "d";
		} else if (r < 0.9990791896869246) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "w") {
		if (r < 0.3543046357615894) {
			return "o";
		} else if (r < 0.6589403973509933) {
			return "a";
		} else if (r < 0.8178807947019867) {
			return "i";
		} else if (r < 0.9304635761589404) {
			return "e";
		} else if (r < 0.9635761589403973) {
			return "h";
		} else if (r < 0.9867549668874172) {
			return "r";
		} else if (r < 0.9900662251655629) {
			return "l";
		} else if (r < 0.9933774834437086) {
			return "m";
		} else if (r < 0.9966887417218543) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "x") {
		if (r < 0.3333333333333333) {
			return "e";
		} else if (r < 0.6666666666666666) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "y") {
		if (r < 0.1709474885844749) {
			return "s";
		} else if (r < 0.2965182648401826) {
			return "c";
		} else if (r < 0.41609589041095885) {
			return "p";
		} else if (r < 0.5271118721461187) {
			return "t";
		} else if (r < 0.6269977168949771) {
			return "m";
		} else if (r < 0.6700913242009131) {
			return "z";
		} else if (r < 0.7094748858447487) {
			return "g";
		} else if (r < 0.7480022831050227) {
			return "i";
		} else if (r < 0.7853881278538811) {
			return "a";
		} else if (r < 0.8139269406392693) {
			return "o";
		} else if (r < 0.8418949771689497) {
			return "n";
		} else if (r < 0.8687214611872145) {
			return "b";
		} else if (r < 0.8949771689497715) {
			return "r";
		} else if (r < 0.9172374429223743) {
			return "l";
		} else if (r < 0.9363584474885843) {
			return "d";
		} else if (r < 0.9523401826484017) {
			return "e";
		} else if (r < 0.9674657534246575) {
			return "h";
		} else if (r < 0.9814497716894977) {
			return "w";
		} else if (r < 0.9888698630136986) {
			return "f";
		} else if (r < 0.9917237442922374) {
			return "k";
		} else if (r < 0.9945776255707762) {
			return "x";
		} else if (r < 0.997431506849315) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "l" && str[str.length-1] == "z") {
		if (r < 0.32608695652173914) {
			return "i";
		} else if (r < 0.6304347826086957) {
			return "e";
		} else if (r < 0.8043478260869565) {
			return "a";
		} else if (r < 0.9130434782608696) {
			return "o";
		} else if (r < 0.9347826086956522) {
			return "h";
		} else if (r < 0.9565217391304348) {
			return "b";
		} else if (r < 0.9782608695652174) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "a") {
		if (r < 0.2430540481875407) {
			return "n";
		} else if (r < 0.48073583677013243) {
			return "t";
		} else if (r < 0.5770023876709356) {
			return "r";
		} else if (r < 0.6690905144345561) {
			return "l";
		} else if (r < 0.7362166268721511) {
			return "s";
		} else if (r < 0.7935749945734751) {
			return "c";
		} else if (r < 0.8357390926850445) {
			return "g";
		} else if (r < 0.8734534404167571) {
			return "k";
		} else if (r < 0.8960820490557847) {
			return "i";
		} else if (r < 0.9130128065986542) {
			return "d";
		} else if (r < 0.9265791187323639) {
			return "b";
		} else if (r < 0.9397655741263296) {
			return "m";
		} else if (r < 0.9476340351638811) {
			return "e";
		} else if (r < 0.9550683742131539) {
			return "x";
		} else if (r < 0.9621228565226829) {
			return "u";
		} else if (r < 0.9691773388322119) {
			return "z";
		} else if (r < 0.9759604948990667) {
			return "h";
		} else if (r < 0.9822552637291079) {
			return "p";
		} else if (r < 0.988278706316475) {
			return "y";
		} else if (r < 0.9921315389624484) {
			return "j";
		} else if (r < 0.9939765574126329) {
			return "w";
		} else if (r < 0.9954959843716084) {
			return "f";
		} else if (r < 0.9967983503364445) {
			return "v";
		} else if (r < 0.9979379205556761) {
			return "a";
		} else if (r < 0.998968960277838) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "b") {
		if (r < 0.16599573762727918) {
			return "e";
		} else if (r < 0.3203883495145631) {
			return "r";
		} else if (r < 0.4717025811034809) {
			return "o";
		} else if (r < 0.6062041202936301) {
			return "a";
		} else if (r < 0.738574473123372) {
			return "l";
		} else if (r < 0.8690504380771963) {
			return "i";
		} else if (r < 0.9569026758228747) {
			return "u";
		} else if (r < 0.9720577788302155) {
			return "s";
		} else if (r < 0.9801089273028653) {
			return "y";
		} else if (r < 0.9831873076012313) {
			return "f";
		} else if (r < 0.9862656878995973) {
			return "d";
		} else if (r < 0.9891072697134737) {
			return "m";
		} else if (r < 0.9919488515273501) {
			return "h";
		} else if (r < 0.9940800378877575) {
			return "n";
		} else if (r < 0.9955008287946956) {
			return "k";
		} else if (r < 0.9966848212171441) {
			return "w";
		} else if (r < 0.9976320151551029) {
			return "p";
		} else if (r < 0.9985792090930617) {
			return "b";
		} else if (r < 0.9995264030310206) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "c") {
		if (r < 0.17) {
			return "a";
		} else if (r < 0.34) {
			return "i";
		} else if (r < 0.48000000000000004) {
			return "h";
		} else if (r < 0.6000000000000001) {
			return "o";
		} else if (r < 0.7100000000000001) {
			return "r";
		} else if (r < 0.8) {
			return "e";
		} else if (r < 0.8600000000000001) {
			return "l";
		} else if (r < 0.9100000000000001) {
			return "u";
		} else if (r < 0.9300000000000002) {
			return "c";
		} else if (r < 0.9400000000000002) {
			return "n";
		} else if (r < 0.9500000000000002) {
			return "d";
		} else if (r < 0.9600000000000002) {
			return "f";
		} else if (r < 0.9700000000000002) {
			return "g";
		} else if (r < 0.9800000000000002) {
			return "k";
		} else if (r < 0.9900000000000002) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "d") {
		if (r < 0.19767441860465115) {
			return "a";
		} else if (r < 0.36046511627906974) {
			return "e";
		} else if (r < 0.5232558139534884) {
			return "i";
		} else if (r < 0.6627906976744187) {
			return "u";
		} else if (r < 0.7790697674418605) {
			return "r";
		} else if (r < 0.8837209302325582) {
			return "o";
		} else if (r < 0.9186046511627907) {
			return "t";
		} else if (r < 0.9418604651162791) {
			return "g";
		} else if (r < 0.9651162790697675) {
			return "n";
		} else if (r < 0.9767441860465117) {
			return "l";
		} else if (r < 0.9883720930232559) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "e") {
		if (r < 0.31882893226176806) {
			return "n";
		} else if (r < 0.5247990815154994) {
			return "t";
		} else if (r < 0.6640068886337542) {
			return "r";
		} else if (r < 0.7412169919632605) {
			return "l";
		} else if (r < 0.8133180252583236) {
			return "d";
		} else if (r < 0.8827210103329505) {
			return "s";
		} else if (r < 0.9090700344431686) {
			return "a";
		} else if (r < 0.9274397244546496) {
			return "g";
		} else if (r < 0.9425373134328356) {
			return "m";
		} else if (r < 0.9572904707233064) {
			return "c";
		} else if (r < 0.9644087256027554) {
			return "e";
		} else if (r < 0.9708381171067737) {
			return "o";
		} else if (r < 0.9756027554535016) {
			return "i";
		} else if (r < 0.9802525832376577) {
			return "w";
		} else if (r < 0.9838117106773822) {
			return "b";
		} else if (r < 0.9869115958668195) {
			return "f";
		} else if (r < 0.989494833524684) {
			return "z";
		} else if (r < 0.9917910447761191) {
			return "p";
		} else if (r < 0.9935132032146955) {
			return "u";
		} else if (r < 0.9950057405281283) {
			return "k";
		} else if (r < 0.9964982778415611) {
			return "y";
		} else if (r < 0.9977037887485646) {
			return "h";
		} else if (r < 0.9986796785304245) {
			return "x";
		} else if (r < 0.9996555683122844) {
			return "v";
		} else if (r < 0.9998851894374279) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "f") {
		if (r < 0.2743362831858407) {
			return "o";
		} else if (r < 0.5) {
			return "u";
		} else if (r < 0.668141592920354) {
			return "i";
		} else if (r < 0.7787610619469028) {
			return "e";
		} else if (r < 0.8716814159292037) {
			return "l";
		} else if (r < 0.9469026548672568) {
			return "r";
		} else if (r < 0.9734513274336285) {
			return "a";
		} else if (r < 0.9823008849557524) {
			return "y";
		} else if (r < 0.9911504424778763) {
			return "d";
		} else if (r < 0.9955752212389383) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "g") {
		if (r < 0.22857142857142856) {
			return "a";
		} else if (r < 0.4285714285714286) {
			return "u";
		} else if (r < 0.6285714285714286) {
			return "e";
		} else if (r < 0.7142857142857143) {
			return "y";
		} else if (r < 0.8) {
			return "o";
		} else if (r < 0.8571428571428572) {
			return "i";
		} else if (r < 0.9142857142857144) {
			return "r";
		} else if (r < 0.942857142857143) {
			return "d";
		} else if (r < 0.9714285714285715) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "h") {
		if (r < 0.5333333333333333) {
			return "o";
		} else if (r < 0.6799999999999999) {
			return "a";
		} else if (r < 0.8266666666666667) {
			return "e";
		} else if (r < 0.8666666666666667) {
			return "y";
		} else if (r < 0.9066666666666667) {
			return "i";
		} else if (r < 0.9333333333333333) {
			return "p";
		} else if (r < 0.96) {
			return "u";
		} else if (r < 0.9733333333333333) {
			return "r";
		} else if (r < 0.9866666666666666) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "i") {
		if (r < 0.2222656468092234) {
			return "n";
		} else if (r < 0.412428116799732) {
			return "s";
		} else if (r < 0.5773546982301379) {
			return "c";
		} else if (r < 0.6613812740773826) {
			return "t";
		} else if (r < 0.7200044665289487) {
			return "l";
		} else if (r < 0.7782368376975043) {
			return "a";
		} else if (r < 0.8315001954106415) {
			return "d";
		} else if (r < 0.8615376025905868) {
			return "e";
		} else if (r < 0.8830886047680196) {
			return "r";
		} else if (r < 0.9038579643794317) {
			return "z";
		} else if (r < 0.9190999944168389) {
			return "g";
		} else if (r < 0.9343420244542461) {
			return "p";
		} else if (r < 0.9462899893919938) {
			return "m";
		} else if (r < 0.9576238065992966) {
			return "o";
		} else if (r < 0.9687901289710235) {
			return "f";
		} else if (r < 0.976494891407515) {
			return "x";
		} else if (r < 0.9821897158170957) {
			return "u";
		} else if (r < 0.9869354028250796) {
			return "h";
		} else if (r < 0.9910669421026186) {
			return "b";
		} else if (r < 0.9936910278599744) {
			return "k";
		} else if (r < 0.9959801239461784) {
			return "v";
		} else if (r < 0.9972084194070684) {
			return "q";
		} else if (r < 0.9982692200323825) {
			return "j";
		} else if (r < 0.9991625258221206) {
			return "i";
		} else if (r < 0.9998325051644242) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "j") {
		if (r < 0.47368421052631576) {
			return "a";
		} else if (r < 0.6842105263157894) {
			return "o";
		} else if (r < 0.8421052631578947) {
			return "u";
		} else if (r < 0.9473684210526315) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "k") {
		if (r < 0.375) {
			return "i";
		} else if (r < 0.53125) {
			return "a";
		} else if (r < 0.65625) {
			return "e";
		} else if (r < 0.75) {
			return "h";
		} else if (r < 0.8125) {
			return "o";
		} else if (r < 0.875) {
			return "t";
		} else if (r < 0.90625) {
			return "j";
		} else if (r < 0.9375) {
			return "y";
		} else if (r < 0.96875) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "l") {
		if (r < 0.38666666666666666) {
			return "e";
		} else if (r < 0.6826666666666666) {
			return "i";
		} else if (r < 0.8266666666666667) {
			return "y";
		} else if (r < 0.912) {
			return "a";
		} else if (r < 0.976) {
			return "o";
		} else if (r < 0.9973333333333333) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "m") {
		if (r < 0.31279342723004694) {
			return "e";
		} else if (r < 0.511150234741784) {
			return "a";
		} else if (r < 0.698650234741784) {
			return "i";
		} else if (r < 0.8588615023474178) {
			return "o";
		} else if (r < 0.9730046948356806) {
			return "u";
		} else if (r < 0.993838028169014) {
			return "y";
		} else if (r < 0.9964788732394365) {
			return "l";
		} else if (r < 0.9970657276995304) {
			return "k";
		} else if (r < 0.9976525821596243) {
			return "h";
		} else if (r < 0.9982394366197181) {
			return "f";
		} else if (r < 0.9985328638497651) {
			return "b";
		} else if (r < 0.9988262910798121) {
			return "d";
		} else if (r < 0.9991197183098591) {
			return "s";
		} else if (r < 0.9994131455399061) {
			return "n";
		} else if (r < 0.9997065727699531) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "n") {
		if (r < 0.40144478844169246) {
			return "i";
		} else if (r < 0.5964912280701754) {
			return "e";
		} else if (r < 0.7750257997936016) {
			return "o";
		} else if (r < 0.932920536635707) {
			return "a";
		} else if (r < 0.9628482972136223) {
			return "u";
		} else if (r < 0.9742002063983488) {
			return "s";
		} else if (r < 0.9814241486068112) {
			return "l";
		} else if (r < 0.9865841073271414) {
			return "n";
		} else if (r < 0.9896800825593396) {
			return "y";
		} else if (r < 0.9927760577915378) {
			return "d";
		} else if (r < 0.9948400412796699) {
			return "w";
		} else if (r < 0.9969040247678019) {
			return "b";
		} else if (r < 0.997936016511868) {
			return "t";
		} else if (r < 0.9989680082559341) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "o") {
		if (r < 0.2555356561380658) {
			return "n";
		} else if (r < 0.41338326278085313) {
			return "r";
		} else if (r < 0.5022793878215565) {
			return "u";
		} else if (r < 0.575301204819277) {
			return "t";
		} else if (r < 0.6405893845652881) {
			return "l";
		} else if (r < 0.7029469228264409) {
			return "s";
		} else if (r < 0.7516281341582546) {
			return "d";
		} else if (r < 0.7879355258873331) {
			return "p";
		} else if (r < 0.8230218169977206) {
			return "g";
		} else if (r < 0.8544448062520351) {
			return "c";
		} else if (r < 0.8847281015955715) {
			return "o";
		} else if (r < 0.9079290133507001) {
			return "i";
		} else if (r < 0.9281178769130576) {
			return "m";
		} else if (r < 0.9443178117876913) {
			return "b";
		} else if (r < 0.9567730380983392) {
			return "v";
		} else if (r < 0.9689840442852491) {
			return "e";
		} else if (r < 0.9766362748290459) {
			return "k";
		} else if (r < 0.9818463041354608) {
			return "h";
		} else if (r < 0.9870563334418757) {
			return "a";
		} else if (r < 0.990312601758385) {
			return "z";
		} else if (r < 0.9930804298274178) {
			return "w";
		} else if (r < 0.9955226310647998) {
			return "y";
		} else if (r < 0.9972321719309671) {
			return "x";
		} else if (r < 0.998778899381309) {
			return "f";
		} else if (r < 0.9995115597525236) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "p") {
		if (r < 0.16515534413557306) {
			return "e";
		} else if (r < 0.3097963430949903) {
			return "l";
		} else if (r < 0.44239631336405527) {
			return "h";
		} else if (r < 0.5694960606511075) {
			return "a";
		} else if (r < 0.6790545562657946) {
			return "o";
		} else if (r < 0.7643823398245875) {
			return "r";
		} else if (r < 0.8345473465140478) {
			return "i";
		} else if (r < 0.8992121302214955) {
			return "t";
		} else if (r < 0.9406867845993757) {
			return "u";
		} else if (r < 0.9683365541846292) {
			return "s";
		} else if (r < 0.9811208562509292) {
			return "y";
		} else if (r < 0.9837966404043408) {
			return "n";
		} else if (r < 0.9864724245577524) {
			return "k";
		} else if (r < 0.989148208711164) {
			return "m";
		} else if (r < 0.9916753381893861) {
			return "b";
		} else if (r < 0.9942024676676082) {
			return "f";
		} else if (r < 0.9967295971458303) {
			return "w";
		} else if (r < 0.9980674892225361) {
			return "p";
		} else if (r < 0.9988107625984838) {
			return "c";
		} else if (r < 0.9992567266240524) {
			return "g";
		} else if (r < 0.999702690649621) {
			return "d";
		} else if (r < 0.9998513453248106) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "m" && str[str.length-1] == "r") {
		if (r < 0.4) {
			return "o";
		} else if (r < 0.6000000000000001) {
			return "a";
		} else if (r < 0.7500000000000001) {
			return "i";
		} else if (r < 0.8583333333333334) {
			return "e";
		} else if (r < 0.9166666666666667) {
			return "y";
		} else if (r < 0.9583333333333334) {
			return "u";
		} else if (r < 0.9666666666666667) {
			return "x";
		} else if (r < 0.975) {
			return "p";
		} else if (r < 0.9833333333333333) {
			return "s";
		} else if (r < 0.9916666666666666) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "s") {
		if (r < 0.22717622080679406) {
			return "t";
		} else if (r < 0.36518046709129515) {
			return "h";
		} else if (r < 0.47770700636942676) {
			return "e";
		} else if (r < 0.5817409766454352) {
			return "i";
		} else if (r < 0.6794055201698513) {
			return "o";
		} else if (r < 0.7537154989384288) {
			return "c";
		} else if (r < 0.8089171974522292) {
			return "p";
		} else if (r < 0.8535031847133757) {
			return "a";
		} else if (r < 0.8874734607218683) {
			return "m";
		} else if (r < 0.9087048832271761) {
			return "k";
		} else if (r < 0.9256900212314224) {
			return "y";
		} else if (r < 0.9405520169851379) {
			return "l";
		} else if (r < 0.9532908704883226) {
			return "b";
		} else if (r < 0.9617834394904458) {
			return "f";
		} else if (r < 0.9702760084925689) {
			return "g";
		} else if (r < 0.978768577494692) {
			return "u";
		} else if (r < 0.9851380042462844) {
			return "d";
		} else if (r < 0.9915074309978767) {
			return "w";
		} else if (r < 0.9978768577494691) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "t") {
		if (r < 0.2222222222222222) {
			return "i";
		} else if (r < 0.37777777777777777) {
			return "h";
		} else if (r < 0.5111111111111111) {
			return "r";
		} else if (r < 0.6444444444444444) {
			return "o";
		} else if (r < 0.7777777777777777) {
			return "e";
		} else if (r < 0.8555555555555554) {
			return "a";
		} else if (r < 0.8777777777777777) {
			return "m";
		} else if (r < 0.8999999999999999) {
			return "y";
		} else if (r < 0.9222222222222222) {
			return "g";
		} else if (r < 0.9444444444444444) {
			return "s";
		} else if (r < 0.9555555555555555) {
			return "l";
		} else if (r < 0.9666666666666666) {
			return "d";
		} else if (r < 0.9777777777777776) {
			return "n";
		} else if (r < 0.9888888888888887) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "u") {
		if (r < 0.3029847002758967) {
			return "l";
		} else if (r < 0.4938550288437422) {
			return "s";
		} else if (r < 0.6275395033860045) {
			return "n";
		} else if (r < 0.7303737145723601) {
			return "t";
		} else if (r < 0.8116378229245046) {
			return "r";
		} else if (r < 0.8648106345623275) {
			return "c";
		} else if (r < 0.9059443190368698) {
			return "d";
		} else if (r < 0.9382994732881865) {
			return "m";
		} else if (r < 0.9596187609731627) {
			return "g";
		} else if (r < 0.9696513669425633) {
			return "f";
		} else if (r < 0.9784298971657888) {
			return "z";
		} else if (r < 0.983195385001254) {
			return "e";
		} else if (r < 0.9872084273890143) {
			return "k";
		} else if (r < 0.9904690243290695) {
			return "i";
		} else if (r < 0.9929771758214196) {
			return "h";
		} else if (r < 0.9942312515675947) {
			return "o";
		} else if (r < 0.9952345121645347) {
			return "y";
		} else if (r < 0.9962377727614747) {
			return "j";
		} else if (r < 0.9972410333584147) {
			return "p";
		} else if (r < 0.9982442939553547) {
			return "u";
		} else if (r < 0.9987459242538248) {
			return "a";
		} else if (r < 0.9992475545522949) {
			return "q";
		} else if (r < 0.9994983697015298) {
			return "b";
		} else if (r < 0.9997491848507648) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "v") {
		if (r < 0.5324675324675324) {
			return "i";
		} else if (r < 0.7662337662337662) {
			return "e";
		} else if (r < 0.909090909090909) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "w") {
		if (r < 0.32967032967032966) {
			return "o";
		} else if (r < 0.5714285714285714) {
			return "i";
		} else if (r < 0.8131868131868132) {
			return "a";
		} else if (r < 0.956043956043956) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "x") {
		return "d";
	} else if (str[str.length-2] == "m" && str[str.length-1] == "y") {
		if (r < 0.1764032073310424) {
			return "o";
		} else if (r < 0.3447880870561283) {
			return "c";
		} else if (r < 0.4513172966781214) {
			return "r";
		} else if (r < 0.5463917525773196) {
			return "s";
		} else if (r < 0.6397479954180986) {
			return "e";
		} else if (r < 0.7245131729667813) {
			return "t";
		} else if (r < 0.7915234822451318) {
			return "l";
		} else if (r < 0.8510882016036656) {
			return "x";
		} else if (r < 0.8837342497136312) {
			return "d";
		} else if (r < 0.9163802978235969) {
			return "a";
		} else if (r < 0.9467353951890035) {
			return "i";
		} else if (r < 0.9673539518900345) {
			return "g";
		} else if (r < 0.9816723940435281) {
			return "z";
		} else if (r < 0.9885452462772051) {
			return "n";
		} else if (r < 0.9919816723940436) {
			return "w";
		} else if (r < 0.9942726231386025) {
			return "m";
		} else if (r < 0.9959908361970218) {
			return "p";
		} else if (r < 0.997709049255441) {
			return "k";
		} else if (r < 0.9988545246277205) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "m" && str[str.length-1] == "z") {
		if (r < 0.4) {
			return "e";
		} else if (r < 0.6666666666666667) {
			return "a";
		} else if (r < 0.8) {
			return "i";
		} else if (r < 0.8666666666666667) {
			return "l";
		} else if (r < 0.9333333333333333) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "a") {
		if (r < 0.2177451710895856) {
			return "t";
		} else if (r < 0.4255745973519803) {
			return "l";
		} else if (r < 0.5184272367742305) {
			return "r";
		} else if (r < 0.5786095030664298) {
			return "b";
		} else if (r < 0.6379893391413997) {
			return "c";
		} else if (r < 0.69605089700235) {
			return "n";
		} else if (r < 0.7448845073651631) {
			return "s";
		} else if (r < 0.7883876884278099) {
			return "m";
		} else if (r < 0.8301140597237348) {
			return "p";
		} else if (r < 0.863013698630137) {
			return "d";
		} else if (r < 0.8921877686708317) {
			return "g";
		} else if (r < 0.9203301427179458) {
			return "e";
		} else if (r < 0.938556771937869) {
			return "i";
		} else if (r < 0.954777325614719) {
			return "u";
		} else if (r < 0.9672149939817735) {
			return "v";
		} else if (r < 0.9747234481572764) {
			return "k";
		} else if (r < 0.9795380294606524) {
			return "w";
		} else if (r < 0.9843526107640284) {
			return "f";
		} else if (r < 0.988364761850175) {
			return "z";
		} else if (r < 0.9918037484954435) {
			return "h";
		} else if (r < 0.994956152920273) {
			return "x";
		} else if (r < 0.9973634435719609) {
			return "y";
		} else if (r < 0.9983378231214537) {
			return "o";
		} else if (r < 0.9990829368945952) {
			return "a";
		} else if (r < 0.9996561013354732) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "b") {
		if (r < 0.23997185080928923) {
			return "e";
		} else if (r < 0.39549612948627727) {
			return "o";
		} else if (r < 0.5446868402533427) {
			return "a";
		} else if (r < 0.6861365235749473) {
			return "r";
		} else if (r < 0.8198451794510908) {
			return "u";
		} else if (r < 0.9141449683321605) {
			return "l";
		} else if (r < 0.9943701618578467) {
			return "i";
		} else if (r < 0.9978888106966926) {
			return "y";
		} else if (r < 0.9985925404644618) {
			return "b";
		} else if (r < 0.999296270232231) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "c") {
		if (r < 0.2653121976631689) {
			return "e";
		} else if (r < 0.4474957207710054) {
			return "o";
		} else if (r < 0.6090645233311007) {
			return "h";
		} else if (r < 0.7071518940239637) {
			return "i";
		} else if (r < 0.7795638907494232) {
			return "y";
		} else if (r < 0.8359752921038922) {
			return "a";
		} else if (r < 0.8816700156284885) {
			return "t";
		} else if (r < 0.9205923941355957) {
			return "r";
		} else if (r < 0.9592170871474287) {
			return "u";
		} else if (r < 0.9973208305425317) {
			return "l";
		} else if (r < 0.9984371511498101) {
			return "k";
		} else if (r < 0.9992557862618143) {
			return "s";
		} else if (r < 0.9996278931309072) {
			return "m";
		} else if (r < 0.9997767358785443) {
			return "n";
		} else if (r < 0.9998511572523628) {
			return "c";
		} else if (r < 0.9999255786261814) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "d") {
		if (r < 0.35351775212372033) {
			return "e";
		} else if (r < 0.5412038045451245) {
			return "i";
		} else if (r < 0.6310172075800479) {
			return "a";
		} else if (r < 0.716764684527699) {
			return "o";
		} else if (r < 0.7916212880272997) {
			return "r";
		} else if (r < 0.8440426922239163) {
			return "u";
		} else if (r < 0.8881870326000144) {
			return "s";
		} else if (r < 0.9240543091555942) {
			return "l";
		} else if (r < 0.9456182385827342) {
			return "y";
		} else if (r < 0.9542583315181876) {
			return "w";
		} else if (r < 0.961809337108836) {
			return "m";
		} else if (r < 0.9693603426994843) {
			return "b";
		} else if (r < 0.9762578958832497) {
			return "f";
		} else if (r < 0.981630726784288) {
			return "h";
		} else if (r < 0.9862774994554562) {
			return "p";
		} else if (r < 0.9899803964277933) {
			return "n";
		} else if (r < 0.9927394177012995) {
			return "c";
		} else if (r < 0.9950628040368836) {
			return "g";
		} else if (r < 0.9968779496115587) {
			return "t";
		} else if (r < 0.9980396427793508) {
			return "d";
		} else if (r < 0.9987657010092208) {
			return "j";
		} else if (r < 0.9993465475931168) {
			return "k";
		} else if (r < 0.9997095767080518) {
			return "z";
		} else if (r < 0.9998547883540259) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "e") {
		if (r < 0.4536004536004536) {
			return "s";
		} else if (r < 0.549045549045549) {
			return "r";
		} else if (r < 0.6177282177282177) {
			return "d";
		} else if (r < 0.6765072765072765) {
			return "t";
		} else if (r < 0.716991116991117) {
			return "u";
		} else if (r < 0.7492723492723492) {
			return "l";
		} else if (r < 0.7762993762993762) {
			return "a";
		} else if (r < 0.8033264033264031) {
			return "m";
		} else if (r < 0.8296352296352295) {
			return "x";
		} else if (r < 0.8546210546210545) {
			return "c";
		} else if (r < 0.8760158760158759) {
			return "o";
		} else if (r < 0.8974106974106973) {
			return "n";
		} else if (r < 0.9126819126819126) {
			return "p";
		} else if (r < 0.9275373275373274) {
			return "e";
		} else if (r < 0.9403137403137402) {
			return "g";
		} else if (r < 0.9524853524853524) {
			return "y";
		} else if (r < 0.9616707616707616) {
			return "w";
		} else if (r < 0.9706671706671706) {
			return "i";
		} else if (r < 0.9787941787941787) {
			return "f";
		} else if (r < 0.9865053865053864) {
			return "b";
		} else if (r < 0.993120393120393) {
			return "v";
		} else if (r < 0.9972783972783972) {
			return "q";
		} else if (r < 0.9986013986013985) {
			return "h";
		} else if (r < 0.9992439992439992) {
			return "z";
		} else if (r < 0.9996597996597996) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "f") {
		if (r < 0.1757469244288225) {
			return "e";
		} else if (r < 0.3444639718804921) {
			return "o";
		} else if (r < 0.5076157000585824) {
			return "i";
		} else if (r < 0.645577035735208) {
			return "l";
		} else if (r < 0.7685998828353837) {
			return "r";
		} else if (r < 0.8895723491505565) {
			return "a";
		} else if (r < 0.9985354422964264) {
			return "u";
		} else if (r < 0.9991212653778558) {
			return "f";
		} else if (r < 0.9997070884592852) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "g") {
		if (r < 0.24381849470156688) {
			return "l";
		} else if (r < 0.4313015125441536) {
			return "e";
		} else if (r < 0.5434290372248891) {
			return "s";
		} else if (r < 0.6450502671859434) {
			return "i";
		} else if (r < 0.7304591975364552) {
			return "u";
		} else if (r < 0.7879721039760893) {
			return "a";
		} else if (r < 0.8398695770310662) {
			return "r";
		} else if (r < 0.8904084774929809) {
			return "o";
		} else if (r < 0.9308939407662351) {
			return "n";
		} else if (r < 0.9433928086224076) {
			return "t";
		} else if (r < 0.9556199619599676) {
			return "h";
		} else if (r < 0.9635902545059326) {
			return "b";
		} else if (r < 0.9713794040394893) {
			return "y";
		} else if (r < 0.9782628385110046) {
			return "w";
		} else if (r < 0.98405941490807) {
			return "f";
		} else if (r < 0.9888597047368899) {
			return "m";
		} else if (r < 0.9920297074540351) {
			return "d";
		} else if (r < 0.9945657096277513) {
			return "k";
		} else if (r < 0.9967394257766509) {
			return "p";
		} else if (r < 0.9981885698759172) {
			return "g";
		} else if (r < 0.9996377139751835) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "h") {
		if (r < 0.28551034975017847) {
			return "a";
		} else if (r < 0.5474660956459672) {
			return "e";
		} else if (r < 0.7437544610992148) {
			return "o";
		} else if (r < 0.8358315488936474) {
			return "u";
		} else if (r < 0.9221984296930764) {
			return "i";
		} else if (r < 0.9978586723768736) {
			return "y";
		} else if (r < 0.9985724482512491) {
			return "w";
		} else if (r < 0.9992862241256246) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "i") {
		if (r < 0.165952207223641) {
			return "s";
		} else if (r < 0.3200930317402408) {
			return "c";
		} else if (r < 0.44636993797883984) {
			return "n";
		} else if (r < 0.5591937249179132) {
			return "t";
		} else if (r < 0.6666818679314119) {
			return "a";
		} else if (r < 0.7397391462969719) {
			return "z";
		} else if (r < 0.7764502006566947) {
			return "f";
		} else if (r < 0.8117019336008756) {
			return "d";
		} else if (r < 0.8427125136811383) {
			return "o";
		} else if (r < 0.8723549799343305) {
			return "e";
		} else if (r < 0.9019974461875228) {
			return "m";
		} else if (r < 0.9215614739146296) {
			return "g";
		} else if (r < 0.9377052170740605) {
			return "l";
		} else if (r < 0.9523896388179496) {
			return "u";
		} else if (r < 0.9652955125866471) {
			return "p";
		} else if (r < 0.9758299890550893) {
			return "v";
		} else if (r < 0.9814848595403137) {
			return "b";
		} else if (r < 0.986729295877417) {
			return "r";
		} else if (r < 0.9904232032105071) {
			return "k";
		} else if (r < 0.9931138270704123) {
			return "i";
		} else if (r < 0.995576431959139) {
			return "h";
		} else if (r < 0.997719810288216) {
			return "q";
		} else if (r < 0.9992247354979934) {
			return "x";
		} else if (r < 0.9995439620576432) {
			return "y";
		} else if (r < 0.9997719810288216) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "j") {
		if (r < 0.43520309477756286) {
			return "u";
		} else if (r < 0.6518375241779497) {
			return "o";
		} else if (r < 0.8201160541586073) {
			return "e";
		} else if (r < 0.9671179883945842) {
			return "a";
		} else if (r < 0.9961315280464217) {
			return "i";
		} else if (r < 0.9980657640232109) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "k") {
		if (r < 0.28887717448603056) {
			return "e";
		} else if (r < 0.47917764891934633) {
			return "i";
		} else if (r < 0.5925144965735372) {
			return "l";
		} else if (r < 0.6805482340537691) {
			return "s";
		} else if (r < 0.7474960463890353) {
			return "a";
		} else if (r < 0.7965208223510807) {
			return "y";
		} else if (r < 0.8318397469688983) {
			return "n";
		} else if (r < 0.8545071164997364) {
			return "t";
		} else if (r < 0.8745387453874539) {
			return "f";
		} else if (r < 0.8940432261465472) {
			return "h";
		} else if (r < 0.9124934106483922) {
			return "r";
		} else if (r < 0.9293621507643648) {
			return "o";
		} else if (r < 0.9441222983658408) {
			return "w";
		} else if (r < 0.9583552978386927) {
			return "b";
		} else if (r < 0.9715340010542962) {
			return "m";
		} else if (r < 0.9836584080126515) {
			return "u";
		} else if (r < 0.9905113336847653) {
			return "p";
		} else if (r < 0.9936742224565102) {
			return "c";
		} else if (r < 0.996837111228255) {
			return "g";
		} else if (r < 0.9994728518713757) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "l") {
		if (r < 0.3219484882418813) {
			return "i";
		} else if (r < 0.5683090705487123) {
			return "e";
		} else if (r < 0.719484882418813) {
			return "y";
		} else if (r < 0.8566629339305711) {
			return "a";
		} else if (r < 0.9490481522956327) {
			return "o";
		} else if (r < 0.9994400895856662) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "m") {
		if (r < 0.3343730505302558) {
			return "e";
		} else if (r < 0.6082345601996257) {
			return "a";
		} else if (r < 0.7903930131004367) {
			return "o";
		} else if (r < 0.9064254522769807) {
			return "i";
		} else if (r < 0.9769182782283219) {
			return "u";
		} else if (r < 0.9981285090455396) {
			return "y";
		} else if (r < 0.9993761696818465) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "n") {
		if (r < 0.34675557835342397) {
			return "e";
		} else if (r < 0.59835855347525) {
			return "i";
		} else if (r < 0.7578866375993845) {
			return "a";
		} else if (r < 0.8768915106437548) {
			return "o";
		} else if (r < 0.9351115670684791) {
			return "u";
		} else if (r < 0.9899974352398051) {
			return "y";
		} else if (r < 0.9946140035906643) {
			return "s";
		} else if (r < 0.9961528597076174) {
			return "h";
		} else if (r < 0.9974352398050782) {
			return "l";
		} else if (r < 0.9979481918440626) {
			return "n";
		} else if (r < 0.998461143883047) {
			return "w";
		} else if (r < 0.9989740959220313) {
			return "m";
		} else if (r < 0.9994870479610157) {
			return "k";
		} else if (r < 0.9997435239805079) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "o") {
		if (r < 0.3924304788675836) {
			return "n";
		} else if (r < 0.46074691296054615) {
			return "m";
		} else if (r < 0.5287119767091658) {
			return "s";
		} else if (r < 0.5934143158317439) {
			return "u";
		} else if (r < 0.6429073386206204) {
			return "p";
		} else if (r < 0.692400361409497) {
			return "t";
		} else if (r < 0.7402871197670916) {
			return "r";
		} else if (r < 0.7850115450255998) {
			return "l";
		} else if (r < 0.8276779439815279) {
			return "c";
		} else if (r < 0.8595522537897802) {
			return "g";
		} else if (r < 0.8880132516815581) {
			return "i";
		} else if (r < 0.9108021283003714) {
			return "b";
		} else if (r < 0.9324365023592008) {
			return "d";
		} else if (r < 0.9481979720911554) {
			return "w";
		} else if (r < 0.9619516112840075) {
			return "v";
		} else if (r < 0.9701335207308502) {
			return "e";
		} else if (r < 0.9779138640698725) {
			return "o";
		} else if (r < 0.9831844192350165) {
			return "f";
		} else if (r < 0.9879530167653849) {
			return "x";
		} else if (r < 0.9919686778435899) {
			return "a";
		} else if (r < 0.994829836361811) {
			return "h";
		} else if (r < 0.9968376669009135) {
			return "y";
		} else if (r < 0.9986949101495832) {
			return "z";
		} else if (r < 0.9995482381287017) {
			return "k";
		} else if (r < 0.9998494127095672) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "p") {
		if (r < 0.33819471817106816) {
			return "r";
		} else if (r < 0.5080804099329916) {
			return "e";
		} else if (r < 0.6606227828143476) {
			return "a";
		} else if (r < 0.7607410327158061) {
			return "o";
		} else if (r < 0.8383918013401656) {
			return "l";
		} else if (r < 0.9042175798186834) {
			return "u";
		} else if (r < 0.9523058730784391) {
			return "i";
		} else if (r < 0.9858100118249901) {
			return "h";
		} else if (r < 0.9948758376034685) {
			return "s";
		} else if (r < 0.9968466692944421) {
			return "n";
		} else if (r < 0.9980291683090262) {
			return "y";
		} else if (r < 0.9992116673236103) {
			return "f";
		} else if (r < 0.999605833661805) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "q") {
		if (r < 0.9979550102249489) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "r") {
		if (r < 0.6090297790585975) {
			return "e";
		} else if (r < 0.7050912584053795) {
			return "i";
		} else if (r < 0.7992315081652257) {
			return "a";
		} else if (r < 0.8919308357348703) {
			return "o";
		} else if (r < 0.9442843419788665) {
			return "u";
		} else if (r < 0.9855907780979827) {
			return "y";
		} else if (r < 0.9980787704130644) {
			return "h";
		} else if (r < 0.9990393852065322) {
			return "r";
		} else if (r < 0.9995196926032661) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "s") {
		if (r < 0.16445993031358885) {
			return "i";
		} else if (r < 0.3040318566450971) {
			return "t";
		} else if (r < 0.4379293180686909) {
			return "e";
		} else if (r < 0.5496266799402688) {
			return "u";
		} else if (r < 0.6238924838227975) {
			return "o";
		} else if (r < 0.6955699352911897) {
			return "a";
		} else if (r < 0.7649576903932305) {
			return "p";
		} else if (r < 0.8244897959183674) {
			return "h";
		} else if (r < 0.8779492284718766) {
			return "c";
		} else if (r < 0.9008461921353909) {
			return "m";
		} else if (r < 0.9234444997511201) {
			return "l";
		} else if (r < 0.9395719263315083) {
			return "y";
		} else if (r < 0.9543056246889) {
			return "f";
		} else if (r < 0.9683424589347935) {
			return "w";
		} else if (r < 0.9764061722249877) {
			return "k";
		} else if (r < 0.982976605276257) {
			return "n";
		} else if (r < 0.9887506222000997) {
			return "v";
		} else if (r < 0.9915380786460927) {
			return "s";
		} else if (r < 0.9937282229965158) {
			return "g";
		} else if (r < 0.9959183673469388) {
			return "q";
		} else if (r < 0.9978098556495769) {
			return "d";
		} else if (r < 0.9989049278247885) {
			return "r";
		} else if (r < 0.9999004479840717) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "t") {
		if (r < 0.24538691101677104) {
			return "e";
		} else if (r < 0.47908873103274346) {
			return "i";
		} else if (r < 0.6119541002900256) {
			return "a";
		} else if (r < 0.7111933083939305) {
			return "r";
		} else if (r < 0.793115043503846) {
			return "h";
		} else if (r < 0.8538102643856921) {
			return "o";
		} else if (r < 0.9010129881047455) {
			return "l";
		} else if (r < 0.9469126980791056) {
			return "s";
		} else if (r < 0.9682653104115002) {
			return "u";
		} else if (r < 0.9773443739229121) {
			return "n";
		} else if (r < 0.9840696061535875) {
			return "y";
		} else if (r < 0.988062712790551) {
			return "w";
		} else if (r < 0.9915514270102139) {
			return "m";
		} else if (r < 0.9940733890967173) {
			return "g";
		} else if (r < 0.9957967298558279) {
			return "f";
		} else if (r < 0.9968895800933126) {
			return "z";
		} else if (r < 0.9975200706149384) {
			return "c";
		} else if (r < 0.9980664957336808) {
			return "d";
		} else if (r < 0.9986129208524231) {
			return "p";
		} else if (r < 0.9991173132697239) {
			return "b";
		} else if (r < 0.999537640284141) {
			return "t";
		} else if (r < 0.9999159345971166) {
			return "j";
		} else if (r < 0.9999579672985583) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "u") {
		if (r < 0.1393141457440294) {
			return "m";
		} else if (r < 0.2694427434170239) {
			return "l";
		} else if (r < 0.37660747091243113) {
			return "s";
		} else if (r < 0.4730557256582976) {
			return "t";
		} else if (r < 0.5673606858542559) {
			return "r";
		} else if (r < 0.6558481322718922) {
			return "c";
		} else if (r < 0.7400489895897122) {
			return "n";
		} else if (r < 0.8000612369871403) {
			return "a";
		} else if (r < 0.8306797305572566) {
			return "b";
		} else if (r < 0.8563992651561544) {
			return "e";
		} else if (r < 0.8818126148193509) {
			return "d";
		} else if (r < 0.906307409675444) {
			return "f";
		} else if (r < 0.9298836497244336) {
			return "i";
		} else if (r < 0.9507042253521127) {
			return "o";
		} else if (r < 0.9690753214941825) {
			return "p";
		} else if (r < 0.9837721984078384) {
			return "g";
		} else if (r < 0.9902020820575628) {
			return "k";
		} else if (r < 0.9938763012859767) {
			return "z";
		} else if (r < 0.9957134109001837) {
			return "y";
		} else if (r < 0.9972443355786895) {
			return "u";
		} else if (r < 0.9984690753214942) {
			return "v";
		} else if (r < 0.9996938150642989) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "v") {
		if (r < 0.41420765027322404) {
			return "e";
		} else if (r < 0.674863387978142) {
			return "i";
		} else if (r < 0.8229508196721311) {
			return "a";
		} else if (r < 0.9655737704918033) {
			return "o";
		} else if (r < 0.9950819672131147) {
			return "u";
		} else if (r < 0.9989071038251366) {
			return "y";
		} else if (r < 0.9994535519125682) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "w") {
		if (r < 0.2797872340425532) {
			return "a";
		} else if (r < 0.5031914893617021) {
			return "o";
		} else if (r < 0.701063829787234) {
			return "i";
		} else if (r < 0.8553191489361702) {
			return "e";
		} else if (r < 0.9446808510638298) {
			return "r";
		} else if (r < 0.9946808510638299) {
			return "h";
		} else if (r < 0.998936170212766) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "x") {
		if (r < 0.4745762711864407) {
			return "i";
		} else if (r < 0.847457627118644) {
			return "e";
		} else if (r < 0.8983050847457626) {
			return "t";
		} else if (r < 0.9322033898305084) {
			return "l";
		} else if (r < 0.9491525423728813) {
			return "r";
		} else if (r < 0.9661016949152541) {
			return "m";
		} else if (r < 0.9830508474576269) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "y") {
		if (r < 0.2857142857142857) {
			return "m";
		} else if (r < 0.5224489795918368) {
			return "l";
		} else if (r < 0.6479591836734695) {
			return "c";
		} else if (r < 0.7255102040816328) {
			return "a";
		} else if (r < 0.7836734693877553) {
			return "i";
		} else if (r < 0.8173469387755103) {
			return "s";
		} else if (r < 0.8489795918367349) {
			return "w";
		} else if (r < 0.8795918367346941) {
			return "o";
		} else if (r < 0.9030612244897961) {
			return "x";
		} else if (r < 0.9244897959183676) {
			return "e";
		} else if (r < 0.9418367346938777) {
			return "b";
		} else if (r < 0.9530612244897961) {
			return "h";
		} else if (r < 0.9642857142857145) {
			return "t";
		} else if (r < 0.972448979591837) {
			return "p";
		} else if (r < 0.9806122448979594) {
			return "r";
		} else if (r < 0.9846938775510207) {
			return "u";
		} else if (r < 0.9887755102040819) {
			return "n";
		} else if (r < 0.9928571428571432) {
			return "d";
		} else if (r < 0.9959183673469392) {
			return "f";
		} else if (r < 0.9969387755102045) {
			return "v";
		} else if (r < 0.9979591836734698) {
			return "g";
		} else if (r < 0.9989795918367351) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "n" && str[str.length-1] == "z") {
		if (r < 0.33076923076923076) {
			return "o";
		} else if (r < 0.5403846153846154) {
			return "e";
		} else if (r < 0.7211538461538461) {
			return "a";
		} else if (r < 0.8538461538461538) {
			return "i";
		} else if (r < 0.9673076923076923) {
			return "y";
		} else if (r < 0.9769230769230769) {
			return "d";
		} else if (r < 0.9826923076923076) {
			return "u";
		} else if (r < 0.9865384615384615) {
			return "h";
		} else if (r < 0.9903846153846153) {
			return "p";
		} else if (r < 0.9942307692307691) {
			return "t";
		} else if (r < 0.9961538461538461) {
			return "b";
		} else if (r < 0.998076923076923) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "a") {
		if (r < 0.17355605889014722) {
			return "t";
		} else if (r < 0.3349377123442808) {
			return "r";
		} else if (r < 0.4651755379388448) {
			return "d";
		} else if (r < 0.5772933182332955) {
			return "n";
		} else if (r < 0.6809173272933182) {
			return "c";
		} else if (r < 0.7483012457531144) {
			return "l";
		} else if (r < 0.8097395243488109) {
			return "s";
		} else if (r < 0.847678369195923) {
			return "m";
		} else if (r < 0.8774065685164213) {
			return "g";
		} else if (r < 0.905436013590034) {
			return "p";
		} else if (r < 0.931766704416761) {
			return "k";
		} else if (r < 0.9464892412231031) {
			return "u";
		} else if (r < 0.9586636466591166) {
			return "x";
		} else if (r < 0.9691392978482446) {
			return "b";
		} else if (r < 0.9767836919592299) {
			return "f";
		} else if (r < 0.9838618346545867) {
			return "e";
		} else if (r < 0.9878255945639864) {
			return "z";
		} else if (r < 0.9917893544733862) {
			return "v";
		} else if (r < 0.9954699886749717) {
			return "i";
		} else if (r < 0.9974518686296716) {
			return "q";
		} else if (r < 0.9985843714609287) {
			return "h";
		} else if (r < 0.9994337485843715) {
			return "w";
		} else if (r < 0.9997168742921858) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "b") {
		if (r < 0.22501598124866823) {
			return "i";
		} else if (r < 0.3622416364798636) {
			return "a";
		} else if (r < 0.47474962710419777) {
			return "l";
		} else if (r < 0.5755380353718305) {
			return "e";
		} else if (r < 0.6569358619220116) {
			return "s";
		} else if (r < 0.7315150223737482) {
			return "o";
		} else if (r < 0.7986362667803112) {
			return "b";
		} else if (r < 0.8585126784572769) {
			return "r";
		} else if (r < 0.9036863413594716) {
			return "u";
		} else if (r < 0.9286170892819092) {
			return "t";
		} else if (r < 0.9522693373108886) {
			return "j";
		} else if (r < 0.9627104197741317) {
			return "v";
		} else if (r < 0.9705945024504582) {
			return "y";
		} else if (r < 0.9774131685489027) {
			return "d";
		} else if (r < 0.9833795013850416) {
			return "n";
		} else if (r < 0.987428084380993) {
			return "f";
		} else if (r < 0.991263584061368) {
			return "c";
		} else if (r < 0.9948860004261667) {
			return "w";
		} else if (r < 0.9968037502663543) {
			return "m";
		} else if (r < 0.9980822501598126) {
			return "h";
		} else if (r < 0.9989345834221182) {
			return "p";
		} else if (r < 0.999360750053271) {
			return "g";
		} else if (r < 0.9997869166844238) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "c") {
		if (r < 0.14564648729446936) {
			return "h";
		} else if (r < 0.28886397608370706) {
			return "k";
		} else if (r < 0.4252615844544096) {
			return "a";
		} else if (r < 0.5333520179372198) {
			return "e";
		} else if (r < 0.6272421524663677) {
			return "o";
		} else if (r < 0.6875) {
			return "y";
		} else if (r < 0.7474775784753364) {
			return "r";
		} else if (r < 0.8063340807174888) {
			return "i";
		} else if (r < 0.8615470852017937) {
			return "t";
		} else if (r < 0.9142376681614349) {
			return "c";
		} else if (r < 0.9630979073243646) {
			return "u";
		} else if (r < 0.9959828101644244) {
			return "l";
		} else if (r < 0.9976644245142001) {
			return "s";
		} else if (r < 0.99906576980568) {
			return "n";
		} else if (r < 0.9995328849028399) {
			return "m";
		} else if (r < 0.9997197309417039) {
			return "q";
		} else if (r < 0.9998131539611358) {
			return "d";
		} else if (r < 0.9999065769805677) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "d") {
		if (r < 0.2294984372674505) {
			return "i";
		} else if (r < 0.4354814704569132) {
			return "e";
		} else if (r < 0.6115493376990624) {
			return "o";
		} else if (r < 0.6929602619437416) {
			return "a";
		} else if (r < 0.7594880190504539) {
			return "y";
		} else if (r < 0.8115791040333383) {
			return "u";
		} else if (r < 0.8487870218782557) {
			return "d";
		} else if (r < 0.8858461080517934) {
			return "s";
		} else if (r < 0.9127846405715137) {
			return "l";
		} else if (r < 0.9365977079922608) {
			return "r";
		} else if (r < 0.9544575085578212) {
			return "g";
		} else if (r < 0.96398273552612) {
			return "w";
		} else if (r < 0.9703824973954458) {
			return "h";
		} else if (r < 0.9754427742223546) {
			return "c";
		} else if (r < 0.9805030510492634) {
			return "m";
		} else if (r < 0.9849680011906534) {
			return "b";
		} else if (r < 0.9885399613037655) {
			return "p";
		} else if (r < 0.9918142580741183) {
			return "f";
		} else if (r < 0.9940467331448133) {
			return "t";
		} else if (r < 0.9961303765441286) {
			return "n";
		} else if (r < 0.9982140199434439) {
			return "k";
		} else if (r < 0.9997023366572406) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "e") {
		if (r < 0.1366642174871418) {
			return "n";
		} else if (r < 0.2733284349742836) {
			return "s";
		} else if (r < 0.40411462160176337) {
			return "l";
		} else if (r < 0.5003673769287288) {
			return "t";
		} else if (r < 0.576414401175606) {
			return "d";
		} else if (r < 0.6509919177075678) {
			return "c";
		} else if (r < 0.7252020573108007) {
			return "r";
		} else if (r < 0.7652461425422481) {
			return "m";
		} else if (r < 0.8001469507714913) {
			return "a";
		} else if (r < 0.830639235855988) {
			return "b";
		} else if (r < 0.8585598824393825) {
			return "i";
		} else if (r < 0.8850110213078616) {
			return "p";
		} else if (r < 0.9110947832476117) {
			return "o";
		} else if (r < 0.933872152828802) {
			return "x";
		} else if (r < 0.9481998530492282) {
			return "v";
		} else if (r < 0.9577516531961789) {
			return "u";
		} else if (r < 0.9669360764144008) {
			return "f";
		} else if (r < 0.975385745775165) {
			return "y";
		} else if (r < 0.9831006612784714) {
			return "h";
		} else if (r < 0.9878765613519468) {
			return "q";
		} else if (r < 0.9919177075679644) {
			return "g";
		} else if (r < 0.9952240999265243) {
			return "k";
		} else if (r < 0.9977957384276264) {
			return "e";
		} else if (r < 0.9996326230712708) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "f") {
		if (r < 0.3129411764705882) {
			return "f";
		} else if (r < 0.45176470588235296) {
			return "i";
		} else if (r < 0.571764705882353) {
			return "e";
		} else if (r < 0.6647058823529411) {
			return "l";
		} else if (r < 0.7505882352941176) {
			return "t";
		} else if (r < 0.8211764705882352) {
			return "a";
		} else if (r < 0.8835294117647058) {
			return "o";
		} else if (r < 0.9335294117647058) {
			return "u";
		} else if (r < 0.9617647058823529) {
			return "r";
		} else if (r < 0.9788235294117646) {
			return "s";
		} else if (r < 0.9852941176470588) {
			return "y";
		} else if (r < 0.99) {
			return "n";
		} else if (r < 0.9935294117647059) {
			return "b";
		} else if (r < 0.9958823529411764) {
			return "m";
		} else if (r < 0.9976470588235293) {
			return "w";
		} else if (r < 0.9988235294117647) {
			return "p";
		} else if (r < 0.9994117647058823) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "g") {
		if (r < 0.23850931677018633) {
			return "i";
		} else if (r < 0.45160057333970377) {
			return "r";
		} else if (r < 0.6147157190635452) {
			return "e";
		} else if (r < 0.7229813664596273) {
			return "y";
		} else if (r < 0.7891065456282848) {
			return "a";
		} else if (r < 0.8280936454849498) {
			return "n";
		} else if (r < 0.8669851887243191) {
			return "l";
		} else if (r < 0.9017677974199713) {
			return "o";
		} else if (r < 0.9361681796464405) {
			return "g";
		} else if (r < 0.9623506927854754) {
			return "u";
		} else if (r < 0.9737219302436694) {
			return "s";
		} else if (r < 0.9808886765408504) {
			return "m";
		} else if (r < 0.9857620640229335) {
			return "h";
		} else if (r < 0.9890109890109889) {
			return "w";
		} else if (r < 0.9918776875298614) {
			return "b";
		} else if (r < 0.9943621595795509) {
			return "t";
		} else if (r < 0.9964644051600573) {
			return "f";
		} else if (r < 0.9978977544194935) {
			return "d";
		} else if (r < 0.9988533205924509) {
			return "c";
		} else if (r < 0.9995222169135212) {
			return "p";
		} else if (r < 0.9998088867654084) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "h") {
		if (r < 0.3058589870903674) {
			return "e";
		} else if (r < 0.5014895729890765) {
			return "y";
		} else if (r < 0.6385302879841113) {
			return "o";
		} else if (r < 0.7557100297914598) {
			return "i";
		} else if (r < 0.858987090367428) {
			return "a";
		} else if (r < 0.9076464746772592) {
			return "u";
		} else if (r < 0.9433962264150944) {
			return "n";
		} else if (r < 0.9731876861966237) {
			return "m";
		} else if (r < 0.9841112214498511) {
			return "l";
		} else if (r < 0.9890764647467726) {
			return "s";
		} else if (r < 0.9930486593843099) {
			return "r";
		} else if (r < 0.9950347567030785) {
			return "p";
		} else if (r < 0.9970208540218471) {
			return "j";
		} else if (r < 0.9980139026812315) {
			return "t";
		} else if (r < 0.9990069513406158) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "i") {
		if (r < 0.46178176067474963) {
			return "d";
		} else if (r < 0.620980495519241) {
			return "n";
		} else if (r < 0.7306273062730628) {
			return "s";
		} else if (r < 0.8144438587243016) {
			return "l";
		} else if (r < 0.8736601651730803) {
			return "c";
		} else if (r < 0.91389913899139) {
			return "t";
		} else if (r < 0.9376208047794764) {
			return "r";
		} else if (r < 0.95079950799508) {
			return "e";
		} else if (r < 0.9597610261816903) {
			return "g";
		} else if (r < 0.9678439641539273) {
			return "o";
		} else if (r < 0.9750483219117906) {
			return "m";
		} else if (r < 0.9819012475839044) {
			return "a";
		} else if (r < 0.9868212967843965) {
			return "z";
		} else if (r < 0.9912141978562643) {
			return "k";
		} else if (r < 0.9950799507995081) {
			return "f";
		} else if (r < 0.9964856791425057) {
			return "b";
		} else if (r < 0.997539975399754) {
			return "x";
		} else if (r < 0.9984185556141276) {
			return "v";
		} else if (r < 0.9991214197856265) {
			return "p";
		} else if (r < 0.9996485679142506) {
			return "i";
		} else if (r < 0.9998242839571253) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "j") {
		if (r < 0.3870967741935484) {
			return "e";
		} else if (r < 0.5870967741935484) {
			return "o";
		} else if (r < 0.735483870967742) {
			return "a";
		} else if (r < 0.8580645161290323) {
			return "u";
		} else if (r < 0.9741935483870968) {
			return "i";
		} else if (r < 0.9870967741935485) {
			return "d";
		} else if (r < 0.9935483870967743) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "k") {
		if (r < 0.40288713910761154) {
			return "e";
		} else if (r < 0.5905511811023622) {
			return "i";
		} else if (r < 0.6791338582677164) {
			return "a";
		} else if (r < 0.7604986876640419) {
			return "s";
		} else if (r < 0.821522309711286) {
			return "o";
		} else if (r < 0.8536745406824147) {
			return "l";
		} else if (r < 0.8838582677165354) {
			return "y";
		} else if (r < 0.9087926509186351) {
			return "u";
		} else if (r < 0.9232283464566929) {
			return "r";
		} else if (r < 0.9356955380577429) {
			return "m";
		} else if (r < 0.9468503937007875) {
			return "w";
		} else if (r < 0.9566929133858268) {
			return "t";
		} else if (r < 0.9652230971128609) {
			return "b";
		} else if (r < 0.973753280839895) {
			return "k";
		} else if (r < 0.9816272965879265) {
			return "h";
		} else if (r < 0.9862204724409448) {
			return "n";
		} else if (r < 0.9901574803149605) {
			return "d";
		} else if (r < 0.9934383202099737) {
			return "f";
		} else if (r < 0.9960629921259841) {
			return "c";
		} else if (r < 0.9986876640419946) {
			return "p";
		} else if (r < 0.9993438320209972) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "l") {
		if (r < 0.2487852283770651) {
			return "o";
		} else if (r < 0.4305722288915566) {
			return "i";
		} else if (r < 0.5469044760761448) {
			return "e";
		} else if (r < 0.6396844452066541) {
			return "a";
		} else if (r < 0.730349282570171) {
			return "l";
		} else if (r < 0.8208426227633911) {
			return "y";
		} else if (r < 0.8690904933401933) {
			return "d";
		} else if (r < 0.9133939290001716) {
			return "u";
		} else if (r < 0.9295718287314927) {
			return "s";
		} else if (r < 0.9452352369519237) {
			return "v";
		} else if (r < 0.9608414794489225) {
			return "t";
		} else if (r < 0.9684445206654091) {
			return "k";
		} else if (r < 0.9752472417538445) {
			return "f";
		} else if (r < 0.9818784656719831) {
			return "p";
		} else if (r < 0.9866232207168582) {
			return "c";
		} else if (r < 0.9912536443148687) {
			return "m";
		} else if (r < 0.9931972789115645) {
			return "g";
		} else if (r < 0.9950265820613958) {
			return "h";
		} else if (r < 0.9968558852112271) {
			return "b";
		} else if (r < 0.9981135311267362) {
			return "w";
		} else if (r < 0.9989138512547874) {
			return "n";
		} else if (r < 0.9994855084891097) {
			return "r";
		} else if (r < 0.999828502829703) {
			return "z";
		} else if (r < 0.9998856685531353) {
			return "x";
		} else if (r < 0.9999428342765676) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "m") {
		if (r < 0.2397783251231527) {
			return "e";
		} else if (r < 0.4395935960591133) {
			return "a";
		} else if (r < 0.5761699507389162) {
			return "i";
		} else if (r < 0.6807881773399014) {
			return "o";
		} else if (r < 0.7738300492610837) {
			return "p";
		} else if (r < 0.8456280788177339) {
			return "y";
		} else if (r < 0.9071428571428571) {
			return "m";
		} else if (r < 0.9487068965517241) {
			return "b";
		} else if (r < 0.9635467980295567) {
			return "n";
		} else if (r < 0.9766009852216749) {
			return "s";
		} else if (r < 0.9856527093596059) {
			return "u";
		} else if (r < 0.9905172413793103) {
			return "f";
		} else if (r < 0.9932266009852216) {
			return "l";
		} else if (r < 0.9949507389162561) {
			return "t";
		} else if (r < 0.9963669950738916) {
			return "r";
		} else if (r < 0.9971674876847291) {
			return "c";
		} else if (r < 0.9979064039408867) {
			return "w";
		} else if (r < 0.9985221674876847) {
			return "h";
		} else if (r < 0.9991379310344828) {
			return "d";
		} else if (r < 0.9995073891625617) {
			return "k";
		} else if (r < 0.9996921182266011) {
			return "v";
		} else if (r < 0.9998152709359607) {
			return "g";
		} else if (r < 0.9999384236453203) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "n") {
		if (r < 0.1571826280623608) {
			return "i";
		} else if (r < 0.28296213808463255) {
			return "s";
		} else if (r < 0.4067650334075724) {
			return "a";
		} else if (r < 0.5195712694877506) {
			return "e";
		} else if (r < 0.5980233853006681) {
			return "t";
		} else if (r < 0.6648942093541202) {
			return "o";
		} else if (r < 0.7219376391982182) {
			return "d";
		} else if (r < 0.7778674832962137) {
			return "c";
		} else if (r < 0.8200723830734965) {
			return "g";
		} else if (r < 0.8481904231625834) {
			return "f";
		} else if (r < 0.8694042316258351) {
			return "v";
		} else if (r < 0.8903674832962137) {
			return "p";
		} else if (r < 0.9084910913140312) {
			return "y";
		} else if (r < 0.9251391982182627) {
			return "r";
		} else if (r < 0.9417594654788418) {
			return "n";
		} else if (r < 0.9530623608017816) {
			return "l";
		} else if (r < 0.9641703786191536) {
			return "m";
		} else if (r < 0.9730512249443206) {
			return "u";
		} else if (r < 0.9787305122494431) {
			return "b";
		} else if (r < 0.9839086859688194) {
			return "j";
		} else if (r < 0.9890311804008907) {
			return "h";
		} else if (r < 0.9931792873051223) {
			return "k";
		} else if (r < 0.9965478841870822) {
			return "w";
		} else if (r < 0.9984131403118037) {
			return "q";
		} else if (r < 0.9999443207126946) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "o") {
		if (r < 0.1922865769969805) {
			return "d";
		} else if (r < 0.3405160581937963) {
			return "t";
		} else if (r < 0.4361789733735932) {
			return "n";
		} else if (r < 0.5285479000823496) {
			return "k";
		} else if (r < 0.6161130936041723) {
			return "l";
		} else if (r < 0.696815811144661) {
			return "f";
		} else if (r < 0.7625583310458413) {
			return "m";
		} else if (r < 0.8184188855339005) {
			return "s";
		} else if (r < 0.8734559429041997) {
			return "p";
		} else if (r < 0.9191600329398846) {
			return "r";
		} else if (r < 0.9339829810595661) {
			return "g";
		} else if (r < 0.945649190227834) {
			return "i";
		} else if (r < 0.9570409003568485) {
			return "z";
		} else if (r < 0.9678836124073563) {
			return "c";
		} else if (r < 0.9772165797419706) {
			return "e";
		} else if (r < 0.9844908042821847) {
			return "v";
		} else if (r < 0.989980785067252) {
			return "b";
		} else if (r < 0.9932747735382923) {
			return "u";
		} else if (r < 0.9965687620093326) {
			return "h";
		} else if (r < 0.9975295086467194) {
			return "x";
		} else if (r < 0.9983530057644795) {
			return "a";
		} else if (r < 0.9990392533626129) {
			return "j";
		} else if (r < 0.9997255009607463) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "p") {
		if (r < 0.300532466634396) {
			return "h";
		} else if (r < 0.4153931263398105) {
			return "e";
		} else if (r < 0.5203651199778715) {
			return "i";
		} else if (r < 0.6166931747458682) {
			return "o";
		} else if (r < 0.6932438973791577) {
			return "a";
		} else if (r < 0.7534748634257659) {
			return "l";
		} else if (r < 0.8084503146393749) {
			return "t";
		} else if (r < 0.8507710393472098) {
			return "p";
		} else if (r < 0.8924694004564) {
			return "s";
		} else if (r < 0.9246940045639997) {
			return "r";
		} else if (r < 0.9565036996058364) {
			return "y";
		} else if (r < 0.9807067284420165) {
			return "u";
		} else if (r < 0.9852015766544499) {
			return "m";
		} else if (r < 0.9896964248668833) {
			return "n";
		} else if (r < 0.9921167277505013) {
			return "w";
		} else if (r < 0.9937072125025931) {
			return "f";
		} else if (r < 0.9951593942327639) {
			return "b";
		} else if (r < 0.9964732729410136) {
			return "k";
		} else if (r < 0.9977180001383029) {
			return "c";
		} else if (r < 0.9986861212917502) {
			return "g";
		} else if (r < 0.9994467879123158) {
			return "d";
		} else if (r < 0.9997925454671184) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "o" && str[str.length-1] == "r") {
		if (r < 0.14484501093596802) {
			return "i";
		} else if (r < 0.24941549136435628) {
			return "t";
		} else if (r < 0.353269477336149) {
			return "e";
		} else if (r < 0.447582773964854) {
			return "a";
		} else if (r < 0.5312240742137415) {
			return "m";
		} else if (r < 0.5923523644317067) {
			return "o";
		} else if (r < 0.6529527113658646) {
			return "s";
		} else if (r < 0.703559846142243) {
			return "y";
		} else if (r < 0.747002036352666) {
			return "n";
		} else if (r < 0.7898408628101666) {
			return "d";
		} else if (r < 0.8325665585639942) {
			return "p";
		} else if (r < 0.8737084244664001) {
			return "r";
		} else if (r < 0.9029715664831434) {
			return "k";
		} else if (r < 0.9242024285391054) {
			return "c";
		} else if (r < 0.9453201598913944) {
			return "g";
		} else if (r < 0.9630062598989364) {
			return "b";
		} else if (r < 0.9723583980692359) {
			return "l";
		} else if (r < 0.9805792292028055) {
			return "h";
		} else if (r < 0.9886492193981445) {
			return "u";
		} else if (r < 0.992684214495814) {
			return "w";
		} else if (r < 0.996342107247907) {
			return "f";
		} else if (r < 0.9982276189757899) {
			return "v";
		} else if (r < 0.9990949543706161) {
			return "z";
		} else if (r < 0.9995851874198657) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "s") {
		if (r < 0.24246266553958862) {
			return "t";
		} else if (r < 0.41863905325443784) {
			return "i";
		} else if (r < 0.5681177796562411) {
			return "e";
		} else if (r < 0.6524373062834601) {
			return "p";
		} else if (r < 0.732952944491406) {
			return "s";
		} else if (r < 0.8099464637926176) {
			return "c";
		} else if (r < 0.862778247393632) {
			return "o";
		} else if (r < 0.913426317272471) {
			return "a";
		} else if (r < 0.936320090166244) {
			return "m";
		} else if (r < 0.9563961679346294) {
			return "u";
		} else if (r < 0.9727387996618766) {
			return "y";
		} else if (r < 0.9857706396167935) {
			return "h";
		} else if (r < 0.9909129332206256) {
			return "k";
		} else if (r < 0.9938715131022824) {
			return "l";
		} else if (r < 0.9962665539588617) {
			return "q";
		} else if (r < 0.9974640743871513) {
			return "w";
		} else if (r < 0.998450267681037) {
			return "g";
		} else if (r < 0.9993660185967879) {
			return "n";
		} else if (r < 0.9997182304874613) {
			return "b";
		} else if (r < 0.9998591152437307) {
			return "z";
		} else if (r < 0.9999295576218654) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "t") {
		if (r < 0.19448171754444818) {
			return "o";
		} else if (r < 0.35231465951023144) {
			return "h";
		} else if (r < 0.5015934250251594) {
			return "i";
		} else if (r < 0.6323381415632339) {
			return "e";
		} else if (r < 0.7209828916470984) {
			return "a";
		} else if (r < 0.7967963770546798) {
			return "r";
		} else if (r < 0.8661522978866154) {
			return "t";
		} else if (r < 0.9078329419657835) {
			return "y";
		} else if (r < 0.9370177792687019) {
			return "s";
		} else if (r < 0.9547131834954714) {
			return "u";
		} else if (r < 0.9667896678966791) {
			return "c";
		} else if (r < 0.9775243206977525) {
			return "l";
		} else if (r < 0.9818852733981887) {
			return "m";
		} else if (r < 0.9862462260986248) {
			return "w";
		} else if (r < 0.9904394498490441) {
			return "b";
		} else if (r < 0.9931231130493124) {
			return "p";
		} else if (r < 0.9953874538745389) {
			return "f";
		} else if (r < 0.9968131499496814) {
			return "g";
		} else if (r < 0.9979033881247904) {
			return "n";
		} else if (r < 0.998490439449849) {
			return "z";
		} else if (r < 0.9989936262998994) {
			return "d";
		} else if (r < 0.9994129486749413) {
			return "k";
		} else if (r < 0.9996645420999665) {
			return "q";
		} else if (r < 0.9998322710499833) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "u") {
		if (r < 0.5493023016322538) {
			return "s";
		} else if (r < 0.697440914474023) {
			return "t";
		} else if (r < 0.8000102981308893) {
			return "n";
		} else if (r < 0.8792544153236188) {
			return "r";
		} else if (r < 0.907162350033469) {
			return "g";
		} else if (r < 0.9270377426497092) {
			return "l";
		} else if (r < 0.9433087894547141) {
			return "c";
		} else if (r < 0.9553061119406828) {
			return "p";
		} else if (r < 0.9654497708665878) {
			return "b";
		} else if (r < 0.9746665980124608) {
			return "d";
		} else if (r < 0.9793522475670666) {
			return "m";
		} else if (r < 0.9821842335616087) {
			return "i";
		} else if (r < 0.9849647289017044) {
			return "v";
		} else if (r < 0.9876937335873539) {
			return "e";
		} else if (r < 0.9904227382730034) {
			return "f";
		} else if (r < 0.9931002523042067) {
			return "a";
		} else if (r < 0.99577776633541) {
			return "k";
		} else if (r < 0.9972709953143504) {
			return "z";
		} else if (r < 0.9977859018588126) {
			return "x";
		} else if (r < 0.9983008084032747) {
			return "q";
		} else if (r < 0.9987642242932907) {
			return "h";
		} else if (r < 0.9992276401833067) {
			return "j";
		} else if (r < 0.9996395654188764) {
			return "w";
		} else if (r < 0.9997940373822151) {
			return "y";
		} else if (r < 0.9998970186911075) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "v") {
		if (r < 0.8086342229199373) {
			return "e";
		} else if (r < 0.8984301412872842) {
			return "i";
		} else if (r < 0.9678178963893249) {
			return "a";
		} else if (r < 0.9882260596546311) {
			return "o";
		} else if (r < 0.9951334379905808) {
			return "u";
		} else if (r < 0.9965463108320252) {
			return "y";
		} else if (r < 0.997331240188383) {
			return "k";
		} else if (r < 0.9981161695447409) {
			return "r";
		} else if (r < 0.9985871271585557) {
			return "v";
		} else if (r < 0.9989010989010989) {
			return "t";
		} else if (r < 0.9992150706436421) {
			return "n";
		} else if (r < 0.9995290423861853) {
			return "s";
		} else if (r < 0.9996860282574569) {
			return "l";
		} else if (r < 0.9998430141287284) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "w") {
		if (r < 0.23295454545454544) {
			return "e";
		} else if (r < 0.41580578512396693) {
			return "n";
		} else if (r < 0.5196280991735537) {
			return "s";
		} else if (r < 0.6157024793388429) {
			return "l";
		} else if (r < 0.6929235537190082) {
			return "i";
		} else if (r < 0.7489669421487603) {
			return "a";
		} else if (r < 0.790547520661157) {
			return "d";
		} else if (r < 0.827737603305785) {
			return "b";
		} else if (r < 0.8522727272727272) {
			return "t";
		} else if (r < 0.8737086776859503) {
			return "m";
		} else if (r < 0.8930785123966941) {
			return "h";
		} else if (r < 0.9096074380165289) {
			return "p";
		} else if (r < 0.9245867768595041) {
			return "f";
		} else if (r < 0.9380165289256198) {
			return "w";
		} else if (r < 0.9486053719008264) {
			return "c";
		} else if (r < 0.9589359504132231) {
			return "y";
		} else if (r < 0.9690082644628099) {
			return "r";
		} else if (r < 0.9770144628099173) {
			return "o";
		} else if (r < 0.984504132231405) {
			return "k";
		} else if (r < 0.9912190082644629) {
			return "g";
		} else if (r < 0.9961260330578513) {
			return "z";
		} else if (r < 0.9981921487603307) {
			return "u";
		} else if (r < 0.9992252066115703) {
			return "j";
		} else if (r < 0.9997417355371901) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "x") {
		if (r < 0.381236442516269) {
			return "i";
		} else if (r < 0.6599783080260304) {
			return "y";
		} else if (r < 0.767353579175705) {
			return "a";
		} else if (r < 0.85412147505423) {
			return "e";
		} else if (r < 0.9067245119305857) {
			return "o";
		} else if (r < 0.9202819956616052) {
			return "b";
		} else if (r < 0.9322125813449024) {
			return "h";
		} else if (r < 0.9436008676789588) {
			return "c";
		} else if (r < 0.9533622559652929) {
			return "t";
		} else if (r < 0.9620390455531453) {
			return "f";
		} else if (r < 0.9690889370932755) {
			return "l";
		} else if (r < 0.9745119305856833) {
			return "u";
		} else if (r < 0.9793926247288504) {
			return "w";
		} else if (r < 0.9842733188720174) {
			return "s";
		} else if (r < 0.9875271149674621) {
			return "m";
		} else if (r < 0.9907809110629069) {
			return "g";
		} else if (r < 0.99295010845987) {
			return "p";
		} else if (r < 0.9951193058568331) {
			return "v";
		} else if (r < 0.9967462039045554) {
			return "d";
		} else if (r < 0.9983731019522777) {
			return "n";
		} else if (r < 0.9994577006507592) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "y") {
		if (r < 0.2756183745583039) {
			return "a";
		} else if (r < 0.4263839811542992) {
			return "s";
		} else if (r < 0.5747938751472321) {
			return "e";
		} else if (r < 0.6643109540636043) {
			return "i";
		} else if (r < 0.751472320376914) {
			return "l";
		} else if (r < 0.806831566548881) {
			return "o";
		} else if (r < 0.8433451118963486) {
			return "m";
		} else if (r < 0.8739693757361602) {
			return "d";
		} else if (r < 0.901060070671378) {
			return "n";
		} else if (r < 0.9222614840989399) {
			return "f";
		} else if (r < 0.9411071849234394) {
			return "c";
		} else if (r < 0.9540636042402827) {
			return "p";
		} else if (r < 0.9634864546525324) {
			return "u";
		} else if (r < 0.972909305064782) {
			return "h";
		} else if (r < 0.9823321554770317) {
			return "r";
		} else if (r < 0.989399293286219) {
			return "t";
		} else if (r < 0.9941107184923439) {
			return "b";
		} else if (r < 0.9976442873969376) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "o" && str[str.length-1] == "z") {
		if (r < 0.45234899328859063) {
			return "o";
		} else if (r < 0.6563758389261745) {
			return "e";
		} else if (r < 0.7691275167785234) {
			return "i";
		} else if (r < 0.8590604026845637) {
			return "y";
		} else if (r < 0.9221476510067114) {
			return "z";
		} else if (r < 0.9543624161073825) {
			return "l";
		} else if (r < 0.985234899328859) {
			return "a";
		} else if (r < 0.9919463087248321) {
			return "u";
		} else if (r < 0.9959731543624161) {
			return "h";
		} else if (r < 0.9973154362416107) {
			return "c";
		} else if (r < 0.9986577181208053) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "a") {
		if (r < 0.28247623689982937) {
			return "r";
		} else if (r < 0.4359411812494922) {
			return "t";
		} else if (r < 0.5650337151677634) {
			return "n";
		} else if (r < 0.6895767324721748) {
			return "l";
		} else if (r < 0.7566008611585019) {
			return "s";
		} else if (r < 0.8126574051507027) {
			return "c";
		} else if (r < 0.839142091152815) {
			return "i";
		} else if (r < 0.8656267771549273) {
			return "g";
		} else if (r < 0.8889430498009586) {
			return "p";
		} else if (r < 0.9079535299374442) {
			return "d";
		} else if (r < 0.9236331139816395) {
			return "u";
		} else if (r < 0.9385002843447884) {
			return "b";
		} else if (r < 0.9527175237631001) {
			return "e";
		} else if (r < 0.9639288325615403) {
			return "y";
		} else if (r < 0.9727841416849459) {
			return "v";
		} else if (r < 0.9798521407100494) {
			return "w";
		} else if (r < 0.9867576569989438) {
			return "m";
		} else if (r < 0.9904135185636526) {
			return "h";
		} else if (r < 0.993013242343001) {
			return "k";
		} else if (r < 0.9954504833861402) {
			return "x";
		} else if (r < 0.9969128280120236) {
			return "q";
		} else if (r < 0.9978877244292793) {
			return "j";
		} else if (r < 0.998618896742221) {
			return "a";
		} else if (r < 0.9993500690551628) {
			return "z";
		} else if (r < 0.9999187586318953) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "b") {
		if (r < 0.2623762376237624) {
			return "o";
		} else if (r < 0.4504950495049505) {
			return "r";
		} else if (r < 0.6138613861386139) {
			return "e";
		} else if (r < 0.7425742574257426) {
			return "a";
		} else if (r < 0.8613861386138614) {
			return "u";
		} else if (r < 0.9257425742574257) {
			return "i";
		} else if (r < 0.9653465346534653) {
			return "l";
		} else if (r < 0.9752475247524752) {
			return "x";
		} else if (r < 0.9851485148514851) {
			return "b";
		} else if (r < 0.995049504950495) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "c") {
		if (r < 0.2857142857142857) {
			return "o";
		} else if (r < 0.5142857142857142) {
			return "a";
		} else if (r < 0.6714285714285714) {
			return "h";
		} else if (r < 0.7928571428571428) {
			return "r";
		} else if (r < 0.8785714285714286) {
			return "u";
		} else if (r < 0.9357142857142857) {
			return "l";
		} else if (r < 0.95) {
			return "e";
		} else if (r < 0.9642857142857142) {
			return "i";
		} else if (r < 0.9714285714285713) {
			return "y";
		} else if (r < 0.9785714285714284) {
			return "d";
		} else if (r < 0.9857142857142855) {
			return "f";
		} else if (r < 0.9928571428571427) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "d") {
		if (r < 0.3411764705882353) {
			return "a";
		} else if (r < 0.6235294117647059) {
			return "o";
		} else if (r < 0.8117647058823529) {
			return "r";
		} else if (r < 0.9176470588235294) {
			return "i";
		} else if (r < 0.9529411764705882) {
			return "e";
		} else if (r < 0.9647058823529411) {
			return "t";
		} else if (r < 0.976470588235294) {
			return "l";
		} else if (r < 0.9882352941176469) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "e") {
		if (r < 0.4862058371735791) {
			return "r";
		} else if (r < 0.6040552995391705) {
			return "n";
		} else if (r < 0.6836866359447005) {
			return "d";
		} else if (r < 0.7466666666666667) {
			return "c";
		} else if (r < 0.802089093701997) {
			return "t";
		} else if (r < 0.8516743471582182) {
			return "l";
		} else if (r < 0.8887864823348696) {
			return "a";
		} else if (r < 0.9185867895545317) {
			return "s";
		} else if (r < 0.9365284178187405) {
			return "e";
		} else if (r < 0.9489400921658987) {
			return "p";
		} else if (r < 0.9556989247311829) {
			return "i";
		} else if (r < 0.9614746543778803) {
			return "u";
		} else if (r < 0.9671274961597544) {
			return "o";
		} else if (r < 0.9725345622119816) {
			return "g";
		} else if (r < 0.9776344086021506) {
			return "x";
		} else if (r < 0.9824884792626728) {
			return "w";
		} else if (r < 0.9862365591397849) {
			return "m";
		} else if (r < 0.989247311827957) {
			return "f";
		} else if (r < 0.9918279569892473) {
			return "z";
		} else if (r < 0.9942242703533026) {
			return "y";
		} else if (r < 0.9962519201228879) {
			return "b";
		} else if (r < 0.9977265745007681) {
			return "k";
		} else if (r < 0.9988940092165899) {
			return "h";
		} else if (r < 0.9997542242703533) {
			return "j";
		} else if (r < 0.9999385560675883) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "f") {
		if (r < 0.3136094674556213) {
			return "u";
		} else if (r < 0.47337278106508873) {
			return "l";
		} else if (r < 0.6094674556213018) {
			return "i";
		} else if (r < 0.7278106508875739) {
			return "o";
		} else if (r < 0.8106508875739644) {
			return "e";
		} else if (r < 0.8816568047337278) {
			return "a";
		} else if (r < 0.9526627218934911) {
			return "r";
		} else if (r < 0.9704142011834319) {
			return "x";
		} else if (r < 0.9763313609467456) {
			return "s";
		} else if (r < 0.9822485207100592) {
			return "f";
		} else if (r < 0.9881656804733728) {
			return "c";
		} else if (r < 0.9940828402366865) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "g") {
		if (r < 0.3188405797101449) {
			return "r";
		} else if (r < 0.5507246376811594) {
			return "a";
		} else if (r < 0.7536231884057971) {
			return "i";
		} else if (r < 0.855072463768116) {
			return "u";
		} else if (r < 0.9130434782608696) {
			return "o";
		} else if (r < 0.9565217391304348) {
			return "l";
		} else if (r < 0.9855072463768116) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "h") {
		if (r < 0.24737854439411802) {
			return "o";
		} else if (r < 0.45541974312837374) {
			return "i";
		} else if (r < 0.6338648631879382) {
			return "a";
		} else if (r < 0.792269032698393) {
			return "y";
		} else if (r < 0.8953899609108394) {
			return "e";
		} else if (r < 0.9358441397282372) {
			return "r";
		} else if (r < 0.9627722280821492) {
			return "t";
		} else if (r < 0.98002109573742) {
			return "l";
		} else if (r < 0.9931749084817273) {
			return "u";
		} else if (r < 0.9980765651175776) {
			return "s";
		} else if (r < 0.9994415834212321) {
			return "n";
		} else if (r < 0.9995656759942916) {
			return "w";
		} else if (r < 0.999689768567351) {
			return "h";
		} else if (r < 0.9997518148538808) {
			return "z";
		} else if (r < 0.9998138611404105) {
			return "g";
		} else if (r < 0.9998759074269402) {
			return "p";
		} else if (r < 0.9999379537134699) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "i") {
		if (r < 0.20749533993917393) {
			return "n";
		} else if (r < 0.35622486019817523) {
			return "c";
		} else if (r < 0.46267046011969) {
			return "t";
		} else if (r < 0.5533209065044639) {
			return "s";
		} else if (r < 0.6275875600902581) {
			return "e";
		} else if (r < 0.6983223781026195) {
			return "r";
		} else if (r < 0.7683704503090357) {
			return "l";
		} else if (r < 0.8221328362601786) {
			return "d";
		} else if (r < 0.8663788874717945) {
			return "a";
		} else if (r < 0.8969881291082116) {
			return "g";
		} else if (r < 0.9258314529579124) {
			return "p";
		} else if (r < 0.9460414009614442) {
			return "o";
		} else if (r < 0.9570293338565683) {
			return "m";
		} else if (r < 0.9670362013146278) {
			return "k";
		} else if (r < 0.9759638967919161) {
			return "f";
		} else if (r < 0.9821446090454234) {
			return "z";
		} else if (r < 0.9879328951241049) {
			return "u";
		} else if (r < 0.9913666241538311) {
			return "b";
		} else if (r < 0.9941136073776121) {
			return "q";
		} else if (r < 0.9963700578828608) {
			return "v";
		} else if (r < 0.9979397625821642) {
			return "x";
		} else if (r < 0.9989208280192289) {
			return "i";
		} else if (r < 0.9995094672814677) {
			return "h";
		} else if (r < 0.9998037869125871) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "j") {
		if (r < 0.6) {
			return "a";
		} else if (r < 0.8999999999999999) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "k") {
		if (r < 0.5441176470588235) {
			return "i";
		} else if (r < 0.7647058823529411) {
			return "e";
		} else if (r < 0.8970588235294117) {
			return "n";
		} else if (r < 0.926470588235294) {
			return "g";
		} else if (r < 0.9558823529411764) {
			return "a";
		} else if (r < 0.9705882352941175) {
			return "s";
		} else if (r < 0.9852941176470587) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "l") {
		if (r < 0.371962871962872) {
			return "a";
		} else if (r < 0.6437346437346437) {
			return "e";
		} else if (r < 0.7987987987987988) {
			return "i";
		} else if (r < 0.9082719082719083) {
			return "o";
		} else if (r < 0.9822549822549823) {
			return "u";
		} else if (r < 0.9994539994539995) {
			return "y";
		} else if (r < 0.9997269997269997) {
			return "f";
		} else if (r < 0.9998634998634999) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "m") {
		if (r < 0.39906103286384975) {
			return "a";
		} else if (r < 0.7887323943661972) {
			return "e";
		} else if (r < 0.9061032863849766) {
			return "o";
		} else if (r < 0.9530516431924884) {
			return "i";
		} else if (r < 0.9812206572769954) {
			return "u";
		} else if (r < 0.9906103286384977) {
			return "t";
		} else if (r < 0.9953051643192489) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "n") {
		if (r < 0.6350093109869647) {
			return "e";
		} else if (r < 0.936685288640596) {
			return "o";
		} else if (r < 0.9757914338919926) {
			return "i";
		} else if (r < 0.9888268156424582) {
			return "a";
		} else if (r < 0.9925512104283055) {
			return "y";
		} else if (r < 0.9962756052141528) {
			return "u";
		} else if (r < 0.9981378026070765) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "o") {
		if (r < 0.17566917775284502) {
			return "l";
		} else if (r < 0.3448469305978522) {
			return "s";
		} else if (r < 0.5100977720788588) {
			return "r";
		} else if (r < 0.5903991024202596) {
			return "n";
		} else if (r < 0.6584388523801891) {
			return "t";
		} else if (r < 0.7262381791953838) {
			return "d";
		} else if (r < 0.771197307260779) {
			return "p";
		} else if (r < 0.81086712614201) {
			return "u";
		} else if (r < 0.8500560987337714) {
			return "i";
		} else if (r < 0.8788267350536945) {
			return "c";
		} else if (r < 0.9037506010578618) {
			return "m";
		} else if (r < 0.9258695303734572) {
			return "o";
		} else if (r < 0.9443019714697868) {
			return "g";
		} else if (r < 0.9602500400705241) {
			return "e";
		} else if (r < 0.9704279531976278) {
			return "w";
		} else if (r < 0.9800448789870171) {
			return "k";
		} else if (r < 0.9838916493027728) {
			return "x";
		} else if (r < 0.9874979964737939) {
			return "b";
		} else if (r < 0.99102420259657) {
			return "a";
		} else if (r < 0.993748998236897) {
			return "v";
		} else if (r < 0.9956723833947748) {
			return "h";
		} else if (r < 0.9971950633114282) {
			return "f";
		} else if (r < 0.9986376021798365) {
			return "z";
		} else if (r < 0.9997595768552653) {
			return "y";
		} else if (r < 0.9999198589517551) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "p") {
		if (r < 0.33202025886325265) {
			return "e";
		} else if (r < 0.498030388294879) {
			return "i";
		} else if (r < 0.628868880135059) {
			return "r";
		} else if (r < 0.7535171637591446) {
			return "o";
		} else if (r < 0.8683173888576252) {
			return "l";
		} else if (r < 0.9352841868317389) {
			return "a";
		} else if (r < 0.9622960045019696) {
			return "y";
		} else if (r < 0.9873382104670794) {
			return "u";
		} else if (r < 0.9929656724817107) {
			return "h";
		} else if (r < 0.9952166572875633) {
			return "s";
		} else if (r < 0.9969048958919526) {
			return "p";
		} else if (r < 0.9980303882948789) {
			return "t";
		} else if (r < 0.998593134496342) {
			return "d";
		} else if (r < 0.9991558806978051) {
			return "m";
		} else if (r < 0.9997186268992683) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "p" && str[str.length-1] == "r") {
		if (r < 0.4404890570116185) {
			return "e";
		} else if (r < 0.8188327479059714) {
			return "o";
		} else if (r < 0.9221156444204269) {
			return "i";
		} else if (r < 0.9833153201837341) {
			return "a";
		} else if (r < 0.9968251823831397) {
			return "u";
		} else if (r < 0.9996622534450148) {
			return "y";
		} else if (r < 0.9997298027560119) {
			return "f";
		} else if (r < 0.9997973520670089) {
			return "l";
		} else if (r < 0.999864901378006) {
			return "n";
		} else if (r < 0.999932450689003) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "s") {
		if (r < 0.34164174144233966) {
			return "e";
		} else if (r < 0.534064473246926) {
			return "y";
		} else if (r < 0.7241608507809905) {
			return "i";
		} else if (r < 0.7916251246261218) {
			return "o";
		} else if (r < 0.8467929544699238) {
			return "t";
		} else if (r < 0.8989697573944834) {
			return "a";
		} else if (r < 0.9308740445330677) {
			return "u";
		} else if (r < 0.9617813226985712) {
			return "h";
		} else if (r < 0.9697573944832173) {
			return "p";
		} else if (r < 0.9757394483217019) {
			return "c";
		} else if (r < 0.9817215021601864) {
			return "w";
		} else if (r < 0.9863742107012299) {
			return "m";
		} else if (r < 0.9900299102691926) {
			return "k";
		} else if (r < 0.9936856098371554) {
			return "l";
		} else if (r < 0.9953472914589566) {
			return "f";
		} else if (r < 0.9970089730807579) {
			return "n";
		} else if (r < 0.9983383183781989) {
			return "s";
		} else if (r < 0.9990029910269194) {
			return "b";
		} else if (r < 0.9996676636756399) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "t") {
		if (r < 0.37375376767910967) {
			return "i";
		} else if (r < 0.5900765128680733) {
			return "e";
		} else if (r < 0.7674472524924647) {
			return "o";
		} else if (r < 0.8564804080686298) {
			return "a";
		} else if (r < 0.9153721307674473) {
			return "u";
		} else if (r < 0.9373985624855089) {
			return "r";
		} else if (r < 0.955715279387897) {
			return "y";
		} else if (r < 0.9717134245304891) {
			return "s";
		} else if (r < 0.9793647113378159) {
			return "l";
		} else if (r < 0.9865522837931834) {
			return "h";
		} else if (r < 0.9923487131926733) {
			return "n";
		} else if (r < 0.9946672849524693) {
			return "t";
		} else if (r < 0.9960584280083469) {
			return "c";
		} else if (r < 0.9972177138882449) {
			return "w";
		} else if (r < 0.9979132854161836) {
			return "f";
		} else if (r < 0.9986088569441224) {
			return "b";
		} else if (r < 0.9990725712960816) {
			return "m";
		} else if (r < 0.9993044284720612) {
			return "d";
		} else if (r < 0.9995362856480409) {
			return "k";
		} else if (r < 0.9997681428240205) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "u") {
		if (r < 0.26258897969944633) {
			return "l";
		} else if (r < 0.44529396256261533) {
			return "r";
		} else if (r < 0.5649881360400738) {
			return "n";
		} else if (r < 0.6809912997627208) {
			return "t";
		} else if (r < 0.7656208805694701) {
			return "s";
		} else if (r < 0.8114948589506986) {
			return "b";
		} else if (r < 0.8462958080674927) {
			return "p";
		} else if (r < 0.8755602425520695) {
			return "g";
		} else if (r < 0.903770102820986) {
			return "d";
		} else if (r < 0.9303981017664118) {
			return "m";
		} else if (r < 0.9491167940943844) {
			return "c";
		} else if (r < 0.9601898233588189) {
			return "e";
		} else if (r < 0.9696809912997627) {
			return "f";
		} else if (r < 0.9783812285789613) {
			return "k";
		} else if (r < 0.9865541787503296) {
			return "z";
		} else if (r < 0.9931452675982072) {
			return "i";
		} else if (r < 0.9955180595834432) {
			return "a";
		} else if (r < 0.997363564460849) {
			return "y";
		} else if (r < 0.9984181386765094) {
			return "j";
		} else if (r < 0.9989454257843396) {
			return "h";
		} else if (r < 0.9994727128921699) {
			return "q";
		} else if (r < 0.9997363564460849) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "v") {
		if (r < 0.3333333333333333) {
			return "i";
		} else if (r < 0.5) {
			return "t";
		} else if (r < 0.6666666666666666) {
			return "r";
		} else if (r < 0.8333333333333333) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "w") {
		if (r < 0.3279569892473118) {
			return "o";
		} else if (r < 0.5913978494623655) {
			return "a";
		} else if (r < 0.7473118279569891) {
			return "e";
		} else if (r < 0.8709677419354838) {
			return "i";
		} else if (r < 0.9623655913978494) {
			return "r";
		} else if (r < 0.9838709677419354) {
			return "h";
		} else if (r < 0.9892473118279569) {
			return "y";
		} else if (r < 0.9946236559139784) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "y") {
		if (r < 0.5350803043110736) {
			return "r";
		} else if (r < 0.6221470836855453) {
			return "l";
		} else if (r < 0.6999154691462385) {
			return "o";
		} else if (r < 0.764158918005072) {
			return "g";
		} else if (r < 0.8098055790363484) {
			return "c";
		} else if (r < 0.8554522400676249) {
			return "e";
		} else if (r < 0.8977176669484364) {
			return "t";
		} else if (r < 0.9273034657650044) {
			return "i";
		} else if (r < 0.9391377852916316) {
			return "a";
		} else if (r < 0.9501267962806426) {
			return "x";
		} else if (r < 0.9585798816568049) {
			return "h";
		} else if (r < 0.9653423499577347) {
			return "f";
		} else if (r < 0.9712595097210484) {
			return "b";
		} else if (r < 0.977176669484362) {
			return "k";
		} else if (r < 0.9814032121724432) {
			return "n";
		} else if (r < 0.9856297548605244) {
			return "d";
		} else if (r < 0.9898562975486056) {
			return "w";
		} else if (r < 0.9923922231614543) {
			return "u";
		} else if (r < 0.9949281487743029) {
			return "s";
		} else if (r < 0.9974640743871516) {
			return "j";
		} else if (r < 0.9983093829247678) {
			return "m";
		} else if (r < 0.999154691462384) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "p" && str[str.length-1] == "z") {
		return "i";
	} else if (str[str.length-2] == "q" && str[str.length-1] == "a") {
		if (r < 0.2631578947368421) {
			return "t";
		} else if (r < 0.42105263157894735) {
			return "i";
		} else if (r < 0.5789473684210527) {
			return "n";
		} else if (r < 0.6842105263157895) {
			return "b";
		} else if (r < 0.7894736842105263) {
			return "d";
		} else if (r < 0.8947368421052632) {
			return "s";
		} else if (r < 0.9473684210526316) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "e") {
		if (r < 0.4) {
			return "d";
		} else if (r < 0.8) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "f") {
		return "c";
	} else if (str[str.length-2] == "q" && str[str.length-1] == "g") {
		return "y";
	} else if (str[str.length-2] == "q" && str[str.length-1] == "i") {
		if (r < 0.29411764705882354) {
			return "n";
		} else if (r < 0.4117647058823529) {
			return "r";
		} else if (r < 0.5294117647058824) {
			return "a";
		} else if (r < 0.6470588235294118) {
			return "b";
		} else if (r < 0.7647058823529412) {
			return "v";
		} else if (r < 0.823529411764706) {
			return "l";
		} else if (r < 0.8823529411764707) {
			return "s";
		} else if (r < 0.9411764705882354) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "l") {
		return "i";
	} else if (str[str.length-2] == "q" && str[str.length-1] == "o") {
		if (r < 0.5) {
			return "p";
		} else if (r < 0.75) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "p") {
		return "t";
	} else if (str[str.length-2] == "q" && str[str.length-1] == "q") {
		if (r < 0.5) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "r") {
		if (r < 0.4) {
			return "s";
		} else if (r < 0.6000000000000001) {
			return "a";
		} else if (r < 0.8) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "s") {
		return "h";
	} else if (str[str.length-2] == "q" && str[str.length-1] == "t") {
		if (r < 0.14285714285714285) {
			return "i";
		} else if (r < 0.2857142857142857) {
			return "a";
		} else if (r < 0.42857142857142855) {
			return "d";
		} else if (r < 0.5714285714285714) {
			return "y";
		} else if (r < 0.7142857142857142) {
			return "o";
		} else if (r < 0.857142857142857) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "u") {
		if (r < 0.3839471855455177) {
			return "i";
		} else if (r < 0.6768589298123697) {
			return "a";
		} else if (r < 0.9558721334259903) {
			return "e";
		} else if (r < 0.9906184850590688) {
			return "o";
		} else if (r < 0.9953092425295345) {
			return "y";
		} else if (r < 0.9970465601111884) {
			return "u";
		} else if (r < 0.9980889506601808) {
			return "r";
		} else if (r < 0.998610145934677) {
			return "s";
		} else if (r < 0.9989576094510078) {
			return "h";
		} else if (r < 0.9993050729673385) {
			return "d";
		} else if (r < 0.9994788047255039) {
			return "v";
		} else if (r < 0.9996525364836693) {
			return "b";
		} else if (r < 0.9998262682418346) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "q" && str[str.length-1] == "w") {
		if (r < 0.5) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "a") {
		if (r < 0.17015048931200663) {
			return "t";
		} else if (r < 0.311474440469503) {
			return "n";
		} else if (r < 0.41187949028767407) {
			return "p";
		} else if (r < 0.5120775803447358) {
			return "c";
		} else if (r < 0.5976997900836709) {
			return "l";
		} else if (r < 0.6552346036720575) {
			return "m";
		} else if (r < 0.70336753097005) {
			return "d";
		} else if (r < 0.7501108713005943) {
			return "s";
		} else if (r < 0.796499423469237) {
			return "b";
		} else if (r < 0.8355852526387371) {
			return "i";
		} else if (r < 0.8730449693995211) {
			return "g";
		} else if (r < 0.8954853206398015) {
			return "v";
		} else if (r < 0.9100316352777698) {
			return "f";
		} else if (r < 0.9245188185554211) {
			return "r";
		} else if (r < 0.9366407474203946) {
			return "w";
		} else if (r < 0.9473435236377615) {
			return "y";
		} else if (r < 0.9580167341749699) {
			return "e";
		} else if (r < 0.9678029743074241) {
			return "u";
		} else if (r < 0.9749283032256159) {
			return "z";
		} else if (r < 0.9819058037430153) {
			return "h";
		} else if (r < 0.9881737279366114) {
			return "k";
		} else if (r < 0.9929929338024424) {
			return "x";
		} else if (r < 0.9957425420571803) {
			return "o";
		} else if (r < 0.9977530083079563) {
			return "j";
		} else if (r < 0.9990243325547706) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "b") {
		if (r < 0.22768005310321937) {
			return "o";
		} else if (r < 0.43611018918021904) {
			return "i";
		} else if (r < 0.6382343179555261) {
			return "a";
		} else if (r < 0.7786259541984734) {
			return "e";
		} else if (r < 0.8639230003318952) {
			return "u";
		} else if (r < 0.9193494855625622) {
			return "r";
		} else if (r < 0.9724527049452373) {
			return "l";
		} else if (r < 0.9850647195486226) {
			return "s";
		} else if (r < 0.9936939926983073) {
			return "y";
		} else if (r < 0.9960172585462993) {
			return "b";
		} else if (r < 0.9973448390308661) {
			return "w";
		} else if (r < 0.9980086292731496) {
			return "t";
		} else if (r < 0.9986724195154331) {
			return "m";
		} else if (r < 0.9990043146365748) {
			return "h";
		} else if (r < 0.9993362097577165) {
			return "k";
		} else if (r < 0.9996681048788583) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "c") {
		if (r < 0.32225332400279916) {
			return "h";
		} else if (r < 0.47375787263820857) {
			return "o";
		} else if (r < 0.6191392582225332) {
			return "u";
		} else if (r < 0.737928621413576) {
			return "e";
		} else if (r < 0.8296011196641008) {
			return "i";
		} else if (r < 0.9149755073477956) {
			return "a";
		} else if (r < 0.9445416375087473) {
			return "l";
		} else if (r < 0.9700839748075577) {
			return "r";
		} else if (r < 0.9861791462561231) {
			return "t";
		} else if (r < 0.9935269419174247) {
			return "y";
		} else if (r < 0.9959762071378586) {
			return "s";
		} else if (r < 0.9979006298110566) {
			return "k";
		} else if (r < 0.9986004198740378) {
			return "g";
		} else if (r < 0.9989503149055283) {
			return "c";
		} else if (r < 0.9991252624212736) {
			return "b";
		} else if (r < 0.999300209937019) {
			return "f";
		} else if (r < 0.9994751574527643) {
			return "n";
		} else if (r < 0.9996501049685096) {
			return "d";
		} else if (r < 0.9998250524842549) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "d") {
		if (r < 0.2958552782230364) {
			return "i";
		} else if (r < 0.4898099381726586) {
			return "e";
		} else if (r < 0.6136936111747195) {
			return "s";
		} else if (r < 0.7146782688344402) {
			return "a";
		} else if (r < 0.8016945271353333) {
			return "o";
		} else if (r < 0.8497824593542479) {
			return "l";
		} else if (r < 0.8832150217540647) {
			return "r";
		} else if (r < 0.9074879780169455) {
			return "u";
		} else if (r < 0.9239752690634305) {
			return "y";
		} else if (r < 0.9377146782688347) {
			return "m";
		} else if (r < 0.9493931760934282) {
			return "w";
		} else if (r < 0.9610716739180217) {
			return "n";
		} else if (r < 0.9700022899015345) {
			return "b";
		} else if (r < 0.9777879551179302) {
			return "h";
		} else if (r < 0.9853446301809025) {
			return "f";
		} else if (r < 0.9906114037096407) {
			return "c";
		} else if (r < 0.9933592855507216) {
			return "t";
		} else if (r < 0.9961071673918025) {
			return "p";
		} else if (r < 0.9977100984657663) {
			return "v";
		} else if (r < 0.9986260590794599) {
			return "g";
		} else if (r < 0.9993130295397301) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "e") {
		if (r < 0.154361509576681) {
			return "s";
		} else if (r < 0.2612043115325391) {
			return "d";
		} else if (r < 0.35267579760650514) {
			return "a";
		} else if (r < 0.43996001836993814) {
			return "c";
		} else if (r < 0.507847745630386) {
			return "t";
		} else if (r < 0.567117810735608) {
			return "n";
		} else if (r < 0.6199313828781371) {
			return "p";
		} else if (r < 0.6698273766107464) {
			return "e";
		} else if (r < 0.7123483804738364) {
			return "m";
		} else if (r < 0.7539779020450064) {
			return "l";
		} else if (r < 0.7872599076100171) {
			return "f";
		} else if (r < 0.8175703055352946) {
			return "r";
		} else if (r < 0.8463408704108923) {
			return "i";
		} else if (r < 0.8747872599076101) {
			return "g";
		} else if (r < 0.9017748601993679) {
			return "v";
		} else if (r < 0.9237377421184861) {
			return "b";
		} else if (r < 0.9448091417456844) {
			return "o";
		} else if (r < 0.9588837561120567) {
			return "w";
		} else if (r < 0.9726882243293622) {
			return "h";
		} else if (r < 0.9781721911554151) {
			return "x";
		} else if (r < 0.9836021287516546) {
			return "u";
		} else if (r < 0.9883567009752277) {
			return "q";
		} else if (r < 0.9928141124348273) {
			return "j";
		} else if (r < 0.996623173136667) {
			return "y";
		} else if (r < 0.9992165761677069) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "f") {
		if (r < 0.2078804347826087) {
			return "e";
		} else if (r < 0.375679347826087) {
			return "i";
		} else if (r < 0.5360054347826086) {
			return "u";
		} else if (r < 0.6610054347826086) {
			return "o";
		} else if (r < 0.7778532608695652) {
			return "a";
		} else if (r < 0.8933423913043478) {
			return "l";
		} else if (r < 0.9470108695652173) {
			return "r";
		} else if (r < 0.9626358695652173) {
			return "s";
		} else if (r < 0.9701086956521738) {
			return "b";
		} else if (r < 0.9762228260869564) {
			return "m";
		} else if (r < 0.9809782608695651) {
			return "f";
		} else if (r < 0.9850543478260868) {
			return "y";
		} else if (r < 0.9877717391304346) {
			return "p";
		} else if (r < 0.9904891304347824) {
			return "c";
		} else if (r < 0.9932065217391302) {
			return "h";
		} else if (r < 0.995244565217391) {
			return "d";
		} else if (r < 0.996603260869565) {
			return "n";
		} else if (r < 0.9979619565217389) {
			return "w";
		} else if (r < 0.9986413043478258) {
			return "v";
		} else if (r < 0.9993206521739127) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "g") {
		if (r < 0.277603513174404) {
			return "e";
		} else if (r < 0.49341279799247173) {
			return "i";
		} else if (r < 0.6907151819322459) {
			return "a";
		} else if (r < 0.7898368883312421) {
			return "o";
		} else if (r < 0.8450439146800501) {
			return "u";
		} else if (r < 0.8964868255959849) {
			return "r";
		} else if (r < 0.9325595984943538) {
			return "l";
		} else if (r < 0.966750313676286) {
			return "y";
		} else if (r < 0.9874529485570891) {
			return "h";
		} else if (r < 0.993099121706399) {
			return "s";
		} else if (r < 0.9952948557089084) {
			return "n";
		} else if (r < 0.9965495608531995) {
			return "g";
		} else if (r < 0.9974905897114178) {
			return "m";
		} else if (r < 0.9984316185696361) {
			return "w";
		} else if (r < 0.9990589711417817) {
			return "t";
		} else if (r < 0.9996863237139272) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "h") {
		if (r < 0.23984526112185686) {
			return "e";
		} else if (r < 0.4526112185686654) {
			return "a";
		} else if (r < 0.6547388781431335) {
			return "o";
		} else if (r < 0.8399419729206963) {
			return "i";
		} else if (r < 0.9627659574468085) {
			return "y";
		} else if (r < 0.9956479690522243) {
			return "u";
		} else if (r < 0.9975822050290135) {
			return "m";
		} else if (r < 0.9985493230174081) {
			return "s";
		} else if (r < 0.9990328820116053) {
			return "w";
		} else if (r < 0.9995164410058026) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "i") {
		if (r < 0.14591384405546715) {
			return "n";
		} else if (r < 0.27318708797453967) {
			return "c";
		} else if (r < 0.38991816321891337) {
			return "a";
		} else if (r < 0.48536599227097066) {
			return "s";
		} else if (r < 0.5647590361445783) {
			return "t";
		} else if (r < 0.6342350534212321) {
			return "e";
		} else if (r < 0.6846726528756536) {
			return "d";
		} else if (r < 0.7338031370766084) {
			return "o";
		} else if (r < 0.7725903614457832) {
			return "z";
		} else if (r < 0.8035348942941578) {
			return "m";
		} else if (r < 0.8337690384178222) {
			return "f";
		} else if (r < 0.8638895203455331) {
			return "g";
		} else if (r < 0.8936406001363947) {
			return "l";
		} else if (r < 0.9229654466924302) {
			return "p";
		} else if (r < 0.947005001136622) {
			return "b";
		} else if (r < 0.9653046146851557) {
			return "v";
		} else if (r < 0.981188906569675) {
			return "u";
		} else if (r < 0.9865594453284837) {
			return "x";
		} else if (r < 0.9905376221868606) {
			return "i";
		} else if (r < 0.9944021368492839) {
			return "k";
		} else if (r < 0.9959649920436463) {
			return "h";
		} else if (r < 0.9973573539440782) {
			return "r";
		} else if (r < 0.9984371448056376) {
			return "q";
		} else if (r < 0.9991759490793362) {
			return "j";
		} else if (r < 0.999659013412139) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "j") {
		if (r < 0.32967032967032966) {
			return "u";
		} else if (r < 0.6043956043956045) {
			return "a";
		} else if (r < 0.8406593406593408) {
			return "e";
		} else if (r < 0.9725274725274726) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "k") {
		if (r < 0.2805755395683453) {
			return "e";
		} else if (r < 0.49712230215827335) {
			return "i";
		} else if (r < 0.6798561151079137) {
			return "s";
		} else if (r < 0.7460431654676258) {
			return "a";
		} else if (r < 0.8093525179856115) {
			return "l";
		} else if (r < 0.8381294964028777) {
			return "m";
		} else if (r < 0.860431654676259) {
			return "y";
		} else if (r < 0.881294964028777) {
			return "o";
		} else if (r < 0.9014388489208633) {
			return "n";
		} else if (r < 0.920863309352518) {
			return "h";
		} else if (r < 0.9374100719424461) {
			return "w";
		} else if (r < 0.9503597122302159) {
			return "b";
		} else if (r < 0.960431654676259) {
			return "p";
		} else if (r < 0.9705035971223022) {
			return "f";
		} else if (r < 0.9776978417266187) {
			return "r";
		} else if (r < 0.9848920863309352) {
			return "u";
		} else if (r < 0.9899280575539567) {
			return "d";
		} else if (r < 0.9949640287769783) {
			return "t";
		} else if (r < 0.9971223021582732) {
			return "k";
		} else if (r < 0.9985611510791366) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "l") {
		if (r < 0.2998517420311342) {
			return "i";
		} else if (r < 0.5315048183839881) {
			return "e";
		} else if (r < 0.7008895478131949) {
			return "y";
		} else if (r < 0.8232023721275018) {
			return "a";
		} else if (r < 0.9173461823573017) {
			return "o";
		} else if (r < 0.9388435878428465) {
			return "d";
		} else if (r < 0.9603409933283913) {
			return "u";
		} else if (r < 0.9814677538917715) {
			return "s";
		} else if (r < 0.9851742031134172) {
			return "b";
		} else if (r < 0.9881393624907338) {
			return "w";
		} else if (r < 0.9907338769458858) {
			return "p";
		} else if (r < 0.9933283914010378) {
			return "f";
		} else if (r < 0.9955522609340252) {
			return "h";
		} else if (r < 0.9966641957005189) {
			return "c";
		} else if (r < 0.9977761304670126) {
			return "l";
		} else if (r < 0.9985174203113417) {
			return "k";
		} else if (r < 0.9992587101556708) {
			return "m";
		} else if (r < 0.9996293550778353) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "m") {
		if (r < 0.3129992737835875) {
			return "a";
		} else if (r < 0.5541031227305737) {
			return "i";
		} else if (r < 0.7238562091503268) {
			return "o";
		} else if (r < 0.8868917937545389) {
			return "e";
		} else if (r < 0.9219317356572259) {
			return "u";
		} else if (r < 0.9517066085693536) {
			return "s";
		} else if (r < 0.9664124909222948) {
			return "y";
		} else if (r < 0.9774872912127813) {
			return "l";
		} else if (r < 0.9814814814814814) {
			return "f";
		} else if (r < 0.9847494553376905) {
			return "h";
		} else if (r < 0.9876543209876543) {
			return "n";
		} else if (r < 0.9898329702251271) {
			return "b";
		} else if (r < 0.9920116194625999) {
			return "t";
		} else if (r < 0.99400871459695) {
			return "p";
		} else if (r < 0.9960058097313) {
			return "w";
		} else if (r < 0.9974582425562819) {
			return "c";
		} else if (r < 0.9983660130718955) {
			return "r";
		} else if (r < 0.9992737835875092) {
			return "m";
		} else if (r < 0.9998184458968774) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "n") {
		if (r < 0.2531076434805607) {
			return "i";
		} else if (r < 0.4916688706691351) {
			return "a";
		} else if (r < 0.7225601692673895) {
			return "e";
		} else if (r < 0.7897381645067442) {
			return "o";
		} else if (r < 0.8428987040465484) {
			return "s";
		} else if (r < 0.8809838667019306) {
			return "u";
		} else if (r < 0.9021422903993652) {
			return "m";
		} else if (r < 0.9182755884686591) {
			return "l";
		} else if (r < 0.9312351229833378) {
			return "f";
		} else if (r < 0.9428722560169268) {
			return "b";
		} else if (r < 0.9542449087542979) {
			return "t";
		} else if (r < 0.9629727585294896) {
			return "w";
		} else if (r < 0.9714361280084635) {
			return "y";
		} else if (r < 0.9775191748214759) {
			return "p";
		} else if (r < 0.9828087807458346) {
			return "n";
		} else if (r < 0.9880983866701932) {
			return "c";
		} else if (r < 0.9918011108172443) {
			return "h";
		} else if (r < 0.9947103940756415) {
			return "d";
		} else if (r < 0.9965617561491671) {
			return "g";
		} else if (r < 0.9981486379264747) {
			return "r";
		} else if (r < 0.9997355197037823) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "o") {
		if (r < 0.12049446974625895) {
			return "p";
		} else if (r < 0.21948601171112558) {
			return "u";
		} else if (r < 0.3121340273259597) {
			return "s";
		} else if (r < 0.4000650618087183) {
			return "n";
		} else if (r < 0.48454782042940797) {
			return "m";
		} else if (r < 0.5588158750813272) {
			return "t";
		} else if (r < 0.6293754066363044) {
			return "c";
		} else if (r < 0.6795380611581001) {
			return "l";
		} else if (r < 0.7260897852960312) {
			return "g";
		} else if (r < 0.7713402732595965) {
			return "o";
		} else if (r < 0.801398828887443) {
			return "d";
		} else if (r < 0.8298308392973324) {
			return "b";
		} else if (r < 0.8573194534808066) {
			return "w";
		} else if (r < 0.8826284970722185) {
			return "i";
		} else if (r < 0.9058555627846453) {
			return "a";
		} else if (r < 0.9271633051398828) {
			return "v";
		} else if (r < 0.9434612882238125) {
			return "f";
		} else if (r < 0.9572218607677292) {
			return "r";
		} else if (r < 0.9676968119713727) {
			return "e";
		} else if (r < 0.9757970071567988) {
			return "x";
		} else if (r < 0.9812947299934937) {
			return "k";
		} else if (r < 0.9867599219258294) {
			return "h";
		} else if (r < 0.9915744957709823) {
			return "y";
		} else if (r < 0.9961288223812621) {
			return "z";
		} else if (r < 0.9983083929733245) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "p") {
		if (r < 0.25088235294117645) {
			return "h";
		} else if (r < 0.41352941176470587) {
			return "o";
		} else if (r < 0.5485294117647059) {
			return "e";
		} else if (r < 0.67) {
			return "r";
		} else if (r < 0.7552941176470589) {
			return "i";
		} else if (r < 0.8388235294117647) {
			return "a";
		} else if (r < 0.9044117647058824) {
			return "l";
		} else if (r < 0.9523529411764706) {
			return "u";
		} else if (r < 0.9723529411764706) {
			return "s";
		} else if (r < 0.9902941176470589) {
			return "t";
		} else if (r < 0.9944117647058824) {
			return "y";
		} else if (r < 0.9964705882352942) {
			return "n";
		} else if (r < 0.9979411764705883) {
			return "m";
		} else if (r < 0.9991176470588237) {
			return "w";
		} else if (r < 0.9997058823529413) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "r" && str[str.length-1] == "r") {
		if (r < 0.2553602811950791) {
			return "e";
		} else if (r < 0.4780316344463972) {
			return "i";
		} else if (r < 0.6289982425307556) {
			return "a";
		} else if (r < 0.7611599297012301) {
			return "o";
		} else if (r < 0.8586994727592266) {
			return "h";
		} else if (r < 0.939543057996485) {
			return "y";
		} else if (r < 0.9927943760984181) {
			return "u";
		} else if (r < 0.9964850615114235) {
			return "s";
		} else if (r < 0.9973637961335676) {
			return "g";
		} else if (r < 0.9978910369068541) {
			return "n";
		} else if (r < 0.9982425307557118) {
			return "t";
		} else if (r < 0.9985940246045695) {
			return "b";
		} else if (r < 0.9989455184534272) {
			return "f";
		} else if (r < 0.9992970123022848) {
			return "w";
		} else if (r < 0.9994727592267136) {
			return "r";
		} else if (r < 0.9996485061511424) {
			return "k";
		} else if (r < 0.9998242530755712) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "s") {
		if (r < 0.23658491609810067) {
			return "e";
		} else if (r < 0.38281394062327123) {
			return "i";
		} else if (r < 0.5148441821869814) {
			return "h";
		} else if (r < 0.6282500460999446) {
			return "t";
		} else if (r < 0.7252443297068043) {
			return "o";
		} else if (r < 0.8172598192882168) {
			return "a";
		} else if (r < 0.8720265535681356) {
			return "u";
		} else if (r < 0.9164669002397197) {
			return "p";
		} else if (r < 0.9400700719159136) {
			return "c";
		} else if (r < 0.9544532546560943) {
			return "l";
		} else if (r < 0.9649640420431495) {
			return "w";
		} else if (r < 0.9749216300940438) {
			return "m";
		} else if (r < 0.9828508205790152) {
			return "y";
		} else if (r < 0.9898580121703853) {
			return "k";
		} else if (r < 0.9937304075235108) {
			return "n";
		} else if (r < 0.9961276046468743) {
			return "q";
		} else if (r < 0.9974184030979162) {
			return "s";
		} else if (r < 0.9983404019915175) {
			return "d";
		} else if (r < 0.9992624008851189) {
			return "b";
		} else if (r < 0.9998156002212797) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "t") {
		if (r < 0.2711752249867655) {
			return "i";
		} else if (r < 0.4503705664372684) {
			return "e";
		} else if (r < 0.6249338274219164) {
			return "h";
		} else if (r < 0.7216781365802012) {
			return "a";
		} else if (r < 0.7735574377977766) {
			return "u";
		} else if (r < 0.8178930651138169) {
			return "o";
		} else if (r < 0.8601111699311805) {
			return "s";
		} else if (r < 0.8970354685018529) {
			return "r";
		} else if (r < 0.9248279512969826) {
			return "l";
		} else if (r < 0.9461355214399153) {
			return "y";
		} else if (r < 0.9591053467443091) {
			return "m";
		} else if (r < 0.967443091582848) {
			return "n";
		} else if (r < 0.9752514557967178) {
			return "w";
		} else if (r < 0.9813393329804129) {
			return "f";
		} else if (r < 0.9858390682901005) {
			return "g";
		} else if (r < 0.9903388035997881) {
			return "z";
		} else if (r < 0.9943091582848066) {
			return "b";
		} else if (r < 0.9974854420328214) {
			return "c";
		} else if (r < 0.9982795129698251) {
			return "t";
		} else if (r < 0.9988088935944942) {
			return "p";
		} else if (r < 0.9993382742191633) {
			return "d";
		} else if (r < 0.9997353096876652) {
			return "v";
		} else if (r < 0.9998676548438326) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "u") {
		if (r < 0.20752831445702866) {
			return "s";
		} else if (r < 0.34293804130579614) {
			return "m";
		} else if (r < 0.4447035309793471) {
			return "c";
		} else if (r < 0.533311125916056) {
			return "n";
		} else if (r < 0.5972684876748835) {
			return "p";
		} else if (r < 0.6563957361758829) {
			return "l";
		} else if (r < 0.7126915389740175) {
			return "t";
		} else if (r < 0.7679880079946704) {
			return "b";
		} else if (r < 0.8207861425716191) {
			return "d";
		} else if (r < 0.8619253830779482) {
			return "i";
		} else if (r < 0.8937375083277816) {
			return "g";
		} else if (r < 0.9223850766155898) {
			return "e";
		} else if (r < 0.9468687541638909) {
			return "r";
		} else if (r < 0.9663557628247836) {
			return "f";
		} else if (r < 0.9801798800799468) {
			return "a";
		} else if (r < 0.9846768820786144) {
			return "k";
		} else if (r < 0.9890073284477017) {
			return "o";
		} else if (r < 0.9918387741505664) {
			return "v";
		} else if (r < 0.9941705529646904) {
			return "x";
		} else if (r < 0.996335776149234) {
			return "z";
		} else if (r < 0.9975016655562959) {
			return "j";
		} else if (r < 0.9981678880746171) {
			return "y";
		} else if (r < 0.9986675549633579) {
			return "u";
		} else if (r < 0.9991672218520987) {
			return "q";
		} else if (r < 0.9996668887408395) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "v") {
		if (r < 0.3387565368971528) {
			return "e";
		} else if (r < 0.6461359674607786) {
			return "i";
		} else if (r < 0.8994770482277745) {
			return "a";
		} else if (r < 0.9726902963393376) {
			return "o";
		} else if (r < 0.990122022080186) {
			return "u";
		} else if (r < 0.9976757699012202) {
			return "y";
		} else if (r < 0.9988378849506101) {
			return "l";
		} else if (r < 0.999418942475305) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "w") {
		if (r < 0.29810901001112344) {
			return "o";
		} else if (r < 0.5561735261401557) {
			return "a";
		} else if (r < 0.7296996662958843) {
			return "i";
		} else if (r < 0.8921023359288098) {
			return "e";
		} else if (r < 0.9443826473859844) {
			return "h";
		} else if (r < 0.9877641824249166) {
			return "r";
		} else if (r < 0.9911012235817576) {
			return "u";
		} else if (r < 0.9933259176863182) {
			return "d";
		} else if (r < 0.9955506117908788) {
			return "t";
		} else if (r < 0.9977753058954394) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "x") {
		if (r < 0.8571428571428571) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "y") {
		if (r < 0.14196395733725634) {
			return "s";
		} else if (r < 0.27694005148951817) {
			return "o";
		} else if (r < 0.41044501655020227) {
			return "p";
		} else if (r < 0.5200441338727473) {
			return "n";
		} else if (r < 0.6002206693637366) {
			return "t";
		} else if (r < 0.6763515998528871) {
			return "l";
		} else if (r < 0.7340934166973152) {
			return "m";
		} else if (r < 0.7885251930856932) {
			return "i";
		} else if (r < 0.8425891872011769) {
			return "g";
		} else if (r < 0.8826774549466716) {
			return "a";
		} else if (r < 0.9117322545053329) {
			return "c";
		} else if (r < 0.9290180213313719) {
			return "e";
		} else if (r < 0.9444648767929387) {
			return "b";
		} else if (r < 0.9580728208900332) {
			return "w";
		} else if (r < 0.969474071349761) {
			return "d";
		} else if (r < 0.9760941522618611) {
			return "x";
		} else if (r < 0.9823464509010668) {
			return "f";
		} else if (r < 0.9871276204486945) {
			return "z";
		} else if (r < 0.9911732254505334) {
			return "u";
		} else if (r < 0.9952188304523724) {
			return "h";
		} else if (r < 0.9977933063626335) {
			return "k";
		} else if (r < 0.9996322177271058) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "r" && str[str.length-1] == "z") {
		if (r < 0.35454545454545455) {
			return "e";
		} else if (r < 0.6) {
			return "a";
		} else if (r < 0.7818181818181817) {
			return "i";
		} else if (r < 0.909090909090909) {
			return "o";
		} else if (r < 0.9363636363636362) {
			return "u";
		} else if (r < 0.9636363636363634) {
			return "y";
		} else if (r < 0.9818181818181816) {
			return "b";
		} else if (r < 0.9909090909090906) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "a") {
		if (r < 0.16774265360641138) {
			return "l";
		} else if (r < 0.29908726625111304) {
			return "t";
		} else if (r < 0.4265360641139804) {
			return "n";
		} else if (r < 0.5185886019590382) {
			return "r";
		} else if (r < 0.5961709706144256) {
			return "b";
		} else if (r < 0.6627337488869101) {
			return "c";
		} else if (r < 0.7113757791629564) {
			return "u";
		} else if (r < 0.7478851291184327) {
			return "p";
		} else if (r < 0.7841718610863757) {
			return "m";
		} else if (r < 0.8175645592163846) {
			return "i";
		} else if (r < 0.8509572573463935) {
			return "g";
		} else if (r < 0.881901157613535) {
			return "d";
		} else if (r < 0.9047195013357078) {
			return "v";
		} else if (r < 0.9234194122885128) {
			return "s";
		} else if (r < 0.9402270703472839) {
			return "w";
		} else if (r < 0.9556990204808548) {
			return "f";
		} else if (r < 0.9695013357079251) {
			return "y";
		} else if (r < 0.9771816562778272) {
			return "k";
		} else if (r < 0.9838601959038289) {
			return "x";
		} else if (r < 0.9903161175422973) {
			return "e";
		} else if (r < 0.995213713268032) {
			return "h";
		} else if (r < 0.9969946571682992) {
			return "z";
		} else if (r < 0.9978851291184327) {
			return "a";
		} else if (r < 0.9986642920747997) {
			return "q";
		} else if (r < 0.9993321460373998) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "b") {
		if (r < 0.2286902286902287) {
			return "e";
		} else if (r < 0.44282744282744285) {
			return "a";
		} else if (r < 0.6029106029106029) {
			return "o";
		} else if (r < 0.7422037422037422) {
			return "u";
		} else if (r < 0.8607068607068606) {
			return "y";
		} else if (r < 0.9417879417879418) {
			return "i";
		} else if (r < 0.9854469854469854) {
			return "r";
		} else if (r < 0.9979209979209979) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "c") {
		if (r < 0.23203371970495257) {
			return "o";
		} else if (r < 0.37534246575342467) {
			return "a";
		} else if (r < 0.5185458377239199) {
			return "r";
		} else if (r < 0.6436248682824025) {
			return "e";
		} else if (r < 0.7608008429926238) {
			return "h";
		} else if (r < 0.8675447839831402) {
			return "i";
		} else if (r < 0.9571127502634352) {
			return "u";
		} else if (r < 0.9897787144362488) {
			return "l";
		} else if (r < 0.9987355110642783) {
			return "y";
		} else if (r < 0.9991570073761855) {
			return "s";
		} else if (r < 0.9994731296101159) {
			return "f";
		} else if (r < 0.9996838777660696) {
			return "t";
		} else if (r < 0.9997892518440464) {
			return "m";
		} else if (r < 0.9998946259220233) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "d") {
		if (r < 0.2885375494071146) {
			return "e";
		} else if (r < 0.4861660079051383) {
			return "i";
		} else if (r < 0.6758893280632411) {
			return "o";
		} else if (r < 0.8458498023715415) {
			return "a";
		} else if (r < 0.9328063241106719) {
			return "r";
		} else if (r < 0.9762845849802371) {
			return "u";
		} else if (r < 0.9881422924901185) {
			return "y";
		} else if (r < 0.992094861660079) {
			return "n";
		} else if (r < 0.9960474308300394) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "e") {
		if (r < 0.14477778430106264) {
			return "s";
		} else if (r < 0.27605236893089885) {
			return "r";
		} else if (r < 0.3998708389596665) {
			return "m";
		} else if (r < 0.5124757823049375) {
			return "d";
		} else if (r < 0.6065285034932191) {
			return "n";
		} else if (r < 0.6725180531908648) {
			return "l";
		} else if (r < 0.7257089179827394) {
			return "u";
		} else if (r < 0.7746139846180943) {
			return "c";
		} else if (r < 0.8080784359772206) {
			return "a";
		} else if (r < 0.8402512769330123) {
			return "p";
		} else if (r < 0.8723654083250161) {
			return "t";
		} else if (r < 0.8979627781365583) {
			return "e";
		} else if (r < 0.9156930664005165) {
			return "x";
		} else if (r < 0.9322491633887159) {
			return "i";
		} else if (r < 0.942053660541302) {
			return "q";
		} else if (r < 0.9515059003111606) {
			return "w";
		} else if (r < 0.9601362061879879) {
			return "v";
		} else if (r < 0.9681794164269358) {
			return "g";
		} else if (r < 0.9758703692831561) {
			return "b";
		} else if (r < 0.9825632595549814) {
			return "f";
		} else if (r < 0.987964539423472) {
			return "y";
		} else if (r < 0.9931309810368107) {
			return "o";
		} else if (r < 0.9974167791933305) {
			return "h";
		} else if (r < 0.998943227851817) {
			return "k";
		} else if (r < 0.9998825808724241) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "f") {
		if (r < 0.2125) {
			return "u";
		} else if (r < 0.4041666666666667) {
			return "i";
		} else if (r < 0.5854166666666667) {
			return "o";
		} else if (r < 0.7354166666666667) {
			return "e";
		} else if (r < 0.8645833333333334) {
			return "a";
		} else if (r < 0.925) {
			return "r";
		} else if (r < 0.96875) {
			return "y";
		} else if (r < 0.99375) {
			return "l";
		} else if (r < 0.9958333333333333) {
			return "m";
		} else if (r < 0.9979166666666667) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "g") {
		if (r < 0.31800766283524906) {
			return "r";
		} else if (r < 0.5593869731800767) {
			return "u";
		} else if (r < 0.6704980842911878) {
			return "a";
		} else if (r < 0.7739463601532568) {
			return "o";
		} else if (r < 0.8735632183908046) {
			return "i";
		} else if (r < 0.9540229885057472) {
			return "e";
		} else if (r < 0.9693486590038315) {
			return "l";
		} else if (r < 0.9808429118773947) {
			return "n";
		} else if (r < 0.9885057471264368) {
			return "d";
		} else if (r < 0.9923371647509579) {
			return "m";
		} else if (r < 0.996168582375479) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "h") {
		if (r < 0.2808280828082808) {
			return "i";
		} else if (r < 0.4975247524752475) {
			return "e";
		} else if (r < 0.655940594059406) {
			return "a";
		} else if (r < 0.7693519351935194) {
			return "o";
		} else if (r < 0.8152565256525653) {
			return "l";
		} else if (r < 0.8566606660666067) {
			return "n";
		} else if (r < 0.8940144014401441) {
			return "r";
		} else if (r < 0.9193294329432944) {
			return "m";
		} else if (r < 0.9413816381638165) {
			return "u";
		} else if (r < 0.9526327632763277) {
			return "y";
		} else if (r < 0.9610711071107112) {
			return "w";
		} else if (r < 0.9693969396939696) {
			return "b";
		} else if (r < 0.9763726372637266) {
			return "t";
		} else if (r < 0.9819981998199823) {
			return "f";
		} else if (r < 0.9869486948694872) {
			return "p";
		} else if (r < 0.9898739873987401) {
			return "k";
		} else if (r < 0.9922367236723675) {
			return "c";
		} else if (r < 0.9944869486948698) {
			return "h";
		} else if (r < 0.9966246624662469) {
			return "g";
		} else if (r < 0.9977497749774981) {
			return "s";
		} else if (r < 0.9988748874887492) {
			return "d";
		} else if (r < 0.999662466246625) {
			return "v";
		} else if (r < 0.9998874887488752) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "i") {
		if (r < 0.16175569542694815) {
			return "s";
		} else if (r < 0.3160474572494848) {
			return "n";
		} else if (r < 0.41825878683228435) {
			return "o";
		} else if (r < 0.5136188937781987) {
			return "t";
		} else if (r < 0.5831894390909598) {
			return "a";
		} else if (r < 0.6426224029410127) {
			return "v";
		} else if (r < 0.6958725561187545) {
			return "l";
		} else if (r < 0.7486214003230658) {
			return "c";
		} else if (r < 0.8008132345568986) {
			return "d";
		} else if (r < 0.8395254275051524) {
			return "b";
		} else if (r < 0.8760652815685401) {
			return "g";
		} else if (r < 0.9088174678326743) {
			return "m";
		} else if (r < 0.9349969364451625) {
			return "e";
		} else if (r < 0.9539352754414305) {
			return "f";
		} else if (r < 0.9701999665794019) {
			return "p";
		} else if (r < 0.98033754804211) {
			return "r";
		} else if (r < 0.9904194285077704) {
			return "z";
		} else if (r < 0.9935386843424499) {
			return "u";
		} else if (r < 0.9961009302066508) {
			return "x";
		} else if (r < 0.9978833621121819) {
			return "k";
		} else if (r < 0.9989973820531388) {
			return "i";
		} else if (r < 0.9993315880354259) {
			return "h";
		} else if (r < 0.9996100930206651) {
			return "w";
		} else if (r < 0.9998328970088565) {
			return "q";
		} else if (r < 0.9999442990029521) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "j") {
		if (r < 0.38028169014084506) {
			return "u";
		} else if (r < 0.732394366197183) {
			return "o";
		} else if (r < 0.8591549295774648) {
			return "e";
		} else if (r < 0.9436619718309859) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "k") {
		if (r < 0.3856554967666079) {
			return "i";
		} else if (r < 0.6690182245737801) {
			return "e";
		} else if (r < 0.7530864197530864) {
			return "a";
		} else if (r < 0.8353909465020576) {
			return "y";
		} else if (r < 0.8712522045855379) {
			return "u";
		} else if (r < 0.903586125808348) {
			return "o";
		} else if (r < 0.934156378600823) {
			return "s";
		} else if (r < 0.9529688418577307) {
			return "l";
		} else if (r < 0.9682539682539681) {
			return "r";
		} else if (r < 0.9758965314520869) {
			return "n";
		} else if (r < 0.9811875367430922) {
			return "m";
		} else if (r < 0.9858906525573191) {
			return "w";
		} else if (r < 0.9900058788947677) {
			return "f";
		} else if (r < 0.9935332157554378) {
			return "t";
		} else if (r < 0.9964726631393297) {
			return "h";
		} else if (r < 0.9976484420928864) {
			return "b";
		} else if (r < 0.9988242210464431) {
			return "j";
		} else if (r < 0.9994121105232214) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "l") {
		if (r < 0.4247598719316969) {
			return "y";
		} else if (r < 0.5867129135538954) {
			return "a";
		} else if (r < 0.7337246531483458) {
			return "i";
		} else if (r < 0.8495197438633938) {
			return "e";
		} else if (r < 0.937299893276414) {
			return "o";
		} else if (r < 0.9978655282817502) {
			return "u";
		} else if (r < 0.9986659551760939) {
			return "l";
		} else if (r < 0.9991995731056563) {
			return "t";
		} else if (r < 0.9994663820704376) {
			return "f";
		} else if (r < 0.9997331910352188) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "m") {
		if (r < 0.30706179066834804) {
			return "a";
		} else if (r < 0.5201765447667087) {
			return "o";
		} else if (r < 0.705233291298865) {
			return "i";
		} else if (r < 0.8379571248423707) {
			return "e";
		} else if (r < 0.9281210592686002) {
			return "s";
		} else if (r < 0.9911727616645649) {
			return "u";
		} else if (r < 0.9959016393442622) {
			return "y";
		} else if (r < 0.9971626733921816) {
			return "r";
		} else if (r < 0.9977931904161412) {
			return "h";
		} else if (r < 0.9984237074401009) {
			return "p";
		} else if (r < 0.9990542244640606) {
			return "l";
		} else if (r < 0.9993694829760403) {
			return "n";
		} else if (r < 0.9996847414880201) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "n") {
		if (r < 0.643498633346349) {
			return "e";
		} else if (r < 0.7676688793440062) {
			return "a";
		} else if (r < 0.8797344787192503) {
			return "o";
		} else if (r < 0.9554861382272549) {
			return "i";
		} else if (r < 0.9949238578680203) {
			return "u";
		} else if (r < 0.9976571651698555) {
			return "y";
		} else if (r < 0.9996095275283092) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "o") {
		if (r < 0.14692325420603825) {
			return "l";
		} else if (r < 0.2932703387877391) {
			return "n";
		} else if (r < 0.4340861949758009) {
			return "m";
		} else if (r < 0.5656833371744642) {
			return "r";
		} else if (r < 0.6513021433510026) {
			return "p";
		} else if (r < 0.7272412998386726) {
			return "c";
		} else if (r < 0.7748329108089422) {
			return "u";
		} else if (r < 0.8074441115464394) {
			return "t";
		} else if (r < 0.8330260428670201) {
			return "d";
		} else if (r < 0.8561880617653838) {
			return "s";
		} else if (r < 0.87877391103941) {
			return "g";
		} else if (r < 0.8966351693938696) {
			return "b";
		} else if (r < 0.9144964277483291) {
			return "i";
		} else if (r < 0.9322424521779211) {
			return "a";
		} else if (r < 0.948029499884766) {
			return "o";
		} else if (r < 0.9579396174233694) {
			return "f";
		} else if (r < 0.9671583314127679) {
			return "v";
		} else if (r < 0.9749942383037565) {
			return "w";
		} else if (r < 0.9814473380963354) {
			return "e";
		} else if (r < 0.9861719290159021) {
			return "x";
		} else if (r < 0.9898594146116615) {
			return "h";
		} else if (r < 0.993316432357686) {
			return "k";
		} else if (r < 0.9958515787047706) {
			return "z";
		} else if (r < 0.9979257893523853) {
			return "y";
		} else if (r < 0.9996542982253975) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "p") {
		if (r < 0.23389471204805087) {
			return "e";
		} else if (r < 0.41879637262984337) {
			return "i";
		} else if (r < 0.5906253680367448) {
			return "o";
		} else if (r < 0.7179366387940173) {
			return "a";
		} else if (r < 0.8224001884348134) {
			return "h";
		} else if (r < 0.891178895300907) {
			return "r";
		} else if (r < 0.9577199387586858) {
			return "l";
		} else if (r < 0.9899894005417502) {
			return "u";
		} else if (r < 0.9943469556000473) {
			return "y";
		} else if (r < 0.9968201625250267) {
			return "s";
		} else if (r < 0.9984689671416797) {
			return "n";
		} else if (r < 0.9990578259333414) {
			return "b";
		} else if (r < 0.999293369450006) {
			return "t";
		} else if (r < 0.9995289129666707) {
			return "f";
		} else if (r < 0.9997644564833353) {
			return "g";
		} else if (r < 0.9998822282416677) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "q") {
		if (r < 0.9970559371933267) {
			return "u";
		} else if (r < 0.9980372914622179) {
			return "d";
		} else if (r < 0.999018645731109) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "r") {
		if (r < 0.4368231046931408) {
			return "e";
		} else if (r < 0.6137184115523465) {
			return "a";
		} else if (r < 0.7761732851985559) {
			return "o";
		} else if (r < 0.9097472924187725) {
			return "u";
		} else if (r < 0.9675090252707581) {
			return "i";
		} else if (r < 0.9927797833935018) {
			return "h";
		} else if (r < 0.996389891696751) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "s") {
		if (r < 0.31164301178734666) {
			return "i";
		} else if (r < 0.5714457541496272) {
			return "e";
		} else if (r < 0.6821024777483763) {
			return "a";
		} else if (r < 0.7790473899446717) {
			return "o";
		} else if (r < 0.8314890546066875) {
			return "u";
		} else if (r < 0.8751503488092375) {
			return "n";
		} else if (r < 0.9165263411113784) {
			return "l";
		} else if (r < 0.9333654077459707) {
			return "y";
		} else if (r < 0.9446716382006255) {
			return "m";
		} else if (r < 0.9535722877074814) {
			return "h";
		} else if (r < 0.9621121000721674) {
			return "w";
		} else if (r < 0.9694491219629541) {
			return "b";
		} else if (r < 0.9765455857589608) {
			return "t";
		} else if (r < 0.9834014914601876) {
			return "f";
		} else if (r < 0.9902573971614145) {
			return "p";
		} else if (r < 0.9941063266778927) {
			return "c";
		} else if (r < 0.9966321866730815) {
			return "r";
		} else if (r < 0.997834977146981) {
			return "d";
		} else if (r < 0.9987972095261005) {
			return "s";
		} else if (r < 0.9992783257156603) {
			return "k";
		} else if (r < 0.9996391628578302) {
			return "g";
		} else if (r < 0.9997594419052201) {
			return "j";
		} else if (r < 0.9998797209526101) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "t") {
		if (r < 0.2183436504157357) {
			return "i";
		} else if (r < 0.40635874143804257) {
			return "e";
		} else if (r < 0.5769385736786199) {
			return "r";
		} else if (r < 0.7188015091022307) {
			return "a";
		} else if (r < 0.8375883667264936) {
			return "o";
		} else if (r < 0.8760851250869932) {
			return "s";
		} else if (r < 0.9067067140397789) {
			return "u";
		} else if (r < 0.9285740449067801) {
			return "y";
		} else if (r < 0.9503314896890225) {
			return "h";
		} else if (r < 0.9675469763012345) {
			return "l";
		} else if (r < 0.9741401413867625) {
			return "m";
		} else if (r < 0.979597816929783) {
			return "f";
		} else if (r < 0.9833339438115822) {
			return "p";
		} else if (r < 0.9869968133035423) {
			return "c";
		} else if (r < 0.9903666532361455) {
			return "n";
		} else if (r < 0.9933702062195526) {
			return "w";
		} else if (r < 0.9955679279147286) {
			return "b";
		} else if (r < 0.996996447016593) {
			return "d";
		} else if (r < 0.9979854217794222) {
			return "t";
		} else if (r < 0.998827881762573) {
			return "g";
		} else if (r < 0.9996337130508042) {
			return "v";
		} else if (r < 0.999743599135563) {
			return "j";
		} else if (r < 0.9998534852203218) {
			return "z";
		} else if (r < 0.999926742610161) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "u") {
		if (r < 0.2951135051943055) {
			return "b";
		} else if (r < 0.51673720661793) {
			return "p";
		} else if (r < 0.6377452866487111) {
			return "r";
		} else if (r < 0.7446133128126203) {
			return "l";
		} else if (r < 0.790111581377453) {
			return "m";
		} else if (r < 0.8289726818006927) {
			return "s";
		} else if (r < 0.8611004232397077) {
			return "c";
		} else if (r < 0.8902462485571375) {
			return "a";
		} else if (r < 0.9185263562908813) {
			return "n";
		} else if (r < 0.9363216621777609) {
			return "f";
		} else if (r < 0.9529626779530591) {
			return "i";
		} else if (r < 0.9661408233936132) {
			return "g";
		} else if (r < 0.9752789534436325) {
			return "e";
		} else if (r < 0.9833589842247021) {
			return "d";
		} else if (r < 0.9906694882647176) {
			return "t";
		} else if (r < 0.9942285494420935) {
			return "o";
		} else if (r < 0.9962485571373609) {
			return "k";
		} else if (r < 0.9974990380915741) {
			return "z";
		} else if (r < 0.998460946517892) {
			return "v";
		} else if (r < 0.9988457098884191) {
			return "u";
		} else if (r < 0.9992304732589463) {
			return "w";
		} else if (r < 0.9994228549442099) {
			return "y";
		} else if (r < 0.9996152366294735) {
			return "h";
		} else if (r < 0.9998076183147371) {
			return "q";
		} else if (r < 0.9999038091573689) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "v") {
		if (r < 0.484375) {
			return "e";
		} else if (r < 0.7890625) {
			return "a";
		} else if (r < 0.8828125) {
			return "i";
		} else if (r < 0.953125) {
			return "o";
		} else if (r < 0.96875) {
			return "c";
		} else if (r < 0.9765625) {
			return "u";
		} else if (r < 0.984375) {
			return "r";
		} else if (r < 0.9921875) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "w") {
		if (r < 0.2942430703624733) {
			return "a";
		} else if (r < 0.5557924662402274) {
			return "e";
		} else if (r < 0.7924662402274342) {
			return "i";
		} else if (r < 0.9808102345415777) {
			return "o";
		} else if (r < 0.9914712153518123) {
			return "r";
		} else if (r < 0.997867803837953) {
			return "u";
		} else if (r < 0.9992892679459843) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "y") {
		if (r < 0.3333333333333333) {
			return "n";
		} else if (r < 0.5281285878300803) {
			return "c";
		} else if (r < 0.6988136241867584) {
			return "m";
		} else if (r < 0.8163030998851893) {
			return "l";
		} else if (r < 0.8706467661691542) {
			return "s";
		} else if (r < 0.9043245311902027) {
			return "r";
		} else if (r < 0.9368541905855338) {
			return "p";
		} else if (r < 0.947569843092231) {
			return "b";
		} else if (r < 0.9567546880979716) {
			return "i";
		} else if (r < 0.9621125143513203) {
			return "d";
		} else if (r < 0.9667049368541906) {
			return "t";
		} else if (r < 0.9712973593570609) {
			return "w";
		} else if (r < 0.9758897818599311) {
			return "a";
		} else if (r < 0.9800995024875622) {
			return "e";
		} else if (r < 0.983926521239954) {
			return "f";
		} else if (r < 0.9877535399923459) {
			return "u";
		} else if (r < 0.9911978568694987) {
			return "z";
		} else if (r < 0.9946421737466514) {
			return "o";
		} else if (r < 0.9965556831228474) {
			return "h";
		} else if (r < 0.9984691924990433) {
			return "k";
		} else if (r < 0.9996172981247609) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "s" && str[str.length-1] == "z") {
		if (r < 0.3125) {
			return "o";
		} else if (r < 0.5) {
			return "t";
		} else if (r < 0.6875) {
			return "e";
		} else if (r < 0.75) {
			return "i";
		} else if (r < 0.8125) {
			return "k";
		} else if (r < 0.875) {
			return "y";
		} else if (r < 0.9375) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "a") {
		if (r < 0.16728173499823062) {
			return "l";
		} else if (r < 0.3212678833223801) {
			return "t";
		} else if (r < 0.44724735857641174) {
			return "n";
		} else if (r < 0.5527526414235884) {
			return "r";
		} else if (r < 0.6572468530407968) {
			return "b";
		} else if (r < 0.7093170213841565) {
			return "c";
		} else if (r < 0.7576462261766341) {
			return "i";
		} else if (r < 0.8008189676962741) {
			return "s";
		} else if (r < 0.8379758353976037) {
			return "g";
		} else if (r < 0.8736666498154794) {
			return "m";
		} else if (r < 0.9045548758910064) {
			return "p";
		} else if (r < 0.9204792477630047) {
			return "x";
		} else if (r < 0.9347859056670541) {
			return "u";
		} else if (r < 0.9471209746726655) {
			return "k";
		} else if (r < 0.9585460795713057) {
			return "e";
		} else if (r < 0.9688590061169808) {
			return "d";
		} else if (r < 0.9752287548657802) {
			return "v";
		} else if (r < 0.9813962893685859) {
			return "h";
		} else if (r < 0.9872605025024012) {
			return "f";
		} else if (r < 0.991961983721753) {
			return "w";
		} else if (r < 0.9963601435721144) {
			return "y";
		} else if (r < 0.9975228754865778) {
			return "z";
		} else if (r < 0.9985845002780444) {
			return "o";
		} else if (r < 0.9990900358930285) {
			return "a";
		} else if (r < 0.9995955715080126) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "b") {
		if (r < 0.23134328358208955) {
			return "a";
		} else if (r < 0.44402985074626866) {
			return "o";
		} else if (r < 0.6119402985074627) {
			return "r";
		} else if (r < 0.7145522388059702) {
			return "u";
		} else if (r < 0.8171641791044777) {
			return "e";
		} else if (r < 0.9085820895522388) {
			return "l";
		} else if (r < 0.9832089552238806) {
			return "i";
		} else if (r < 0.9888059701492538) {
			return "y";
		} else if (r < 0.9944029850746269) {
			return "s";
		} else if (r < 0.9981343283582089) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "c") {
		if (r < 0.8133107727016357) {
			return "h";
		} else if (r < 0.8629441624365483) {
			return "a";
		} else if (r < 0.9063733784545968) {
			return "o";
		} else if (r < 0.9368302312464749) {
			return "r";
		} else if (r < 0.9588268471517203) {
			return "l";
		} else if (r < 0.972927241962775) {
			return "u";
		} else if (r < 0.98195149464185) {
			return "y";
		} else if (r < 0.9904117315284828) {
			return "i";
		} else if (r < 0.9983079526226735) {
			return "e";
		} else if (r < 0.9994359842075579) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "d") {
		if (r < 0.3888888888888889) {
			return "o";
		} else if (r < 0.6111111111111112) {
			return "r";
		} else if (r < 0.75) {
			return "a";
		} else if (r < 0.8777777777777778) {
			return "i";
		} else if (r < 0.95) {
			return "e";
		} else if (r < 0.9722222222222222) {
			return "w";
		} else if (r < 0.9833333333333333) {
			return "y";
		} else if (r < 0.9944444444444444) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "e") {
		if (r < 0.41474297953355543) {
			return "r";
		} else if (r < 0.5928129462160876) {
			return "d";
		} else if (r < 0.6851796763445979) {
			return "n";
		} else if (r < 0.7668669681104237) {
			return "s";
		} else if (r < 0.8241313660161829) {
			return "l";
		} else if (r < 0.8543848167539267) {
			return "m";
		} else if (r < 0.8778855306996669) {
			return "a";
		} else if (r < 0.8997798667301286) {
			return "e";
		} else if (r < 0.9189671584959543) {
			return "t";
		} else if (r < 0.9379164683484056) {
			return "c";
		} else if (r < 0.9513029509757259) {
			return "o";
		} else if (r < 0.9599000475963828) {
			return "g";
		} else if (r < 0.968110423607806) {
			return "p";
		} else if (r < 0.9745359352689197) {
			return "i";
		} else if (r < 0.9800987624940506) {
			return "u";
		} else if (r < 0.9841742027605903) {
			return "b";
		} else if (r < 0.9880116611137555) {
			return "x";
		} else if (r < 0.9914921465968588) {
			return "f";
		} else if (r < 0.9948238933841029) {
			return "w";
		} else if (r < 0.9959245597334604) {
			return "h";
		} else if (r < 0.996995478343646) {
			return "v";
		} else if (r < 0.998006901475488) {
			return "k";
		} else if (r < 0.9989290813898145) {
			return "y";
		} else if (r < 0.9994942884340792) {
			return "z";
		} else if (r < 0.9998215135649692) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "f") {
		if (r < 0.4926372155287818) {
			return "u";
		} else if (r < 0.6559571619812584) {
			return "i";
		} else if (r < 0.7670682730923695) {
			return "o";
		} else if (r < 0.8688085676037484) {
			return "a";
		} else if (r < 0.9357429718875503) {
			return "l";
		} else if (r < 0.9759036144578315) {
			return "e";
		} else if (r < 0.9973226238286481) {
			return "r";
		} else if (r < 0.9986613119143242) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "g") {
		if (r < 0.2720306513409962) {
			return "a";
		} else if (r < 0.5363984674329503) {
			return "e";
		} else if (r < 0.681992337164751) {
			return "r";
		} else if (r < 0.8084291187739465) {
			return "u";
		} else if (r < 0.885057471264368) {
			return "l";
		} else if (r < 0.9463601532567051) {
			return "o";
		} else if (r < 0.9731800766283526) {
			return "i";
		} else if (r < 0.996168582375479) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "h") {
		if (r < 0.3211532231940395) {
			return "e";
		} else if (r < 0.4807256235827664) {
			return "o";
		} else if (r < 0.6136702299967606) {
			return "i";
		} else if (r < 0.7221898283122773) {
			return "r";
		} else if (r < 0.8077097505668934) {
			return "a";
		} else if (r < 0.8759961127308066) {
			return "y";
		} else if (r < 0.9050210560414642) {
			return "u";
		} else if (r < 0.9276320051830256) {
			return "s";
		} else if (r < 0.9458373825720764) {
			return "m";
		} else if (r < 0.9605442176870748) {
			return "l";
		} else if (r < 0.9703919663103336) {
			return "w";
		} else if (r < 0.9793326854551344) {
			return "n";
		} else if (r < 0.9865241334629089) {
			return "f";
		} else if (r < 0.9898931000971817) {
			return "b";
		} else if (r < 0.9919015225137674) {
			return "d";
		} else if (r < 0.9937803692905733) {
			return "p";
		} else if (r < 0.9954648526077097) {
			return "h";
		} else if (r < 0.9970197602850663) {
			return "c";
		} else if (r < 0.9982507288629737) {
			return "t";
		} else if (r < 0.9988986070618723) {
			return "g";
		} else if (r < 0.999481697440881) {
			return "q";
		} else if (r < 0.9997408487204404) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "i") {
		if (r < 0.23770458265139116) {
			return "o";
		} else if (r < 0.43999590834697216) {
			return "c";
		} else if (r < 0.5879705400981996) {
			return "n";
		} else if (r < 0.6747340425531914) {
			return "v";
		} else if (r < 0.7381137479541734) {
			return "s";
		} else if (r < 0.7748158756137479) {
			return "e";
		} else if (r < 0.8101472995090016) {
			return "a";
		} else if (r < 0.8407324058919803) {
			return "l";
		} else if (r < 0.8643412438625204) {
			return "m";
		} else if (r < 0.8871931260229132) {
			return "t";
		} else if (r < 0.9088379705400982) {
			return "f";
		} else if (r < 0.9275981996726678) {
			return "z";
		} else if (r < 0.9449672667757775) {
			return "d";
		} else if (r < 0.9580196399345337) {
			return "p";
		} else if (r < 0.9710515548281506) {
			return "g";
		} else if (r < 0.9833265139116204) {
			return "b";
		} else if (r < 0.9916530278232407) {
			return "r";
		} else if (r < 0.9939238952536826) {
			return "u";
		} else if (r < 0.9954787234042555) {
			return "h";
		} else if (r < 0.9970335515548283) {
			return "k";
		} else if (r < 0.9984656301145665) {
			return "q";
		} else if (r < 0.9991407528641573) {
			return "i";
		} else if (r < 0.9995499181669396) {
			return "w";
		} else if (r < 0.9998158756137481) {
			return "x";
		} else if (r < 0.9999181669394437) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "j") {
		if (r < 0.3283582089552239) {
			return "a";
		} else if (r < 0.5223880597014925) {
			return "e";
		} else if (r < 0.7164179104477612) {
			return "u";
		} else if (r < 0.8805970149253731) {
			return "o";
		} else if (r < 0.9850746268656716) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "k") {
		if (r < 0.3880597014925373) {
			return "i";
		} else if (r < 0.6567164179104478) {
			return "e";
		} else if (r < 0.8507462686567164) {
			return "a";
		} else if (r < 0.9253731343283582) {
			return "n";
		} else if (r < 0.9552238805970149) {
			return "o";
		} else if (r < 0.9701492537313433) {
			return "s";
		} else if (r < 0.9850746268656717) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "l") {
		if (r < 0.4173205463528044) {
			return "e";
		} else if (r < 0.7497820401046207) {
			return "y";
		} else if (r < 0.9229875036326649) {
			return "i";
		} else if (r < 0.9750072653298459) {
			return "a";
		} else if (r < 0.9933158965417029) {
			return "o";
		} else if (r < 0.9965126416739319) {
			return "u";
		} else if (r < 0.9982563208369659) {
			return "s";
		} else if (r < 0.999128160418483) {
			return "l";
		} else if (r < 0.999418773612322) {
			return "g";
		} else if (r < 0.9997093868061611) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "m") {
		if (r < 0.4334470989761092) {
			return "e";
		} else if (r < 0.8031854379977247) {
			return "a";
		} else if (r < 0.9306029579067121) {
			return "o";
		} else if (r < 0.9761092150170648) {
			return "i";
		} else if (r < 0.9886234357224118) {
			return "u";
		} else if (r < 0.9931740614334471) {
			return "y";
		} else if (r < 0.9954493742889647) {
			return "j";
		} else if (r < 0.9977246871444824) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "n") {
		if (r < 0.8411347517730496) {
			return "e";
		} else if (r < 0.8907801418439716) {
			return "i";
		} else if (r < 0.9390070921985815) {
			return "a";
		} else if (r < 0.9687943262411347) {
			return "o";
		} else if (r < 0.9858156028368794) {
			return "u";
		} else if (r < 0.9929078014184397) {
			return "t";
		} else if (r < 0.9943262411347518) {
			return "c";
		} else if (r < 0.9957446808510638) {
			return "l";
		} else if (r < 0.9971631205673759) {
			return "r";
		} else if (r < 0.9985815602836879) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "o") {
		if (r < 0.2573985852461383) {
			return "r";
		} else if (r < 0.39343631201578366) {
			return "m";
		} else if (r < 0.5039699725710987) {
			return "n";
		} else if (r < 0.5756219623694722) {
			return "p";
		} else if (r < 0.6366392377652664) {
			return "l";
		} else if (r < 0.691448919686252) {
			return "s";
		} else if (r < 0.7431307444300083) {
			return "c";
		} else if (r < 0.7844665800490834) {
			return "u";
		} else if (r < 0.8238294596025216) {
			return "g";
		} else if (r < 0.8505365478080941) {
			return "i";
		} else if (r < 0.8769067898561187) {
			return "t";
		} else if (r < 0.8955776911601945) {
			return "x";
		} else if (r < 0.913093691352678) {
			return "o";
		} else if (r < 0.9299359992300661) {
			return "d";
		} else if (r < 0.9430729993744287) {
			return "w";
		} else if (r < 0.9539001972956067) {
			return "b";
		} else if (r < 0.9630431644290459) {
			return "e";
		} else if (r < 0.971608681006689) {
			return "a";
		} else if (r < 0.9776719118425486) {
			return "k";
		} else if (r < 0.9830614503633128) {
			return "z";
		} else if (r < 0.9881141427265292) {
			return "f";
		} else if (r < 0.9923006592560514) {
			return "h";
		} else if (r < 0.9963909340262742) {
			return "v";
		} else if (r < 0.9989413406477072) {
			return "y";
		} else if (r < 0.9994706703238537) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "p") {
		if (r < 0.2697201017811705) {
			return "r";
		} else if (r < 0.450381679389313) {
			return "o";
		} else if (r < 0.6030534351145038) {
			return "a";
		} else if (r < 0.7022900763358779) {
			return "i";
		} else if (r < 0.7913486005089059) {
			return "u";
		} else if (r < 0.8753180661577609) {
			return "l";
		} else if (r < 0.9363867684478372) {
			return "e";
		} else if (r < 0.9694656488549619) {
			return "h";
		} else if (r < 0.9796437659033079) {
			return "y";
		} else if (r < 0.984732824427481) {
			return "s";
		} else if (r < 0.9898218829516541) {
			return "k";
		} else if (r < 0.9923664122137406) {
			return "n";
		} else if (r < 0.994910941475827) {
			return "f";
		} else if (r < 0.9974554707379135) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "t" && str[str.length-1] == "r") {
		if (r < 0.3107125307125307) {
			return "a";
		} else if (r < 0.5906142506142507) {
			return "i";
		} else if (r < 0.8008353808353809) {
			return "o";
		} else if (r < 0.8937100737100737) {
			return "e";
		} else if (r < 0.9562162162162162) {
			return "u";
		} else if (r < 0.998968058968059) {
			return "y";
		} else if (r < 0.9992137592137592) {
			return "p";
		} else if (r < 0.9994594594594595) {
			return "h";
		} else if (r < 0.9996068796068797) {
			return "s";
		} else if (r < 0.9997051597051597) {
			return "l";
		} else if (r < 0.9998034398034398) {
			return "c";
		} else if (r < 0.9998525798525798) {
			return "n";
		} else if (r < 0.9999017199017198) {
			return "d";
		} else if (r < 0.9999508599508599) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "s") {
		if (r < 0.1518987341772152) {
			return "t";
		} else if (r < 0.2824367088607595) {
			return "h";
		} else if (r < 0.37579113924050633) {
			return "i";
		} else if (r < 0.4588607594936709) {
			return "m";
		} else if (r < 0.5324367088607596) {
			return "p";
		} else if (r < 0.6052215189873418) {
			return "c";
		} else if (r < 0.6740506329113924) {
			return "e";
		} else if (r < 0.7420886075949368) {
			return "o";
		} else if (r < 0.8061708860759494) {
			return "u";
		} else if (r < 0.8678797468354431) {
			return "a";
		} else if (r < 0.9145569620253166) {
			return "w";
		} else if (r < 0.9446202531645571) {
			return "k";
		} else if (r < 0.9620253164556963) {
			return "y";
		} else if (r < 0.9778481012658229) {
			return "l";
		} else if (r < 0.9833860759493672) {
			return "b";
		} else if (r < 0.9889240506329116) {
			return "n";
		} else if (r < 0.9936708860759496) {
			return "f";
		} else if (r < 0.9968354430379749) {
			return "v";
		} else if (r < 0.9984177215189876) {
			return "r";
		} else if (r < 0.9992088607594939) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "t") {
		if (r < 0.4286961075231279) {
			return "e";
		} else if (r < 0.6156397277011695) {
			return "i";
		} else if (r < 0.7287484726828417) {
			return "a";
		} else if (r < 0.8170710420666784) {
			return "o";
		} else if (r < 0.9001570954791412) {
			return "l";
		} else if (r < 0.9303543375807296) {
			return "r";
		} else if (r < 0.9595042764880433) {
			return "y";
		} else if (r < 0.9780066329202304) {
			return "u";
		} else if (r < 0.9865596090068074) {
			return "h";
		} else if (r < 0.9942398324314888) {
			return "s";
		} else if (r < 0.9954616861581427) {
			return "n";
		} else if (r < 0.9966835398847965) {
			return "w";
		} else if (r < 0.9975562925466921) {
			return "v";
		} else if (r < 0.9984290452085877) {
			return "m";
		} else if (r < 0.9989526968057251) {
			return "t";
		} else if (r < 0.9993017978704833) {
			return "f";
		} else if (r < 0.9994763484028625) {
			return "g";
		} else if (r < 0.9996508989352416) {
			return "j";
		} else if (r < 0.9998254494676208) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "u") {
		if (r < 0.3635861306810333) {
			return "r";
		} else if (r < 0.4553115071142423) {
			return "a";
		} else if (r < 0.5312888520513883) {
			return "m";
		} else if (r < 0.6006354468849289) {
			return "l";
		} else if (r < 0.6651471197679237) {
			return "s";
		} else if (r < 0.7274485426163835) {
			return "b";
		} else if (r < 0.787815996684625) {
			return "n";
		} else if (r < 0.837546622461666) {
			return "d";
		} else if (r < 0.8829948887967951) {
			return "t";
		} else if (r < 0.9104848736013261) {
			return "p";
		} else if (r < 0.9341069208454206) {
			return "o";
		} else if (r < 0.9524796242574941) {
			return "i";
		} else if (r < 0.9661555463461804) {
			return "f";
		} else if (r < 0.979002624671916) {
			return "c";
		} else if (r < 0.9874292029285813) {
			return "e";
		} else if (r < 0.9921259842519685) {
			return "g";
		} else if (r < 0.9953032186766128) {
			return "k";
		} else if (r < 0.9962702030667219) {
			return "u";
		} else if (r < 0.997237187456831) {
			return "y";
		} else if (r < 0.9980660312197817) {
			return "x";
		} else if (r < 0.9987567343555739) {
			return "q";
		} else if (r < 0.9993092968642077) {
			return "v";
		} else if (r < 0.999723718745683) {
			return "z";
		} else if (r < 0.9998618593728414) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "v") {
		if (r < 0.30864197530864196) {
			return "o";
		} else if (r < 0.5925925925925926) {
			return "a";
		} else if (r < 0.8148148148148148) {
			return "e";
		} else if (r < 0.9753086419753085) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "w") {
		if (r < 0.357773851590106) {
			return "i";
		} else if (r < 0.6024734982332155) {
			return "a";
		} else if (r < 0.7950530035335689) {
			return "o";
		} else if (r < 0.9452296819787986) {
			return "e";
		} else if (r < 0.9779151943462898) {
			return "r";
		} else if (r < 0.9902826855123675) {
			return "h";
		} else if (r < 0.9946996466431096) {
			return "y";
		} else if (r < 0.9973498233215549) {
			return "w";
		} else if (r < 0.9991166077738517) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "x") {
		if (r < 0.5) {
			return "i";
		} else if (r < 0.75) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "y") {
		if (r < 0.33532168726033235) {
			return "l";
		} else if (r < 0.6425223689816788) {
			return "p";
		} else if (r < 0.7507456327226247) {
			return "r";
		} else if (r < 0.8048572645930977) {
			return "m";
		} else if (r < 0.8397954835960802) {
			return "c";
		} else if (r < 0.8645078824030679) {
			return "s";
		} else if (r < 0.8845334469535578) {
			return "a";
		} else if (r < 0.9045590115040478) {
			return "i";
		} else if (r < 0.9237324243715382) {
			return "o";
		} else if (r < 0.9365146996165319) {
			return "n";
		} else if (r < 0.946314443971027) {
			return "f";
		} else if (r < 0.9552620366425225) {
			return "e";
		} else if (r < 0.9620792501065191) {
			return "t";
		} else if (r < 0.968044311887516) {
			return "d";
		} else if (r < 0.974009373668513) {
			return "w";
		} else if (r < 0.97997443544951) {
			return "h";
		} else if (r < 0.9855134213890072) {
			return "b";
		} else if (r < 0.9906263314870046) {
			return "g";
		} else if (r < 0.9953131657435023) {
			return "k";
		} else if (r < 0.9987217724755005) {
			return "x";
		} else if (r < 0.9995739241585001) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "t" && str[str.length-1] == "z") {
		if (r < 0.2757352941176471) {
			return "i";
		} else if (r < 0.536764705882353) {
			return "e";
		} else if (r < 0.698529411764706) {
			return "a";
		} else if (r < 0.7720588235294118) {
			return "o";
		} else if (r < 0.8125) {
			return "y";
		} else if (r < 0.8492647058823529) {
			return "p";
		} else if (r < 0.8823529411764706) {
			return "k";
		} else if (r < 0.9117647058823529) {
			return "s";
		} else if (r < 0.926470588235294) {
			return "u";
		} else if (r < 0.9411764705882352) {
			return "l";
		} else if (r < 0.952205882352941) {
			return "b";
		} else if (r < 0.9632352941176469) {
			return "m";
		} else if (r < 0.9742647058823527) {
			return "v";
		} else if (r < 0.9816176470588233) {
			return "n";
		} else if (r < 0.9889705882352938) {
			return "c";
		} else if (r < 0.9963235294117644) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "a") {
		if (r < 0.26476476476476474) {
			return "l";
		} else if (r < 0.4374374374374374) {
			return "t";
		} else if (r < 0.5823323323323323) {
			return "r";
		} else if (r < 0.6786786786786786) {
			return "d";
		} else if (r < 0.7662662662662661) {
			return "n";
		} else if (r < 0.8003003003003002) {
			return "s";
		} else if (r < 0.8318318318318317) {
			return "m";
		} else if (r < 0.8618618618618618) {
			return "b";
		} else if (r < 0.8861361361361361) {
			return "i";
		} else if (r < 0.9096596596596596) {
			return "c";
		} else if (r < 0.9301801801801801) {
			return "g";
		} else if (r < 0.9439439439439439) {
			return "k";
		} else if (r < 0.9559559559559558) {
			return "v";
		} else if (r < 0.9647147147147146) {
			return "y";
		} else if (r < 0.9727227227227226) {
			return "e";
		} else if (r < 0.9804804804804804) {
			return "w";
		} else if (r < 0.9852352352352352) {
			return "p";
		} else if (r < 0.9892392392392392) {
			return "h";
		} else if (r < 0.9922422422422422) {
			return "f";
		} else if (r < 0.993993993993994) {
			return "z";
		} else if (r < 0.9954954954954955) {
			return "j";
		} else if (r < 0.9969969969969971) {
			return "u";
		} else if (r < 0.997997997997998) {
			return "q";
		} else if (r < 0.9987487487487487) {
			return "o";
		} else if (r < 0.9994994994994995) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "b") {
		if (r < 0.10934202954153079) {
			return "s";
		} else if (r < 0.20717437176290043) {
			return "e";
		} else if (r < 0.303855745252254) {
			return "i";
		} else if (r < 0.3848072127373873) {
			return "a";
		} else if (r < 0.46441588336850187) {
			return "l";
		} else if (r < 0.5434490696336083) {
			return "b";
		} else if (r < 0.6096297717245348) {
			return "c";
		} else if (r < 0.6710147707653942) {
			return "t";
		} else if (r < 0.7208900824860924) {
			return "r";
		} else if (r < 0.759639363130635) {
			return "o";
		} else if (r < 0.797429503165164) {
			return "d";
		} else if (r < 0.8344523307116823) {
			return "m";
		} else if (r < 0.8710915020141953) {
			return "p";
		} else if (r < 0.898714751582582) {
			return "u";
		} else if (r < 0.9184730481488586) {
			return "j";
		} else if (r < 0.9370803759831191) {
			return "f";
		} else if (r < 0.9537694225973528) {
			return "v";
		} else if (r < 0.9681565317475542) {
			return "g";
		} else if (r < 0.9800498753117207) {
			return "h";
		} else if (r < 0.9894494532898523) {
			return "n";
		} else if (r < 0.9940533282179168) {
			return "w";
		} else if (r < 0.996355265681949) {
			return "y";
		} else if (r < 0.9982735469019759) {
			return "q";
		} else if (r < 0.999424515633992) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "c") {
		if (r < 0.1883318544809228) {
			return "t";
		} else if (r < 0.34960070984915703) {
			return "k";
		} else if (r < 0.4897959183673469) {
			return "h";
		} else if (r < 0.6007098491570542) {
			return "i";
		} else if (r < 0.6823425022182786) {
			return "e";
		} else if (r < 0.7599822537710736) {
			return "o";
		} else if (r < 0.8280834072759539) {
			return "a";
		} else if (r < 0.8935226264418811) {
			return "c";
		} else if (r < 0.9409937888198757) {
			return "l";
		} else if (r < 0.9720496894409937) {
			return "u";
		} else if (r < 0.9948979591836734) {
			return "r";
		} else if (r < 0.997338065661047) {
			return "y";
		} else if (r < 0.9986690328305234) {
			return "s";
		} else if (r < 0.9991126885536823) {
			return "n";
		} else if (r < 0.9993345164152617) {
			return "d";
		} else if (r < 0.9995563442768411) {
			return "g";
		} else if (r < 0.9997781721384206) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "d") {
		if (r < 0.25092146299971646) {
			return "o";
		} else if (r < 0.463283243549759) {
			return "i";
		} else if (r < 0.6353841791891126) {
			return "e";
		} else if (r < 0.73433512900482) {
			return "a";
		} else if (r < 0.8242132123617806) {
			return "d";
		} else if (r < 0.9072866458746811) {
			return "g";
		} else if (r < 0.931953501559399) {
			return "s";
		} else if (r < 0.9478310178622059) {
			return "l";
		} else if (r < 0.9571874113977885) {
			return "y";
		} else if (r < 0.9656932237028637) {
			return "r";
		} else if (r < 0.9736319818542671) {
			return "u";
		} else if (r < 0.9776013609299689) {
			return "b";
		} else if (r < 0.9815707400056706) {
			return "w";
		} else if (r < 0.9852565920045364) {
			return "h";
		} else if (r < 0.9889424440034023) {
			return "f";
		} else if (r < 0.9917777147717607) {
			return "n";
		} else if (r < 0.9943294584632832) {
			return "m";
		} else if (r < 0.9963141480011342) {
			return "c";
		} else if (r < 0.9980153104621492) {
			return "z";
		} else if (r < 0.9994329458463284) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "e") {
		if (r < 0.18838421444527179) {
			return "n";
		} else if (r < 0.3618763961280715) {
			return "s";
		} else if (r < 0.49888309754281457) {
			return "r";
		} else if (r < 0.6034996276991809) {
			return "l";
		} else if (r < 0.7002978406552494) {
			return "t";
		} else if (r < 0.7803425167535367) {
			return "d";
		} else if (r < 0.8168279970215933) {
			return "e";
		} else if (r < 0.8507073715562172) {
			return "a";
		} else if (r < 0.8767684288905434) {
			return "b";
		} else if (r < 0.8991064780342515) {
			return "f";
		} else if (r < 0.9143708116157854) {
			return "m";
		} else if (r < 0.9270290394638866) {
			return "i";
		} else if (r < 0.9381980640357407) {
			return "c";
		} else if (r < 0.9475055845122857) {
			return "y";
		} else if (r < 0.9568131049888308) {
			return "p";
		} else if (r < 0.9646314221891286) {
			return "v";
		} else if (r < 0.971332836932241) {
			return "o";
		} else if (r < 0.9776619508562917) {
			return "u";
		} else if (r < 0.9836187639612806) {
			return "h";
		} else if (r < 0.9895755770662694) {
			return "g";
		} else if (r < 0.9932985852568874) {
			return "w";
		} else if (r < 0.9970215934475054) {
			return "j";
		} else if (r < 0.999627699180938) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "f") {
		if (r < 0.7634069400630915) {
			return "f";
		} else if (r < 0.8138801261829653) {
			return "a";
		} else if (r < 0.8517350157728707) {
			return "t";
		} else if (r < 0.8843322818086226) {
			return "l";
		} else if (r < 0.9137749737118823) {
			return "i";
		} else if (r < 0.9432176656151421) {
			return "o";
		} else if (r < 0.9695057833859096) {
			return "e";
		} else if (r < 0.9873817034700316) {
			return "r";
		} else if (r < 0.9915878023133544) {
			return "s";
		} else if (r < 0.9936908517350158) {
			return "y";
		} else if (r < 0.9957939011566772) {
			return "b";
		} else if (r < 0.9978969505783386) {
			return "u";
		} else if (r < 0.9989484752891693) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "g") {
		if (r < 0.3252534156015866) {
			return "h";
		} else if (r < 0.49228735125605994) {
			return "g";
		} else if (r < 0.6236227412957249) {
			return "a";
		} else if (r < 0.7078007933010136) {
			return "e";
		} else if (r < 0.7628911414720141) {
			return "i";
		} else if (r < 0.8179814896430145) {
			return "u";
		} else if (r < 0.8567650947553989) {
			return "l";
		} else if (r < 0.8893785808726311) {
			return "n";
		} else if (r < 0.9184662847069194) {
			return "s";
		} else if (r < 0.9462318201851037) {
			return "o";
		} else if (r < 0.9656236227412958) {
			return "m";
		} else if (r < 0.9762009695901278) {
			return "r";
		} else if (r < 0.9836932569413839) {
			return "w";
		} else if (r < 0.9907448215072719) {
			return "b";
		} else if (r < 0.9933891582194799) {
			return "f";
		} else if (r < 0.9955927721463199) {
			return "d";
		} else if (r < 0.9977963860731599) {
			return "t";
		} else if (r < 0.9986778316438959) {
			return "y";
		} else if (r < 0.9991185544292639) {
			return "p";
		} else if (r < 0.9995592772146319) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "h") {
		if (r < 0.24175824175824176) {
			return "a";
		} else if (r < 0.4175824175824176) {
			return "e";
		} else if (r < 0.5824175824175825) {
			return "l";
		} else if (r < 0.7142857142857143) {
			return "r";
		} else if (r < 0.8241758241758241) {
			return "i";
		} else if (r < 0.8901098901098901) {
			return "u";
		} else if (r < 0.9120879120879121) {
			return "y";
		} else if (r < 0.9340659340659341) {
			return "n";
		} else if (r < 0.9560439560439561) {
			return "o";
		} else if (r < 0.9780219780219781) {
			return "t";
		} else if (r < 0.989010989010989) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "i") {
		if (r < 0.21547096144460712) {
			return "n";
		} else if (r < 0.38775012201073694) {
			return "t";
		} else if (r < 0.541727672035139) {
			return "s";
		} else if (r < 0.6566617862371888) {
			return "l";
		} else if (r < 0.7330405075646657) {
			return "d";
		} else if (r < 0.7913616398243045) {
			return "r";
		} else if (r < 0.8304050756466569) {
			return "c";
		} else if (r < 0.863103953147877) {
			return "e";
		} else if (r < 0.8892142508540751) {
			return "p";
		} else if (r < 0.9119082479258175) {
			return "v";
		} else if (r < 0.9331381161542216) {
			return "a";
		} else if (r < 0.9468033186920449) {
			return "z";
		} else if (r < 0.9597364568081992) {
			return "f";
		} else if (r < 0.9694973157637873) {
			return "b";
		} else if (r < 0.9763299170326989) {
			return "o";
		} else if (r < 0.9829184968277208) {
			return "g";
		} else if (r < 0.9882869692532943) {
			return "m";
		} else if (r < 0.9914592484138605) {
			return "x";
		} else if (r < 0.9938994631527575) {
			return "q";
		} else if (r < 0.9960956564177648) {
			return "k";
		} else if (r < 0.9978038067349927) {
			return "u";
		} else if (r < 0.9985358711566618) {
			return "j";
		} else if (r < 0.9992679355783308) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "j") {
		if (r < 0.3037974683544304) {
			return "a";
		} else if (r < 0.5189873417721519) {
			return "i";
		} else if (r < 0.7341772151898734) {
			return "u";
		} else if (r < 0.8481012658227849) {
			return "o";
		} else if (r < 0.9113924050632912) {
			return "e";
		} else if (r < 0.9620253164556963) {
			return "d";
		} else if (r < 0.9746835443037976) {
			return "r";
		} else if (r < 0.9873417721518988) {
			return "t";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "k") {
		if (r < 0.28378378378378377) {
			return "e";
		} else if (r < 0.4504504504504504) {
			return "i";
		} else if (r < 0.5675675675675675) {
			return "o";
		} else if (r < 0.6779279279279279) {
			return "a";
		} else if (r < 0.7590090090090089) {
			return "u";
		} else if (r < 0.8175675675675674) {
			return "s";
		} else if (r < 0.8693693693693693) {
			return "k";
		} else if (r < 0.8986486486486486) {
			return "h";
		} else if (r < 0.9256756756756757) {
			return "r";
		} else if (r < 0.9459459459459459) {
			return "y";
		} else if (r < 0.963963963963964) {
			return "l";
		} else if (r < 0.981981981981982) {
			return "t";
		} else if (r < 0.9887387387387389) {
			return "d";
		} else if (r < 0.9932432432432433) {
			return "p";
		} else if (r < 0.9977477477477478) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "l") {
		if (r < 0.3122434755672578) {
			return "a";
		} else if (r < 0.43731123673817085) {
			return "t";
		} else if (r < 0.5331061720746535) {
			return "l";
		} else if (r < 0.6211569735925038) {
			return "i";
		} else if (r < 0.6868272283745064) {
			return "e";
		} else if (r < 0.7519553937892047) {
			return "o";
		} else if (r < 0.7995818167737939) {
			return "p";
		} else if (r < 0.8311004414156278) {
			return "s";
		} else if (r < 0.8596762952063812) {
			return "n";
		} else if (r < 0.8846124061023775) {
			return "f";
		} else if (r < 0.9091613103074421) {
			return "u";
		} else if (r < 0.9285990861922093) {
			return "c";
		} else if (r < 0.9474947727096723) {
			return "g";
		} else if (r < 0.9591109734376209) {
			return "m";
		} else if (r < 0.9693332300782156) {
			return "d";
		} else if (r < 0.9787036319987608) {
			return "v";
		} else if (r < 0.9869898551846974) {
			return "k";
		} else if (r < 0.9931851622396033) {
			return "b";
		} else if (r < 0.9967474637961742) {
			return "y";
		} else if (r < 0.9980639665453417) {
			return "w";
		} else if (r < 0.9988383799272049) {
			return "r";
		} else if (r < 0.9993030279563229) {
			return "h";
		} else if (r < 0.9996902346472545) {
			return "z";
		} else if (r < 0.9998451173236271) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "m") {
		if (r < 0.16039671682626538) {
			return "b";
		} else if (r < 0.292749658002736) {
			return "i";
		} else if (r < 0.4247606019151847) {
			return "e";
		} else if (r < 0.5434336525307798) {
			return "a";
		} else if (r < 0.6550957592339262) {
			return "p";
		} else if (r < 0.7496580027359782) {
			return "s";
		} else if (r < 0.8307113543091655) {
			return "m";
		} else if (r < 0.8910738714090287) {
			return "o";
		} else if (r < 0.917578659370725) {
			return "u";
		} else if (r < 0.9386114911080712) {
			return "n";
		} else if (r < 0.9500683994528044) {
			return "l";
		} else if (r < 0.9591313269493844) {
			return "v";
		} else if (r < 0.9678522571819426) {
			return "f";
		} else if (r < 0.9740082079343365) {
			return "d";
		} else if (r < 0.9796511627906976) {
			return "c";
		} else if (r < 0.9839261285909713) {
			return "r";
		} else if (r < 0.987688098495212) {
			return "y";
		} else if (r < 0.9902530779753762) {
			return "t";
		} else if (r < 0.9923050615595075) {
			return "h";
		} else if (r < 0.9941860465116279) {
			return "w";
		} else if (r < 0.9960670314637483) {
			return "g";
		} else if (r < 0.9977770177838577) {
			return "k";
		} else if (r < 0.9988030095759234) {
			return "j";
		} else if (r < 0.999829001367989) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "n") {
		if (r < 0.15087104196340528) {
			return "d";
		} else if (r < 0.2639421496658267) {
			return "c";
		} else if (r < 0.35911763631715427) {
			return "s";
		} else if (r < 0.4445418355794164) {
			return "t";
		} else if (r < 0.5129834556809467) {
			return "i";
		} else if (r < 0.5709798765567365) {
			return "p";
		} else if (r < 0.6280632555421644) {
			return "a";
		} else if (r < 0.6754318688141413) {
			return "e";
		} else if (r < 0.7197326613345021) {
			return "r";
		} else if (r < 0.7609291114276323) {
			return "g";
		} else if (r < 0.7970125269347358) {
			return "f";
		} else if (r < 0.8293707315291626) {
			return "b";
		} else if (r < 0.8608158942332275) {
			return "m";
		} else if (r < 0.881450640955407) {
			return "h";
		} else if (r < 0.9016106058945984) {
			return "n";
		} else if (r < 0.921551440780103) {
			return "l";
		} else if (r < 0.9389722800482087) {
			return "w";
		} else if (r < 0.9560279025601695) {
			return "o";
		} else if (r < 0.9718783097768525) {
			return "k";
		} else if (r < 0.9849895913224498) {
			return "v";
		} else if (r < 0.9892991490449581) {
			return "j";
		} else if (r < 0.993572185091852) {
			return "u";
		} else if (r < 0.9973704393557576) {
			return "q";
		} else if (r < 0.9990869581096381) {
			return "y";
		} else if (r < 0.9998904349731565) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "o") {
		if (r < 0.37112403100775193) {
			return "u";
		} else if (r < 0.5765503875968992) {
			return "r";
		} else if (r < 0.6666666666666667) {
			return "t";
		} else if (r < 0.7500000000000001) {
			return "d";
		} else if (r < 0.8120155038759691) {
			return "s";
		} else if (r < 0.8410852713178296) {
			return "i";
		} else if (r < 0.8682170542635661) {
			return "y";
		} else if (r < 0.8943798449612406) {
			return "l";
		} else if (r < 0.916666666666667) {
			return "n";
		} else if (r < 0.9379844961240313) {
			return "p";
		} else if (r < 0.9573643410852717) {
			return "m";
		} else if (r < 0.9660852713178298) {
			return "c";
		} else if (r < 0.972868217054264) {
			return "b";
		} else if (r < 0.977713178294574) {
			return "a";
		} else if (r < 0.9825581395348841) {
			return "o";
		} else if (r < 0.9864341085271322) {
			return "h";
		} else if (r < 0.9893410852713183) {
			return "g";
		} else if (r < 0.9922480620155043) {
			return "v";
		} else if (r < 0.9951550387596904) {
			return "z";
		} else if (r < 0.9980620155038764) {
			return "k";
		} else if (r < 0.9990310077519384) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "p") {
		if (r < 0.41695750359269146) {
			return "e";
		} else if (r < 0.5113939642783822) {
			return "p";
		} else if (r < 0.5824266064463149) {
			return "r";
		} else if (r < 0.6479162389653049) {
			return "l";
		} else if (r < 0.7121740915623076) {
			return "t";
		} else if (r < 0.7688359679737221) {
			return "s";
		} else if (r < 0.8183124615068775) {
			return "i";
		} else if (r < 0.8593717922397865) {
			return "h";
		} else if (r < 0.8957092999384111) {
			return "a";
		} else if (r < 0.9129542188462328) {
			return "b";
		} else if (r < 0.9281461712174092) {
			return "u";
		} else if (r < 0.9425169369739274) {
			return "c";
		} else if (r < 0.9560665161157873) {
			return "o";
		} else if (r < 0.9648942722233628) {
			return "f";
		} else if (r < 0.9726955450626155) {
			return "g";
		} else if (r < 0.9798809279408746) {
			return "w";
		} else if (r < 0.9866557175118046) {
			return "d";
		} else if (r < 0.9919934305070828) {
			return "y";
		} else if (r < 0.9960993635803737) {
			return "m";
		} else if (r < 0.99774173680969) {
			return "n";
		} else if (r < 0.9987682200780128) {
			return "k";
		} else if (r < 0.9993841100390064) {
			return "v";
		} else if (r < 0.9997947033463355) {
			return "j";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "q") {
		if (r < 0.95) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "r") {
		if (r < 0.18442833076979417) {
			return "e";
		} else if (r < 0.35157108327840036) {
			return "i";
		} else if (r < 0.4977660587416685) {
			return "a";
		} else if (r < 0.5751116970629166) {
			return "o";
		} else if (r < 0.6282868234087747) {
			return "n";
		} else if (r < 0.6786054347029957) {
			return "s";
		} else if (r < 0.7270197026294588) {
			return "r";
		} else if (r < 0.7723577235772359) {
			return "g";
		} else if (r < 0.8055372445616349) {
			return "b";
		} else if (r < 0.8350545667618839) {
			return "t";
		} else if (r < 0.855489635977441) {
			return "u";
		} else if (r < 0.875631729290266) {
			return "l";
		} else if (r < 0.895334358748993) {
			return "c";
		} else if (r < 0.9149637442320371) {
			return "p";
		} else if (r < 0.9314436387607121) {
			return "d";
		} else if (r < 0.9475573134109722) {
			return "v";
		} else if (r < 0.9628653043287192) {
			return "y";
		} else if (r < 0.9754632681461952) {
			return "f";
		} else if (r < 0.9862301325715962) {
			return "m";
		} else if (r < 0.9937742620669452) {
			return "k";
		} else if (r < 0.9954588735076542) {
			return "h";
		} else if (r < 0.9971434849483631) {
			return "w";
		} else if (r < 0.9986083644620232) {
			return "z";
		} else if (r < 0.9994140481945362) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "s") {
		if (r < 0.17695042878058984) {
			return "t";
		} else if (r < 0.33037021543610123) {
			return "e";
		} else if (r < 0.47469148713658227) {
			return "l";
		} else if (r < 0.5952729554486509) {
			return "n";
		} else if (r < 0.7041413930140138) {
			return "i";
		} else if (r < 0.7842501568709475) {
			return "h";
		} else if (r < 0.8436519556578121) {
			return "s";
		} else if (r < 0.8861116921146204) {
			return "c";
		} else if (r < 0.9207278811964025) {
			return "a";
		} else if (r < 0.9420623300564736) {
			return "p";
		} else if (r < 0.9608868437565363) {
			return "k";
		} else if (r < 0.972599874503242) {
			return "u";
		} else if (r < 0.9827441957749425) {
			return "o";
		} else if (r < 0.9877640660949593) {
			return "y";
		} else if (r < 0.9912152269399708) {
			return "b";
		} else if (r < 0.9942480652583142) {
			return "q";
		} else if (r < 0.9959213553649865) {
			return "m";
		} else if (r < 0.9971763229449907) {
			return "w";
		} else if (r < 0.9983267098933278) {
			return "f";
		} else if (r < 0.9988496130516629) {
			return "g";
		} else if (r < 0.9992679355783309) {
			return "d";
		} else if (r < 0.9995816774733319) {
			return "r";
		} else if (r < 0.999790838736666) {
			return "j";
		} else if (r < 0.9998954193683329) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "t") {
		if (r < 0.1649954421148587) {
			return "i";
		} else if (r < 0.2919325432999088) {
			return "e";
		} else if (r < 0.4185278030993619) {
			return "o";
		} else if (r < 0.5094576116681859) {
			return "t";
		} else if (r < 0.5900182315405651) {
			return "a";
		} else if (r < 0.6696672743846854) {
			return "h";
		} else if (r < 0.7413400182315405) {
			return "s";
		} else if (r < 0.7907930720145852) {
			return "r";
		} else if (r < 0.8200774840474019) {
			return "c";
		} else if (r < 0.8436645396536006) {
			return "b";
		} else if (r < 0.8657702825888786) {
			return "l";
		} else if (r < 0.8865086599817683) {
			return "u";
		} else if (r < 0.9053099361896079) {
			return "w";
		} else if (r < 0.9235414767547856) {
			return "p";
		} else if (r < 0.9405195989061074) {
			return "f";
		} else if (r < 0.9519143117593435) {
			return "g";
		} else if (r < 0.9629671832269825) {
			return "y";
		} else if (r < 0.973222424794895) {
			return "d";
		} else if (r < 0.9813126709206926) {
			return "m";
		} else if (r < 0.9853008204193253) {
			return "v";
		} else if (r < 0.9891750227894256) {
			return "z";
		} else if (r < 0.9928213309024612) {
			return "n";
		} else if (r < 0.9958979033728349) {
			return "j";
		} else if (r < 0.9981768459434821) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "u") {
		if (r < 0.5147058823529411) {
			return "m";
		} else if (r < 0.7352941176470588) {
			return "s";
		} else if (r < 0.7941176470588235) {
			return "l";
		} else if (r < 0.8529411764705882) {
			return "n";
		} else if (r < 0.8970588235294117) {
			return "r";
		} else if (r < 0.9411764705882352) {
			return "a";
		} else if (r < 0.9558823529411763) {
			return "t";
		} else if (r < 0.9705882352941174) {
			return "d";
		} else if (r < 0.9852941176470585) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "v") {
		if (r < 0.449438202247191) {
			return "i";
		} else if (r < 0.7707865168539325) {
			return "e";
		} else if (r < 0.8651685393258426) {
			return "a";
		} else if (r < 0.9393258426966291) {
			return "r";
		} else if (r < 0.9842696629213482) {
			return "u";
		} else if (r < 0.991011235955056) {
			return "y";
		} else if (r < 0.9955056179775279) {
			return "o";
		} else if (r < 0.9977528089887638) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "w") {
		if (r < 0.391304347826087) {
			return "a";
		} else if (r < 0.6086956521739131) {
			return "i";
		} else if (r < 0.782608695652174) {
			return "e";
		} else if (r < 0.8695652173913044) {
			return "o";
		} else if (r < 0.9130434782608696) {
			return "b";
		} else if (r < 0.9565217391304348) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "x") {
		if (r < 0.2881944444444444) {
			return "i";
		} else if (r < 0.5) {
			return "e";
		} else if (r < 0.6597222222222222) {
			return "o";
		} else if (r < 0.8159722222222222) {
			return "u";
		} else if (r < 0.8958333333333333) {
			return "a";
		} else if (r < 0.954861111111111) {
			return "t";
		} else if (r < 0.9652777777777777) {
			return "b";
		} else if (r < 0.9722222222222221) {
			return "y";
		} else if (r < 0.9791666666666665) {
			return "h";
		} else if (r < 0.9826388888888887) {
			return "s";
		} else if (r < 0.9861111111111109) {
			return "g";
		} else if (r < 0.9895833333333331) {
			return "m";
		} else if (r < 0.9930555555555554) {
			return "r";
		} else if (r < 0.9965277777777776) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "y") {
		if (r < 0.20212765957446807) {
			return "a";
		} else if (r < 0.3936170212765957) {
			return "e";
		} else if (r < 0.5212765957446808) {
			return "o";
		} else if (r < 0.6276595744680851) {
			return "i";
		} else if (r < 0.7021276595744681) {
			return "u";
		} else if (r < 0.7659574468085106) {
			return "s";
		} else if (r < 0.8297872340425532) {
			return "l";
		} else if (r < 0.8829787234042553) {
			return "t";
		} else if (r < 0.9148936170212766) {
			return "n";
		} else if (r < 0.9361702127659575) {
			return "b";
		} else if (r < 0.9574468085106383) {
			return "g";
		} else if (r < 0.9680851063829787) {
			return "k";
		} else if (r < 0.9787234042553191) {
			return "d";
		} else if (r < 0.9893617021276595) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "u" && str[str.length-1] == "z") {
		if (r < 0.50187265917603) {
			return "z";
		} else if (r < 0.6741573033707865) {
			return "e";
		} else if (r < 0.7752808988764045) {
			return "a";
		} else if (r < 0.8389513108614233) {
			return "i";
		} else if (r < 0.8838951310861424) {
			return "o";
		} else if (r < 0.9138576779026217) {
			return "u";
		} else if (r < 0.9438202247191011) {
			return "l";
		} else if (r < 0.9588014981273408) {
			return "y";
		} else if (r < 0.9700374531835206) {
			return "b";
		} else if (r < 0.9775280898876405) {
			return "h";
		} else if (r < 0.9850187265917604) {
			return "j";
		} else if (r < 0.9887640449438203) {
			return "w";
		} else if (r < 0.9925093632958802) {
			return "c";
		} else if (r < 0.9962546816479402) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "a") {
		if (r < 0.21602141680395387) {
			return "l";
		} else if (r < 0.3653212520593081) {
			return "t";
		} else if (r < 0.5080313014827018) {
			return "n";
		} else if (r < 0.6194398682042833) {
			return "r";
		} else if (r < 0.693986820428336) {
			return "s";
		} else if (r < 0.7596787479406919) {
			return "g";
		} else if (r < 0.8198105436573311) {
			return "b";
		} else if (r < 0.871499176276771) {
			return "c";
		} else if (r < 0.9021828665568369) {
			return "p";
		} else if (r < 0.9271004942339374) {
			return "i";
		} else if (r < 0.9478995057660625) {
			return "d";
		} else if (r < 0.9635502471169686) {
			return "u";
		} else if (r < 0.9763179571663919) {
			return "m";
		} else if (r < 0.9822899505766061) {
			return "h";
		} else if (r < 0.9868204283360789) {
			return "e";
		} else if (r < 0.9905271828665566) {
			return "k";
		} else if (r < 0.9929983525535417) {
			return "a";
		} else if (r < 0.9948517298187807) {
			return "y";
		} else if (r < 0.9960873146622733) {
			return "v";
		} else if (r < 0.9971169686985171) {
			return "w";
		} else if (r < 0.9979406919275121) {
			return "x";
		} else if (r < 0.9987644151565072) {
			return "j";
		} else if (r < 0.9991762767710047) {
			return "z";
		} else if (r < 0.9995881383855023) {
			return "q";
		} else if (r < 0.999794069192751) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "c") {
		if (r < 0.6) {
			return "i";
		} else if (r < 0.8) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "d") {
		if (r < 0.5) {
			return "a";
		} else if (r < 0.6666666666666666) {
			return "p";
		} else if (r < 0.8333333333333333) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "e") {
		if (r < 0.5145699569604177) {
			return "r";
		} else if (r < 0.6763564524095111) {
			return "n";
		} else if (r < 0.8147181260142525) {
			return "l";
		} else if (r < 0.8787130459324067) {
			return "s";
		} else if (r < 0.9138502786989346) {
			return "d";
		} else if (r < 0.933394482466662) {
			return "t";
		} else if (r < 0.9420023989275383) {
			return "a";
		} else if (r < 0.9499753051576942) {
			return "i";
		} else if (r < 0.9577365413109433) {
			return "m";
		} else if (r < 0.9652155506949834) {
			return "y";
		} else if (r < 0.9716362096944895) {
			return "c";
		} else if (r < 0.9767868482325548) {
			return "g";
		} else if (r < 0.9815847033091089) {
			return "o";
		} else if (r < 0.985888661539547) {
			return "x";
		} else if (r < 0.9891342693854512) {
			return "e";
		} else if (r < 0.9923093205390532) {
			return "h";
		} else if (r < 0.9940732378466098) {
			return "f";
		} else if (r < 0.995696041769562) {
			return "w";
		} else if (r < 0.9969660622310027) {
			return "b";
		} else if (r < 0.9982360826924435) {
			return "p";
		} else if (r < 0.9988005362308616) {
			return "u";
		} else if (r < 0.9992944330769775) {
			return "k";
		} else if (r < 0.9996472165384889) {
			return "j";
		} else if (r < 0.9998588866153957) {
			return "v";
		} else if (r < 0.999929443307698) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "g") {
		if (r < 0.6) {
			return "a";
		} else if (r < 0.8) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "i") {
		if (r < 0.16220710506424793) {
			return "n";
		} else if (r < 0.3133786848072563) {
			return "s";
		} else if (r < 0.43824640967498113) {
			return "t";
		} else if (r < 0.526984126984127) {
			return "c";
		} else if (r < 0.6071050642479214) {
			return "l";
		} else if (r < 0.6834467120181407) {
			return "a";
		} else if (r < 0.7425547996976569) {
			return "d";
		} else if (r < 0.798034769463341) {
			return "r";
		} else if (r < 0.8435374149659864) {
			return "o";
		} else if (r < 0.8848072562358277) {
			return "e";
		} else if (r < 0.9153439153439153) {
			return "g";
		} else if (r < 0.9319727891156463) {
			return "v";
		} else if (r < 0.9475434618291761) {
			return "b";
		} else if (r < 0.9599395313681028) {
			return "z";
		} else if (r < 0.9720332577475435) {
			return "p";
		} else if (r < 0.9809523809523809) {
			return "f";
		} else if (r < 0.9873015873015872) {
			return "u";
		} else if (r < 0.9913832199546485) {
			return "m";
		} else if (r < 0.9944066515495087) {
			return "k";
		} else if (r < 0.9971277399848828) {
			return "i";
		} else if (r < 0.9986394557823128) {
			return "x";
		} else if (r < 0.9992441421012849) {
			return "j";
		} else if (r < 0.9996976568405139) {
			return "h";
		} else if (r < 0.9998488284202569) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "k") {
		if (r < 0.8333333333333334) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "l") {
		if (r < 0.2777777777777778) {
			return "a";
		} else if (r < 0.4444444444444444) {
			return "e";
		} else if (r < 0.611111111111111) {
			return "i";
		} else if (r < 0.7222222222222221) {
			return "o";
		} else if (r < 0.7777777777777777) {
			return "d";
		} else if (r < 0.8333333333333333) {
			return "y";
		} else if (r < 0.8888888888888888) {
			return "t";
		} else if (r < 0.9444444444444444) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "m") {
		if (r < 0.3333333333333333) {
			return "a";
		} else if (r < 0.6666666666666666) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "n") {
		if (r < 0.8) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "o") {
		if (r < 0.30711164084227255) {
			return "l";
		} else if (r < 0.44934445768772346) {
			return "r";
		} else if (r < 0.5776718315454906) {
			return "c";
		} else if (r < 0.6758045292014302) {
			return "u";
		} else if (r < 0.7369884783472387) {
			return "i";
		} else if (r < 0.7918156535558203) {
			return "t";
		} else if (r < 0.8239968216130312) {
			return "w";
		} else if (r < 0.8537941994437821) {
			return "k";
		} else if (r < 0.8808104886769963) {
			return "n";
		} else if (r < 0.9066348827969803) {
			return "m";
		} else if (r < 0.9296781883194277) {
			return "y";
		} else if (r < 0.947953913388955) {
			return "s";
		} else if (r < 0.9610647596344853) {
			return "g";
		} else if (r < 0.9694080254270956) {
			return "e";
		} else if (r < 0.9773539928486291) {
			return "d";
		} else if (r < 0.984902661899086) {
			return "v";
		} else if (r < 0.9900675407230829) {
			return "o";
		} else if (r < 0.9940405244338497) {
			return "p";
		} else if (r < 0.9964243146603098) {
			return "x";
		} else if (r < 0.9980135081446165) {
			return "b";
		} else if (r < 0.9988081048867699) {
			return "q";
		} else if (r < 0.9992054032578466) {
			return "z";
		} else if (r < 0.9996027016289233) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "p") {
		return "r";
	} else if (str[str.length-2] == "v" && str[str.length-1] == "r") {
		if (r < 0.33) {
			return "e";
		} else if (r < 0.66) {
			return "o";
		} else if (r < 0.8200000000000001) {
			return "i";
		} else if (r < 0.9800000000000001) {
			return "a";
		} else if (r < 0.9900000000000001) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "s") {
		if (r < 0.6363636363636364) {
			return "k";
		} else if (r < 0.8181818181818181) {
			return "s";
		} else if (r < 0.9090909090909091) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "t") {
		if (r < 0.5) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "u") {
		if (r < 0.7995594713656388) {
			return "l";
		} else if (r < 0.8568281938325991) {
			return "s";
		} else if (r < 0.9052863436123348) {
			return "r";
		} else if (r < 0.9361233480176212) {
			return "m";
		} else if (r < 0.9537444933920706) {
			return "e";
		} else if (r < 0.9691629955947137) {
			return "g";
		} else if (r < 0.9779735682819384) {
			return "t";
		} else if (r < 0.9845814977973569) {
			return "n";
		} else if (r < 0.9911894273127755) {
			return "i";
		} else if (r < 0.9955947136563879) {
			return "c";
		} else if (r < 0.997797356828194) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "v") {
		if (r < 0.3488372093023256) {
			return "y";
		} else if (r < 0.6976744186046512) {
			return "i";
		} else if (r < 0.9069767441860466) {
			return "e";
		} else if (r < 0.9534883720930233) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "w") {
		return "s";
	} else if (str[str.length-2] == "v" && str[str.length-1] == "y") {
		if (r < 0.30357142857142855) {
			return "i";
		} else if (r < 0.4107142857142857) {
			return "a";
		} else if (r < 0.5178571428571428) {
			return "h";
		} else if (r < 0.6249999999999999) {
			return "w";
		} else if (r < 0.7142857142857142) {
			return "n";
		} else if (r < 0.7857142857142856) {
			return "b";
		} else if (r < 0.8392857142857142) {
			return "l";
		} else if (r < 0.8749999999999999) {
			return "s";
		} else if (r < 0.9107142857142856) {
			return "u";
		} else if (r < 0.9464285714285713) {
			return "e";
		} else if (r < 0.9642857142857142) {
			return "y";
		} else if (r < 0.9821428571428571) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "v" && str[str.length-1] == "z") {
		if (r < 0.75) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "a") {
		if (r < 0.2812238055322716) {
			return "r";
		} else if (r < 0.39731768650461025) {
			return "y";
		} else if (r < 0.4918273260687343) {
			return "t";
		} else if (r < 0.5785834031852473) {
			return "l";
		} else if (r < 0.654233025984912) {
			return "n";
		} else if (r < 0.7240150880134115) {
			return "s";
		} else if (r < 0.7699077954735959) {
			return "g";
		} else if (r < 0.815590947191953) {
			return "i";
		} else if (r < 0.8443000838222967) {
			return "b";
		} else if (r < 0.8702849958088852) {
			return "k";
		} else if (r < 0.8920787929589271) {
			return "d";
		} else if (r < 0.9103101424979044) {
			return "v";
		} else if (r < 0.9283319362950545) {
			return "m";
		} else if (r < 0.944048616932104) {
			return "x";
		} else if (r < 0.954316848281643) {
			return "c";
		} else if (r < 0.9643755238893547) {
			return "f";
		} else if (r < 0.974224643755239) {
			return "u";
		} else if (r < 0.9828164291701593) {
			return "p";
		} else if (r < 0.9901508801341158) {
			return "h";
		} else if (r < 0.9932942162615257) {
			return "e";
		} else if (r < 0.9960184409052809) {
			return "w";
		} else if (r < 0.9985331098072088) {
			return "z";
		} else if (r < 0.9997904442581728) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "b") {
		if (r < 0.25206611570247933) {
			return "e";
		} else if (r < 0.4834710743801653) {
			return "o";
		} else if (r < 0.7107438016528925) {
			return "a";
		} else if (r < 0.8223140495867768) {
			return "r";
		} else if (r < 0.9008264462809916) {
			return "i";
		} else if (r < 0.9669421487603305) {
			return "u";
		} else if (r < 0.9834710743801651) {
			return "y";
		} else if (r < 0.9958677685950411) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "c") {
		if (r < 0.34285714285714286) {
			return "a";
		} else if (r < 0.5285714285714286) {
			return "o";
		} else if (r < 0.7) {
			return "h";
		} else if (r < 0.7999999999999999) {
			return "r";
		} else if (r < 0.8857142857142857) {
			return "u";
		} else if (r < 0.9285714285714285) {
			return "l";
		} else if (r < 0.9714285714285713) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "d") {
		if (r < 0.2882882882882883) {
			return "e";
		} else if (r < 0.4369369369369369) {
			return "i";
		} else if (r < 0.5495495495495495) {
			return "r";
		} else if (r < 0.6621621621621621) {
			return "l";
		} else if (r < 0.7702702702702702) {
			return "y";
		} else if (r < 0.8738738738738738) {
			return "o";
		} else if (r < 0.9099099099099098) {
			return "s";
		} else if (r < 0.9414414414414414) {
			return "a";
		} else if (r < 0.9729729729729729) {
			return "n";
		} else if (r < 0.9954954954954954) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "e") {
		if (r < 0.22054992764109985) {
			return "r";
		} else if (r < 0.43502170767004344) {
			return "e";
		} else if (r < 0.5791606367583213) {
			return "l";
		} else if (r < 0.7030390738060782) {
			return "a";
		} else if (r < 0.8107091172214183) {
			return "d";
		} else if (r < 0.8662807525325615) {
			return "i";
		} else if (r < 0.9125904486251809) {
			return "s";
		} else if (r < 0.9406657018813314) {
			return "n";
		} else if (r < 0.9591895803183791) {
			return "t";
		} else if (r < 0.9765557163531113) {
			return "b";
		} else if (r < 0.9820549927641099) {
			return "p";
		} else if (r < 0.9855282199710563) {
			return "g";
		} else if (r < 0.988422575976845) {
			return "f";
		} else if (r < 0.9910274963820549) {
			return "y";
		} else if (r < 0.9927641099855281) {
			return "v";
		} else if (r < 0.9945007235890013) {
			return "m";
		} else if (r < 0.9959479015918957) {
			return "h";
		} else if (r < 0.9973950795947901) {
			return "k";
		} else if (r < 0.9985528219971056) {
			return "z";
		} else if (r < 0.9994211287988423) {
			return "c";
		} else if (r < 0.9997105643994212) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "f") {
		if (r < 0.2803030303030303) {
			return "u";
		} else if (r < 0.5378787878787878) {
			return "i";
		} else if (r < 0.6742424242424242) {
			return "l";
		} else if (r < 0.8106060606060606) {
			return "o";
		} else if (r < 0.9393939393939393) {
			return "a";
		} else if (r < 0.9696969696969696) {
			return "e";
		} else if (r < 0.9848484848484848) {
			return "f";
		} else if (r < 0.9924242424242423) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "g") {
		if (r < 0.30612244897959184) {
			return "a";
		} else if (r < 0.5510204081632653) {
			return "r";
		} else if (r < 0.7346938775510203) {
			return "i";
		} else if (r < 0.8163265306122448) {
			return "e";
		} else if (r < 0.8979591836734693) {
			return "h";
		} else if (r < 0.9387755102040816) {
			return "u";
		} else if (r < 0.9795918367346939) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "h") {
		if (r < 0.46328071379547014) {
			return "i";
		} else if (r < 0.7295813315030886) {
			return "e";
		} else if (r < 0.8634179821551133) {
			return "a";
		} else if (r < 0.9739190116678107) {
			return "o";
		} else if (r < 0.9883321894303364) {
			return "u";
		} else if (r < 0.995881949210707) {
			return "y";
		} else if (r < 0.9979409746053536) {
			return "s";
		} else if (r < 0.9993136582017846) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "i") {
		if (r < 0.34365496267625106) {
			return "n";
		} else if (r < 0.5421620127177219) {
			return "s";
		} else if (r < 0.67459220348355) {
			return "t";
		} else if (r < 0.7567044512026542) {
			return "l";
		} else if (r < 0.7962399778822229) {
			return "r";
		} else if (r < 0.8302460602709428) {
			return "g";
		} else if (r < 0.8628697815869506) {
			return "d";
		} else if (r < 0.8916228918993642) {
			return "f";
		} else if (r < 0.9178877522808958) {
			return "c";
		} else if (r < 0.9441526126624274) {
			return "e";
		} else if (r < 0.9585291678186343) {
			return "m";
		} else if (r < 0.970970417473044) {
			return "v";
		} else if (r < 0.9809234171965718) {
			return "p";
		} else if (r < 0.9900470002764723) {
			return "z";
		} else if (r < 0.9933646668509816) {
			return "k";
		} else if (r < 0.9950235001382361) {
			return "x";
		} else if (r < 0.9966823334254907) {
			return "a";
		} else if (r < 0.9983411667127453) {
			return "b";
		} else if (r < 0.9994470555709151) {
			return "y";
		} else if (r < 0.9997235277854575) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "j") {
		if (r < 0.6) {
			return "o";
		} else if (r < 0.8) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "k") {
		if (r < 0.3157894736842105) {
			return "i";
		} else if (r < 0.556390977443609) {
			return "e";
		} else if (r < 0.6917293233082706) {
			return "s";
		} else if (r < 0.7819548872180451) {
			return "w";
		} else if (r < 0.8571428571428571) {
			return "n";
		} else if (r < 0.9097744360902256) {
			return "y";
		} else if (r < 0.9323308270676691) {
			return "l";
		} else if (r < 0.9548872180451127) {
			return "b";
		} else if (r < 0.9699248120300751) {
			return "a";
		} else if (r < 0.9849624060150375) {
			return "m";
		} else if (r < 0.9924812030075187) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "l") {
		if (r < 0.4126679462571977) {
			return "e";
		} else if (r < 0.6890595009596929) {
			return "i";
		} else if (r < 0.779270633397313) {
			return "s";
		} else if (r < 0.8598848368522074) {
			return "y";
		} else if (r < 0.9193857965451057) {
			return "a";
		} else if (r < 0.9347408829174665) {
			return "o";
		} else if (r < 0.9481765834932823) {
			return "d";
		} else if (r < 0.9596928982725529) {
			return "l";
		} else if (r < 0.9692898272552785) {
			return "w";
		} else if (r < 0.978886756238004) {
			return "f";
		} else if (r < 0.9846449136276394) {
			return "p";
		} else if (r < 0.9865642994241846) {
			return "u";
		} else if (r < 0.9884836852207297) {
			return "m";
		} else if (r < 0.9904030710172749) {
			return "r";
		} else if (r < 0.99232245681382) {
			return "g";
		} else if (r < 0.9942418426103652) {
			return "h";
		} else if (r < 0.9961612284069103) {
			return "t";
		} else if (r < 0.9980806142034555) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "m") {
		if (r < 0.5073529411764706) {
			return "a";
		} else if (r < 0.7867647058823529) {
			return "e";
		} else if (r < 0.9191176470588235) {
			return "o";
		} else if (r < 0.963235294117647) {
			return "i";
		} else if (r < 0.9779411764705881) {
			return "s";
		} else if (r < 0.9852941176470587) {
			return "b";
		} else if (r < 0.9926470588235292) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "n") {
		if (r < 0.25333333333333335) {
			return "e";
		} else if (r < 0.4562962962962963) {
			return "s";
		} else if (r < 0.6088888888888889) {
			return "i";
		} else if (r < 0.682962962962963) {
			return "l";
		} else if (r < 0.7185185185185186) {
			return "w";
		} else if (r < 0.7525925925925926) {
			return "t";
		} else if (r < 0.7837037037037037) {
			return "y";
		} else if (r < 0.8103703703703703) {
			return "b";
		} else if (r < 0.8370370370370369) {
			return "f";
		} else if (r < 0.8607407407407406) {
			return "c";
		} else if (r < 0.8814814814814813) {
			return "h";
		} else if (r < 0.8992592592592591) {
			return "p";
		} else if (r < 0.9170370370370369) {
			return "d";
		} else if (r < 0.9333333333333331) {
			return "n";
		} else if (r < 0.9496296296296294) {
			return "a";
		} else if (r < 0.9644444444444442) {
			return "g";
		} else if (r < 0.9777777777777775) {
			return "m";
		} else if (r < 0.9881481481481479) {
			return "r";
		} else if (r < 0.9955555555555553) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "o") {
		if (r < 0.512962962962963) {
			return "r";
		} else if (r < 0.7388888888888889) {
			return "o";
		} else if (r < 0.8469135802469137) {
			return "m";
		} else if (r < 0.8765432098765433) {
			return "l";
		} else if (r < 0.9058641975308643) {
			return "n";
		} else if (r < 0.9262345679012347) {
			return "u";
		} else if (r < 0.9358024691358026) {
			return "v";
		} else if (r < 0.9444444444444445) {
			return "b";
		} else if (r < 0.9521604938271606) {
			return "w";
		} else if (r < 0.9589506172839507) {
			return "e";
		} else if (r < 0.9651234567901236) {
			return "f";
		} else if (r < 0.9706790123456791) {
			return "g";
		} else if (r < 0.9753086419753088) {
			return "t";
		} else if (r < 0.9796296296296297) {
			return "a";
		} else if (r < 0.9836419753086421) {
			return "k";
		} else if (r < 0.9876543209876544) {
			return "d";
		} else if (r < 0.991358024691358) {
			return "p";
		} else if (r < 0.9950617283950617) {
			return "s";
		} else if (r < 0.9975308641975308) {
			return "c";
		} else if (r < 0.9984567901234567) {
			return "h";
		} else if (r < 0.9993827160493826) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "p") {
		if (r < 0.23157894736842105) {
			return "o";
		} else if (r < 0.42105263157894735) {
			return "i";
		} else if (r < 0.5894736842105263) {
			return "a";
		} else if (r < 0.7368421052631579) {
			return "e";
		} else if (r < 0.8421052631578947) {
			return "l";
		} else if (r < 0.9052631578947368) {
			return "r";
		} else if (r < 0.9368421052631578) {
			return "u";
		} else if (r < 0.9578947368421051) {
			return "s";
		} else if (r < 0.9789473684210525) {
			return "y";
		} else if (r < 0.9894736842105262) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "w" && str[str.length-1] == "r") {
		if (r < 0.40027137042062416) {
			return "i";
		} else if (r < 0.6146540027137042) {
			return "a";
		} else if (r < 0.8086838534599728) {
			return "e";
		} else if (r < 0.9511533242876526) {
			return "o";
		} else if (r < 0.9905020352781547) {
			return "y";
		} else if (r < 0.9972862957937585) {
			return "u";
		} else if (r < 0.9986431478968792) {
			return "d";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "s") {
		if (r < 0.19946091644204852) {
			return "e";
		} else if (r < 0.3450134770889488) {
			return "h";
		} else if (r < 0.48247978436657685) {
			return "t";
		} else if (r < 0.5849056603773585) {
			return "i";
		} else if (r < 0.6738544474393531) {
			return "o";
		} else if (r < 0.7277628032345014) {
			return "m";
		} else if (r < 0.7816711590296497) {
			return "p";
		} else if (r < 0.8140161725067386) {
			return "l";
		} else if (r < 0.8409703504043128) {
			return "w";
		} else if (r < 0.8625336927223721) {
			return "a";
		} else if (r < 0.8840970350404315) {
			return "b";
		} else if (r < 0.9029649595687333) {
			return "u";
		} else if (r < 0.9218328840970352) {
			return "y";
		} else if (r < 0.9380053908355797) {
			return "c";
		} else if (r < 0.9514824797843667) {
			return "k";
		} else if (r < 0.9649595687331538) {
			return "r";
		} else if (r < 0.9757412398921834) {
			return "s";
		} else if (r < 0.9838274932614557) {
			return "g";
		} else if (r < 0.9892183288409705) {
			return "f";
		} else if (r < 0.9946091644204853) {
			return "d";
		} else if (r < 0.9973045822102428) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "t") {
		if (r < 0.3472222222222222) {
			return "h";
		} else if (r < 0.5208333333333333) {
			return "e";
		} else if (r < 0.6874999999999999) {
			return "o";
		} else if (r < 0.8124999999999999) {
			return "i";
		} else if (r < 0.8888888888888888) {
			return "a";
		} else if (r < 0.923611111111111) {
			return "u";
		} else if (r < 0.9444444444444444) {
			return "y";
		} else if (r < 0.9652777777777778) {
			return "s";
		} else if (r < 0.9861111111111112) {
			return "r";
		} else if (r < 0.9930555555555556) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "u") {
		if (r < 0.3302752293577982) {
			return "r";
		} else if (r < 0.48623853211009177) {
			return "n";
		} else if (r < 0.5963302752293578) {
			return "m";
		} else if (r < 0.6788990825688073) {
			return "l";
		} else if (r < 0.7431192660550459) {
			return "t";
		} else if (r < 0.8073394495412844) {
			return "s";
		} else if (r < 0.8623853211009175) {
			return "p";
		} else if (r < 0.9174311926605505) {
			return "z";
		} else if (r < 0.963302752293578) {
			return "d";
		} else if (r < 0.981651376146789) {
			return "g";
		} else if (r < 0.9908256880733946) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "v") {
		if (r < 0.5) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "w") {
		if (r < 0.6463414634146342) {
			return "o";
		} else if (r < 0.7682926829268293) {
			return "e";
		} else if (r < 0.8658536585365854) {
			return "a";
		} else if (r < 0.9390243902439024) {
			return "i";
		} else if (r < 0.975609756097561) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "y") {
		if (r < 0.32978723404255317) {
			return "e";
		} else if (r < 0.45744680851063824) {
			return "n";
		} else if (r < 0.553191489361702) {
			return "c";
		} else if (r < 0.6382978723404255) {
			return "a";
		} else if (r < 0.702127659574468) {
			return "l";
		} else if (r < 0.7553191489361701) {
			return "t";
		} else if (r < 0.8085106382978723) {
			return "v";
		} else if (r < 0.8510638297872339) {
			return "k";
		} else if (r < 0.8829787234042552) {
			return "s";
		} else if (r < 0.9042553191489361) {
			return "d";
		} else if (r < 0.925531914893617) {
			return "r";
		} else if (r < 0.9468085106382979) {
			return "h";
		} else if (r < 0.9680851063829787) {
			return "o";
		} else if (r < 0.9787234042553191) {
			return "b";
		} else if (r < 0.9893617021276595) {
			return "m";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "w" && str[str.length-1] == "z") {
		if (r < 0.5) {
			return "i";
		} else if (r < 0.75) {
			return "e";
		} else if (r < 0.9) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "a") {
		if (r < 0.23300970873786409) {
			return "n";
		} else if (r < 0.36116504854368936) {
			return "l";
		} else if (r < 0.47572815533980584) {
			return "t";
		} else if (r < 0.5815533980582525) {
			return "m";
		} else if (r < 0.6844660194174758) {
			return "c";
		} else if (r < 0.7524271844660194) {
			return "g";
		} else if (r < 0.7951456310679612) {
			return "s";
		} else if (r < 0.8368932038834952) {
			return "b";
		} else if (r < 0.8718446601941748) {
			return "r";
		} else if (r < 0.9000000000000001) {
			return "p";
		} else if (r < 0.9262135922330098) {
			return "d";
		} else if (r < 0.9495145631067963) {
			return "h";
		} else if (r < 0.9679611650485438) {
			return "z";
		} else if (r < 0.9786407766990293) {
			return "e";
		} else if (r < 0.9873786407766991) {
			return "u";
		} else if (r < 0.992233009708738) {
			return "i";
		} else if (r < 0.9951456310679613) {
			return "v";
		} else if (r < 0.9970873786407768) {
			return "f";
		} else if (r < 0.9990291262135923) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "b") {
		if (r < 0.21951219512195122) {
			return "o";
		} else if (r < 0.41463414634146345) {
			return "e";
		} else if (r < 0.5853658536585367) {
			return "u";
		} else if (r < 0.7317073170731708) {
			return "i";
		} else if (r < 0.853658536585366) {
			return "a";
		} else if (r < 0.926829268292683) {
			return "l";
		} else if (r < 0.9756097560975611) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "c") {
		if (r < 0.21112929623567922) {
			return "e";
		} else if (r < 0.3944353518821604) {
			return "i";
		} else if (r < 0.5564648117839607) {
			return "u";
		} else if (r < 0.6677577741407528) {
			return "l";
		} else if (r < 0.7757774140752863) {
			return "o";
		} else if (r < 0.8641571194762683) {
			return "r";
		} else if (r < 0.9361702127659574) {
			return "a";
		} else if (r < 0.9918166939443535) {
			return "h";
		} else if (r < 0.9983633387888706) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "d") {
		if (r < 0.625) {
			return "i";
		} else if (r < 0.8125) {
			return "e";
		} else if (r < 0.9375) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "e") {
		if (r < 0.2696214219759926) {
			return "s";
		} else if (r < 0.46722068328716526) {
			return "r";
		} else if (r < 0.6371191135734071) {
			return "n";
		} else if (r < 0.7885503231763619) {
			return "d";
		} else if (r < 0.8670360110803323) {
			return "c";
		} else if (r < 0.9445983379501385) {
			return "m";
		} else if (r < 0.9584487534626038) {
			return "g";
		} else if (r < 0.9676823638042474) {
			return "t";
		} else if (r < 0.9759926131117267) {
			return "o";
		} else if (r < 0.984302862419206) {
			return "a";
		} else if (r < 0.9889196675900277) {
			return "l";
		} else if (r < 0.9926131117266851) {
			return "q";
		} else if (r < 0.9953831948291781) {
			return "b";
		} else if (r < 0.9981532779316712) {
			return "y";
		} else if (r < 0.9990766389658355) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "f") {
		if (r < 0.4146341463414634) {
			return "o";
		} else if (r < 0.7073170731707317) {
			return "i";
		} else if (r < 0.8292682926829268) {
			return "l";
		} else if (r < 0.9024390243902438) {
			return "e";
		} else if (r < 0.9756097560975608) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "g") {
		if (r < 0.38461538461538464) {
			return "a";
		} else if (r < 0.5384615384615385) {
			return "o";
		} else if (r < 0.6923076923076924) {
			return "l";
		} else if (r < 0.8461538461538463) {
			return "u";
		} else if (r < 0.9230769230769231) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "h") {
		if (r < 0.39473684210526316) {
			return "a";
		} else if (r < 0.6842105263157895) {
			return "i";
		} else if (r < 0.8368421052631579) {
			return "o";
		} else if (r < 0.9210526315789475) {
			return "u";
		} else if (r < 0.9842105263157895) {
			return "e";
		} else if (r < 0.9894736842105264) {
			return "b";
		} else if (r < 0.9947368421052633) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "i") {
		if (r < 0.1456082667919211) {
			return "n";
		} else if (r < 0.2841709722874589) {
			return "s";
		} else if (r < 0.402536402066698) {
			return "c";
		} else if (r < 0.5152653828088305) {
			return "d";
		} else if (r < 0.6045091592296854) {
			return "a";
		} else if (r < 0.6838891498356037) {
			return "l";
		} else if (r < 0.745420385157351) {
			return "o";
		} else if (r < 0.8031939877876939) {
			return "m";
		} else if (r < 0.8525129168623768) {
			return "t";
		} else if (r < 0.8868013151714421) {
			return "e";
		} else if (r < 0.917332080789103) {
			return "p";
		} else if (r < 0.9365899483325506) {
			return "v";
		} else if (r < 0.9553781117895727) {
			return "b";
		} else if (r < 0.971817754814467) {
			return "g";
		} else if (r < 0.9863785814936591) {
			return "f";
		} else if (r < 0.9924847346171912) {
			return "i";
		} else if (r < 0.9953029591357445) {
			return "r";
		} else if (r < 0.9967120713950212) {
			return "u";
		} else if (r < 0.9981211836542978) {
			return "x";
		} else if (r < 0.9990605918271489) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "k") {
		if (r < 0.5) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "l") {
		if (r < 0.3898305084745763) {
			return "e";
		} else if (r < 0.6779661016949152) {
			return "y";
		} else if (r < 0.9322033898305084) {
			return "i";
		} else if (r < 0.9661016949152542) {
			return "a";
		} else if (r < 0.983050847457627) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "m") {
		if (r < 0.6363636363636364) {
			return "a";
		} else if (r < 0.8787878787878788) {
			return "e";
		} else if (r < 0.9696969696969697) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "n") {
		return "e";
	} else if (str[str.length-2] == "x" && str[str.length-1] == "o") {
		if (r < 0.1952191235059761) {
			return "n";
		} else if (r < 0.3107569721115538) {
			return "r";
		} else if (r < 0.40637450199203184) {
			return "s";
		} else if (r < 0.50066401062417) {
			return "p";
		} else if (r < 0.5936254980079682) {
			return "t";
		} else if (r < 0.6653386454183268) {
			return "c";
		} else if (r < 0.7330677290836654) {
			return "d";
		} else if (r < 0.7928286852589641) {
			return "m";
		} else if (r < 0.8525896414342629) {
			return "g";
		} else if (r < 0.9110225763612216) {
			return "l";
		} else if (r < 0.9335989375830012) {
			return "b";
		} else if (r < 0.9508632138114208) {
			return "i";
		} else if (r < 0.9641434262948205) {
			return "a";
		} else if (r < 0.9747675962815403) {
			return "e";
		} else if (r < 0.9840637450199201) {
			return "f";
		} else if (r < 0.98804780876494) {
			return "v";
		} else if (r < 0.9920318725099599) {
			return "z";
		} else if (r < 0.9946879150066399) {
			return "y";
		} else if (r < 0.9973439575033198) {
			return "u";
		} else if (r < 0.9986719787516598) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "p") {
		if (r < 0.3038105046343975) {
			return "e";
		} else if (r < 0.5108135942327497) {
			return "l";
		} else if (r < 0.6570545829042225) {
			return "o";
		} else if (r < 0.7796086508753862) {
			return "r";
		} else if (r < 0.8836251287332647) {
			return "a";
		} else if (r < 0.9423274974253347) {
			return "i";
		} else if (r < 0.9938208032955715) {
			return "u";
		} else if (r < 0.995880535530381) {
			return "t";
		} else if (r < 0.9969104016477858) {
			return "d";
		} else if (r < 0.9979402677651905) {
			return "y";
		} else if (r < 0.9989701338825953) {
			return "w";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "x" && str[str.length-1] == "r") {
		if (r < 0.36363636363636365) {
			return "a";
		} else if (r < 0.5454545454545454) {
			return "o";
		} else if (r < 0.7272727272727273) {
			return "e";
		} else if (r < 0.8181818181818182) {
			return "i";
		} else if (r < 0.9090909090909092) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "s") {
		if (r < 0.21649484536082475) {
			return "e";
		} else if (r < 0.35051546391752575) {
			return "u";
		} else if (r < 0.4742268041237113) {
			return "c";
		} else if (r < 0.5876288659793815) {
			return "i";
		} else if (r < 0.6804123711340206) {
			return "a";
		} else if (r < 0.7628865979381444) {
			return "t";
		} else if (r < 0.8350515463917526) {
			return "h";
		} else if (r < 0.8969072164948454) {
			return "o";
		} else if (r < 0.9381443298969072) {
			return "w";
		} else if (r < 0.9690721649484536) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "t") {
		if (r < 0.44035087719298244) {
			return "r";
		} else if (r < 0.6929824561403508) {
			return "e";
		} else if (r < 0.7859649122807016) {
			return "i";
		} else if (r < 0.8666666666666666) {
			return "u";
		} else if (r < 0.9245614035087718) {
			return "o";
		} else if (r < 0.9675438596491227) {
			return "a";
		} else if (r < 0.9736842105263157) {
			return "h";
		} else if (r < 0.9798245614035087) {
			return "l";
		} else if (r < 0.9859649122807017) {
			return "s";
		} else if (r < 0.9912280701754386) {
			return "y";
		} else if (r < 0.9964912280701754) {
			return "b";
		} else if (r < 0.9973684210526316) {
			return "g";
		} else if (r < 0.9982456140350877) {
			return "d";
		} else if (r < 0.9991228070175439) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "u") {
		if (r < 0.3028169014084507) {
			return "a";
		} else if (r < 0.556338028169014) {
			return "r";
		} else if (r < 0.6549295774647886) {
			return "l";
		} else if (r < 0.7288732394366196) {
			return "s";
		} else if (r < 0.7887323943661971) {
			return "b";
		} else if (r < 0.8380281690140845) {
			return "o";
		} else if (r < 0.8873239436619719) {
			return "d";
		} else if (r < 0.926056338028169) {
			return "v";
		} else if (r < 0.9507042253521126) {
			return "p";
		} else if (r < 0.9718309859154929) {
			return "m";
		} else if (r < 0.9929577464788731) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "v") {
		return "i";
	} else if (str[str.length-2] == "x" && str[str.length-1] == "w") {
		if (r < 0.4166666666666667) {
			return "o";
		} else if (r < 0.6666666666666667) {
			return "e";
		} else if (r < 0.8611111111111112) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "x") {
		if (r < 0.5714285714285714) {
			return "i";
		} else if (r < 0.7142857142857142) {
			return "o";
		} else if (r < 0.857142857142857) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "y") {
		if (r < 0.41029900332225916) {
			return "l";
		} else if (r < 0.5149501661129569) {
			return "g";
		} else if (r < 0.5797342192691031) {
			return "s";
		} else if (r < 0.6445182724252493) {
			return "c";
		} else if (r < 0.6960132890365449) {
			return "p";
		} else if (r < 0.744186046511628) {
			return "t";
		} else if (r < 0.7840531561461795) {
			return "a";
		} else if (r < 0.8222591362126247) {
			return "b";
		} else if (r < 0.8604651162790699) {
			return "r";
		} else if (r < 0.8870431893687708) {
			return "m";
		} else if (r < 0.9086378737541528) {
			return "h";
		} else if (r < 0.9269102990033222) {
			return "n";
		} else if (r < 0.9418604651162791) {
			return "d";
		} else if (r < 0.9534883720930233) {
			return "u";
		} else if (r < 0.9634551495016611) {
			return "o";
		} else if (r < 0.9734219269102989) {
			return "e";
		} else if (r < 0.9817275747508305) {
			return "i";
		} else if (r < 0.9867109634551494) {
			return "f";
		} else if (r < 0.9916943521594683) {
			return "q";
		} else if (r < 0.995016611295681) {
			return "k";
		} else if (r < 0.9983388704318936) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "x" && str[str.length-1] == "z") {
		return "o";
	} else if (str[str.length-2] == "y" && str[str.length-1] == "a") {
		if (r < 0.28131524008350733) {
			return "n";
		} else if (r < 0.4290187891440501) {
			return "r";
		} else if (r < 0.5751565762004176) {
			return "l";
		} else if (r < 0.634133611691023) {
			return "b";
		} else if (r < 0.6863256784968685) {
			return "c";
		} else if (r < 0.7265135699373696) {
			return "s";
		} else if (r < 0.7640918580375784) {
			return "t";
		} else if (r < 0.7954070981210857) {
			return "m";
		} else if (r < 0.825678496868476) {
			return "g";
		} else if (r < 0.855427974947808) {
			return "k";
		} else if (r < 0.8794363256784969) {
			return "w";
		} else if (r < 0.902400835073069) {
			return "h";
		} else if (r < 0.9237995824634657) {
			return "d";
		} else if (r < 0.9420668058455116) {
			return "p";
		} else if (r < 0.9582463465553237) {
			return "u";
		} else if (r < 0.9697286012526097) {
			return "e";
		} else if (r < 0.9744258872651358) {
			return "z";
		} else if (r < 0.9791231732776619) {
			return "f";
		} else if (r < 0.9832985386221295) {
			return "o";
		} else if (r < 0.9874739039665971) {
			return "i";
		} else if (r < 0.9916492693110647) {
			return "j";
		} else if (r < 0.9953027139874738) {
			return "x";
		} else if (r < 0.9973903966597076) {
			return "q";
		} else if (r < 0.9984342379958245) {
			return "y";
		} else if (r < 0.9994780793319414) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "b") {
		if (r < 0.20210526315789473) {
			return "a";
		} else if (r < 0.368421052631579) {
			return "e";
		} else if (r < 0.528421052631579) {
			return "o";
		} else if (r < 0.6736842105263159) {
			return "r";
		} else if (r < 0.7726315789473686) {
			return "u";
		} else if (r < 0.8673684210526317) {
			return "i";
		} else if (r < 0.9242105263157896) {
			return "l";
		} else if (r < 0.9789473684210528) {
			return "d";
		} else if (r < 0.993684210526316) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "c") {
		if (r < 0.3013274336283186) {
			return "h";
		} else if (r < 0.49690265486725665) {
			return "l";
		} else if (r < 0.6685840707964602) {
			return "o";
		} else if (r < 0.8154867256637168) {
			return "e";
		} else if (r < 0.8707964601769912) {
			return "a";
		} else if (r < 0.9119469026548673) {
			return "i";
		} else if (r < 0.9482300884955753) {
			return "t";
		} else if (r < 0.9690265486725664) {
			return "n";
		} else if (r < 0.9818584070796461) {
			return "u";
		} else if (r < 0.9915929203539824) {
			return "r";
		} else if (r < 0.9995575221238939) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "d") {
		if (r < 0.7091280653950953) {
			return "r";
		} else if (r < 0.8092643051771117) {
			return "e";
		} else if (r < 0.8753405994550408) {
			return "o";
		} else if (r < 0.9407356948228882) {
			return "a";
		} else if (r < 0.9768392370572206) {
			return "i";
		} else if (r < 0.986376021798365) {
			return "n";
		} else if (r < 0.9904632152588555) {
			return "d";
		} else if (r < 0.9938692098092642) {
			return "s";
		} else if (r < 0.9965940054495912) {
			return "u";
		} else if (r < 0.9986376021798364) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "e") {
		if (r < 0.2158872517616912) {
			return "r";
		} else if (r < 0.40550928891736066) {
			return "l";
		} else if (r < 0.5765534913516976) {
			return "d";
		} else if (r < 0.6969891095451634) {
			return "s";
		} else if (r < 0.7514413837283792) {
			return "a";
		} else if (r < 0.8020499679692504) {
			return "n";
		} else if (r < 0.8443305573350416) {
			return "t";
		} else if (r < 0.8718770019218449) {
			return "m";
		} else if (r < 0.8885329916720051) {
			return "e";
		} else if (r < 0.9032671364509929) {
			return "b";
		} else if (r < 0.9173606662395899) {
			return "w";
		} else if (r < 0.9308135810377962) {
			return "h";
		} else if (r < 0.9417040358744394) {
			return "o";
		} else if (r < 0.9519538757206918) {
			return "p";
		} else if (r < 0.9622037155669442) {
			return "c";
		} else if (r < 0.9718129404228057) {
			return "u";
		} else if (r < 0.9801409352978858) {
			return "g";
		} else if (r < 0.9865470852017936) {
			return "i";
		} else if (r < 0.9916720051249198) {
			return "y";
		} else if (r < 0.9955156950672645) {
			return "z";
		} else if (r < 0.9980781550288276) {
			return "f";
		} else if (r < 0.9993593850096091) {
			return "v";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "f") {
		if (r < 0.2222222222222222) {
			return "u";
		} else if (r < 0.43999999999999995) {
			return "i";
		} else if (r < 0.6133333333333333) {
			return "o";
		} else if (r < 0.7511111111111111) {
			return "l";
		} else if (r < 0.8622222222222222) {
			return "a";
		} else if (r < 0.92) {
			return "y";
		} else if (r < 0.9688888888888889) {
			return "e";
		} else if (r < 0.9822222222222222) {
			return "r";
		} else if (r < 0.991111111111111) {
			return "t";
		} else if (r < 0.9955555555555555) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "g") {
		if (r < 0.30947136563876654) {
			return "o";
		} else if (r < 0.4581497797356828) {
			return "i";
		} else if (r < 0.6024229074889869) {
			return "e";
		} else if (r < 0.7081497797356829) {
			return "a";
		} else if (r < 0.8061674008810574) {
			return "r";
		} else if (r < 0.8634361233480178) {
			return "m";
		} else if (r < 0.9085903083700442) {
			return "l";
		} else if (r < 0.9438325991189429) {
			return "d";
		} else if (r < 0.9680616740088107) {
			return "n";
		} else if (r < 0.9867841409691631) {
			return "y";
		} else if (r < 0.9955947136563877) {
			return "u";
		} else if (r < 0.998898678414097) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "h") {
		if (r < 0.39712918660287083) {
			return "o";
		} else if (r < 0.722488038277512) {
			return "e";
		} else if (r < 0.8708133971291866) {
			return "a";
		} else if (r < 0.9330143540669856) {
			return "y";
		} else if (r < 0.9712918660287081) {
			return "i";
		} else if (r < 0.9808612440191388) {
			return "u";
		} else if (r < 0.9856459330143541) {
			return "m";
		} else if (r < 0.9904306220095694) {
			return "t";
		} else if (r < 0.9952153110047848) {
			return "n";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "i") {
		if (r < 0.6727145847871598) {
			return "n";
		} else if (r < 0.8415910676901606) {
			return "s";
		} else if (r < 0.8757850662944872) {
			return "e";
		} else if (r < 0.9078855547801815) {
			return "t";
		} else if (r < 0.9330076762037683) {
			return "d";
		} else if (r < 0.9462665736217726) {
			return "a";
		} else if (r < 0.9553384508025122) {
			return "z";
		} else if (r < 0.9644103279832519) {
			return "r";
		} else if (r < 0.9720865317515701) {
			return "c";
		} else if (r < 0.9790648988136775) {
			return "p";
		} else if (r < 0.9839497557571527) {
			return "m";
		} else if (r < 0.9881367759944172) {
			return "i";
		} else if (r < 0.991625959525471) {
			return "o";
		} else if (r < 0.9944173063503139) {
			return "k";
		} else if (r < 0.9972086531751568) {
			return "l";
		} else if (r < 0.9986043265875784) {
			return "g";
		} else if (r < 0.9993021632937891) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "j") {
		return "a";
	} else if (str[str.length-2] == "y" && str[str.length-1] == "k") {
		if (r < 0.44871794871794873) {
			return "e";
		} else if (r < 0.6538461538461539) {
			return "i";
		} else if (r < 0.7692307692307693) {
			return "n";
		} else if (r < 0.8205128205128206) {
			return "a";
		} else if (r < 0.8717948717948719) {
			return "o";
		} else if (r < 0.8974358974358976) {
			return "l";
		} else if (r < 0.9230769230769232) {
			return "u";
		} else if (r < 0.9487179487179489) {
			return "t";
		} else if (r < 0.9743589743589746) {
			return "h";
		} else if (r < 0.9871794871794873) {
			return "s";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "l") {
		if (r < 0.19695639449809774) {
			return "i";
		} else if (r < 0.3936201346210126) {
			return "o";
		} else if (r < 0.5873573309920983) {
			return "l";
		} else if (r < 0.7377816798361135) {
			return "e";
		} else if (r < 0.8838162130523851) {
			return "a";
		} else if (r < 0.9101551068188469) {
			return "s";
		} else if (r < 0.9288849868305531) {
			return "u";
		} else if (r < 0.9438103599648815) {
			return "y";
		} else if (r < 0.9569798068481123) {
			return "v";
		} else if (r < 0.9642961662276851) {
			return "p";
		} else if (r < 0.9704419081065262) {
			return "g";
		} else if (r < 0.9757096868598185) {
			return "c";
		} else if (r < 0.980684811237928) {
			return "m";
		} else if (r < 0.9856599356160374) {
			return "t";
		} else if (r < 0.9897570968685981) {
			return "b";
		} else if (r < 0.9929762949956101) {
			return "h";
		} else if (r < 0.9953175299970735) {
			return "d";
		} else if (r < 0.9970734562481709) {
			return "k";
		} else if (r < 0.9982440737489026) {
			return "f";
		} else if (r < 0.9991220368744513) {
			return "n";
		} else if (r < 0.9997073456248171) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "m") {
		if (r < 0.22108408023900983) {
			return "p";
		} else if (r < 0.39180537772087065) {
			return "e";
		} else if (r < 0.5505761843790012) {
			return "a";
		} else if (r < 0.6773367477592829) {
			return "o";
		} else if (r < 0.7656850192061458) {
			return "i";
		} else if (r < 0.836534357661118) {
			return "b";
		} else if (r < 0.9026888604353391) {
			return "n";
		} else if (r < 0.9475032010243276) {
			return "m";
		} else if (r < 0.9667093469910369) {
			return "y";
		} else if (r < 0.9829278702518137) {
			return "u";
		} else if (r < 0.9914639351259068) {
			return "s";
		} else if (r < 0.9944515578318394) {
			return "t";
		} else if (r < 0.9965855740503626) {
			return "r";
		} else if (r < 0.9982927870251812) {
			return "l";
		} else if (r < 0.9991463935125905) {
			return "k";
		} else if (r < 0.9995731967562952) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "n") {
		if (r < 0.20247568523430592) {
			return "a";
		} else if (r < 0.35145888594164454) {
			return "e";
		} else if (r < 0.48143236074270557) {
			return "o";
		} else if (r < 0.5981432360742706) {
			return "c";
		} else if (r < 0.7130857648099027) {
			return "g";
		} else if (r < 0.8054818744473917) {
			return "i";
		} else if (r < 0.8978779840848807) {
			return "t";
		} else if (r < 0.9460654288240496) {
			return "d";
		} else if (r < 0.9562334217506633) {
			return "u";
		} else if (r < 0.9659593280282937) {
			return "x";
		} else if (r < 0.9752431476569409) {
			return "y";
		} else if (r < 0.9827586206896552) {
			return "n";
		} else if (r < 0.9902740937223696) {
			return "s";
		} else if (r < 0.993368700265252) {
			return "k";
		} else if (r < 0.9951370468611849) {
			return "h";
		} else if (r < 0.9964633068081344) {
			return "p";
		} else if (r < 0.9973474801061009) {
			return "f";
		} else if (r < 0.9982316534040673) {
			return "r";
		} else if (r < 0.9986737400530504) {
			return "z";
		} else if (r < 0.9991158267020336) {
			return "l";
		} else if (r < 0.9995579133510167) {
			return "b";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "o") {
		if (r < 0.13845223700120918) {
			return "n";
		} else if (r < 0.25876662636033854) {
			return "p";
		} else if (r < 0.3476420798065296) {
			return "t";
		} else if (r < 0.4280532043530834) {
			return "s";
		} else if (r < 0.5030229746070133) {
			return "u";
		} else if (r < 0.5671100362756952) {
			return "l";
		} else if (r < 0.6239419588875453) {
			return "g";
		} else if (r < 0.6795646916565901) {
			return "m";
		} else if (r < 0.7327690447400241) {
			return "c";
		} else if (r < 0.7823458282950423) {
			return "d";
		} else if (r < 0.8301088270858524) {
			return "r";
		} else if (r < 0.871825876662636) {
			return "i";
		} else if (r < 0.9068923821039903) {
			return "k";
		} else if (r < 0.9207980652962514) {
			return "x";
		} else if (r < 0.9340991535671099) {
			return "w";
		} else if (r < 0.9461910519951632) {
			return "f";
		} else if (r < 0.9582829504232164) {
			return "b";
		} else if (r < 0.9703748488512697) {
			return "h";
		} else if (r < 0.9806529625151149) {
			return "e";
		} else if (r < 0.9860943168077388) {
			return "v";
		} else if (r < 0.9897218863361548) {
			return "z";
		} else if (r < 0.9933494558645707) {
			return "a";
		} else if (r < 0.996372430471584) {
			return "o";
		} else if (r < 0.998186215235792) {
			return "j";
		} else if (r < 0.9993954050785973) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "p") {
		if (r < 0.32242489270386265) {
			return "e";
		} else if (r < 0.5437231759656652) {
			return "o";
		} else if (r < 0.6875) {
			return "h";
		} else if (r < 0.7795064377682404) {
			return "t";
		} else if (r < 0.8363733905579399) {
			return "i";
		} else if (r < 0.8741952789699571) {
			return "s";
		} else if (r < 0.9101394849785408) {
			return "n";
		} else if (r < 0.9423283261802575) {
			return "a";
		} else if (r < 0.970225321888412) {
			return "r";
		} else if (r < 0.9812231759656652) {
			return "y";
		} else if (r < 0.989538626609442) {
			return "l";
		} else if (r < 0.9965128755364806) {
			return "u";
		} else if (r < 0.9997317596566523) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "y" && str[str.length-1] == "r") {
		if (r < 0.2960199004975124) {
			return "o";
		} else if (r < 0.56318407960199) {
			return "i";
		} else if (r < 0.7278606965174129) {
			return "a";
		} else if (r < 0.8378109452736319) {
			return "e";
		} else if (r < 0.8776119402985075) {
			return "r";
		} else if (r < 0.8990049751243782) {
			return "t";
		} else if (r < 0.9203980099502488) {
			return "m";
		} else if (r < 0.9398009950248757) {
			return "u";
		} else if (r < 0.9517412935323384) {
			return "s";
		} else if (r < 0.9631840796019902) {
			return "h";
		} else if (r < 0.973134328358209) {
			return "y";
		} else if (r < 0.9815920398009951) {
			return "l";
		} else if (r < 0.9870646766169154) {
			return "n";
		} else if (r < 0.9905472636815921) {
			return "g";
		} else if (r < 0.9935323383084578) {
			return "p";
		} else if (r < 0.9960199004975125) {
			return "c";
		} else if (r < 0.9980099502487563) {
			return "d";
		} else if (r < 0.9990049751243781) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "s") {
		if (r < 0.3816507503410641) {
			return "t";
		} else if (r < 0.6538199181446112) {
			return "i";
		} else if (r < 0.7193042291950886) {
			return "e";
		} else if (r < 0.7827421555252387) {
			return "o";
		} else if (r < 0.8318553888130968) {
			return "a";
		} else if (r < 0.8608458390177353) {
			return "h";
		} else if (r < 0.8881309686221008) {
			return "p";
		} else if (r < 0.9130286493860844) {
			return "s";
		} else if (r < 0.9375852660300135) {
			return "m";
		} else if (r < 0.9553206002728512) {
			return "c";
		} else if (r < 0.9686221009549794) {
			return "u";
		} else if (r < 0.9788540245566165) {
			return "y";
		} else if (r < 0.9846521145975442) {
			return "l";
		} else if (r < 0.9880627557980899) {
			return "g";
		} else if (r < 0.991132332878581) {
			return "n";
		} else if (r < 0.993519781718963) {
			return "k";
		} else if (r < 0.995907230559345) {
			return "b";
		} else if (r < 0.9976125511596179) {
			return "f";
		} else if (r < 0.9989768076398362) {
			return "w";
		} else if (r < 0.9996589358799454) {
			return "r";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "t") {
		if (r < 0.2543538038496792) {
			return "o";
		} else if (r < 0.5022914757103575) {
			return "h";
		} else if (r < 0.6952337305224565) {
			return "i";
		} else if (r < 0.8835930339138406) {
			return "e";
		} else if (r < 0.9252978918423466) {
			return "r";
		} else if (r < 0.9628780934922091) {
			return "a";
		} else if (r < 0.9807516040329973) {
			return "t";
		} else if (r < 0.9908340971585702) {
			return "u";
		} else if (r < 0.998166819431714) {
			return "y";
		} else if (r < 0.9986251145737856) {
			return "m";
		} else if (r < 0.9990834097158571) {
			return "s";
		} else if (r < 0.9995417048579286) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "u") {
		if (r < 0.25742574257425743) {
			return "r";
		} else if (r < 0.3712871287128713) {
			return "c";
		} else if (r < 0.4752475247524752) {
			return "n";
		} else if (r < 0.5594059405940593) {
			return "k";
		} else if (r < 0.6386138613861385) {
			return "m";
		} else if (r < 0.7178217821782177) {
			return "l";
		} else if (r < 0.7871287128712869) {
			return "g";
		} else if (r < 0.8465346534653464) {
			return "s";
		} else if (r < 0.8811881188118811) {
			return "p";
		} else if (r < 0.9009900990099009) {
			return "b";
		} else if (r < 0.9207920792079207) {
			return "a";
		} else if (r < 0.9306930693069306) {
			return "d";
		} else if (r < 0.9405940594059405) {
			return "e";
		} else if (r < 0.9504950495049505) {
			return "v";
		} else if (r < 0.9603960396039604) {
			return "t";
		} else if (r < 0.9702970297029703) {
			return "h";
		} else if (r < 0.9801980198019802) {
			return "q";
		} else if (r < 0.9900990099009901) {
			return "z";
		} else if (r < 0.995049504950495) {
			return "f";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "v") {
		if (r < 0.42105263157894735) {
			return "e";
		} else if (r < 0.631578947368421) {
			return "i";
		} else if (r < 0.8421052631578947) {
			return "a";
		} else if (r < 0.9736842105263157) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "w") {
		if (r < 0.3311897106109325) {
			return "o";
		} else if (r < 0.5980707395498392) {
			return "a";
		} else if (r < 0.7395498392282959) {
			return "i";
		} else if (r < 0.8488745980707396) {
			return "e";
		} else if (r < 0.9228295819935692) {
			return "r";
		} else if (r < 0.9903536977491962) {
			return "h";
		} else if (r < 0.9935691318327975) {
			return "y";
		} else if (r < 0.9967845659163987) {
			return "c";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "x") {
		if (r < 0.543046357615894) {
			return "o";
		} else if (r < 0.814569536423841) {
			return "i";
		} else if (r < 0.9403973509933774) {
			return "e";
		} else if (r < 0.9933774834437086) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "y") {
		if (r < 0.25) {
			return "e";
		} else if (r < 0.5) {
			return "o";
		} else if (r < 0.75) {
			return "i";
		} else if (r < 0.875) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "y" && str[str.length-1] == "z") {
		if (r < 0.3870967741935484) {
			return "e";
		} else if (r < 0.6082949308755761) {
			return "a";
		} else if (r < 0.8110599078341014) {
			return "o";
		} else if (r < 0.9308755760368664) {
			return "i";
		} else if (r < 0.9769585253456222) {
			return "y";
		} else if (r < 0.990783410138249) {
			return "z";
		} else if (r < 0.9953917050691246) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "a") {
		if (r < 0.5490956072351422) {
			return "t";
		} else if (r < 0.6576227390180879) {
			return "b";
		} else if (r < 0.7631352282515074) {
			return "r";
		} else if (r < 0.8397932816537468) {
			return "n";
		} else if (r < 0.8656330749354005) {
			return "l";
		} else if (r < 0.888888888888889) {
			return "m";
		} else if (r < 0.905254091300603) {
			return "p";
		} else if (r < 0.9194659776055125) {
			return "s";
		} else if (r < 0.9328165374677003) {
			return "i";
		} else if (r < 0.9444444444444445) {
			return "d";
		} else if (r < 0.9534883720930234) {
			return "c";
		} else if (r < 0.9616709732988804) {
			return "g";
		} else if (r < 0.9689922480620157) {
			return "h";
		} else if (r < 0.97588285960379) {
			return "e";
		} else if (r < 0.9819121447028425) {
			return "f";
		} else if (r < 0.9875107665805342) {
			return "z";
		} else if (r < 0.9909560723514214) {
			return "k";
		} else if (r < 0.9931093884582258) {
			return "a";
		} else if (r < 0.9948320413436694) {
			return "v";
		} else if (r < 0.9961240310077522) {
			return "u";
		} else if (r < 0.9974160206718349) {
			return "x";
		} else if (r < 0.9987080103359176) {
			return "y";
		} else if (r < 0.9995693367786394) {
			return "q";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "b") {
		if (r < 0.42857142857142855) {
			return "a";
		} else if (r < 0.6190476190476191) {
			return "e";
		} else if (r < 0.7619047619047619) {
			return "u";
		} else if (r < 0.9047619047619047) {
			return "o";
		} else if (r < 0.9523809523809523) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "c") {
		if (r < 0.5625) {
			return "a";
		} else if (r < 0.75) {
			return "h";
		} else if (r < 0.875) {
			return "e";
		} else if (r < 0.9375) {
			return "l";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "d") {
		if (r < 0.3684210526315789) {
			return "a";
		} else if (r < 0.6842105263157894) {
			return "i";
		} else if (r < 0.7894736842105262) {
			return "e";
		} else if (r < 0.894736842105263) {
			return "u";
		} else if (r < 0.9473684210526314) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "e") {
		if (r < 0.43524053515513805) {
			return "d";
		} else if (r < 0.6268146883005978) {
			return "r";
		} else if (r < 0.7810987759749503) {
			return "s";
		} else if (r < 0.8556789069171649) {
			return "n";
		} else if (r < 0.8838599487617421) {
			return "l";
		} else if (r < 0.9020779960148022) {
			return "m";
		} else if (r < 0.9200113862795332) {
			return "a";
		} else if (r < 0.9333902647309992) {
			return "t";
		} else if (r < 0.945915172217478) {
			return "b";
		} else if (r < 0.9555935098206662) {
			return "e";
		} else if (r < 0.9649871904355253) {
			return "u";
		} else if (r < 0.9718189581554229) {
			return "p";
		} else if (r < 0.9777967549103331) {
			return "c";
		} else if (r < 0.9832052376885854) {
			return "i";
		} else if (r < 0.9869057785368632) {
			return "o";
		} else if (r < 0.990321662396812) {
			return "w";
		} else if (r < 0.9928835752917735) {
			return "f";
		} else if (r < 0.995160831198406) {
			return "y";
		} else if (r < 0.9971534301167094) {
			return "k";
		} else if (r < 0.9985767150583548) {
			return "h";
		} else if (r < 0.9991460290350129) {
			return "v";
		} else if (r < 0.9997153430116711) {
			return "g";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "f") {
		if (r < 0.6666666666666666) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "g") {
		if (r < 0.5555555555555556) {
			return "i";
		} else if (r < 0.6666666666666667) {
			return "a";
		} else if (r < 0.7777777777777779) {
			return "l";
		} else if (r < 0.8888888888888891) {
			return "h";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "h") {
		if (r < 0.21428571428571427) {
			return "a";
		} else if (r < 0.42857142857142855) {
			return "o";
		} else if (r < 0.5714285714285714) {
			return "y";
		} else if (r < 0.7142857142857142) {
			return "i";
		} else if (r < 0.7857142857142856) {
			return "e";
		} else if (r < 0.857142857142857) {
			return "n";
		} else if (r < 0.9285714285714284) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "i") {
		if (r < 0.7080581241743725) {
			return "n";
		} else if (r < 0.7758696609423161) {
			return "e";
		} else if (r < 0.808454425363276) {
			return "l";
		} else if (r < 0.8375165125495376) {
			return "t";
		} else if (r < 0.8643769264641127) {
			return "a";
		} else if (r < 0.884191985909291) {
			return "r";
		} else if (r < 0.9026860413914575) {
			return "m";
		} else if (r < 0.9180977542932628) {
			return "d";
		} else if (r < 0.9313077939233817) {
			return "g";
		} else if (r < 0.943637164244826) {
			return "p";
		} else if (r < 0.9537648612945838) {
			return "c";
		} else if (r < 0.963011889035667) {
			return "f";
		} else if (r < 0.971818582122413) {
			return "o";
		} else if (r < 0.979304271246147) {
			return "z";
		} else if (r < 0.9863496257155437) {
			return "b";
		} else if (r < 0.9920739762219286) {
			return "s";
		} else if (r < 0.9942756494936151) {
			return "u";
		} else if (r < 0.9960369881109643) {
			return "q";
		} else if (r < 0.9977983267283135) {
			return "k";
		} else if (r < 0.9982386613826508) {
			return "w";
		} else if (r < 0.9986789960369882) {
			return "i";
		} else if (r < 0.9991193306913255) {
			return "v";
		} else if (r < 0.9995596653456629) {
			return "x";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "j") {
		return "i";
	} else if (str[str.length-2] == "z" && str[str.length-1] == "k") {
		if (r < 0.35714285714285715) {
			return "r";
		} else if (r < 0.5714285714285714) {
			return "a";
		} else if (r < 0.7142857142857142) {
			return "o";
		} else if (r < 0.7857142857142856) {
			return "y";
		} else if (r < 0.857142857142857) {
			return "n";
		} else if (r < 0.9285714285714284) {
			return "e";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "l") {
		if (r < 0.7224334600760456) {
			return "e";
		} else if (r < 0.9125475285171102) {
			return "i";
		} else if (r < 0.9543726235741444) {
			return "y";
		} else if (r < 0.9809885931558935) {
			return "o";
		} else if (r < 0.9961977186311787) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "m") {
		if (r < 0.5714285714285714) {
			return "a";
		} else if (r < 0.7142857142857142) {
			return "o";
		} else if (r < 0.857142857142857) {
			return "e";
		} else if (r < 0.9285714285714284) {
			return "i";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "n") {
		if (r < 0.3333333333333333) {
			return "a";
		} else if (r < 0.5555555555555556) {
			return "e";
		} else if (r < 0.7777777777777778) {
			return "i";
		} else if (r < 0.8888888888888888) {
			return "k";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "o") {
		if (r < 0.23228346456692914) {
			return "o";
		} else if (r < 0.4015748031496063) {
			return "n";
		} else if (r < 0.4904386951631046) {
			return "a";
		} else if (r < 0.5742407199100112) {
			return "i";
		} else if (r < 0.6524184476940382) {
			return "l";
		} else if (r < 0.7114735658042745) {
			return "t";
		} else if (r < 0.7626546681664792) {
			return "p";
		} else if (r < 0.8014623172103488) {
			return "r";
		} else if (r < 0.8323959505061868) {
			return "s";
		} else if (r < 0.860517435320585) {
			return "m";
		} else if (r < 0.8847019122609675) {
			return "c";
		} else if (r < 0.908323959505062) {
			return "g";
		} else if (r < 0.9218222722159731) {
			return "e";
		} else if (r < 0.9347581552305964) {
			return "d";
		} else if (r < 0.9471316085489315) {
			return "u";
		} else if (r < 0.9578177727784029) {
			return "b";
		} else if (r < 0.9679415073115862) {
			return "x";
		} else if (r < 0.9769403824521936) {
			return "f";
		} else if (r < 0.9836895388076492) {
			return "h";
		} else if (r < 0.9898762654668168) {
			return "y";
		} else if (r < 0.9938132733408326) {
			return "q";
		} else if (r < 0.9977502812148483) {
			return "k";
		} else if (r < 0.9988751406074242) {
			return "v";
		} else if (r < 0.9994375703037122) {
			return "z";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "p") {
		if (r < 0.8125) {
			return "a";
		} else if (r < 0.875) {
			return "i";
		} else if (r < 0.9375) {
			return "y";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "q") {
		return "u";
	} else if (str[str.length-2] == "z" && str[str.length-1] == "r") {
		if (r < 0.45454545454545453) {
			return "a";
		} else if (r < 0.8181818181818181) {
			return "o";
		} else if (r < 0.9090909090909091) {
			return "u";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "s") {
		if (r < 0.5384615384615384) {
			return "c";
		} else if (r < 0.6923076923076923) {
			return "k";
		} else if (r < 0.8461538461538461) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "t") {
		if (r < 0.3076923076923077) {
			return "e";
		} else if (r < 0.46153846153846156) {
			return "h";
		} else if (r < 0.6153846153846154) {
			return "a";
		} else if (r < 0.7692307692307693) {
			return "l";
		} else if (r < 0.8461538461538463) {
			return "r";
		} else if (r < 0.9230769230769231) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "u") {
		if (r < 0.24603174603174602) {
			return "r";
		} else if (r < 0.4365079365079365) {
			return "l";
		} else if (r < 0.5158730158730158) {
			return "m";
		} else if (r < 0.5952380952380951) {
			return "c";
		} else if (r < 0.6666666666666665) {
			return "n";
		} else if (r < 0.7222222222222221) {
			return "z";
		} else if (r < 0.7619047619047618) {
			return "k";
		} else if (r < 0.8015873015873014) {
			return "t";
		} else if (r < 0.8412698412698411) {
			return "e";
		} else if (r < 0.8730158730158728) {
			return "b";
		} else if (r < 0.8968253968253966) {
			return "s";
		} else if (r < 0.9206349206349205) {
			return "g";
		} else if (r < 0.9365079365079363) {
			return "o";
		} else if (r < 0.9523809523809521) {
			return "i";
		} else if (r < 0.9682539682539679) {
			return "f";
		} else if (r < 0.9761904761904758) {
			return "h";
		} else if (r < 0.9841269841269837) {
			return "d";
		} else if (r < 0.9920634920634916) {
			return "p";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "v") {
		if (r < 0.6666666666666666) {
			return "o";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "w") {
		if (r < 0.7222222222222222) {
			return "i";
		} else if (r < 0.8888888888888888) {
			return "a";
		} else {
			return "a";
		}
	} else if (str[str.length-2] == "z" && str[str.length-1] == "y") {
		if (r < 0.5227272727272727) {
			return "g";
		} else if (r < 0.8551136363636364) {
			return "m";
		} else if (r < 0.90625) {
			return "l";
		} else if (r < 0.9232954545454546) {
			return "b";
		} else if (r < 0.9375) {
			return "i";
		} else if (r < 0.9488636363636364) {
			return "z";
		} else if (r < 0.9573863636363636) {
			return "r";
		} else if (r < 0.9659090909090909) {
			return "t";
		} else if (r < 0.9715909090909092) {
			return "a";
		} else if (r < 0.9772727272727274) {
			return "s";
		} else if (r < 0.9829545454545456) {
			return "d";
		} else if (r < 0.9886363636363639) {
			return "v";
		} else if (r < 0.9914772727272729) {
			return "c";
		} else if (r < 0.994318181818182) {
			return "w";
		} else if (r < 0.997159090909091) {
			return "h";
		} else {
			return "a";
		}
	} else {
		return "a";
	}
}