var Chart1;
var Chart2;

var p1_A0;
var p1_ST;
var p1_M;
var p1_A1;
var p1_A2;
var p1_P1;
var p1_P2;
var p1_PA;
var p1_PS;
var p1_P3;
var p1_PM;
var p1_RA;

var p2_B0;
var p2_ST;
var p2_M;
var p2_B1;
var p2_B2;
var p2_P1;
var p2_P2;
var p2_PB;
var p2_PS;
var p2_P3;
var p2_PM;
var p2_RB;

function DRAW() {
    Chart1 = new Tee.Chart("canvas1");
    Chart1.palette.colors[0] = "#800000"
    Chart1.palette.colors[1] = "#FF8080"
    Chart1.palette.colors[2] = "#FFC0C0"
    Chart1.palette.colors[3] = "#0000FF"
    Chart1.palette.colors[4] = "#00FF00"
    Chart1.palette.colors[5] = "#0000FF"
    Chart1.palette.colors[6] = "#00FF00"
    Chart1.palette.colors[7] = "#000080"
    Chart1.palette.colors[8] = "#0000C0"
    Chart1.palette.colors[9] = "#0000C0"
    Chart1.palette.colors[10] = "#00C000"
    Chart1.palette.colors[11] = "#C0C000"

    Chart2 = new Tee.Chart("canvas2");
    Chart2.palette.colors[0] = "#800000"
    Chart2.palette.colors[1] = "#FF8080"
    Chart2.palette.colors[2] = "#FFC0C0"
    Chart2.palette.colors[3] = "#0000FF"
    Chart2.palette.colors[4] = "#00FF00"
    Chart2.palette.colors[5] = "#0000FF"
    Chart2.palette.colors[6] = "#00FF00"
    Chart2.palette.colors[7] = "#008000"
    Chart2.palette.colors[8] = "#0000C0"
    Chart2.palette.colors[9] = "#0000C0"
    Chart2.palette.colors[10] = "#00C000"
    Chart2.palette.colors[11] = "#C0C000"

    p1_A0 = Chart1.addSeries(new Tee.Polar());
    p1_ST = Chart1.addSeries(new Tee.Polar());
    p1_M = Chart1.addSeries(new Tee.Polar());
    p1_A1 = Chart1.addSeries(new Tee.Polar());
    p1_A2 = Chart1.addSeries(new Tee.Polar());
    p1_P1 = Chart1.addSeries(new Tee.Polar());
    p1_P2 = Chart1.addSeries(new Tee.Polar());
    p1_PA = Chart1.addSeries(new Tee.Polar());
    p1_PS = Chart1.addSeries(new Tee.Polar());
    p1_P3 = Chart1.addSeries(new Tee.Polar());
    p1_PM = Chart1.addSeries(new Tee.Polar());
    p1_RA = Chart1.addSeries(new Tee.Polar());

    Chart1.series.items[0].title = "A0";
    Chart1.series.items[1].title = "Сим";
    Chart1.series.items[2].title = "Кос";
    Chart1.series.items[3].title = "A1";
    Chart1.series.items[4].title = "A2";
    Chart1.series.items[5].title = "P1";
    Chart1.series.items[6].title = "P2";
    Chart1.series.items[7].title = "PЛ";
    Chart1.series.items[8].title = "PСим";
    Chart1.series.items[9].title = "P3ф";
    Chart1.series.items[10].title = "PКос";
    Chart1.series.items[11].title = "RA";

    p1_PS.visible = false;
    p1_P3.visible = false;
    p1_PM.visible = false;
    p1_A1.visible = false;
    p1_A2.visible = false;
    p1_P1.visible = false;
    p1_P2.visible = false;
    p1_PA.visible = true;


    p2_B0 = Chart2.addSeries(new Tee.Polar());
    p2_ST = Chart2.addSeries(new Tee.Polar());
    p2_M = Chart2.addSeries(new Tee.Polar());
    p2_B1 = Chart2.addSeries(new Tee.Polar());
    p2_B2 = Chart2.addSeries(new Tee.Polar());
    p2_P1 = Chart2.addSeries(new Tee.Polar());
    p2_P2 = Chart2.addSeries(new Tee.Polar());
    p2_PB = Chart2.addSeries(new Tee.Polar());
    p2_PS = Chart2.addSeries(new Tee.Polar());
    p2_P3 = Chart2.addSeries(new Tee.Polar());
    p2_PM = Chart2.addSeries(new Tee.Polar());
    p2_RB = Chart2.addSeries(new Tee.Polar());

    Chart2.series.items[0].title = "B0";
    Chart2.series.items[1].title = "Сим";
    Chart2.series.items[2].title = "Кос";
    Chart2.series.items[3].title = "B1";
    Chart2.series.items[4].title = "B2";
    Chart2.series.items[5].title = "P1";
    Chart2.series.items[6].title = "P2";
    Chart2.series.items[7].title = "PП";
    Chart2.series.items[8].title = "PСим";
    Chart2.series.items[9].title = "P3ф";
    Chart2.series.items[10].title = "PКос";
    Chart2.series.items[11].title = "RB";

    p2_PS.visible = false;
    p2_P3.visible = false;
    p2_PM.visible = false;
    p2_B1.visible = false;
    p2_B2.visible = false;
    p2_P1.visible = false;
    p2_P2.visible = false;
    p2_PB.visible = true;

    p1_A0.style = "bar"
    p1_A0.pointer.visible = false;
    p1_ST.style = "bar"
    p1_ST.pointer.visible = false;
    p1_M.style = "bar"
    p1_M.pointer.visible = false;
    p1_A1.style = "bar"
    p1_A1.pointer.visible = false;
    p1_A2.style = "bar"
    p1_A2.pointer.visible = false;
    p1_P1.style = ""
    p1_P1.pointer.visible = true;
    p1_P1.pointer.style = "ellipse";
    p1_P1.pointer.width = 1
    p1_P1.pointer.height = 1
    p1_P2.style = ""
    p1_P2.pointer.visible = true;
    p1_P2.pointer.style = "ellipse";
    p1_P2.pointer.width = 1
    p1_P2.pointer.height = 1
    p1_PA.style = ""
    p1_PA.pointer.visible = true;
    p1_PA.pointer.style = "ellipse";
    p1_PA.pointer.width = 1
    p1_PA.pointer.height = 1
    p1_PS.style = ""
    p1_PS.pointer.visible = true;
    p1_PS.pointer.style = "ellipse";
    p1_PS.pointer.width = 1
    p1_PS.pointer.height = 1
    p1_P3.style = ""
    p1_P3.pointer.visible = true;
    p1_P3.pointer.style = "ellipse";
    p1_P3.pointer.width = 1
    p1_P3.pointer.height = 1
    p1_PM.style = ""
    p1_PM.pointer.visible = true;
    p1_PM.pointer.style = "ellipse";
    p1_PM.pointer.width = 1
    p1_PM.pointer.height = 1
    p1_RA.style = "bar"
    p1_RA.pointer.visible = false;

    p2_B0.style = "bar"
    p2_B0.pointer.visible = false;
    p2_ST.style = "bar"
    p2_ST.pointer.visible = false;
    p2_M.style = "bar"
    p2_M.pointer.visible = false;
    p2_B1.style = "bar"
    p2_B1.pointer.visible = false;
    p2_B2.style = "bar"
    p2_B2.pointer.visible = false;
    p2_P1.style = ""
    p2_P1.pointer.visible = true;
    p2_P1.pointer.style = "ellipse";
    p2_P1.pointer.width = 1
    p2_P1.pointer.height = 1
    p2_P2.style = ""
    p2_P2.pointer.visible = true;
    p2_P2.pointer.style = "ellipse";
    p2_P2.pointer.width = 1
    p2_P2.pointer.height = 1
    p2_PB.style = ""
    p2_PB.pointer.visible = true;
    p2_PB.pointer.style = "ellipse";
    p2_PB.pointer.width = 1
    p2_PB.pointer.height = 1
    p2_PS.style = ""
    p2_PS.pointer.visible = true;
    p2_PS.pointer.style = "ellipse";
    p2_PS.pointer.width = 1
    p2_PS.pointer.height = 1
    p2_P3.style = ""
    p2_P3.pointer.visible = true;
    p2_P3.pointer.style = "ellipse";
    p2_P3.pointer.width = 1
    p2_P3.pointer.height = 1
    p2_PM.style = ""
    p2_PM.pointer.visible = true;
    p2_PM.pointer.style = "ellipse";
    p2_PM.pointer.width = 1
    p2_PM.pointer.height = 1
    p2_RB.style = "bar"
    p2_RB.pointer.visible = false;

    p1_A0.addRandom(1);
    p1_ST.addRandom(1);
    p1_M.addRandom(1);
    p1_A1.addRandom(1);
    p1_A2.addRandom(1);
    p1_P1.addRandom(1);
    p1_P2.addRandom(1);
    p1_PA.addRandom(1);
    p1_PS.addRandom(1);
    p1_P3.addRandom(1);
    p1_PM.addRandom(1);
    p1_RA.addRandom(1);

    p1_A0.data.values[0] = 0
    p1_ST.data.values[0] = 0
    p1_M.data.values[0] = 0
    p1_A1.data.values[0] = 0
    p1_A2.data.values[0] = 0
    p1_P1.data.values[0] = 0
    p1_P2.data.values[0] = 0
    p1_PA.data.values[0] = 0
    p1_PS.data.values[0] = 0
    p1_P3.data.values[0] = 0
    p1_PM.data.values[0] = 0
    p1_RA.data.values[0] = 0

    p2_B0.addRandom(1);
    p2_ST.addRandom(1);
    p2_M.addRandom(1);
    p2_B1.addRandom(1);
    p2_B2.addRandom(1);
    p2_P1.addRandom(1);
    p2_P2.addRandom(1);
    p2_PB.addRandom(1);
    p2_PS.addRandom(1);
    p2_P3.addRandom(1);
    p2_PM.addRandom(1);
    p2_RB.addRandom(1);

    p2_B0.data.values[0] = 0
    p2_ST.data.values[0] = 0
    p2_M.data.values[0] = 0
    p2_B1.data.values[0] = 0
    p2_B2.data.values[0] = 0
    p2_P1.data.values[0] = 0
    p2_P2.data.values[0] = 0
    p2_PB.data.values[0] = 0
    p2_PS.data.values[0] = 0
    p2_P3.data.values[0] = 0
    p2_PM.data.values[0] = 0
    p2_RB.data.values[0] = 0

    //Chart1.legend.visible=false
    Chart1.title.text = "ТОЧКА A/ЛЕВАЯ ПЛОСКОСТЬ"
    document.getElementById("C1_").value = "ТОЧКА A/ЛЕВАЯ ПЛОСКОСТЬ"
    Chart1.legend.position = "top"
    Chart1.panel.format.shadow.visible = false;
    Chart1.axes.visible = false
    Chart1.zoom.enabled = false
    Chart1.zoom.wheel.enabled = false
    Chart1.scroll.enabled = false
    //Chart2.legend.visible=false
    Chart2.title.text = "ТОЧКА B/ПРАВАЯ ПЛОСКОСТЬ"
    document.getElementById("C2_").value = "ТОЧКА B/ПРАВАЯ ПЛОСКОСТЬ"
    Chart2.legend.position = "top"
    Chart2.panel.format.shadow.visible = false;
    Chart2.axes.visible = false
    Chart2.zoom.enabled = false
    Chart2.zoom.wheel.enabled = false
    Chart2.scroll.enabled = false
    Chart1.axes.left.labels.visible = false;
    Chart1.axes.top.labels.visible = false;
    Chart1.axes.right.labels.visible = false;
    Chart1.axes.bottom.labels.visible = false;
    Chart2.axes.left.labels.visible = false;
    Chart2.axes.top.labels.visible = false;
    Chart2.axes.right.labels.visible = false;
    Chart2.axes.bottom.labels.visible = false;
    Chart1.axes.left.automatic = false;
    Chart1.axes.left.minimum = 0;
    Chart1.axes.left.maximum = 1;
    Chart2.axes.left.automatic = false;
    Chart2.axes.left.minimum = 0;
    Chart2.axes.left.maximum = 1;
    Chart1.draw();
    Chart2.draw();
    PRELOAD();
    if (document.getElementById("fA0").value != "") {
        REDRAW();
    }
}



function PRELOAD() {
    document.getElementById("ZAG").innerHTML = 'ТВВ-320-2 3000 об/мин По 3-й форме 27-33 v 30'
    document.getElementById("ZAG_").value = 'ТВВ-320-2 3000 об/мин По 3-й форме 27-33 v 30'
    if ("V" == "SXM") {
        document.getElementById("REGIM").selectedIndex = 1
    }
    else if ("V" == "STAT") {
        document.getElementById("REGIM").selectedIndex = 2
    }
    else if ("V" == "MOM") {
        document.getElementById("REGIM").selectedIndex = 3
    }
    else if ("V" == "1X2") {
        document.getElementById("REGIM").selectedIndex = 4
    }
    else if ("V" == "2X1") {
        document.getElementById("REGIM").selectedIndex = 5
    }
    else if ("V" == "V") {
        document.getElementById("REGIM").selectedIndex = 6
    }
    else {
        document.getElementById("REGIM").selectedIndex = 0
    }

    if ("1" == "1") {
        document.getElementById("KF").checked = true
    }
    else if ("1" == "0") {
        document.getElementById("KF").checked = false
    }
    Chart1.title.text = 'Опора 6/27-33 плоскость'
    Chart2.title.text = 'Опора 7/30 плоскость'
    document.getElementById("C1_").value = 'Опора 6/27-33 плоскость'
    document.getElementById("C2_").value = 'Опора 7/30 плоскость'
    document.getElementById("aA0").value = '234'
    document.getElementById("fA0").value = '342'
    document.getElementById("aB0").value = '34'
    document.getElementById("fB0").value = '324'
    document.getElementById("aSt").value = '133.272'
    document.getElementById("fSt").value = '340'
    document.getElementById("aM").value = '100.969'
    document.getElementById("fM").value = '345'
    document.getElementById("aA1").value = ''
    document.getElementById("fA1").value = ''
    document.getElementById("aB1").value = ''
    document.getElementById("fB1").value = ''
    document.getElementById("aA2").value = ''
    document.getElementById("fA2").value = ''
    document.getElementById("aB2").value = ''
    document.getElementById("fB2").value = ''
    document.getElementById("aP1").value = ''
    document.getElementById("fP1").value = ''
    document.getElementById("aP2").value = ''
    document.getElementById("fP2").value = ''
    document.getElementById("aPA").value = ''
    document.getElementById("fPA").value = ''
    document.getElementById("aPB").value = ''
    document.getElementById("fPB").value = ''
    document.getElementById("aPS").value = ''
    document.getElementById("aP3").value = ''
    document.getElementById("fPS").value = ''
    document.getElementById("fP3").value = ''
    document.getElementById("aPM").value = ''
    document.getElementById("fPM").value = ''
    document.getElementById("aRA").value = ''
    document.getElementById("fRA").value = ''
    document.getElementById("aRB").value = ''
    document.getElementById("fRB").value = ''
    document.getElementById("aKVA1").value = '0.0'
    document.getElementById("fKVA1").value = '0'
    document.getElementById("aKVB1").value = '0.0'
    document.getElementById("fKVB1").value = '0'
    document.getElementById("aKVA2").value = '0.0'
    document.getElementById("fKVA2").value = '0'
    document.getElementById("aKVB2").value = '0.0'
    document.getElementById("fKVB2").value = '0'
    document.getElementById("aKVAS").value = ''
    document.getElementById("aKVA3").value = ''
    document.getElementById("fKVAS").value = ''
    document.getElementById("fKVA3").value = ''
    document.getElementById("aKVBS").value = ''
    document.getElementById("aKVB3").value = ''
    document.getElementById("fKVBS").value = ''
    document.getElementById("fKVB3").value = ''
    document.getElementById("aKVAM").value = ''
    document.getElementById("fKVAM").value = ''
    document.getElementById("aKVBM").value = ''
    document.getElementById("fKVBM").value = ''
    document.getElementById("TA").value = ''
    KFF()
}


function CREGIM() {
    KFF();
}


function KFF() {
    let sel1 = document.getElementById("REGIM");
    let regim = sel1.options[sel1.selectedIndex].value;

    if (regim == "2X2") {
        document.getElementById("h_P").style.display = ""
        document.getElementById("h_A").style.display = ""
        document.getElementById("h_F").style.display = ""
        document.getElementById("hPA").style.display = ""
        document.getElementById("hPB").style.display = ""
        document.getElementById("raPA").style.display = ""
        document.getElementById("raPB").style.display = ""
        document.getElementById("rfPA").style.display = ""
        document.getElementById("rfPB").style.display = ""
        document.getElementById("hPS").style.display = "none"
        document.getElementById("hP3").style.display = "none"
        document.getElementById("hPM").style.display = "none"
        document.getElementById("raPS").style.display = "none"
        document.getElementById("raP3").style.display = "none"
        document.getElementById("raPM").style.display = "none"
        document.getElementById("rfPS").style.display = "none"
        document.getElementById("rfP3").style.display = "none"
        document.getElementById("rfPM").style.display = "none"
        document.getElementById("hKVA1").style.display = ""
        document.getElementById("hKVA2").style.display = ""
        document.getElementById("hKVB1").style.display = ""
        document.getElementById("hKVB2").style.display = ""
        document.getElementById("raKVA1").style.display = ""
        document.getElementById("raKVA2").style.display = ""
        document.getElementById("raKVB1").style.display = ""
        document.getElementById("raKVB2").style.display = ""
        document.getElementById("rfKVA1").style.display = ""
        document.getElementById("rfKVA2").style.display = ""
        document.getElementById("rfKVB1").style.display = ""
        document.getElementById("rfKVB2").style.display = ""
        document.getElementById("hKVAS").style.display = "none"
        document.getElementById("hKVA3").style.display = "none"
        document.getElementById("hKVBS").style.display = "none"
        document.getElementById("hKVB3").style.display = "none"
        document.getElementById("hKVAM").style.display = "none"
        document.getElementById("hKVBM").style.display = "none"
        document.getElementById("raKVAS").style.display = "none"
        document.getElementById("raKVA3").style.display = "none"
        document.getElementById("raKVBS").style.display = "none"
        document.getElementById("raKVB3").style.display = "none"
        document.getElementById("raKVAM").style.display = "none"
        document.getElementById("raKVBM").style.display = "none"
        document.getElementById("rfKVAS").style.display = "none"
        document.getElementById("rfKVA3").style.display = "none"
        document.getElementById("rfKVBS").style.display = "none"
        document.getElementById("rfKVB3").style.display = "none"
        document.getElementById("rfKVAM").style.display = "none"
        document.getElementById("rfKVBM").style.display = "none"


        if (document.getElementById("KF").checked) {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = false;
            p1_A2.visible = false;
            p1_P1.visible = false;
            p1_P2.visible = false;
            p1_PA.visible = true;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = false;
            p2_B2.visible = false;
            p2_P1.visible = false;
            p2_P2.visible = false;
            p2_PB.visible = true;
            document.getElementById("KFV").value = "1"
        }
        else {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = true;
            p1_A2.visible = true;
            p1_P1.visible = true;
            p1_P2.visible = false;
            p1_PA.visible = true;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = true;
            p2_B2.visible = true;
            p2_P1.visible = false;
            p2_P2.visible = true;
            p2_PB.visible = true;
            document.getElementById("KFV").value = "0"

        }

    }
    else if (regim == "SXM") {
        document.getElementById("h_P").style.display = ""
        document.getElementById("h_A").style.display = ""
        document.getElementById("h_F").style.display = ""
        document.getElementById("hPA").style.display = "none"
        document.getElementById("hPB").style.display = "none"
        document.getElementById("raPA").style.display = "none"
        document.getElementById("raPB").style.display = "none"
        document.getElementById("rfPA").style.display = "none"
        document.getElementById("rfPB").style.display = "none"
        document.getElementById("hPS").style.display = ""
        document.getElementById("hP3").style.display = "none"
        document.getElementById("hPM").style.display = ""
        document.getElementById("raPS").style.display = ""
        document.getElementById("raP3").style.display = "none"
        document.getElementById("raPM").style.display = ""
        document.getElementById("rfPS").style.display = ""
        document.getElementById("rfP3").style.display = "none"
        document.getElementById("rfPM").style.display = ""

        document.getElementById("hKVA1").style.display = "none"
        document.getElementById("hKVA2").style.display = "none"
        document.getElementById("hKVB1").style.display = "none"
        document.getElementById("hKVB2").style.display = "none"
        document.getElementById("raKVA1").style.display = "none"
        document.getElementById("raKVA2").style.display = "none"
        document.getElementById("raKVB1").style.display = "none"
        document.getElementById("raKVB2").style.display = "none"
        document.getElementById("rfKVA1").style.display = "none"
        document.getElementById("rfKVA2").style.display = "none"
        document.getElementById("rfKVB1").style.display = "none"
        document.getElementById("rfKVB2").style.display = "none"
        document.getElementById("hKVAS").style.display = ""
        document.getElementById("hKVA3").style.display = "none"
        document.getElementById("hKVBS").style.display = ""
        document.getElementById("hKVB3").style.display = "none"
        document.getElementById("hKVAM").style.display = ""
        document.getElementById("hKVBM").style.display = ""
        document.getElementById("raKVAS").style.display = ""
        document.getElementById("raKVA3").style.display = "none"
        document.getElementById("raKVBS").style.display = ""
        document.getElementById("raKVB3").style.display = "none"
        document.getElementById("raKVAM").style.display = ""
        document.getElementById("raKVBM").style.display = ""
        document.getElementById("rfKVAS").style.display = ""
        document.getElementById("rfKVA3").style.display = "none"
        document.getElementById("rfKVBS").style.display = ""
        document.getElementById("rfKVB3").style.display = "none"
        document.getElementById("rfKVAM").style.display = ""
        document.getElementById("rfKVBM").style.display = ""


        if (document.getElementById("KF").checked) {
            p1_PS.visible = true;
            p1_P3.visible = false;
            p1_PM.visible = true;
            p1_A1.visible = false;
            p1_A2.visible = false;
            p1_P1.visible = false;
            p1_P2.visible = false;
            p1_PA.visible = false;

            p2_PS.visible = true;
            p2_P3.visible = false;
            p2_PM.visible = true;
            p2_B1.visible = false;
            p2_B2.visible = false;
            p2_P1.visible = false;
            p2_P2.visible = false;
            p2_PB.visible = false;

        }
        else {
            p1_PS.visible = true;
            p1_P3.visible = false;
            p1_PM.visible = true;
            p1_A1.visible = true;
            p1_A2.visible = true;
            p1_P1.visible = true;
            p1_P2.visible = true;
            p1_PA.visible = false;

            p2_PS.visible = true;
            p2_P3.visible = false;
            p2_PM.visible = true;
            p2_B1.visible = true;
            p2_B2.visible = true;
            p2_P1.visible = true;
            p2_P2.visible = true;
            p2_PB.visible = false;

        }

    }
    else if (regim == "V") {
        document.getElementById("h_P").style.display = ""
        document.getElementById("h_A").style.display = ""
        document.getElementById("h_F").style.display = ""
        document.getElementById("hPA").style.display = "none"
        document.getElementById("hPB").style.display = "none"
        document.getElementById("raPA").style.display = "none"
        document.getElementById("raPB").style.display = "none"
        document.getElementById("rfPA").style.display = "none"
        document.getElementById("rfPB").style.display = "none"
        document.getElementById("hPS").style.display = "none"
        document.getElementById("hP3").style.display = ""
        document.getElementById("hPM").style.display = ""
        document.getElementById("raPS").style.display = "none"
        document.getElementById("raP3").style.display = ""
        document.getElementById("raPM").style.display = ""
        document.getElementById("rfPS").style.display = "none"
        document.getElementById("rfP3").style.display = ""
        document.getElementById("rfPM").style.display = ""

        document.getElementById("hKVA1").style.display = "none"
        document.getElementById("hKVA2").style.display = "none"
        document.getElementById("hKVB1").style.display = "none"
        document.getElementById("hKVB2").style.display = "none"
        document.getElementById("raKVA1").style.display = "none"
        document.getElementById("raKVA2").style.display = "none"
        document.getElementById("raKVB1").style.display = "none"
        document.getElementById("raKVB2").style.display = "none"
        document.getElementById("rfKVA1").style.display = "none"
        document.getElementById("rfKVA2").style.display = "none"
        document.getElementById("rfKVB1").style.display = "none"
        document.getElementById("rfKVB2").style.display = "none"
        document.getElementById("hKVAS").style.display = "none"
        document.getElementById("hKVA3").style.display = ""
        document.getElementById("hKVBS").style.display = "none"
        document.getElementById("hKVB3").style.display = ""
        document.getElementById("hKVAM").style.display = ""
        document.getElementById("hKVBM").style.display = ""
        document.getElementById("raKVAS").style.display = "none"
        document.getElementById("raKVA3").style.display = ""
        document.getElementById("raKVBS").style.display = "none"
        document.getElementById("raKVB3").style.display = ""
        document.getElementById("raKVAM").style.display = ""
        document.getElementById("raKVBM").style.display = ""
        document.getElementById("rfKVAS").style.display = "none"
        document.getElementById("rfKVA3").style.display = ""
        document.getElementById("rfKVBS").style.display = "none"
        document.getElementById("rfKVB3").style.display = ""
        document.getElementById("rfKVAM").style.display = ""
        document.getElementById("rfKVBM").style.display = ""


        if (document.getElementById("KF").checked) {
            p1_PS.visible = false;
            p1_P3.visible = true;
            p1_PM.visible = true;
            p1_A1.visible = false;
            p1_A2.visible = false;
            p1_P1.visible = false;
            p1_P2.visible = false;
            p1_PA.visible = false;

            p2_PS.visible = false;
            p2_P3.visible = true;
            p2_PM.visible = true;
            p2_B1.visible = false;
            p2_B2.visible = false;
            p2_P1.visible = false;
            p2_P2.visible = false;
            p2_PB.visible = false;

        }
        else {
            p1_PS.visible = false;
            p1_P3.visible = true;
            p1_PM.visible = true;
            p1_A1.visible = true;
            p1_A2.visible = true;
            p1_P1.visible = true;
            p1_P2.visible = true;
            p1_PA.visible = false;

            p2_PS.visible = false;
            p2_P3.visible = true;
            p2_PM.visible = true;
            p2_B1.visible = true;
            p2_B2.visible = true;
            p2_P1.visible = true;
            p2_P2.visible = true;
            p2_PB.visible = false;

        }

    }
    else if (regim == "STAT") {
        document.getElementById("h_P").style.display = "none"
        document.getElementById("h_A").style.display = "none"
        document.getElementById("h_F").style.display = "none"
        document.getElementById("hPA").style.display = "none"
        document.getElementById("hPB").style.display = "none"
        document.getElementById("raPA").style.display = "none"
        document.getElementById("raPB").style.display = "none"
        document.getElementById("rfPA").style.display = "none"
        document.getElementById("rfPB").style.display = "none"
        document.getElementById("hPS").style.display = ""
        document.getElementById("hP3").style.display = "none"
        document.getElementById("hPM").style.display = "none"
        document.getElementById("raPS").style.display = ""
        document.getElementById("raP3").style.display = "none"
        document.getElementById("raPM").style.display = "none"
        document.getElementById("rfPS").style.display = ""
        document.getElementById("rfP3").style.display = "none"
        document.getElementById("rfPM").style.display = "none"

        document.getElementById("hKVA1").style.display = "none"
        document.getElementById("hKVA2").style.display = "none"
        document.getElementById("hKVB1").style.display = "none"
        document.getElementById("hKVB2").style.display = "none"
        document.getElementById("raKVA1").style.display = "none"
        document.getElementById("raKVA2").style.display = "none"
        document.getElementById("raKVB1").style.display = "none"
        document.getElementById("raKVB2").style.display = "none"
        document.getElementById("rfKVA1").style.display = "none"
        document.getElementById("rfKVA2").style.display = "none"
        document.getElementById("rfKVB1").style.display = "none"
        document.getElementById("rfKVB2").style.display = "none"
        document.getElementById("hKVAS").style.display = ""
        document.getElementById("hKVA3").style.display = "none"
        document.getElementById("hKVBS").style.display = ""
        document.getElementById("hKVB3").style.display = "none"
        document.getElementById("hKVAM").style.display = "none"
        document.getElementById("hKVBM").style.display = "none"
        document.getElementById("raKVAS").style.display = ""
        document.getElementById("raKVA3").style.display = "none"
        document.getElementById("raKVBS").style.display = ""
        document.getElementById("raKVB3").style.display = "none"
        document.getElementById("raKVAM").style.display = "none"
        document.getElementById("raKVBM").style.display = "none"
        document.getElementById("rfKVAS").style.display = ""
        document.getElementById("rfKVA3").style.display = "none"
        document.getElementById("rfKVBS").style.display = ""
        document.getElementById("rfKVB3").style.display = "none"
        document.getElementById("rfKVAM").style.display = "none"
        document.getElementById("rfKVBM").style.display = "none"

        if (document.getElementById("KF").checked) {
            p1_PS.visible = true;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = false;
            p1_A2.visible = false;
            p1_P1.visible = false;
            p1_P2.visible = false;
            p1_PA.visible = false;

            p2_PS.visible = true;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = false;
            p2_B2.visible = false;
            p2_P1.visible = false;
            p2_P2.visible = false;
            p2_PB.visible = false;

        }
        else {
            p1_PS.visible = true;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = true;
            p1_A2.visible = false;
            p1_P1.visible = true;
            p1_P2.visible = false;
            p1_PA.visible = false;

            p2_PS.visible = true;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = true;
            p2_B2.visible = false;
            p2_P1.visible = true;
            p2_P2.visible = false;
            p2_PB.visible = false;

        }

    }
    else if (regim == "MOM") {
        document.getElementById("h_P").style.display = "none"
        document.getElementById("h_A").style.display = "none"
        document.getElementById("h_F").style.display = "none"
        document.getElementById("hPA").style.display = "none"
        document.getElementById("hPB").style.display = "none"
        document.getElementById("raPA").style.display = "none"
        document.getElementById("raPB").style.display = "none"
        document.getElementById("rfPA").style.display = "none"
        document.getElementById("rfPB").style.display = "none"
        document.getElementById("hPS").style.display = "none"
        document.getElementById("hP3").style.display = "none"
        document.getElementById("hPM").style.display = ""
        document.getElementById("raPS").style.display = "none"
        document.getElementById("raP3").style.display = "none"
        document.getElementById("raPM").style.display = ""
        document.getElementById("rfPS").style.display = "none"
        document.getElementById("rfP3").style.display = "none"
        document.getElementById("rfPM").style.display = ""

        document.getElementById("hKVA1").style.display = "none"
        document.getElementById("hKVA2").style.display = "none"
        document.getElementById("hKVB1").style.display = "none"
        document.getElementById("hKVB2").style.display = "none"
        document.getElementById("raKVA1").style.display = "none"
        document.getElementById("raKVA2").style.display = "none"
        document.getElementById("raKVB1").style.display = "none"
        document.getElementById("raKVB2").style.display = "none"
        document.getElementById("rfKVA1").style.display = "none"
        document.getElementById("rfKVA2").style.display = "none"
        document.getElementById("rfKVB1").style.display = "none"
        document.getElementById("rfKVB2").style.display = "none"
        document.getElementById("hKVAS").style.display = "none"
        document.getElementById("hKVA3").style.display = "none"
        document.getElementById("hKVBS").style.display = "none"
        document.getElementById("hKVB3").style.display = "none"
        document.getElementById("hKVAM").style.display = ""
        document.getElementById("hKVBM").style.display = ""
        document.getElementById("raKVAS").style.display = "none"
        document.getElementById("raKVA3").style.display = "none"
        document.getElementById("raKVBS").style.display = "none"
        document.getElementById("raKVB3").style.display = "none"
        document.getElementById("raKVAM").style.display = ""
        document.getElementById("raKVBM").style.display = ""
        document.getElementById("rfKVAS").style.display = "none"
        document.getElementById("rfKVA3").style.display = "none"
        document.getElementById("rfKVBS").style.display = "none"
        document.getElementById("rfKVB3").style.display = "none"
        document.getElementById("rfKVAM").style.display = ""
        document.getElementById("rfKVBM").style.display = ""

        if (document.getElementById("KF").checked) {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = true;
            p1_A1.visible = false;
            p1_A2.visible = false;
            p1_P1.visible = false;
            p1_P2.visible = false;
            p1_PA.visible = false;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = true;
            p2_B1.visible = false;
            p2_B2.visible = false;
            p2_P1.visible = false;
            p2_P2.visible = false;
            p2_PB.visible = false;

        }
        else {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = true;
            p1_A1.visible = false;
            p1_A2.visible = true;
            p1_P1.visible = false;
            p1_P2.visible = true;
            p1_PA.visible = false;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = true;
            p2_B1.visible = false;
            p2_B2.visible = true;
            p2_P1.visible = false;
            p2_P2.visible = true;
            p2_PB.visible = false;

        }

    }
    else if (regim == "1X2") {
        document.getElementById("h_P").style.display = "none"
        document.getElementById("h_A").style.display = "none"
        document.getElementById("h_F").style.display = "none"
        document.getElementById("hPA").style.display = ""
        document.getElementById("hPB").style.display = "none"
        document.getElementById("raPA").style.display = ""
        document.getElementById("raPB").style.display = "none"
        document.getElementById("rfPA").style.display = ""
        document.getElementById("rfPB").style.display = "none"
        document.getElementById("hPS").style.display = "none"
        document.getElementById("hP3").style.display = "none"
        document.getElementById("hPM").style.display = "none"
        document.getElementById("raPS").style.display = "none"
        document.getElementById("raP3").style.display = "none"
        document.getElementById("raPM").style.display = "none"
        document.getElementById("rfPS").style.display = "none"
        document.getElementById("rfP3").style.display = "none"
        document.getElementById("rfPM").style.display = "none"

        document.getElementById("hKVA1").style.display = ""
        document.getElementById("hKVA2").style.display = "none"
        document.getElementById("hKVB1").style.display = ""
        document.getElementById("hKVB2").style.display = "none"
        document.getElementById("raKVA1").style.display = ""
        document.getElementById("raKVA2").style.display = "none"
        document.getElementById("raKVB1").style.display = ""
        document.getElementById("raKVB2").style.display = "none"
        document.getElementById("rfKVA1").style.display = ""
        document.getElementById("rfKVA2").style.display = "none"
        document.getElementById("rfKVB1").style.display = ""
        document.getElementById("rfKVB2").style.display = "none"
        document.getElementById("hKVAS").style.display = "none"
        document.getElementById("hKVA3").style.display = "none"
        document.getElementById("hKVBS").style.display = "none"
        document.getElementById("hKVB3").style.display = "none"
        document.getElementById("hKVAM").style.display = "none"
        document.getElementById("hKVBM").style.display = "none"
        document.getElementById("raKVAS").style.display = "none"
        document.getElementById("raKVA3").style.display = "none"
        document.getElementById("raKVBS").style.display = "none"
        document.getElementById("raKVB3").style.display = "none"
        document.getElementById("raKVAM").style.display = "none"
        document.getElementById("raKVBM").style.display = "none"
        document.getElementById("rfKVAS").style.display = "none"
        document.getElementById("rfKVA3").style.display = "none"
        document.getElementById("rfKVBS").style.display = "none"
        document.getElementById("rfKVB3").style.display = "none"
        document.getElementById("rfKVAM").style.display = "none"
        document.getElementById("rfKVBM").style.display = "none"



        if (document.getElementById("KF").checked) {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = false;
            p1_A2.visible = false;
            p1_P1.visible = false;
            p1_P2.visible = false;
            p1_PA.visible = true;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = false;
            p2_B2.visible = false;
            p2_P1.visible = false;
            p2_P2.visible = false;
            p2_PB.visible = false;

        }
        else {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = true;
            p1_A2.visible = false;
            p1_P1.visible = true;
            p1_P2.visible = false;
            p1_PA.visible = true;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = true;
            p2_B2.visible = false;
            p2_P1.visible = true;
            p2_P2.visible = false;
            p2_PB.visible = false;

        }

    }
    else if (regim == "2X1") {
        document.getElementById("h_P").style.display = "none"
        document.getElementById("h_A").style.display = "none"
        document.getElementById("h_F").style.display = "none"
        document.getElementById("hPA").style.display = "none"
        document.getElementById("hPB").style.display = ""
        document.getElementById("raPA").style.display = "none"
        document.getElementById("raPB").style.display = ""
        document.getElementById("rfPA").style.display = "none"
        document.getElementById("rfPB").style.display = ""
        document.getElementById("hPS").style.display = "none"
        document.getElementById("hP3").style.display = "none"
        document.getElementById("hPM").style.display = "none"
        document.getElementById("raPS").style.display = "none"
        document.getElementById("raP3").style.display = "none"
        document.getElementById("raPM").style.display = "none"
        document.getElementById("rfPS").style.display = "none"
        document.getElementById("rfP3").style.display = "none"
        document.getElementById("rfPM").style.display = "none"

        document.getElementById("hKVA1").style.display = "none"
        document.getElementById("hKVA2").style.display = ""
        document.getElementById("hKVB1").style.display = "none"
        document.getElementById("hKVB2").style.display = ""
        document.getElementById("raKVA1").style.display = "none"
        document.getElementById("raKVA2").style.display = ""
        document.getElementById("raKVB1").style.display = "none"
        document.getElementById("raKVB2").style.display = ""
        document.getElementById("rfKVA1").style.display = "none"
        document.getElementById("rfKVA2").style.display = ""
        document.getElementById("rfKVB1").style.display = "none"
        document.getElementById("rfKVB2").style.display = ""
        document.getElementById("hKVAS").style.display = "none"
        document.getElementById("hKVA3").style.display = "none"
        document.getElementById("hKVBS").style.display = "none"
        document.getElementById("hKVB3").style.display = "none"
        document.getElementById("hKVAM").style.display = "none"
        document.getElementById("hKVBM").style.display = "none"
        document.getElementById("raKVAS").style.display = "none"
        document.getElementById("raKVA3").style.display = "none"
        document.getElementById("raKVBS").style.display = "none"
        document.getElementById("raKVB3").style.display = "none"
        document.getElementById("raKVAM").style.display = "none"
        document.getElementById("raKVBM").style.display = "none"
        document.getElementById("rfKVAS").style.display = "none"
        document.getElementById("rfKVA3").style.display = "none"
        document.getElementById("rfKVBS").style.display = "none"
        document.getElementById("rfKVB3").style.display = "none"
        document.getElementById("rfKVAM").style.display = "none"
        document.getElementById("rfKVBM").style.display = "none"

        if (document.getElementById("KF").checked) {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = false;
            p1_A2.visible = false;
            p1_P1.visible = false;
            p1_P2.visible = false;
            p1_PA.visible = false;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = false;
            p2_B2.visible = false;
            p2_P1.visible = false;
            p2_P2.visible = false;
            p2_PB.visible = true;

        }
        else {
            p1_PS.visible = false;
            p1_P3.visible = false;
            p1_PM.visible = false;
            p1_A1.visible = false;
            p1_A2.visible = true;
            p1_P1.visible = false;
            p1_P2.visible = true;
            p1_PA.visible = false;

            p2_PS.visible = false;
            p2_P3.visible = false;
            p2_PM.visible = false;
            p2_B1.visible = false;
            p2_B2.visible = true;
            p2_P1.visible = false;
            p2_P2.visible = true;
            p2_PB.visible = true;

        }

    }



    if (document.getElementById("KF").checked) {
        if (document.getElementById("V1").style.display == "none") {
        }
        else {
            document.getElementById("V1").style.display = "none"
        }
        if (document.getElementById("V2").style.display == "none") {
        }
        else {
            document.getElementById("V2").style.display = "none"
        }
        if ((document.getElementById("aKVA1").getAttribute("readonly") == null) || (document.getElementById("aKVA1").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVA1").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVA2").getAttribute("readonly") == null) || (document.getElementById("aKVA2").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVA2").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVB1").getAttribute("readonly") == null) || (document.getElementById("aKVB1").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVB1").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVB2").getAttribute("readonly") == null) || (document.getElementById("aKVB2").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVB2").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVA1").getAttribute("readonly") == null) || (document.getElementById("fKVA1").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVA1").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVA2").getAttribute("readonly") == null) || (document.getElementById("fKVA2").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVA2").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVB1").getAttribute("readonly") == null) || (document.getElementById("fKVB1").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVB1").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVB2").getAttribute("readonly") == null) || (document.getElementById("fKVB2").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVB2").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVAS").getAttribute("readonly") == null) || (document.getElementById("aKVAS").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVAS").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVA3").getAttribute("readonly") == null) || (document.getElementById("aKVA3").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVA3").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVAM").getAttribute("readonly") == null) || (document.getElementById("aKVAM").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVAM").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVBS").getAttribute("readonly") == null) || (document.getElementById("aKVBS").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVBS").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVB3").getAttribute("readonly") == null) || (document.getElementById("aKVB3").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVB3").removeAttribute("readonly")
        }
        if ((document.getElementById("aKVBM").getAttribute("readonly") == null) || (document.getElementById("aKVBM").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("aKVBM").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVAS").getAttribute("readonly") == null) || (document.getElementById("fKVAS").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVAS").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVA3").getAttribute("readonly") == null) || (document.getElementById("fKVA3").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVA3").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVAM").getAttribute("readonly") == null) || (document.getElementById("fKVAM").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVAM").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVBS").getAttribute("readonly") == null) || (document.getElementById("fKVBS").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVBS").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVB3").getAttribute("readonly") == null) || (document.getElementById("fKVB3").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVB3").removeAttribute("readonly")
        }
        if ((document.getElementById("fKVBM").getAttribute("readonly") == null) || (document.getElementById("fKVBM").getAttribute("readonly") == "")) {
        }
        else {
            document.getElementById("fKVBM").removeAttribute("readonly")
        }

    }
    else {
        document.getElementById("V1").style.display = "none"
        document.getElementById("V2").style.display = "none"
        if ((document.getElementById("V1").style.display == "none") && ((regim == "2X2") || (regim == "SXM") || (regim == "V") || (regim == "STAT") || (regim == "1X2"))) {
            document.getElementById("V1").style.display = ""
        }
        if ((document.getElementById("V2").style.display == "none") && ((regim == "2X2") || (regim == "SXM") || (regim == "V") || (regim == "MOM") || (regim == "2X1"))) {
            document.getElementById("V2").style.display = ""
        }
        if ((document.getElementById("aKVA1").getAttribute("readonly") == null) || (document.getElementById("aKVA1").getAttribute("readonly") == "")) {
            document.getElementById("aKVA1").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("aKVA2").getAttribute("readonly") == null) || (document.getElementById("aKVA2").getAttribute("readonly") == "")) {
            document.getElementById("aKVA2").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("aKVB1").getAttribute("readonly") == null) || (document.getElementById("aKVB1").getAttribute("readonly") == "")) {
            document.getElementById("aKVB1").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("aKVB2").getAttribute("readonly") == null) || (document.getElementById("aKVB2").getAttribute("readonly") == "")) {
            document.getElementById("aKVB2").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("fKVA1").getAttribute("readonly") == null) || (document.getElementById("fKVA1").getAttribute("readonly") == "")) {
            document.getElementById("fKVA1").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("fKVA2").getAttribute("readonly") == null) || (document.getElementById("fKVA2").getAttribute("readonly") == "")) {
            document.getElementById("fKVA2").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("fKVB1").getAttribute("readonly") == null) || (document.getElementById("fKVB1").getAttribute("readonly") == "")) {
            document.getElementById("fKVB1").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("fKVB2").getAttribute("readonly") == null) || (document.getElementById("fKVB2").getAttribute("readonly") == "")) {
            document.getElementById("fKVB2").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("aKVAS").getAttribute("readonly") == null) || (document.getElementById("aKVAS").getAttribute("readonly") == "")) {
            document.getElementById("aKVAS").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("aKVA3").getAttribute("readonly") == null) || (document.getElementById("aKVA3").getAttribute("readonly") == "")) {
            document.getElementById("aKVA3").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("aKVAM").getAttribute("readonly") == null) || (document.getElementById("aKVAM").getAttribute("readonly") == "")) {
            document.getElementById("aKVAM").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("aKVBS").getAttribute("readonly") == null) || (document.getElementById("aKVBS").getAttribute("readonly") == "")) {
            document.getElementById("aKVBS").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("aKVB3").getAttribute("readonly") == null) || (document.getElementById("aKVB3").getAttribute("readonly") == "")) {
            document.getElementById("aKVB3").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("aKVBM").getAttribute("readonly") == null) || (document.getElementById("aKVBM").getAttribute("readonly") == "")) {
            document.getElementById("aKVBM").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("fKVAS").getAttribute("readonly") == null) || (document.getElementById("fKVAS").getAttribute("readonly") == "")) {
            document.getElementById("fKVAS").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("fKVA3").getAttribute("readonly") == null) || (document.getElementById("fKVA3").getAttribute("readonly") == "")) {
            document.getElementById("fKVA3").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("fKVAM").getAttribute("readonly") == null) || (document.getElementById("fKVAM").getAttribute("readonly") == "")) {
            document.getElementById("fKVAM").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("fKVBS").getAttribute("readonly") == null) || (document.getElementById("fKVBS").getAttribute("readonly") == "")) {
            document.getElementById("fKVBS").setAttribute("readonly", "readonly")
        }
        if ((document.getElementById("fKVB3").getAttribute("readonly") == null) || (document.getElementById("fKVB3").getAttribute("readonly") == "")) {
            document.getElementById("fKVB3").setAttribute("readonly", "readonly")
        }

        if ((document.getElementById("fKVBM").getAttribute("readonly") == null) || (document.getElementById("fKVBM").getAttribute("readonly") == "")) {
            document.getElementById("fKVBM").setAttribute("readonly", "readonly")
        }

    }
    Chart1.draw();
    Chart2.draw();
}

function REDRAW() {
    let sel1 = document.getElementById("REGIM");
    let regim = sel1.options[sel1.selectedIndex].value;
    let mmm = 20;
    let ma = 0;
    let mb = 0;
    if (regim == "2X2") {
        p1_A0.data.x = [360 - document.getElementById("fA0").value]
        p2_B0.data.x = [360 - document.getElementById("fB0").value]
        p1_ST.data.x = [360 - document.getElementById("fSt").value]
        p1_M.data.x = [360 - document.getElementById("fM").value]
        p2_ST.data.x = [360 - document.getElementById("fSt").value]
        p2_M.data.x = [360 - document.getElementById("fM").value]
        p1_PA.data.x = [360 - document.getElementById("fPA").value]
        p2_PB.data.x = [360 - document.getElementById("fPB").value]
        p1_RA.data.x = [360 - document.getElementById("fRA").value]
        p2_RB.data.x = [360 - document.getElementById("fRB").value]
        p1_A0.data.values[0] = document.getElementById("aA0").value
        p2_B0.data.values[0] = document.getElementById("aB0").value
        p1_ST.data.values[0] = document.getElementById("aSt").value
        p1_M.data.values[0] = document.getElementById("aM").value
        p2_ST.data.values[0] = document.getElementById("aSt").value
        p2_M.data.values[0] = document.getElementById("aM").value
        p1_RA.data.values[0] = document.getElementById("aRA").value
        p2_RB.data.values[0] = document.getElementById("aRB").value
        ma = Math.max(p1_A0.data.values[0], p1_ST.data.values[0], p1_M.data.values[0], p1_RA.data.values[0])
        mb = Math.max(p2_B0.data.values[0], p2_ST.data.values[0], p2_M.data.values[0], p2_RB.data.values[0])
        mmm = Math.min(document.getElementById("aPA").value, document.getElementById("aPB").value)


        if (document.getElementById("KF").checked) {
        }
        else {
            p1_A1.data.x = [360 - document.getElementById("fA1").value]
            p1_A2.data.x = [360 - document.getElementById("fA2").value]
            p2_B1.data.x = [360 - document.getElementById("fB1").value]
            p2_B2.data.x = [360 - document.getElementById("fB2").value]

            p1_A1.data.values[0] = document.getElementById("aA1").value
            p1_A2.data.values[0] = document.getElementById("aA2").value
            p2_B1.data.values[0] = document.getElementById("aB1").value
            p2_B2.data.values[0] = document.getElementById("aB2").value

            ma = Math.max(p1_A1.data.values[0], p1_A2.data.values[0], ma)
            mb = Math.max(p2_B1.data.values[0], p2_B2.data.values[0], mb)

            mmm = Math.min(document.getElementById("aP1").value, document.getElementById("aP2").value, mmm)

            p1_P1.data.x = [360 - document.getElementById("fP1").value]
            p2_P2.data.x = [360 - document.getElementById("fP2").value]
            p1_P1.data.values[0] = ma
            p2_P2.data.values[0] = mb
            p1_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p1_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p2_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)


        }
        p1_PA.data.values[0] = ma
        p2_PB.data.values[0] = mb
        p1_PA.pointer.height = Math.round(Math.sqrt(document.getElementById("aPA").value / mmm) * 20 + 1)
        p1_PA.pointer.width = Math.round(Math.sqrt(document.getElementById("aPA").value / mmm) * 20 + 1)
        p2_PB.pointer.height = Math.round(Math.sqrt(document.getElementById("aPB").value / mmm) * 20 + 1)
        p2_PB.pointer.width = Math.round(Math.sqrt(document.getElementById("aPB").value / mmm) * 20 + 1)

    }
    else if (regim == "SXM") {
        p1_A0.data.x = [360 - document.getElementById("fA0").value]
        p2_B0.data.x = [360 - document.getElementById("fB0").value]
        p1_ST.data.x = [360 - document.getElementById("fSt").value]
        p1_M.data.x = [360 - document.getElementById("fM").value]
        p2_ST.data.x = [360 - document.getElementById("fSt").value]
        p2_M.data.x = [360 - document.getElementById("fM").value]
        p1_PS.data.x = [360 - document.getElementById("fPS").value]
        p2_PS.data.x = [360 - document.getElementById("fPS").value]
        p1_PM.data.x = [360 - document.getElementById("fPM").value]
        p2_PM.data.x = [180 - document.getElementById("fPM").value]
        p1_RA.data.x = [360 - document.getElementById("fRA").value]
        p2_RB.data.x = [360 - document.getElementById("fRB").value]
        p1_A0.data.values[0] = document.getElementById("aA0").value
        p2_B0.data.values[0] = document.getElementById("aB0").value
        p1_ST.data.values[0] = document.getElementById("aSt").value
        p1_M.data.values[0] = document.getElementById("aM").value
        p2_ST.data.values[0] = document.getElementById("aSt").value
        p2_M.data.values[0] = document.getElementById("aM").value
        p1_RA.data.values[0] = document.getElementById("aRA").value
        p2_RB.data.values[0] = document.getElementById("aRB").value
        ma = Math.max(p1_A0.data.values[0], p1_ST.data.values[0], p1_M.data.values[0], p1_RA.data.values[0])
        mb = Math.max(p2_B0.data.values[0], p2_ST.data.values[0], p2_M.data.values[0], p2_RB.data.values[0])
        mmm = Math.min(document.getElementById("aPS").value, document.getElementById("aPM").value)


        if (document.getElementById("KF").checked) {
        }
        else {
            p1_A1.data.x = [360 - document.getElementById("fA1").value]
            p1_A2.data.x = [360 - document.getElementById("fA2").value]
            p2_B1.data.x = [360 - document.getElementById("fB1").value]
            p2_B2.data.x = [360 - document.getElementById("fB2").value]

            p1_A1.data.values[0] = document.getElementById("aA1").value
            p1_A2.data.values[0] = document.getElementById("aA2").value
            p2_B1.data.values[0] = document.getElementById("aB1").value
            p2_B2.data.values[0] = document.getElementById("aB2").value

            ma = Math.max(p1_A1.data.values[0], p1_A2.data.values[0], ma)
            mb = Math.max(p2_B1.data.values[0], p2_B2.data.values[0], mb)

            mmm = Math.min(document.getElementById("aP1").value, document.getElementById("aP2").value, mmm)

            p1_P1.data.x = [360 - document.getElementById("fP1").value]
            p2_P1.data.x = [360 - document.getElementById("fP1").value]
            p1_P2.data.x = [360 - document.getElementById("fP2").value]
            p2_P2.data.x = [180 - document.getElementById("fP2").value]

            p1_P1.data.values[0] = ma
            p1_P2.data.values[0] = ma
            p2_P1.data.values[0] = mb
            p2_P2.data.values[0] = mb

            p1_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p1_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p1_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p1_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p2_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p2_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)


        }
        p1_PS.data.values[0] = ma
        p1_PM.data.values[0] = ma
        p2_PS.data.values[0] = mb
        p2_PM.data.values[0] = mb
        p1_PS.pointer.height = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
        p1_PS.pointer.width = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
        p1_PM.pointer.height = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p1_PM.pointer.width = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p2_PS.pointer.height = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
        p2_PS.pointer.width = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
        p2_PM.pointer.height = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p2_PM.pointer.width = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
    }

    else if (regim == "V") {
        p1_A0.data.x = [360 - document.getElementById("fA0").value]
        p2_B0.data.x = [360 - document.getElementById("fB0").value]
        p1_ST.data.x = [360 - document.getElementById("fSt").value]
        p1_M.data.x = [360 - document.getElementById("fM").value]
        p2_ST.data.x = [360 - document.getElementById("fSt").value]
        p2_M.data.x = [360 - document.getElementById("fM").value]
        p1_P3.data.x = [360 - document.getElementById("fP3").value]
        p2_P3.data.x = [180 - document.getElementById("fP3").value]
        p1_PM.data.x = [360 - document.getElementById("fPM").value]
        p2_PM.data.x = [180 - document.getElementById("fPM").value]
        p1_RA.data.x = [360 - document.getElementById("fRA").value]
        p2_RB.data.x = [360 - document.getElementById("fRB").value]
        p1_A0.data.values[0] = document.getElementById("aA0").value
        p2_B0.data.values[0] = document.getElementById("aB0").value
        p1_ST.data.values[0] = document.getElementById("aSt").value
        p1_M.data.values[0] = document.getElementById("aM").value
        p2_ST.data.values[0] = document.getElementById("aSt").value
        p2_M.data.values[0] = document.getElementById("aM").value
        p1_RA.data.values[0] = document.getElementById("aRA").value
        p2_RB.data.values[0] = document.getElementById("aRB").value
        ma = Math.max(p1_A0.data.values[0], p1_ST.data.values[0], p1_M.data.values[0], p1_RA.data.values[0])
        mb = Math.max(p2_B0.data.values[0], p2_ST.data.values[0], p2_M.data.values[0], p2_RB.data.values[0])
        mmm = Math.min(document.getElementById("aP3").value, document.getElementById("aPM").value)


        if (document.getElementById("KF").checked) {
        }
        else {
            p1_A1.data.x = [360 - document.getElementById("fA1").value]
            p1_A2.data.x = [360 - document.getElementById("fA2").value]
            p2_B1.data.x = [360 - document.getElementById("fB1").value]
            p2_B2.data.x = [360 - document.getElementById("fB2").value]

            p1_A1.data.values[0] = document.getElementById("aA1").value
            p1_A2.data.values[0] = document.getElementById("aA2").value
            p2_B1.data.values[0] = document.getElementById("aB1").value
            p2_B2.data.values[0] = document.getElementById("aB2").value

            ma = Math.max(p1_A1.data.values[0], p1_A2.data.values[0], ma)
            mb = Math.max(p2_B1.data.values[0], p2_B2.data.values[0], mb)

            mmm = Math.min(document.getElementById("aP1").value, document.getElementById("aP2").value, mmm)

            p1_P1.data.x = [360 - document.getElementById("fP1").value]
            p2_P1.data.x = [360 - document.getElementById("fP1").value]
            p1_P2.data.x = [360 - document.getElementById("fP2").value]
            p2_P2.data.x = [180 - document.getElementById("fP2").value]

            p1_P1.data.values[0] = ma
            p1_P2.data.values[0] = ma
            p2_P1.data.values[0] = mb
            p2_P2.data.values[0] = mb

            p1_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p1_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p1_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p1_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p2_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p2_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)


        }
        p1_P3.data.values[0] = ma
        p1_PM.data.values[0] = ma
        p2_P3.data.values[0] = mb
        p2_PM.data.values[0] = mb
        p1_P3.pointer.height = Math.round(Math.sqrt(document.getElementById("aP3").value / mmm) * 20 + 1)
        p1_P3.pointer.width = Math.round(Math.sqrt(document.getElementById("aP3").value / mmm) * 20 + 1)
        p1_PM.pointer.height = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p1_PM.pointer.width = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p2_P3.pointer.height = Math.round(Math.sqrt(document.getElementById("aP3").value / mmm) * 20 + 1)
        p2_P3.pointer.width = Math.round(Math.sqrt(document.getElementById("aP3").value / mmm) * 20 + 1)
        p2_PM.pointer.height = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p2_PM.pointer.width = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
    }

    else if (regim == "STAT") {
        p1_A0.data.x = [360 - document.getElementById("fA0").value]
        p2_B0.data.x = [360 - document.getElementById("fB0").value]
        p1_ST.data.x = [360 - document.getElementById("fSt").value]
        p1_M.data.x = [360 - document.getElementById("fM").value]
        p2_ST.data.x = [360 - document.getElementById("fSt").value]
        p2_M.data.x = [360 - document.getElementById("fM").value]
        p1_PS.data.x = [360 - document.getElementById("fPS").value]
        p2_PS.data.x = [360 - document.getElementById("fPS").value]
        p1_RA.data.x = [360 - document.getElementById("fRA").value]
        p2_RB.data.x = [360 - document.getElementById("fRB").value]
        p1_A0.data.values[0] = document.getElementById("aA0").value
        p2_B0.data.values[0] = document.getElementById("aB0").value
        p1_ST.data.values[0] = document.getElementById("aSt").value
        p2_ST.data.values[0] = document.getElementById("aSt").value
        p1_RA.data.values[0] = document.getElementById("aRA").value
        p2_RB.data.values[0] = document.getElementById("aRB").value
        ma = Math.max(p1_A0.data.values[0], p1_ST.data.values[0], p1_M.data.values[0], p1_RA.data.values[0])
        mb = Math.max(p2_B0.data.values[0], p2_ST.data.values[0], p2_M.data.values[0], p2_RB.data.values[0])
        mmm = document.getElementById("aPS").value


        if (document.getElementById("KF").checked) {
        }
        else {
            p1_A1.data.x = [360 - document.getElementById("fA1").value]
            p2_B1.data.x = [360 - document.getElementById("fB1").value]

            p1_A1.data.values[0] = document.getElementById("aA1").value
            p2_B1.data.values[0] = document.getElementById("aB1").value

            ma = Math.max(p1_A1.data.values[0], ma)
            mb = Math.max(p2_B1.data.values[0], mb)

            mmm = Math.min(document.getElementById("aP1").value, mmm)

            p1_P1.data.x = [360 - document.getElementById("fP1").value]
            p2_P1.data.x = [360 - document.getElementById("fP1").value]

            p1_P1.data.values[0] = ma
            p2_P1.data.values[0] = mb


            p1_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p1_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p2_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p2_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)


        }
        p1_PS.data.values[0] = ma
        p2_PS.data.values[0] = mb
        p1_PS.pointer.height = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
        p1_PS.pointer.width = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
        p2_PS.pointer.height = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
        p2_PS.pointer.width = Math.round(Math.sqrt(document.getElementById("aPS").value / mmm) * 20 + 1)
    }
    else if (regim == "MOM") {
        p1_A0.data.x = [360 - document.getElementById("fA0").value]
        p2_B0.data.x = [360 - document.getElementById("fB0").value]
        p1_M.data.x = [360 - document.getElementById("fM").value]
        p2_M.data.x = [360 - document.getElementById("fM").value]
        p1_PM.data.x = [360 - document.getElementById("fPM").value]
        p2_PM.data.x = [180 - document.getElementById("fPM").value]
        p1_RA.data.x = [360 - document.getElementById("fRA").value]
        p2_RB.data.x = [360 - document.getElementById("fRB").value]
        p1_A0.data.values[0] = document.getElementById("aA0").value
        p2_B0.data.values[0] = document.getElementById("aB0").value
        p1_M.data.values[0] = document.getElementById("aM").value
        p2_M.data.values[0] = document.getElementById("aM").value
        p1_RA.data.values[0] = document.getElementById("aRA").value
        p2_RB.data.values[0] = document.getElementById("aRB").value
        ma = Math.max(p1_A0.data.values[0], p1_ST.data.values[0], p1_M.data.values[0], p1_RA.data.values[0])
        mb = Math.max(p2_B0.data.values[0], p2_ST.data.values[0], p2_M.data.values[0], p2_RB.data.values[0])
        mmm = document.getElementById("aPM").value


        if (document.getElementById("KF").checked) {
        }
        else {
            p1_A2.data.x = [360 - document.getElementById("fA2").value]
            p2_B2.data.x = [360 - document.getElementById("fB2").value]

            p1_A2.data.values[0] = document.getElementById("aA2").value
            p2_B2.data.values[0] = document.getElementById("aB2").value

            ma = Math.max(p1_A2.data.values[0], ma)
            mb = Math.max(p2_B2.data.values[0], mb)

            mmm = Math.min(document.getElementById("aP2").value, mmm)

            p1_P2.data.x = [360 - document.getElementById("fP2").value]
            p2_P2.data.x = [180 - document.getElementById("fP2").value]

            p1_P2.data.values[0] = ma
            p2_P2.data.values[0] = mb

            p1_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p1_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)


        }
        p1_PM.data.values[0] = ma
        p2_PM.data.values[0] = mb
        p1_PM.pointer.height = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p1_PM.pointer.width = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p2_PM.pointer.height = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
        p2_PM.pointer.width = Math.round(Math.sqrt(document.getElementById("aPM").value / mmm) * 20 + 1)
    }
    else if (regim == "1X2") {
        p1_A0.data.x = [360 - document.getElementById("fA0").value]
        p2_B0.data.x = [360 - document.getElementById("fB0").value]
        p1_ST.data.x = [360 - document.getElementById("fSt").value]
        p1_M.data.x = [360 - document.getElementById("fM").value]
        p2_ST.data.x = [360 - document.getElementById("fSt").value]
        p2_M.data.x = [360 - document.getElementById("fM").value]
        p1_PA.data.x = [360 - document.getElementById("fPA").value]
        p1_RA.data.x = [360 - document.getElementById("fRA").value]
        p2_RB.data.x = [360 - document.getElementById("fRB").value]
        p1_A0.data.values[0] = document.getElementById("aA0").value
        p2_B0.data.values[0] = document.getElementById("aB0").value
        p1_ST.data.values[0] = document.getElementById("aSt").value
        p1_M.data.values[0] = document.getElementById("aM").value
        p2_ST.data.values[0] = document.getElementById("aSt").value
        p2_M.data.values[0] = document.getElementById("aM").value
        p1_RA.data.values[0] = document.getElementById("aRA").value
        p2_RB.data.values[0] = document.getElementById("aRB").value
        ma = Math.max(p1_A0.data.values[0], p1_ST.data.values[0], p1_M.data.values[0], p1_RA.data.values[0])
        mb = Math.max(p2_B0.data.values[0], p2_ST.data.values[0], p2_M.data.values[0], p2_RB.data.values[0])
        mmm = document.getElementById("aPA").value


        if (document.getElementById("KF").checked) {
        }
        else {
            p1_A1.data.x = [360 - document.getElementById("fA1").value]
            p2_B1.data.x = [360 - document.getElementById("fB1").value]

            p1_A1.data.values[0] = document.getElementById("aA1").value
            p2_B1.data.values[0] = document.getElementById("aB1").value

            ma = Math.max(p1_A1.data.values[0], ma)
            mb = Math.max(p2_B1.data.values[0], mb)

            mmm = Math.min(document.getElementById("aP1").value, mmm)

            p1_P1.data.x = [360 - document.getElementById("fP1").value]
            p1_P1.data.values[0] = ma
            p1_P1.pointer.height = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)
            p1_P1.pointer.width = Math.round(Math.sqrt(document.getElementById("aP1").value / mmm) * 20 + 1)


        }
        p1_PA.data.values[0] = ma
        p1_PA.pointer.height = Math.round(Math.sqrt(document.getElementById("aPA").value / mmm) * 20 + 1)
        p1_PA.pointer.width = Math.round(Math.sqrt(document.getElementById("aPA").value / mmm) * 20 + 1)

    }
    if (regim == "2X1") {
        p1_A0.data.x = [360 - document.getElementById("fA0").value]
        p2_B0.data.x = [360 - document.getElementById("fB0").value]
        p1_ST.data.x = [360 - document.getElementById("fSt").value]
        p1_M.data.x = [360 - document.getElementById("fM").value]
        p2_ST.data.x = [360 - document.getElementById("fSt").value]
        p2_M.data.x = [360 - document.getElementById("fM").value]
        p2_PB.data.x = [360 - document.getElementById("fPB").value]
        p1_RA.data.x = [360 - document.getElementById("fRA").value]
        p2_RB.data.x = [360 - document.getElementById("fRB").value]
        p1_A0.data.values[0] = document.getElementById("aA0").value
        p2_B0.data.values[0] = document.getElementById("aB0").value
        p1_ST.data.values[0] = document.getElementById("aSt").value
        p1_M.data.values[0] = document.getElementById("aM").value
        p2_ST.data.values[0] = document.getElementById("aSt").value
        p2_M.data.values[0] = document.getElementById("aM").value
        p1_RA.data.values[0] = document.getElementById("aRA").value
        p2_RB.data.values[0] = document.getElementById("aRB").value
        ma = Math.max(p1_A0.data.values[0], p1_ST.data.values[0], p1_M.data.values[0], p1_RA.data.values[0])
        mb = Math.max(p2_B0.data.values[0], p2_ST.data.values[0], p2_M.data.values[0], p2_RB.data.values[0])
        mmm = document.getElementById("aPB").value


        if (document.getElementById("KF").checked) {
        }
        else {
            p1_A2.data.x = [360 - document.getElementById("fA2").value]
            p2_B2.data.x = [360 - document.getElementById("fB2").value]

            p1_A2.data.values[0] = document.getElementById("aA2").value
            p2_B2.data.values[0] = document.getElementById("aB2").value

            ma = Math.max(p1_A2.data.values[0], ma)
            mb = Math.max(p2_B2.data.values[0], mb)

            mmm = Math.min(document.getElementById("aP2").value, mmm)

            p2_P2.data.x = [360 - document.getElementById("fP2").value]
            p2_P2.data.values[0] = mb
            p2_P2.pointer.height = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)
            p2_P2.pointer.width = Math.round(Math.sqrt(document.getElementById("aP2").value / mmm) * 20 + 1)


        }
        p2_PB.data.values[0] = mb
        p2_PB.pointer.height = Math.round(Math.sqrt(document.getElementById("aPB").value / mmm) * 20 + 1)
        p2_PB.pointer.width = Math.round(Math.sqrt(document.getElementById("aPB").value / mmm) * 20 + 1)

    }
    Chart1.axes.left.automatic = false;
    Chart1.axes.left.minimum = 0;
    Chart1.axes.left.maximum = ma;
    Chart2.axes.left.automatic = false;
    Chart2.axes.left.minimum = 0;
    Chart2.axes.left.maximum = mb;

    Chart1.draw();
    Chart2.draw();
}



function CTGV200() {
    document.getElementById("aA0").value = ''
    document.getElementById("fA0").value = ''
    document.getElementById("aB0").value = ''
    document.getElementById("fB0").value = ''
    document.getElementById("aSt").value = ''
    document.getElementById("fSt").value = ''
    document.getElementById("aM").value = ''
    document.getElementById("fM").value = ''
    document.getElementById("aA1").value = ''
    document.getElementById("fA1").value = ''
    document.getElementById("aB1").value = ''
    document.getElementById("fB1").value = ''
    document.getElementById("aA2").value = ''
    document.getElementById("fA2").value = ''
    document.getElementById("aB2").value = ''
    document.getElementById("fB2").value = ''
    document.getElementById("aP1").value = ''
    document.getElementById("fP1").value = ''
    document.getElementById("aP2").value = ''
    document.getElementById("fP2").value = ''
    document.getElementById("aPA").value = ''
    document.getElementById("fPA").value = ''
    document.getElementById("aPB").value = ''
    document.getElementById("fPB").value = ''
    document.getElementById("aPS").value = ''
    document.getElementById("aP3").value = ''
    document.getElementById("fPS").value = ''
    document.getElementById("fP3").value = ''
    document.getElementById("aPM").value = ''
    document.getElementById("fPM").value = ''
    document.getElementById("aRA").value = ''
    document.getElementById("fRA").value = ''
    document.getElementById("aRB").value = ''
    document.getElementById("fRB").value = ''


    let sel3 = document.getElementById("TGV200");
    let regim3 = sel3.options[sel3.selectedIndex].value;
    let sel4 = document.getElementById("TVV320");
    sel4.selectedIndex = 0;


    if (regim3 == "TGV1") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 3000 об/мин По торцевым плоскостям 19-24"
        document.getElementById("ZAG_").value = "ТГВ-200 3000 об/мин По торцевым плоскостям 19-24"
        document.getElementById("REGIM").selectedIndex = 1;
        Chart1.title.text = "Опора 6/19 плоскость"
        Chart2.title.text = "Опора 7/24 плоскость"
        document.getElementById("C1_").value = "Опора 6/19 плоскость"
        document.getElementById("C2_").value = "Опора 7/24 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '43'
        document.getElementById("fKVA1").value = '109'
        document.getElementById("aKVB1").value = '36'
        document.getElementById("fKVB1").value = '348'
        document.getElementById("aKVA2").value = '34'
        document.getElementById("fKVA2").value = '312'
        document.getElementById("aKVB2").value = '69'
        document.getElementById("fKVB2").value = '121'
        document.getElementById("aKVAS").value = '18'
        document.getElementById("fKVAS").value = '62'
        document.getElementById("aKVBS").value = '52'
        document.getElementById("fKVBS").value = '91'
        document.getElementById("aKVA3").value = '39'
        document.getElementById("fKVA3").value = '82'
        document.getElementById("aKVB3").value = '60'
        document.getElementById("fKVB3").value = '78'
        document.getElementById("aKVAM").value = '76'
        document.getElementById("fKVAM").value = '119'
        document.getElementById("aKVBM").value = '97'
        document.getElementById("fKVBM").value = '317'
    }
    if (regim3 == "TGV2") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 1140 об/мин По торцевым плоскостям 19-24"
        document.getElementById("ZAG_").value = "ТГВ-200 1140 об/мин По торцевым плоскостям 19-24"
        document.getElementById("REGIM").selectedIndex = 1;
        Chart1.title.text = "Опора 6/19 плоскость"
        Chart2.title.text = "Опора 7/24 плоскость"
        document.getElementById("C1_").value = "Опора 6/19 плоскость"
        document.getElementById("C2_").value = "Опора 7/24 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '12'
        document.getElementById("fKVA1").value = '148'
        document.getElementById("aKVB1").value = '18'
        document.getElementById("fKVB1").value = '165'
        document.getElementById("aKVA2").value = '16'
        document.getElementById("fKVA2").value = '160'
        document.getElementById("aKVB2").value = '14'
        document.getElementById("fKVB2").value = '130'
        document.getElementById("aKVAS").value = '28'
        document.getElementById("aKVA3").value = '8'
        document.getElementById("fKVAS").value = '155'
        document.getElementById("fKVA3").value = '335'
        document.getElementById("aKVBS").value = '31'
        document.getElementById("aKVB3").value = '10'
        document.getElementById("fKVBS").value = '150'
        document.getElementById("fKVB3").value = '343'
        document.getElementById("aKVAM").value = '5'
        document.getElementById("fKVAM").value = '11'
        document.getElementById("aKVBM").value = '10'
        document.getElementById("fKVBM").value = '216'
    }
    if (regim3 == "TGV3") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 1140 об/мин По симметричным плоскостям 19-24cc"
        document.getElementById("ZAG_").value = "ТГВ-200 1140 об/мин По симметричным плоскостям 19-24cc"
        document.getElementById("REGIM").selectedIndex = 2;
        Chart1.title.text = "Опора 6/19 плоскость"
        Chart2.title.text = "Опора 7/24 плоскость"
        document.getElementById("C1_").value = "Опора 6/19 плоскость"
        document.getElementById("C2_").value = "Опора 7/24 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '12'
        document.getElementById("fKVA1").value = '148'
        document.getElementById("aKVB1").value = '18'
        document.getElementById("fKVB1").value = '165'
        document.getElementById("aKVA2").value = '16'
        document.getElementById("fKVA2").value = '160'
        document.getElementById("aKVB2").value = '14'
        document.getElementById("fKVB2").value = '130'
        document.getElementById("aKVAS").value = '28'
        document.getElementById("aKVA3").value = '8'
        document.getElementById("fKVAS").value = '155'
        document.getElementById("fKVA3").value = '335'
        document.getElementById("aKVBS").value = '31'
        document.getElementById("aKVB3").value = '10'
        document.getElementById("fKVBS").value = '150'
        document.getElementById("fKVB3").value = '343'
        document.getElementById("aKVAM").value = '5'
        document.getElementById("fKVAM").value = '11'
        document.getElementById("aKVBM").value = '10'
        document.getElementById("fKVBM").value = '216'
    }
    if (regim3 == "TGV4") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 3000 об/мин На бочке ротора 20-23cc 19-24кс"
        document.getElementById("ZAG_").value = "ТГВ-200 3000 об/мин На бочке ротора 20-23сс 19-24кс"
        document.getElementById("REGIM").selectedIndex = 1;
        Chart1.title.text = "Опора 6/19-20 плоскость"
        Chart2.title.text = "Опора 7/23-24 плоскость"
        document.getElementById("C1_").value = "Опора 6/19-20 плоскость"
        document.getElementById("C2_").value = "Опора 7/23-24 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '43'
        document.getElementById("fKVA1").value = '109'
        document.getElementById("aKVB1").value = '36'
        document.getElementById("fKVB1").value = '348'
        document.getElementById("aKVA2").value = '34'
        document.getElementById("fKVA2").value = '312'
        document.getElementById("aKVB2").value = '69'
        document.getElementById("fKVB2").value = '121'
        document.getElementById("aKVAS").value = '28'
        document.getElementById("fKVAS").value = '285'
        document.getElementById("aKVBS").value = '24'
        document.getElementById("fKVBS").value = '185'
        document.getElementById("aKVA3").value = '39'
        document.getElementById("fKVA3").value = '82'
        document.getElementById("aKVB3").value = '60'
        document.getElementById("fKVB3").value = '78'
        document.getElementById("aKVAM").value = '76'
        document.getElementById("fKVAM").value = '119'
        document.getElementById("aKVBM").value = '97'
        document.getElementById("fKVBM").value = '317'
    }
    if (regim3 == "TGV7") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 3000 об/мин На бочке ротора 21-22cc 19-24кс"
        document.getElementById("ZAG_").value = "ТГВ-200 3000 об/мин На бочке ротора 21-22сс 19-24кс"
        document.getElementById("REGIM").selectedIndex = 1;
        Chart1.title.text = "Опора 6/19-21 плоскость"
        Chart2.title.text = "Опора 7/22-24 плоскость"
        document.getElementById("C1_").value = "Опора 6/19-21 плоскость"
        document.getElementById("C2_").value = "Опора 7/22-24 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '43'
        document.getElementById("fKVA1").value = '109'
        document.getElementById("aKVB1").value = '36'
        document.getElementById("fKVB1").value = '348'
        document.getElementById("aKVA2").value = '34'
        document.getElementById("fKVA2").value = '312'
        document.getElementById("aKVB2").value = '69'
        document.getElementById("fKVB2").value = '121'
        document.getElementById("aKVAS").value = '46'
        document.getElementById("fKVAS").value = '278'
        document.getElementById("aKVBS").value = '40'
        document.getElementById("fKVBS").value = '215'
        document.getElementById("aKVA3").value = '39'
        document.getElementById("fKVA3").value = '82'
        document.getElementById("aKVB3").value = '60'
        document.getElementById("fKVB3").value = '78'
        document.getElementById("aKVAM").value = '76'
        document.getElementById("fKVAM").value = '119'
        document.getElementById("aKVBM").value = '97'
        document.getElementById("fKVBM").value = '317'
    }
    if (regim3 == "TGV8") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 1140 об/мин На бочке ротора 21-22сс"
        document.getElementById("ZAG_").value = "ТГВ-200 1140 об/мин На бочке ротора 21-22сс"
        document.getElementById("REGIM").selectedIndex = 2;
        Chart1.title.text = "Опора 6/21 плоскость"
        Chart2.title.text = "Опора 7/22 плоскость"
        document.getElementById("C1_").value = "Опора 6/21 плоскость"
        document.getElementById("C2_").value = "Опора 7/22 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '35'
        document.getElementById("fKVA1").value = '154'
        document.getElementById("aKVB1").value = '41'
        document.getElementById("fKVB1").value = '154'
        document.getElementById("aKVA2").value = '36'
        document.getElementById("fKVA2").value = '155'
        document.getElementById("aKVB2").value = '40'
        document.getElementById("fKVB2").value = '151'
        document.getElementById("aKVAS").value = '71'
        document.getElementById("aKVA3").value = '3'
        document.getElementById("fKVAS").value = '155'
        document.getElementById("fKVA3").value = '335'
        document.getElementById("aKVBS").value = '81'
        document.getElementById("aKVB3").value = '2'
        document.getElementById("fKVBS").value = '153'
        document.getElementById("fKVB3").value = '343'
        document.getElementById("aKVAM").value = '1'
        document.getElementById("fKVAM").value = '6'
        document.getElementById("aKVBM").value = '2'
        document.getElementById("fKVBM").value = '217'
    }
    if (regim3 == "TGV9") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 1140 об/мин На бочке ротора 21-22сс 19-24кс"
        document.getElementById("ZAG_").value = "ТГВ-200 1140 об/мин На бочке ротора 21-22сс 19-24кс"
        document.getElementById("REGIM").selectedIndex = 1;
        Chart1.title.text = "Опора 6/19-21 плоскость"
        Chart2.title.text = "Опора 7/22-24 плоскость"
        document.getElementById("C1_").value = "Опора 6/19-21 плоскость"
        document.getElementById("C2_").value = "Опора 7/22-24 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '12'
        document.getElementById("fKVA1").value = '148'
        document.getElementById("aKVB1").value = '18'
        document.getElementById("fKVB1").value = '165'
        document.getElementById("aKVA2").value = '16'
        document.getElementById("fKVA2").value = '160'
        document.getElementById("aKVB2").value = '14'
        document.getElementById("fKVB2").value = '130'
        document.getElementById("aKVAS").value = '71'
        document.getElementById("aKVA3").value = '3'
        document.getElementById("fKVAS").value = '155'
        document.getElementById("fKVA3").value = '335'
        document.getElementById("aKVBS").value = '81'
        document.getElementById("aKVB3").value = '2'
        document.getElementById("fKVBS").value = '153'
        document.getElementById("fKVB3").value = '343'
        document.getElementById("aKVAM").value = '5'
        document.getElementById("fKVAM").value = '10'
        document.getElementById("aKVBM").value = '10'
        document.getElementById("fKVBM").value = '216'
    }
    if (regim3 == "TGV5") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 1140 об/мин На бочке ротора 20-23сс"
        document.getElementById("ZAG_").value = "ТГВ-200 1140 об/мин На бочке ротора 20-23сс"
        document.getElementById("REGIM").selectedIndex = 2;
        Chart1.title.text = "Опора 6/20 плоскость"
        Chart2.title.text = "Опора 7/23 плоскость"
        document.getElementById("C1_").value = "Опора 6/20 плоскость"
        document.getElementById("C2_").value = "Опора 7/23 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '30'
        document.getElementById("fKVA1").value = '152'
        document.getElementById("aKVB1").value = '37'
        document.getElementById("fKVB1").value = '158'
        document.getElementById("aKVA2").value = '32'
        document.getElementById("fKVA2").value = '156'
        document.getElementById("aKVB2").value = '34'
        document.getElementById("fKVB2").value = '147'
        document.getElementById("aKVAS").value = '62'
        document.getElementById("aKVA3").value = '8'
        document.getElementById("fKVAS").value = '154'
        document.getElementById("fKVA3").value = '335'
        document.getElementById("aKVBS").value = '71'
        document.getElementById("aKVB3").value = '10'
        document.getElementById("fKVBS").value = '153'
        document.getElementById("fKVB3").value = '343'
        document.getElementById("aKVAM").value = '3'
        document.getElementById("fKVAM").value = '21'
        document.getElementById("aKVBM").value = '7'
        document.getElementById("fKVBM").value = '219'
    }
    if (regim3 == "TGV6") {
        document.getElementById("ZAG").innerHTML = "ТГВ-200 3000 об/мин Балансировка ротора по 3-й форме колебаний"
        document.getElementById("ZAG_").value = "ТГВ-200 3000 об/мин Балансировка ротора по 3-й форме колебаний"
        document.getElementById("REGIM").selectedIndex = 6;
        document.getElementById("KF").checked = true;
        Chart1.title.text = "Опора 6/19-21 плоскость"
        Chart2.title.text = "Опора 7/22-24 плоскость"
        document.getElementById("C1_").value = "Опора 6/19-21 плоскость"
        document.getElementById("C2_").value = "Опора 7/22-24 плоскость"
        KFF();
        document.getElementById("aKVA1").value = '43'
        document.getElementById("fKVA1").value = '109'
        document.getElementById("aKVB1").value = '36'
        document.getElementById("fKVB1").value = '348'
        document.getElementById("aKVA2").value = '34'
        document.getElementById("fKVA2").value = '312'
        document.getElementById("aKVB2").value = '69'
        document.getElementById("fKVB2").value = '121'
        document.getElementById("aKVAS").value = '18'
        document.getElementById("fKVAS").value = '62'
        document.getElementById("aKVBS").value = '52'
        document.getElementById("fKVBS").value = '91'
        document.getElementById("aKVA3").value = '39'
        document.getElementById("fKVA3").value = '82'
        document.getElementById("aKVB3").value = '60'
        document.getElementById("fKVB3").value = '78'
        document.getElementById("aKVAM").value = '76'
        document.getElementById("fKVAM").value = '119'
        document.getElementById("aKVBM").value = '97'
        document.getElementById("fKVBM").value = '317'
    }
    document.getElementById("TA").value = ""
}


function CTVV320() {
    document.getElementById("aA0").value = ''
    document.getElementById("fA0").value = ''
    document.getElementById("aB0").value = ''
    document.getElementById("fB0").value = ''
    document.getElementById("aSt").value = ''
    document.getElementById("fSt").value = ''
    document.getElementById("aM").value = ''
    document.getElementById("fM").value = ''
    document.getElementById("aA1").value = ''
    document.getElementById("fA1").value = ''
    document.getElementById("aB1").value = ''
    document.getElementById("fB1").value = ''
    document.getElementById("aA2").value = ''
    document.getElementById("fA2").value = ''
    document.getElementById("aB2").value = ''
    document.getElementById("fB2").value = ''
    document.getElementById("aP1").value = ''
    document.getElementById("fP1").value = ''
    document.getElementById("aP2").value = ''
    document.getElementById("fP2").value = ''
    document.getElementById("aPA").value = ''
    document.getElementById("fPA").value = ''
    document.getElementById("aPB").value = ''
    document.getElementById("fPB").value = ''
    document.getElementById("aPS").value = ''
    document.getElementById("aP3").value = ''
    document.getElementById("fPS").value = ''
    document.getElementById("fP3").value = ''
    document.getElementById("aPM").value = ''
    document.getElementById("fPM").value = ''
    document.getElementById("aRA").value = ''
    document.getElementById("fRA").value = ''
    document.getElementById("aRB").value = ''
    document.getElementById("fRB").value = ''


    let sel4 = document.getElementById("TVV320");
    let regim4 = sel4.options[sel4.selectedIndex].value;
    let sel3 = document.getElementById("TGV200");
    sel3.selectedIndex = 0;



    if (regim4 == "TVV1") {
        document.getElementById("ZAG").innerHTML = "ТBВ-320-2 3000 об/мин По торцевым плоскостям 26-34"
        document.getElementById("ZAG_").value = "ТВВ-320-2 3000 об/мин По торцевым плоскостям 26-34"
        document.getElementById("REGIM").selectedIndex = 1;
        Chart1.title.text = "Опора 6/26 плоскость"
        Chart2.title.text = "Опора 7/34 плоскость"
        document.getElementById("C1_").value = "Опора 6/26 плоскость"
        document.getElementById("C2_").value = "Опора 7/34 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '38'
        document.getElementById("fKVA1").value = '136'
        document.getElementById("aKVB1").value = '52'
        document.getElementById("fKVB1").value = '113'
        document.getElementById("aKVA2").value = '43'
        document.getElementById("fKVA2").value = '65'
        document.getElementById("aKVB2").value = '14'
        document.getElementById("fKVB2").value = '186'
        document.getElementById("aKVAS").value = '45'
        document.getElementById("fKVAS").value = '59'
        document.getElementById("aKVBS").value = '38'
        document.getElementById("fKVBS").value = '84'
        document.getElementById("aKVA3").value = '68'
        document.getElementById("fKVA3").value = '56'
        document.getElementById("aKVB3").value = '55'
        document.getElementById("fKVB3").value = '84'
        document.getElementById("aKVAM").value = '79'
        document.getElementById("fKVAM").value = '169'
        document.getElementById("aKVBM").value = '51'
        document.getElementById("fKVBM").value = '51'
    }
    if (regim4 == "TVV2") {
        document.getElementById("ZAG").innerHTML = "ТВВ-320-2 3000 об/мин По 3-й форме 26-34 v 30"
        document.getElementById("ZAG_").value = "ТВВ-320-2 3000 об/мин По 3-й форме 26-34 v 30"
        document.getElementById("REGIM").selectedIndex = 6;
        Chart1.title.text = "Опора 6/26-34 плоскость"
        Chart2.title.text = "Опора 7/30 плоскость"
        document.getElementById("C1_").value = "Опора 6/26-34 плоскость"
        document.getElementById("C2_").value = "Опора 7/30 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '38'
        document.getElementById("fKVA1").value = '136'
        document.getElementById("aKVB1").value = '52'
        document.getElementById("fKVB1").value = '113'
        document.getElementById("aKVA2").value = '43'
        document.getElementById("fKVA2").value = '65'
        document.getElementById("aKVB2").value = '14'
        document.getElementById("fKVB2").value = '186'
        document.getElementById("aKVAS").value = '45'
        document.getElementById("fKVAS").value = '59'
        document.getElementById("aKVBS").value = '38'
        document.getElementById("fKVBS").value = '84'
        document.getElementById("aKVA3").value = '68'
        document.getElementById("fKVA3").value = '56'
        document.getElementById("aKVB3").value = '55'
        document.getElementById("fKVB3").value = '84'
        document.getElementById("aKVAM").value = '79'
        document.getElementById("fKVAM").value = '169'
        document.getElementById("aKVBM").value = '51'
        document.getElementById("fKVBM").value = '51'
    }
    if (regim4 == "TVV7") {
        document.getElementById("ZAG").innerHTML = "ТВВ-320-2 3000 об/мин По 3-й форме 26-34 v 29-31"
        document.getElementById("ZAG_").value = "ТВВ-320-2 3000 об/мин По 3-й форме 26-34 v 29-31"
        document.getElementById("REGIM").selectedIndex = 6;
        Chart1.title.text = "Опора 6/26-29 плоскость"
        Chart2.title.text = "Опора 7/31-34 плоскость"
        document.getElementById("C1_").value = "Опора 6/26-29 плоскость"
        document.getElementById("C2_").value = "Опора 7/31-34 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '38'
        document.getElementById("fKVA1").value = '136'
        document.getElementById("aKVB1").value = '52'
        document.getElementById("fKVB1").value = '113'
        document.getElementById("aKVA2").value = '43'
        document.getElementById("fKVA2").value = '65'
        document.getElementById("aKVB2").value = '14'
        document.getElementById("fKVB2").value = '186'
        document.getElementById("aKVAS").value = '45'
        document.getElementById("fKVAS").value = '59'
        document.getElementById("aKVBS").value = '38'
        document.getElementById("fKVBS").value = '84'
        document.getElementById("aKVA3").value = '61'
        document.getElementById("fKVA3").value = '56'
        document.getElementById("aKVB3").value = '50'
        document.getElementById("fKVB3").value = '84'
        document.getElementById("aKVAM").value = '79'
        document.getElementById("fKVAM").value = '169'
        document.getElementById("aKVBM").value = '51'
        document.getElementById("fKVBM").value = '51'
    }
    if (regim4 == "TVV3") {
        document.getElementById("ZAG").innerHTML = "ТВВ-320-2 3000 об/мин По 3-й форме 27-33 v 30"
        document.getElementById("ZAG_").value = "ТВВ-320-2 3000 об/мин По 3-й форме 27-33 v 30"
        document.getElementById("REGIM").selectedIndex = 6;
        Chart1.title.text = "Опора 6/27-33 плоскость"
        Chart2.title.text = "Опора 7/30 плоскость"
        document.getElementById("C1_").value = "Опора 6/27-33 плоскость"
        document.getElementById("C2_").value = "Опора 7/30 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '45'
        document.getElementById("fKVA1").value = '146'
        document.getElementById("aKVB1").value = '38'
        document.getElementById("fKVB1").value = '7'
        document.getElementById("aKVA2").value = '46'
        document.getElementById("fKVA2").value = '62'
        document.getElementById("aKVB2").value = '20'
        document.getElementById("fKVB2").value = '207'
        document.getElementById("aKVAS").value = '30'
        document.getElementById("aKVA3").value = '50'
        document.getElementById("fKVAS").value = '89'
        document.getElementById("fKVA3").value = '72'
        document.getElementById("aKVBS").value = '32'
        document.getElementById("aKVB3").value = '49'
        document.getElementById("fKVBS").value = '83'
        document.getElementById("fKVB3").value = '83'
        document.getElementById("aKVAM").value = '78'
        document.getElementById("fKVAM").value = '165'
        document.getElementById("aKVBM").value = '63'
        document.getElementById("fKVBM").value = '62'
    }
    if (regim4 == "TVV4") {
        document.getElementById("ZAG").innerHTML = "ТВВ-320-2 930 об/мин По торцевым плоскостям 26-34"
        document.getElementById("ZAG_").value = "ТВВ-320-2 930 об/мин По торцевым плоскостям 26-34"
        document.getElementById("REGIM").selectedIndex = 1;
        Chart1.title.text = "Опора 6/26 плоскость"
        Chart2.title.text = "Опора 7/34 плоскость"
        document.getElementById("C1_").value = "Опора 6/26 плоскость"
        document.getElementById("C2_").value = "Опора 7/34 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '9'
        document.getElementById("fKVA1").value = '105'
        document.getElementById("aKVB1").value = '7'
        document.getElementById("fKVB1").value = '175'
        document.getElementById("aKVA2").value = '9'
        document.getElementById("fKVA2").value = '128'
        document.getElementById("aKVB2").value = '8'
        document.getElementById("fKVB2").value = '139'
        document.getElementById("aKVAS").value = '18'
        document.getElementById("fKVAS").value = '116'
        document.getElementById("aKVBS").value = '14'
        document.getElementById("fKVBS").value = '156'
        document.getElementById("aKVA3").value = '5'
        document.getElementById("fKVA3").value = '296'
        document.getElementById("aKVB3").value = '5'
        document.getElementById("fKVB3").value = '336'
        document.getElementById("aKVAM").value = '4'
        document.getElementById("fKVAM").value = '26'
        document.getElementById("aKVBM").value = '5'
        document.getElementById("fKVBM").value = '259'
    }
    if (regim4 == "TVV8") {
        document.getElementById("ZAG").innerHTML = "ТВВ-320-2 930 об/мин По 3-й форме 26-34 v 29-31"
        document.getElementById("ZAG_").value = "ТВВ-320-2 930 об/мин По 3-й форме 26-34 v 29-31"
        document.getElementById("REGIM").selectedIndex = 6;
        Chart1.title.text = "Опора 6/26-29 плоскость"
        Chart2.title.text = "Опора 7/31-34 плоскость"
        document.getElementById("C1_").value = "Опора 6/26-29 плоскость"
        document.getElementById("C2_").value = "Опора 7/31-34 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '9'
        document.getElementById("fKVA1").value = '105'
        document.getElementById("aKVB1").value = '7'
        document.getElementById("fKVB1").value = '175'
        document.getElementById("aKVA2").value = '9'
        document.getElementById("fKVA2").value = '128'
        document.getElementById("aKVB2").value = '8'
        document.getElementById("fKVB2").value = '139'
        document.getElementById("aKVAS").value = '18'
        document.getElementById("fKVAS").value = '116'
        document.getElementById("aKVBS").value = '14'
        document.getElementById("fKVBS").value = '156'
        document.getElementById("aKVA3").value = '4'
        document.getElementById("fKVA3").value = '296'
        document.getElementById("aKVB3").value = '4'
        document.getElementById("fKVB3").value = '336'
        document.getElementById("aKVAM").value = '4'
        document.getElementById("fKVAM").value = '26'
        document.getElementById("aKVBM").value = '5'
        document.getElementById("fKVBM").value = '259'
    }
    if (regim4 == "TVV5") {
        document.getElementById("ZAG").innerHTML = "ТВВ-320-2 930 об/мин По симметричным плоскостям 27-33сс"
        document.getElementById("ZAG_").value = "ТВВ-320-2 930 об/мин По симметричным плоскостям 27-33сс"
        document.getElementById("REGIM").selectedIndex = 2;
        Chart1.title.text = "Опора 6/27 плоскость"
        Chart2.title.text = "Опора 7/33 плоскость"
        document.getElementById("C1_").value = "Опора 6/27 плоскость"
        document.getElementById("C2_").value = "Опора 7/33 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '12'
        document.getElementById("fKVA1").value = '107'
        document.getElementById("aKVB1").value = '10'
        document.getElementById("fKVB1").value = '170'
        document.getElementById("aKVA2").value = '12'
        document.getElementById("fKVA2").value = '126'
        document.getElementById("aKVB2").value = '11'
        document.getElementById("fKVB2").value = '142'
        document.getElementById("aKVAS").value = '24'
        document.getElementById("fKVAS").value = '116'
        document.getElementById("aKVBS").value = '20'
        document.getElementById("fKVBS").value = '155'
        document.getElementById("aKVA3").value = '1'
        document.getElementById("fKVA3").value = '116'
        document.getElementById("aKVB3").value = '1'
        document.getElementById("fKVB3").value = '137'
        document.getElementById("aKVAM").value = '4'
        document.getElementById("fKVAM").value = '26'
        document.getElementById("aKVBM").value = '5'
        document.getElementById("fKVBM").value = '257'
    }
    if (regim4 == "TVV6") {
        document.getElementById("ZAG").innerHTML = "ТВВ-320-2 930 об/мин По симметричным плоскостям 28-32сс"
        document.getElementById("ZAG_").value = "ТВВ-320-2 930 об/мин По симметричным плоскостям 28-32сс"
        document.getElementById("REGIM").selectedIndex = 2;
        Chart1.title.text = "Опора 6/28 плоскость"
        Chart2.title.text = "Опора 7/32 плоскость"
        document.getElementById("C1_").value = "Опора 6/28 плоскость"
        document.getElementById("C2_").value = "Опора 7/32 плоскость"
        document.getElementById("KF").checked = true;
        KFF();
        document.getElementById("aKVA1").value = '18'
        document.getElementById("fKVA1").value = '111'
        document.getElementById("aKVB1").value = '15'
        document.getElementById("fKVB1").value = '163'
        document.getElementById("aKVA2").value = '19'
        document.getElementById("fKVA2").value = '121'
        document.getElementById("aKVB2").value = '16'
        document.getElementById("fKVB2").value = '149'
        document.getElementById("aKVAS").value = '37'
        document.getElementById("fKVAS").value = '116'
        document.getElementById("aKVBS").value = '31'
        document.getElementById("fKVBS").value = '156'
        document.getElementById("aKVA3").value = '14'
        document.getElementById("fKVA3").value = '116'
        document.getElementById("aKVB3").value = '12'
        document.getElementById("fKVB3").value = '156'
        document.getElementById("aKVAM").value = '3'
        document.getElementById("fKVAM").value = '9'
        document.getElementById("aKVBM").value = '4'
        document.getElementById("fKVBM").value = '261'
    }

    document.getElementById("TA").value = ""
}